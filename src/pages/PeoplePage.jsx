import React from 'react'
import PageHeader from '../components/PageHeader'

function PeoplePage() {
  return (
    <div className="page">
      <PageHeader 
        title="People" 
        description="Meet our talented team of lawyers and professionals"
      />
      
      <div className="content-wrapper">
        <div className="container">
          <div className="people-content">
            <h2>Our People</h2>
            <p>
              Morrison Foerster's success is built on the talent and dedication of our people. 
              Our lawyers and professionals bring diverse perspectives, deep industry knowledge, 
              and a commitment to excellence in serving our clients.
            </p>
            
            <div className="placeholder-message" style={{ 
              padding: '60px 40px', 
              background: '#f8f8f8', 
              borderRadius: '8px', 
              marginTop: '40px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#c8102e', marginBottom: '16px' }}>People Directory Coming Soon</h3>
              <p style={{ color: '#666' }}>
                This section will feature our comprehensive directory of attorneys and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeoplePage
