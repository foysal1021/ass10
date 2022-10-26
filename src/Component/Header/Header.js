import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [them,setThem]=useState(true);

  //set dark and light mode start
  const lightThem = ()=>{
    setThem(false);
  }

  const darkThem = ()=>{
    setThem(true)
  }

  //set dark and light mode end



    return (
        <div>
             <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> Foysal Ahamed </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>

          <Nav>
            {/* dark and light mode btn start */}
            <Nav.Link href="#deets">
              {
                them?<span onClick={lightThem}> Light </span>:
                <span onClick={darkThem}> Dark </span>

              }
            </Nav.Link>{/* dark and light mode btn end */}
                       
            <Nav.Link href="#deets"> Photo </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;