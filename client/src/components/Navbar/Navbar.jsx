import React from 'react';
import '../../App.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link exact to="/">Home</Link>
      <Link to="/artists">Artists</Link>
      <Link to="/albums">Albums</Link>
      <Link to="/tracks">Tracks</Link>
    </nav>
  )
}

export default Navbar;
