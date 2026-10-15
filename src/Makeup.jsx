import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Makeup() {
  const makeupProducts = [
    { 
      id: 1, 
      name: "أحمر شفاه مات فاخر", 
      price: "250 ج.م", 
      desc: "لون غني وثبات يدوم طوال اليوم.",
      image: "Images/img.jpeg" 
    },
    { 
      id: 2, 
      name: "ماسكارا لتكثيف الرموش", 
      price: "180 ج.م", 
      desc: "رموش أطول وأكثر كثافة بدون تكتل.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.10.24.jpeg" 
    },
    { 
      id: 3, 
      name: "كريم أساس سائل", 
      price: "380 ج.م", 
      desc: "تغطية مثالية وبشرة مخملية طبيعية.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.03.15.jpeg" 
    },
    { 
      id: 4, 
      name: "باليت ظلال العيون", 
      price: "420 ج.م", 
      desc: "ألوان ترابية ولامعة لتحديد أنيق.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.04.16.jpeg" 
    }
  ];

  return (
    <div style={{ backgroundColor: '#181214', minHeight: '85vh', padding: '50px 0', color: '#ffffff' }}>
      <Container style={{ width: '92%' }}>
        <div className="text-center mb-5">
          <span style={{ 
            backgroundColor: '#2b1d22', 
            color: '#ffb3c1', 
            padding: '6px 18px', 
            borderRadius: '20px', 
            fontSize: '0.9rem',
            border: '1px solid #3d2830'
          }}>
            قسم المكياج 💄
          </span>
          <h1 style={{ fontWeight: '800', marginTop: '15px', color: '#ffffff' }}>
            تشكيلة المكياج الفاخرة
          </h1>
          <p style={{ color: '#bfa8ae', fontSize: '1.1rem' }}>
            اكتشفي منتجات المكياج الأعلى جودة لإطلالة راقية ومثالية.
          </p>
        </div>

        <Row className="g-4">
          {makeupProducts.map((product) => (
            <Col key={product.id} md={3} sm={6}>
              <Card style={{ backgroundColor: '#251a1e', border: '1px solid #36252b', borderRadius: '20px', color: '#ffffff', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h4 style={{ color: '#ffb3c1', fontSize: '1.1rem', marginBottom: '10px' }}>{product.name}</h4>
                  <p style={{ color: '#bfa8ae', fontSize: '0.85rem' }}>{product.desc}</p>
                  <h5 style={{ fontWeight: 'bold', color: '#ffffff', margin: '15px 0' }}>{product.price}</h5>
                  <Button style={{ backgroundColor: '#ff758f', borderColor: '#ff758f', width: '100%', borderRadius: '12px', fontWeight: 'bold' }}>
                    أضيفي للسلة 🛒
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Makeup;
