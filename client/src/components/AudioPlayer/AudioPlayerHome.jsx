import React, { useState, useRef } from 'react';
import './AudioPlayerHome.css';

const AudioPlayerHome = ({ coverArtUrl, trackTitle, artistName, audioUrl }) => {
  const audioElement = useRef(null);
  const [isActive, setActive] = useState(false);

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
      <button onClick={toggleClass} className='broadcast-button'><h2><i className="fa-solid fa-podcast"></i></h2></button>
      <div className={isActive ? 'card': 'card hidden'} >
        <div className="music-widget">
          <img src={coverArtUrl} alt="album_cover" className='art'/>
          <div className="song-info">
            <div className="text">
              <h2 className="song-title">{trackTitle}</h2>
              <p className="artist-name">{artistName}</p>
            </div>
          </div>
          <ul className="toolbar" role="toolbar">
            <li>
              <button className="button-previous-next" aria-label="previous">
              <i className="uil uil-arrow-random"></i>
              </button>
            </li>
            <li>
              <audio ref={audioElement} src={audioUrl} />
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
