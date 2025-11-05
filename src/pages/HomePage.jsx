import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ResourceCard from '../components/ResourceCard'
import ContentCard from '../components/ContentCard'
import './HomePage.css'

const resourcesData = [
  'Above Board Resource Center',
  'Artificial Intelligence (AI) Resource Center', 
  'Asia Funds ESG Report',
  'Corporate Transparency Act (CTA) Resource Center',
  'Cybersecurity Resource Center',
  'Full Disclosure',
  'GDPR + European Privacy Resource Center',
  'Impact Investing Resource Center',
  'Inside Authority',
  'MoFo@ITC',
  'MoFounders',
  'Post-Dobbs Strategies',
  'PE Briefing Room',
  'Privacy Library',
  'REIT Resource Center',
  'Sanctions Resource Center',
  'ScaleUp for Entrepreneurs & Startups',
  'Stablecoins Resource Center',
  'Sustainability + Corporate Responsibility Resource Center',
  'U.S. State Privacy Laws Resource Center'
]

const tabs = [
  { id: 'resources', label: 'Resources' },
  { id: 'insights', label: 'Insights' },
  { id: 'news', label: 'News' },
  { id: 'events', label: 'Events' },
  { id: 'blogs', label: 'Blogs' }
]

const insightsData = [
  { badge: 'CLIENT ALERT', title: 'European Digital Compliance: Key Digital Regulation & Compliance Developments', date: '03 Nov 2025' },
  { badge: 'CLIENT ALERT', title: 'Can Cyber Threat Intelligence Sharing Continue After CISA 2015 Lapse', date: '30 Oct 2025' },
  { badge: 'CLIENT ALERT', title: 'NIH Follows in FDA Footsteps and Adopts Bulk Sensitive Data Policy', date: '28 Oct 2025' },
  { badge: 'ARTICLE', title: 'Patent Protection Is the Foundation of the Future for Cosmetics', date: '28 Oct 2025' },
  { badge: 'ARTICLE', title: 'Becoming a Privacy Lawyer', date: '27 Oct 2025' },
  { badge: 'MOFO REPORT', title: 'Looking Beyond Silicon Valley: Global VC Terms Report (2025 Edition)', date: '27 Oct 2025' }
]

function HomePage() {
  const [activeTab, setActiveTab] = useState('resources')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader 
        title="Resources"
        subtitle="Keep up with the latest legal and industry insights, news, and events from MoFo"
        showButton={true}
        buttonText="SIGN UP"
      />

      {/* Tab Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      {activeTab === 'resources' && (
        <section className="section">
          <div className="container">
            <h2>Resources</h2>
            <div className="resource-grid">
              {resourcesData.map((title, index) => (
                <ResourceCard key={index} title={title} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insights Section */}
      {activeTab === 'insights' && (
        <section className="section">
          <div className="container">
            <h2>Insights</h2>
            <div className="content-grid">
              {insightsData.map((item, index) => (
                <ContentCard
                  key={index}
                  badge={item.badge}
                  title={item.title}
                  date={item.date}
                  imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23f0f0f0' width='400' height='200'/%3E%3C/svg%3E`}
                />
              ))}
            </div>
            <div className="section-footer">
              <Link to="/insights">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SHOW ALL INSIGHTS
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'news' && (
        <section className="section">
          <div className="container">
            <h2>News</h2>
            <p className="coming-soon">News content coming soon...</p>
          </div>
        </section>
      )}

      {activeTab === 'events' && (
        <section className="section">
          <div className="container">
            <h2>Events</h2>
            <p className="coming-soon">Events content coming soon...</p>
          </div>
        </section>
      )}

      {activeTab === 'blogs' && (
        <section className="section">
          <div className="container">
            <h2>Blogs</h2>
            <p className="coming-soon">Blogs content coming soon...</p>
          </div>
        </section>
      )}

      {activeTab === 'podcasts' && (
        <section className="section">
          <div className="container">
            <h2>Podcasts</h2>
            <p className="coming-soon">Podcasts content coming soon...</p>
          </div>
        </section>
      )}

      {activeTab === 'video' && (
        <section className="section">
          <div className="container">
            <h2>Video + Audio</h2>
            <p className="coming-soon">Video + Audio content coming soon...</p>
          </div>
        </section>
      )}
    </motion.div>
  )
}

export default HomePage
