import React from 'react'
import PageHeader from '../components/PageHeader'

function AboutPage() {
  return (
    <div className="page">
      <PageHeader 
        title="About Morrison Foerster" 
        description="Learn about our history, values, and commitment to excellence"
      />
      
      <div className="content-wrapper">
        <div className="container">
          <div className="about-content">
            <h2>About Our Firm</h2>
            <p>
              Morrison Foerster is a global law firm recognized for exceptional client service, 
              legal innovation, and deep industry expertise. With lawyers across the Americas, 
              Asia, and Europe, we serve clients ranging from Fortune 100 companies to emerging 
              startups.
            </p>
            
            <div className="about-sections" style={{ marginTop: '40px' }}>
              <div className="about-section" style={{ 
                marginBottom: '32px', 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>Our History</h3>
                <p>
                  Founded in San Francisco, Morrison Foerster has grown to become one of the 
                  world's premier law firms, known for tackling complex legal challenges with 
                  creativity and precision.
                </p>
              </div>
              
              <div className="about-section" style={{ 
                marginBottom: '32px', 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>Our Values</h3>
                <p>
                  We are committed to diversity, inclusion, and social responsibility. 
                  Our values guide everything we do, from how we serve clients to how we 
                  support our communities.
                </p>
              </div>
              
              <div className="about-section" style={{ 
                padding: '32px', 
                background: '#f8f8f8',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#c8102e', marginBottom: '12px' }}>Global Reach</h3>
                <p>
                  With offices in major business centers worldwide, we provide seamless 
                  service across borders and time zones, bringing local knowledge and 
                  global perspective to every matter.
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
