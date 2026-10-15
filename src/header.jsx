import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function StoreHeader() {
  return (
    <div style={{ backgroundColor: '#181214', minHeight: '75vh', display: 'flex', alignItems: 'center', padding: '40px 0' }}>
      <Container fluid style={{ width: '92%' }}>
        <Row className="align-items-center flex-row-reverse">
          
          
          <Col lg={7} className="text-end mb-5 mb-lg-0">
            <span style={{ 
              backgroundColor: '#2b1d22', 
              color: '#ffb3c1', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.85rem',
              display: 'inline-block',
              marginBottom: '20px',
              border: '1px solid #3d2830'
            }}>
              إصدار محدود فاخر
            </span>
            
            <h1 style={{ 
              color: '#ffffff', 
              fontWeight: '800', 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              lineHeight: '1.3',
              marginBottom: '20px' 
            }}>
              عناية استثنائية تليق بجمالك الراقي
            </h1>
            
            <p style={{ 
              color: '#bfa8ae', 
              fontSize: '1.05rem', 
              marginBottom: '35px', 
              lineHeight: '1.6' 
            }}>
              استمتعي بتجربة جمال لا مثيل لها مع مكونات طبيعية 100%.
            </p>
            
            <div>
              <Button style={{ 
                backgroundColor: '#ff758f', 
                borderColor: '#ff758f', 
                color: '#ffffff',
                padding: '12px 30px', 
                borderRadius: '12px', 
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(255, 117, 143, 0.3)'
              }}>
                اكتشفي المجموعة
              </Button>
            </div>
          </Col>

         
<Col lg={5} className="text-center d-flex align-items-center justify-content-center">
  <div style={{ 
    backgroundColor: '#251a1e', 
    borderRadius: '24px', 
    padding: '12px', 
    border: '1px solid #36252b',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
    width: '100%',
    maxWidth: '440px',
    height: '380px', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img 
      src="Images/WhatsApp Image 2026-10-15 at 13.05.08.jpeg" 
      alt="منتجات عناية بالبشرة ومكياج فاخرة" 
      style={{ 
        width: '100%', 
        height: '100%', 
        objectFit: 'cover', 
        borderRadius: '16px',
        display: 'block'
      }} 
    />
  </div>
</Col>
          


        </Row>
      </Container>
    </div>
  );
}

export default StoreHeader;