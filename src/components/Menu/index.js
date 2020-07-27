import React from 'react';
import Logo from '../../assets/Logo.png';
import { Container, Nav, ButtonLink } from './styles';

function Menu() {
   return (
      <Container>
         <Nav>
            <a href="/">       
               <img src={Logo} alt="logo" />
            </a> 
         </Nav>

         <ButtonLink>
            <a href="/">
               Novo vídeo
            </a>
         </ButtonLink>
      </Container>
   )
}

export default Menu;