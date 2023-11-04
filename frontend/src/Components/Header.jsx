import React from 'react'
import {Nav,Navbar, Container} from "react-bootstrap";
const Header = () => {
  return (
    <>
    <Navbar expand="lg" bg='dark' variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Parv-Shan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
            <i className="fa-solid fa-cart-shopping"></i>
            &nbsp;
              Cart
              </Nav.Link>
            <Nav.Link href="#link">
            <i className="fa-solid fa-user"></i>
            &nbsp;
              Sign In
              </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header