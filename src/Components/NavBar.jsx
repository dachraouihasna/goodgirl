import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.jpg';



function NavBar() {
    return (
      <>
<Navbar className="nav" bg="dark" variant="dark" s >
<img 
        className="GG" style={{ height:60 }}
        src={logo}
        alt=""
          ></img>
        <Container>
          <Nav className="me-auto" >
          <Nav.Link className="link" href="/home" > Home </Nav.Link>
            <Nav.Link className="link" href="/signin" > SignIn </Nav.Link>
            <Nav.Link className="link" href="/login" > LogIn </Nav.Link>
            <Nav.Link className="link" href="/add" > Add Product </Nav.Link>
            <Nav.Link className="link" href="/products" > Our Products </Nav.Link>
          </Nav>
        </Container>

      </Navbar>
      </>
  );
}

export default NavBar;




/*function Navbar() {
  return (
    <div className="navbar">
        
            <Link to='/' >
            <div className="sghir" href="#action1">Home</div>
            </Link>
            <Link to='/signin' >
            <div className="sghir" href="#action1">SignIn</div>
            </Link>
            <Link to='/login' >
            <div className="sghir" href="#action1">Login</div>
            </Link>
            <Link to='/add'>
        <div className="sghir" href="#">Add Product</div>
        </Link>
            <Link to='/products' >
            <div className="sghir"  href="#action2">Our Products</div>
            </Link>
            
            
      
    </div>
  );
}

export default Navbar;*/