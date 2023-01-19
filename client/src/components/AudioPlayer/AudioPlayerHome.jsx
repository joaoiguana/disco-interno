import React, { useEffect, useState, useRef } from 'react';
import './AudioPlayerHome.css';

const AudioPlayerHome = () => {
  const audioElement = useRef(null);
  const [isActive, setActive] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [oneTrack, setOneTrack] = useState({});

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const fetchingTracks = await fetch("http://localhost:3000/tracks");
        const tracks = await fetchingTracks.json();

        setTracks(tracks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTracks();
  }, []);

  const handleRandomClick = () => {
    const random = tracks[Math.floor(Math.random() * tracks.length)];
    setOneTrack(random);
  };

  if (oneTrack.artist_id === 15) {
    return oneTrack.artist_id = 'Yakuza';
  } else if (oneTrack.artist_id === 16) {
    return oneTrack.artist_id = 'Iguana Garcia';
  }

  const toggleClass = () => {
    setActive(!isActive);
  };

  const play = () => {
    audioElement.current.play();
  };

  const pause = () => {
    audioElement.current.pause();
  };

  return (
    <div>
      <button onClick={() => {toggleClass(); handleRandomClick()}} className='broadcast-button pulse'><p><i className="fa-solid fa-podcast"></i></p></button>
      <div className={isActive ? 'card': 'card hidden'} >
        <div className="music-widget">
          <img src={oneTrack.photo_url} alt="album_cover" className='art'/>
          <div className="song-info">
            <div className="text">
              <h2 className="song-title">{oneTrack.title}</h2>
              <p className="artist-name">{oneTrack.artist_id}</p>
            </div>
          </div>
          <ul className="toolbar" role="toolbar">
            <li>
              <button onClick={handleRandomClick} className="button-previous-next" aria-label="previous">
              <i className="uil uil-arrow-random"></i>
              </button>
            </li>
            <li>
              <audio ref={audioElement} src={oneTrack.audio_url} />
              <button onClick={play} className="button-play" aria-label="play">
                <i className="uil uil-play"></i>
              </button>
            </li>
            <li>
              <button onClick={pause} className="button-previous-next" aria-label="next">
                <i className="uil uil-pause"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayerHome;
