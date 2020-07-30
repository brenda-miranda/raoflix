import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './styles.css';
import Button from '../Button';

const Menu = () => {
  const [noHeaderBackground, setNoHeaderBackground] = useState(true)
  const [headerHidden] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderBackground, false)
  }, [])

  const changeHeaderBackground = () => {
    if (window.scrollY > 0) {
      setNoHeaderBackground(false)
    } else {
      setNoHeaderBackground(true)
    }
  }

  return (
    <>
      <header
        className={`Menu ${
          (noHeaderBackground && 'no-header-background') || 'header-background'
        } ${(headerHidden && 'header-hidden') || ''}
        }`}
      >
       <nav className="Menu">
            <Link to ="/">
                <img className="Logo" src={Logo} alt="EnglishFlix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to ="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
      </header>
    </>
  )
}

export default Menu