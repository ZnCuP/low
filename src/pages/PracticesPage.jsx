import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import './PracticesPage.css'

const practicesData = [
  {
    key: 'businessFinance',
    title: 'Business + Finance',
    items: [
      'Antitrust',
      'Appellate',
      'Asset Management',
      'Banking',
      'Bankruptcy & Restructuring',
      'Capital Markets',
      'Clean Energy & Climate Solutions',
      'Commercial Litigation',
      'Corporate',
      'Corporate Governance',
      'Employee Benefits & Executive Compensation',
      'Financial Services',
      'Funds',
      'Investment Management',
      'Japan Practice',
      'Mergers & Acquisitions',
      'Private Equity',
      'Real Estate',
      'Securities Enforcement',
      'Securities Litigation',
      'Startup + Venture Capital',
      'Strategic Transactions',
      'Wealth Management'
    ]
  },
  {
    key: 'litigation',
    title: 'Litigation',
    items: [
      'Antitrust',
      'Appellate',
      'Class Actions',
      'Commercial Litigation',
      'Complex Civil Litigation',
      'Government Enforcement & White Collar',
      'Internal Investigations',
      'International Arbitration',
      'IP Litigation',
      'Labor & Employment',
      'Product Liability',
      'Securities Enforcement',
      'Securities Litigation'
    ]
  },
  {
    key: 'intellectualProperty',
    title: 'Intellectual Property',
    items: [
      'Intellectual Property',
      'IP Litigation',
      'IP Strategy & Counseling',
      'IP Transactions',
      'Patent Prosecution',
      'Post-Grant Proceedings',
      'Trademark, Copyright & Advertising'
    ]
  },
  {
    key: 'regulatory',
    title: 'Regulatory',
    items: [
      'Advertising',
      'Antitrust',
      'Communications + Media',
      'Cybersecurity',
      'Data Strategy & Security',
      'Environmental Law',
      'FDA + Healthcare',
      'Financial Services',
      'Government Contracts',
      'Government Enforcement & White Collar',
      'Government Strategies',
      'Infrastructure',
      'International Trade',
      'Labor & Employment',
      'Privacy & Data Security',
      'Public Law & Policy',
      'Securities Enforcement',
      'Tax'
    ]
  }
]

function PracticesPage() {
  const { language } = useLanguage()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="practices-page">
      <div className="practices-header">
        <h1>{t('practices.title', language)}</h1>
      </div>

      <div className="practices-container">
        <div className="practices-sidebar">
          <h3>{t('practices.heading', language)}</h3>
        </div>

        <div className="practices-content">
          <div className="accordion-list">
            {practicesData.map((practice, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-header ${expandedIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{t(`practices.${practice.key}`, language)}</span>
                  <svg 
                    className={`accordion-icon ${expandedIndex === index ? 'rotated' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="2"/>
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="2"/>
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="practice-items">
                        {practice.items.map((item, itemIndex) => (
                          <a key={itemIndex} href="#" className="practice-item">
                            {item}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticesPage
