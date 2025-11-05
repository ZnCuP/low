import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/translations'
import PageHeader from '../components/PageHeader'

function AboutPage() {
  const { language } = useLanguage()
  
  return (
    <div className="page">
      <PageHeader 
        title={t('about.title', language)}
        description={t('about.description', language)}
      />
      
      <div className="content-wrapper">
        <div className="container">
          <div className="about-content">
            <h2>{t('about.heading', language)}</h2>
            <p>
              {t('about.intro', language)}
            </p>
            
            <div className="about-sections" style={{ marginTop: '40px' }}>
              <div className="about-section" style={{ 
                marginBottom: '32px', 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>
                  {t('about.history', language)}
                </h3>
                <p>
                  {t('about.historyText', language)}
                </p>
              </div>
              
              <div className="about-section" style={{ 
                marginBottom: '32px', 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>
                  {t('about.values', language)}
                </h3>
                <p>
                  {t('about.valuesText', language)}
                </p>
              </div>
              
              <div className="about-section" style={{ 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>
                  {t('about.globalReach', language)}
                </h3>
                <p>
                  {t('about.globalReachText', language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
