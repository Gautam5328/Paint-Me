import React,{useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BrowserRouter as Router ,Route,Switch,Link } from "react-router-dom";
import "./Header.css"
function Header(){
    
    

    return(
      
    <div className="Header">
        
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand id="headers_navigation">Paint ME</Navbar.Brand>
        </Link>
          <Nav className="me-auto">
            <Link to="/home">
                <p id="headers_navigation">Home</p>
           </Link>
           <Link to="/signup">
                <p id="headers_navigation">SignUp</p>
           </Link>
           <Link to="/login">
                <p id="headers_navigation">Login</p>
           </Link>
          </Nav>
    </Container>
  </Navbar>
    </div>
    );
}


export default Header
