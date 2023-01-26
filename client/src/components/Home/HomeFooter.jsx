import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
  return (
    <div className='home-footer'>
      <div className='footer-links'>
        <p className='link-home'><a href="https://discointerno.bandcamp.com/" target="_blank"><i class="fa-brands fa-bandcamp"></i> Bandcamp</a></p>
        <p className='link-home'><a href="https://www.instagram.com/discointerno/" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a></p>
      </div>
      <p><i className="fa-regular fa-copyright"></i> Direitos reservados aos artistas e Disco Interno.</p>
      <Link to='/about'><p className='home-mail'><i className="fa-regular fa-envelope"></i> discointernolx@gmail.com</p></Link>
    </div>
  );
}

export default HomeFooter;
