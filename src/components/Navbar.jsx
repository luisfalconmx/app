import React from 'react'
import '../assets/styles/components/Navbar.scss'
import Logo from '../assets/static/logo.png'
import IconAccount from '../assets/static/icon-account.png'

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__brand">
      <img src={Logo} alt="LuisFalconMX - Logotipo Oficial"/>
      <h1 className="navbar__title">Playground</h1>
    </div>
    <div className="navbar__account">
        <img src={IconAccount} alt="Icono de la cuenta"/>
        <strong>Iniciar Sesión</strong>
    </div>
  </header>
)

export default Navbar