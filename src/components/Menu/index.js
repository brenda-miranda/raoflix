import React from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Nav } from './styles';

function Menu() {
   return (
      <Container>
         <Nav>           
            <img src={Logo} alt="logo" />
         </Nav>
      </Container>
   )
}

export default Menu;