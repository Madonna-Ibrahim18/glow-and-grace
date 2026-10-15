import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Offers() {
  const offerProducts = [
    { 
      id: 1, 
      name: "مجموعة النضارة اليومية", 
      price: "450 ج.م", 
      oldPrice: "650 ج.م",
      desc: "يتضمن سيروم التفتيح وكريم المرطب العميق.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.23.12.jpeg",
      badge: "خصم 30%"
    },
    { 
      id: 2, 
      name: "بوكس مكياج السهرة", 
      price: "750 ج.م", 
      oldPrice: "1000 ج.م",
      desc: "مجموعة متكاملة لإطلالة راقية ومثالية.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.23.12 (1).jpeg",
      badge: "خصم خاص"
    },
    { 
      id: 3, 
      name: "مجموعة الترطيب المكثف", 
      price: "320 ج.م", 
      oldPrice: "450 ج.م",
      desc: "حماية فائقة ونعومة تدوم طوال اليوم.",
      image: "Images/WhatsApp Image 2026-10-15 at 15.14.53.jpeg",
      badge: "عرض الشتاء"
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
            عروض حصرية لفترة محدودة 🔥
          </span>
          <h1 style={{ fontWeight: '800', marginTop: '15px', color: '#ffffff' }}>
            خصومات العناية والجمال الكبرى
          </h1>
          <p style={{ color: '#bfa8ae', fontSize: '1.1rem' }}>
            استمتعي بأقوى العروض على مجموعات العناية بالبشرة والمكياج الفاخرة.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {offerProducts.map((product) => (
            <Col key={product.id} md={4} sm={6}>
              <Card style={{ backgroundColor: '#251a1e', border: '1px solid #36252b', borderRadius: '20px', color: '#ffffff', overflow: 'hidden', position: 'relative' }}>
                
                {/* شارة الخصم */}
                <span style={{ 
                  position: 'absolute', 
                  top: '15px', 
                  right: '15px', 
                  backgroundColor: '#ff758f', 
                  color: '#fff', 
                  padding: '5px 12px', 
                  borderRadius: '10px', 
                  fontSize: '0.8rem', 
                  fontWeight: 'bold',
                  zIndex: '2'
                }}>
                  {product.badge}
                </span>

                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  style={{ height: '210px', objectFit: 'cover' }} 
                />

                <div style={{ padding: '25px', textAlign: 'center' }}>
                  <h4 style={{ color: '#ffb3c1', fontSize: '1.15rem', marginBottom: '10px' }}>{product.name}</h4>
                  <p style={{ color: '#bfa8ae', fontSize: '0.85rem' }}>{product.desc}</p>
                  
                  <h5 style={{ fontWeight: 'bold', color: '#ffffff', margin: '15px 0' }}>
                    {product.price}{' '}
                    <span style={{ textDecoration: 'line-through', color: '#775e65', fontSize: '0.85rem', marginRight: '8px' }}>
                      {product.oldPrice}
                    </span>
                  </h5>

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

export default Offers;