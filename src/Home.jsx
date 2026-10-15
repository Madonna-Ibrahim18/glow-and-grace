import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div style={{ backgroundColor: '#181214', minHeight: '85vh', padding: '60px 0', color: '#ffffff' }}>
      <Container style={{ width: '92%' }}>
        <Row className="align-items-center">
          <Col md={6} className="text-right">
            <span style={{ 
              backgroundColor: '#2b1d22', 
              color: '#ffb3c1', 
              padding: '6px 18px', 
              borderRadius: '20px', 
              fontSize: '0.9rem',
              border: '1px solid #3d2830'
            }}>
              جديد متجرنا ✨
            </span>
            <h1 style={{ fontWeight: '800', marginTop: '20px', fontSize: '3rem', color: '#ffffff', lineHeight: '1.2' }}>
              إطلالة استثنائية تليق بجمالك الراقي
            </h1>
            <p style={{ color: '#bfa8ae', fontSize: '1.1rem', margin: '20px 0' }}>
              اكتشفي تشكيلة العناية بالبشرة والمكياج المصنوعة خصيصاً لتبرز جمالك الطبيعي بكل ثقة ونقاء.
            </p>
            <Button style={{ 
              backgroundColor: '#ff758f', 
              borderColor: '#ff758f', 
              padding: '12px 30px', 
              borderRadius: '14px', 
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              تصفحي المنتجات الآن 🛍️
            </Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img 
              src="Images/WhatsApp Image 2026-10-15 at 15.38.35.jpeg" 
              alt="Glow & Grace Products" 
              style={{ width: '100%', maxWidth: '450px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
