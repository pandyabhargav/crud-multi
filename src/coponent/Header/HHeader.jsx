import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function HHeader() {
  let user = 60;
  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/'} className='m-2' >Home</Link>
            <Link to={'/addData'} className='m-2'>Add</Link>
            <Link to={'/viewData/'} className='m-2' >View</Link>
            <Link to={`/viewData/${user}`} className='m-2'>View User</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default HHeader
