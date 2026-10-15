import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // لازم تكون مكتوبة بحرف L كابتل كده
import 'bootstrap/dist/css/bootstrap.min.css';

function StoreNavbar() {
  return (
    <Navbar expand="lg" style={{ 
      backgroundColor: '#1e181a', 
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      margin: '20px auto',
      width: '92%',
      padding: '12px 24px'
    }}>
      <Container fluid className="px-0">
        <Button style={{ 
          backgroundColor: '#3a272c', 
          borderColor: '#4d333a', 
          color: '#ffb3c1',
          borderRadius: '20px',
          padding: '6px 16px',
          fontSize: '0.9rem'
        }}>
          🛒 0
        </Button>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto align-items-center gap-4">
            <Nav.Link as={Link} to="/" style={{ color: '#e6dbdd', fontSize: '0.95rem' }}>الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/skincare" style={{ color: '#e6dbdd', fontSize: '0.95rem' }}>العناية بالبشرة</Nav.Link>
            <Nav.Link as={Link} to="/makeup" style={{ color: '#e6dbdd', fontSize: '0.95rem' }}>المكياج</Nav.Link>
            <Nav.Link as={Link} to="/offers" style={{ color: '#e6dbdd', fontSize: '0.95rem' }}>العروض</Nav.Link>
          </Nav>

          <Navbar.Brand as={Link} to="/" style={{ color: '#ffb3c1', fontWeight: 'bold', fontSize: '1.1rem', margin: '0', textDecoration: 'none' }}>
            Glow & Grace ✨
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavbar;