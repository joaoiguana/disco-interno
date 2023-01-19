import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>
      <button className='back-button'><i class="fa-solid fa-angles-left"></i></button>
    </div>
  );
}

export default BackButton;
