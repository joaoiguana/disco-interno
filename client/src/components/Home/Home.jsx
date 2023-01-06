import React from 'react';
import axios from 'axios';
import AudioPlayerHome from '../AudioPlayer/AudioPlayerHome';
import Logo from '../Logo/Logo';
import HomeFooter from './HomeFooter';
import './Home.css'

const Home = () => {
  // const props = {
  //   coverArtUrl: track.photo_url,
  //   trackTitle: track.title,
  //   artistName: track.artist_id,
  //   audioUrl: track.audio_url
  // };

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
