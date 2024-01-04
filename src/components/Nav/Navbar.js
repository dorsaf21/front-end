import React from "react";
import { Navbar , Container , NavDropdown , Collapse ,Nav, NavLink} from "react-bootstrap";
import'./Nav.css';
import logo from '../../assets/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbars = ()=>{
return(
    <Navbar  expand="lg" >
      <Container>
        <Navbar.Brand >
          <img src={logo} width="150px" title="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
          
          

        

          <Nav.Link href="home">Home</Nav.Link>

          
          
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/LoginRegister">Login & Register</NavDropdown.Item>
              <NavDropdown.Item href="/AboutUs"> About Us </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/OurTeam">
              OurTeam
              </NavDropdown.Item>
            </NavDropdown>
                  
        

            <Nav.Link href='/Services' >Services</Nav.Link>
            
           < Nav.Link  href='Contact'>Contact Us</Nav.Link>
            

           
            
              






            <Nav.Link>
            <FontAwesomeIcon icon={faPhone} />
              (+213) 777 999 111</Nav.Link>
            <Nav.Link ><button>Contact us<span> <FontAwesomeIcon icon={faArrowLeft}/> </span></button></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

}

export default Navbars;