import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './AppStyle.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Appbar({cart}) {
  
  return (
    <div >
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="/"><h4><i class="bi bi-brilliance"></i>Alive Shop</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
           
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Watches">Watch</NavDropdown.Item>
              <NavDropdown.Item href="/Belt">Belt</NavDropdown.Item>
              <NavDropdown.Item href="/Perfumes">Perfume</NavDropdown.Item>
              <NavDropdown.Item href="/Coolers">Cooler</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sportswear</NavDropdown.Item>
              <NavDropdown.Item href="Hoodies">Hoodies</NavDropdown.Item>
              
            </NavDropdown>
        
            <Nav.Link href="/Fcontact">Contact us</Nav.Link>
            <Nav.Link href=""><Link style={{color:"black"}} className="linkstyle" to="/Shopcart"><i class="bi bi-bag-heart-fill"></i><span>{cart.length}</span></Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><i class="bi bi-search"></i></Button>
          </Form>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </div>
    
  );
}

export default Appbar;