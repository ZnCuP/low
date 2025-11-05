import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './AttorneyDetailPage.css'

// 模拟律师详细数据
const attorneyDetails = {
  1: {
    name: 'Michael Anderson',
    title: 'Partner',
    office: 'San Francisco',
    email: 'manderson@mofo.com',
    phone: '(415) 268-7000',
    image: null,
    quote: '"I combine energy, attention to detail, and a deep understanding of my clients\' businesses to defend them in their most complex and high-stakes matters."',
    bio: `Michael Anderson is a seasoned advisor and litigator dedicated to addressing his clients' most complex matters. A partner in Morrison Foerster's Complex Litigation + Advisement Group, Michael represents leading companies in high-stakes product liability, class action, mass tort, and commercial litigation. He has extensive experience defending cases involving medical devices, pharmaceuticals, consumer products, automobiles, and emerging technologies such as artificial intelligence.

Michael makes a point of mastering the details of his clients' businesses to guide them through complex litigation. He dives deep into the technology behind their products and systems, collaborating with engineers, scientists, and other experts to understand how they function and to build strong, credible defenses.`,
    practices: [
      'Class Actions + Mass Torts',
      'Complex Litigation + Advisement',
      'Product Life Cycle',
      'Corporate Finance'
    ],
    education: [
      'Stanford University, J.D.',
      'University of California, Berkeley, B.A.'
    ],
    barAdmissions: ['California', 'New York'],
    insights: [
      { type: 'CLIENT ALERT', title: 'Cases to Watch: Recent Developments in Securities Litigation', date: '03 Nov 2025' },
      { type: 'BLOG POST', title: 'Navigating Complex Corporate Transactions', date: '15 Oct 2025' },
      { type: 'ARTICLE', title: 'The Future of Class Action Litigation', date: '28 Sep 2025' }
    ],
    news: [
      { type: 'MOFO NEWS', title: 'Michael Anderson Recognized as Leading Corporate Attorney', date: '01 Nov 2025' },
      { type: 'PRESS RELEASE', title: 'Morrison Foerster Announces New Partner Promotions', date: '15 Aug 2025' }
    ],
    events: [
      { type: 'SPEAKING', title: 'Corporate Law Symposium 2025', date: '20 Dec 2025' },
      { type: 'PANEL', title: 'Annual Securities Litigation Conference', date: '10 Nov 2025' }
    ],
    rankings: [
      'Chambers USA - Corporate/M&A',
      'The Legal 500 - Leading Lawyer',
      'Best Lawyers in America'
    ]
  },
  2: {
    name: 'Sarah Chen',
    title: 'Partner',
    office: 'Beijing',
    email: 'schen@mofo.com',
    phone: '+86 10 5909 3500',
    image: null,
    quote: '"I am passionate about helping clients navigate complex cross-border litigation and arbitration matters."',
    bio: `Sarah Chen is a leading litigation partner based in Morrison Foerster's Beijing office. She specializes in international arbitration, cross-border disputes, and commercial litigation. With deep experience in both U.S. and Chinese legal systems, Sarah provides strategic counsel to multinational corporations facing complex legal challenges in Asia.

Sarah regularly represents clients in high-stakes commercial disputes, including breach of contract, intellectual property infringement, and antitrust matters. She is recognized for her ability to navigate cultural and legal differences to achieve optimal outcomes for her clients.`,
    practices: [
      'Litigation',
      'International Arbitration',
      'Commercial Disputes',
      'Antitrust'
    ],
    education: [
      'Harvard Law School, LL.M.',
      'Peking University Law School, LL.B.'
    ],
    barAdmissions: ['New York', 'China'],
    insights: [
      { type: 'CLIENT ALERT', title: 'Recent Developments in China-U.S. Trade Disputes', date: '28 Oct 2025' },
      { type: 'ARTICLE', title: 'International Arbitration Trends in Asia', date: '12 Sep 2025' }
    ],
    news: [
      { type: 'MOFO NEWS', title: 'Sarah Chen Named Asia-Pacific Litigation Star', date: '05 Oct 2025' }
    ],
    events: [
      { type: 'CONFERENCE', title: 'ICC Arbitration Conference Beijing', date: '15 Jan 2026' }
    ],
    rankings: [
      'Chambers Asia-Pacific - Litigation',
      'Legal 500 Asia Pacific - Dispute Resolution'
    ]
  }
}

function AttorneyDetailPage() {
  const { id } = useParams()
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')
  const [showFullBio, setShowFullBio] = useState(false)

  const attorney = attorneyDetails[id] || attorneyDetails[1]

  const tabs = [
    { id: 'overview', label: { en: 'Overview', zh: '概述' } },
    { id: 'insights', label: { en: 'Insights', zh: '洞察' } },
    { id: 'news', label: { en: 'News', zh: '新闻' } },
    { id: 'events', label: { en: 'Events', zh: '活动' } },
    { id: 'rankings', label: { en: 'Rankings', zh: '排名' } }
  ]

  const bioPreview = attorney.bio.substring(0, 400)
  const displayBio = showFullBio ? attorney.bio : bioPreview

  return (
    <div className="attorney-detail-page">
      {/* Hero Section */}
      <div className="attorney-hero">
        <div className="hero-image">
          {attorney.image ? (
            <img src={attorney.image} alt={attorney.name} />
          ) : (
            <div className="hero-placeholder">
              <span>{attorney.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
          )}
        </div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>{attorney.name}</h1>
              <p className="attorney-meta">{attorney.title} | {attorney.office}</p>
              <div className="contact-actions">
                <button className="action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 01-2 2h-1a16 16 0 01-16-16V4a2 2 0 012-2h4" strokeWidth="2"/>
                  </svg>
                  {language === 'en' ? 'Download vCard' : '下载名片'}
                </button>
                <button className="action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="18" cy="5" r="3" strokeWidth="2"/>
                    <circle cx="6" cy="12" r="3" strokeWidth="2"/>
                    <circle cx="18" cy="19" r="3" strokeWidth="2"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" strokeWidth="2"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" strokeWidth="2"/>
                  </svg>
                  {language === 'en' ? 'Share' : '分享'}
                </button>
              </div>
              <div className="contact-info">
                <a href={`mailto:${attorney.email}`} className="contact-link">
                  {attorney.email}
                </a>
                <span className="separator">|</span>
                <a href={`tel:${attorney.phone}`} className="contact-link">
                  {attorney.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="detail-tabs">
        <div className="container">
          <div className="tabs-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label[language]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="overview-section">
              {attorney.quote && (
                <blockquote className="attorney-quote">
                  {attorney.quote}
                </blockquote>
              )}

              <div className="biography">
                <p>{displayBio}</p>
                {attorney.bio.length > 400 && (
                  <button 
                    className="show-more-btn"
                    onClick={() => setShowFullBio(!showFullBio)}
                  >
                    {showFullBio 
                      ? (language === 'en' ? 'SHOW LESS' : '收起')
                      : (language === 'en' ? 'SHOW MORE' : '展开更多')
                    }
                  </button>
                )}
              </div>

              <div className="info-grid">
                <div className="info-section">
                  <h3>{language === 'en' ? 'PRACTICES' : '业务领域'}</h3>
                  <ul>
                    {attorney.practices.map((practice, idx) => (
                      <li key={idx}>
                        <Link to="/practices">{practice}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>{language === 'en' ? 'BAR ADMISSIONS' : '律师资格'}</h3>
                  <ul>
                    {attorney.barAdmissions.map((bar, idx) => (
                      <li key={idx}>{bar}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>{language === 'en' ? 'EDUCATION' : '教育背景'}</h3>
                  <ul>
                    {attorney.education.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="insights-section">
              <h2>{language === 'en' ? 'Insights' : '洞察'}</h2>
              <div className="content-list">
                {attorney.insights.map((insight, idx) => (
                  <div key={idx} className="content-item">
                    <div className="content-badge">{insight.type}</div>
                    <h3>{insight.title}</h3>
                    <p className="content-date">{insight.date}</p>
                  </div>
                ))}
              </div>
              <button className="show-all-btn">
                {language === 'en' ? 'SHOW ALL INSIGHTS' : '显示全部洞察'}
              </button>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="news-section">
              <h2>{language === 'en' ? 'News' : '新闻'}</h2>
              <div className="content-list">
                {attorney.news.map((item, idx) => (
                  <div key={idx} className="content-item">
                    <div className="content-badge">{item.type}</div>
                    <h3>{item.title}</h3>
                    <p className="content-date">{item.date}</p>
                  </div>
                ))}
              </div>
              <button className="show-all-btn">
                {language === 'en' ? 'SHOW ALL NEWS' : '显示全部新闻'}
              </button>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="events-section">
              <h2>{language === 'en' ? 'Events' : '活动'}</h2>
              <div className="content-list">
                {attorney.events.map((event, idx) => (
                  <div key={idx} className="content-item">
                    <div className="content-badge">{event.type}</div>
                    <h3>{event.title}</h3>
                    <p className="content-date">{event.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rankings' && (
            <div className="rankings-section">
              <h2>{language === 'en' ? 'Rankings' : '排名'}</h2>
              <ul className="rankings-list">
                {attorney.rankings.map((ranking, idx) => (
                  <li key={idx}>{ranking}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AttorneyDetailPage
