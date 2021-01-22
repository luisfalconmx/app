import React from 'react'
import '../assets/styles/components/Navbar.scss'

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__brand">
      <img src="https://res.cloudinary.com/luisfalconmx/image/upload/v1611272549/LuisFalconMX/luisfalconmx-logotipo.png" alt="LuisFalconMX - Logotipo Oficial"/>
      <h1 className="navbar__title">Playground</h1>
    </div>
    <div className="navbar__account">
        <img src="https://res.cloudinary.com/luisfalconmx/image/upload/v1611276063/LuisFalconMX/icon-account.png" alt="Icono de la cuenta"/>
        <strong>Iniciar Sesión</strong>
    </div>
  </header>
)

export default Navbar