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

  let randomIndex = Math.floor(Math.random() * tracks.length);

  const track = tracks[randomIndex];

  console.log(track)

  // const props = {
  //   coverArtUrl: track.photo_url,
  //   trackTitle: track.title,
  //   artistName: track.artist_id,
  //   audioUrl: track.audio_url
  // };

  return (
    <div className='home-main'>
      <AudioPlayerHome coverArtUrl={'https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg'} trackTitle={'Aileron Pt.I'} artistName={'Yakuza'} audioUrl={'https://res.cloudinary.com/doa9kh79y/video/upload/v1672748440/disco%20interno/mp3/aileron/03_AILERON_-_Pt._II_xslszd.mp3'} />
    </div>
  )
}

export default Home;
