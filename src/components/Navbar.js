import {Navbar, Nav, Image }from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo-vica.png'
import { useEffect, useState } from 'react';

function NavbarComponents() {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    setInterval(()=>setTime(new Date()),1000)
  },[])

  return (
    <div>
        <Navbar>
            <Container>
            
                <Navbar.Brand className='logo'><Image src={logo}></Image> Vica.</Navbar.Brand>
                <Nav className='date'>
                    <Nav.Link>{time.toLocaleDateString()}</Nav.Link>
                    <Nav.Link>{time.toLocaleTimeString()}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  );
}

export default NavbarComponents;