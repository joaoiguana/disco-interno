import React from 'react';

const HomeFooter = () => {
  return (
    <div className='home-footer'>
      <div className='footer-links'>
        <p className='link-home'><a href="https://discointerno.bandcamp.com/" target="_blank"><i class="fa-brands fa-bandcamp"></i> Bandacamp</a></p>
        <p className='link-home'><a href="https://www.instagram.com/discointerno/" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a></p>
      </div>
      <p><i className="fa-regular fa-copyright"></i> Direitos reservados aos artistas e Disco Interno.</p>
      <p className='home-mail'><i class="fa-regular fa-envelope"></i> discointernolx@gmail.com</p>
    </div>
  );
}

export default HomeFooter;
