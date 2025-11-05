import React from 'react'
import PageHeader from '../components/PageHeader'

function CapabilitiesPage() {
  const practices = [
    'Corporate Finance',
    'Litigation',
    'Technology Transactions',
    'Intellectual Property',
    'Regulatory & Compliance',
    'Labor & Employment',
    'Real Estate',
    'Bankruptcy & Restructuring',
    'Privacy & Data Security',
    'Environmental & Climate'
  ]

  return (
    <div className="page">
      <PageHeader 
        title="Capabilities" 
        description="Our practices deliver innovative solutions to complex legal challenges"
      />
      
      <div className="content-wrapper">
        <div className="container">
          <div className="capabilities-content">
            <h2>Our Practices</h2>
            <p style={{ marginBottom: '40px', color: '#666' }}>
              Morrison Foerster's practices span the full spectrum of legal services, 
              combining deep industry knowledge with innovative thinking to deliver 
              exceptional results for our clients.
            </p>
            
            <div className="practices-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {practices.map((practice, index) => (
                <div 
                  key={index}
                  style={{
                    padding: '32px',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <h3 style={{ 
                    color: '#c8102e', 
                    marginBottom: '12px',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    {practice}
                  </h3>
                  <p style={{ color: '#666', fontSize: '14px' }}>
                    Learn more about our {practice.toLowerCase()} practice and how we can help your business.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapabilitiesPage
