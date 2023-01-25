import React, { useState } from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Link exact to="/" onClick={() => setOpen(false)}><img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1672756012/disco%20interno/logo/Logo-1366x768px_j9uybj.png" alt="logo-discointerno"  className='logo nav-logo'/></Link>
      <div onClick={() => setOpen(!open)} className='nav-menus dropdown-selector'><strong>Lançamentos</strong></div>
      {open && (
        <div className='dropdown-menu'>
        <Link to="/albums" onClick={() => setOpen(false)} className='dropdown-menu-items'><strong>Discos</strong></Link>
        <Link to="/artists" onClick={() => setOpen(false)} className='dropdown-menu-items'><strong>Artistas</strong></Link>
      </div>
      )}
      <Link to="/about" onClick={() => setOpen(false)} className='nav-menus nav-artists'><strong>Contactos</strong></Link>
    </nav>
  )
}

export default Navbar;
