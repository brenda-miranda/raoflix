import React from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Nav } from './styles';

function Menu() {
   return (
      <Container>
         <Nav>
            <a href="/">       
               <img src={Logo} alt="logo" />
            </a> 
         </Nav>
      </Container>
   )
}

export default Menu;