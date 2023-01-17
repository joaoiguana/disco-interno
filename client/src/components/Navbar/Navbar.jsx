import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link exact to="/"><img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1672756012/disco%20interno/logo/Logo-1366x768px_j9uybj.png" alt="logo-discointerno"  className='logo nav-logo'/></Link>
      <Link to="/albums" className='nav-menus'><strong>Lançamentos</strong></Link>
      <Link to="/artists" className='nav-menus nav-artists'><strong>Artistas</strong></Link>
      {/* <Link to="/tracks">Tracks</Link> */}
    </nav>
  )
}

export default Navbar;
