import React, { useState } from 'react';
import './Logo.css'

const Logo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1672839044/disco%20interno/logo/LOGO_Circulo_1000px_wufuxj.png" alt="logo-circle" className='logo-circle'/>
    </div>
  );
}

export default Logo;
