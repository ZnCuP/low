import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import './PeoplePage.css'

// 模拟律师数据
const mockAttorneys = [
  { id: 1, name: 'Michael Anderson', title: 'Partner', practice: 'Corporate Finance', office: 'San Francisco', image: null },
  { id: 2, name: 'Sarah Chen', title: 'Partner', practice: 'Litigation', office: 'Beijing', image: null },
  { id: 3, name: 'David Martinez', title: 'Of Counsel', practice: 'Intellectual Property', office: 'New York', image: null },
  { id: 4, name: 'Emily Johnson', title: 'Partner', practice: 'Regulatory', office: 'Washington DC', image: null },
  { id: 5, name: 'Robert Kim', title: 'Associate', practice: 'Corporate Finance', office: 'Los Angeles', image: null },
  { id: 6, name: 'Jennifer Lee', title: 'Partner', practice: 'Litigation', office: 'San Francisco', image: null },
  { id: 7, name: 'Christopher Brown', title: 'Partner', practice: 'Real Estate', office: 'New York', image: null },
  { id: 8, name: 'Amanda Wilson', title: 'Of Counsel', practice: 'Labor & Employment', office: 'London', image: null },
  { id: 9, name: 'James Taylor', title: 'Partner', practice: 'Intellectual Property', office: 'San Francisco', image: null },
  { id: 10, name: 'Michelle Davis', title: 'Associate', practice: 'Privacy & Data Security', office: 'Tokyo', image: null },
  { id: 11, name: 'Daniel White', title: 'Partner', practice: 'Antitrust', office: 'Brussels', image: null },
  { id: 12, name: 'Lisa Garcia', title: 'Partner', practice: 'Tax', office: 'New York', image: null },
]

function PeoplePage() {
  const { language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPractice, setSelectedPractice] = useState('')
  const [selectedOffice, setSelectedOffice] = useState('')
  const [selectedLetter, setSelectedLetter] = useState('')
  const [showMoreFilters, setShowMoreFilters] = useState(false)

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  
  const practices = [
    'All Practices',
    'Corporate Finance',
    'Litigation',
    'Intellectual Property',
    'Regulatory',
    'Real Estate',
    'Labor & Employment',
    'Privacy & Data Security',
    'Antitrust',
    'Tax'
  ]

  const offices = [
    'All Offices',
    'San Francisco',
    'New York',
    'Washington DC',
    'Los Angeles',
    'Beijing',
    'Tokyo',
    'London',
    'Brussels'
  ]

  const filteredAttorneys = mockAttorneys.filter(attorney => {
    const matchesSearch = attorney.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPractice = !selectedPractice || selectedPractice === 'All Practices' || attorney.practice === selectedPractice
    const matchesOffice = !selectedOffice || selectedOffice === 'All Offices' || attorney.office === selectedOffice
    const matchesLetter = !selectedLetter || attorney.name[0].toUpperCase() === selectedLetter
    
    return matchesSearch && matchesPractice && matchesOffice && matchesLetter
  })

  const handleClear = () => {
    setSearchTerm('')
    setSelectedPractice('')
    setSelectedOffice('')
    setSelectedLetter('')
  }

  return (
    <div className="people-page">
      <div className="people-header">
        <div className="container">
          <h1>{language === 'en' ? 'Our People' : '我们的团队'}</h1>
        </div>
      </div>

      <div className="people-container">
        <div className="container">
          {/* Search and Filters */}
          <div className="search-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search by name or keyword...' : '按姓名或关键词搜索...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters-row">
              <select
                value={selectedPractice}
                onChange={(e) => setSelectedPractice(e.target.value)}
                className="filter-select"
              >
                <option value="">{language === 'en' ? 'Practice Area' : '业务领域'}</option>
                {practices.map(practice => (
                  <option key={practice} value={practice}>{practice}</option>
                ))}
              </select>

              <select
                value={selectedOffice}
                onChange={(e) => setSelectedOffice(e.target.value)}
                className="filter-select"
              >
                <option value="">{language === 'en' ? 'Office' : '办公室'}</option>
                {offices.map(office => (
                  <option key={office} value={office}>{office}</option>
                ))}
              </select>

              <button
                className="more-filters-btn"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
              >
                {showMoreFilters 
                  ? (language === 'en' ? 'LESS OPTIONS' : '收起选项')
                  : (language === 'en' ? 'MORE SEARCH OPTIONS' : '更多搜索选项')
                }
              </button>

              <button className="search-btn-main">
                {language === 'en' ? 'SEARCH' : '搜索'}
              </button>

              <button className="clear-btn" onClick={handleClear}>
                {language === 'en' ? 'CLEAR' : '清除'}
              </button>
            </div>

            {/* Alphabet Filter */}
            {showMoreFilters && (
              <div className="alphabet-filter">
                {alphabet.map(letter => (
                  <button
                    key={letter}
                    className={`letter-btn ${selectedLetter === letter ? 'active' : ''}`}
                    onClick={() => setSelectedLetter(selectedLetter === letter ? '' : letter)}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="results-info">
            <p>
              {language === 'en' 
                ? `Showing ${filteredAttorneys.length} ${filteredAttorneys.length === 1 ? 'person' : 'people'}`
                : `显示 ${filteredAttorneys.length} 位律师`
              }
            </p>
          </div>

          {/* Attorney Grid */}
          <div className="attorneys-grid">
            {filteredAttorneys.map(attorney => (
              <Link 
                key={attorney.id} 
                to={`/people/${attorney.id}`} 
                className="attorney-card"
              >
                <div className="attorney-image">
                  {attorney.image ? (
                    <img src={attorney.image} alt={attorney.name} />
                  ) : (
                    <div className="attorney-placeholder">
                      <span>{attorney.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  )}
                </div>
                <div className="attorney-info">
                  <h3>{attorney.name}</h3>
                  <p className="attorney-title">{attorney.title}</p>
                  <p className="attorney-practice">{attorney.practice}</p>
                  <p className="attorney-office">{attorney.office}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredAttorneys.length === 0 && (
            <div className="no-results">
              <p>
                {language === 'en' 
                  ? 'No attorneys found matching your criteria.'
                  : '未找到符合条件的律师。'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PeoplePage
