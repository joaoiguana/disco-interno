import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AudioPlayerHome from '../AudioPlayer/AudioPlayerHome';
import './Home.css'

const Home = () => {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    return axios.get(`http://localhost:3000/tracks`).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getTracks().then((items) => {
      if (mounted) {
        setTracks(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  console.log(tracks);

  let randomIndex = Math.floor(Math.random() * tracks.length);

  const track = tracks[randomIndex];

  console.log(track)

  return (
    <div className='home-main'>
      <AudioPlayerHome albumTitle={'Aileron Pt.I'} artistName={'Yakuza'} />
    </div>
  )
}

export default Home;
