import React from 'react';
import AudioPlayerHome from '../AudioPlayer/AudioPlayerHome';
import Logo from '../Logo/Logo';
import HomeFooter from './HomeFooter';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-main'>
        <Logo />
        <AudioPlayerHome />
        <HomeFooter />
      </div>
    </div>
  )
}

export default Home;
