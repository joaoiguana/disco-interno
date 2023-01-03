import React from 'react';
import './AudioPlayerHome.css';

const AudioPlayerHome = ({ albumTitle, artistName }) => {
  return (
    <div className='card'>
      <div className="music-widget">
        <img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1672748272/disco%20interno/covers/aileron/AILERON-_-Yakuza-capa_kq8hb1.jpg" alt="album_cover" className='art'/>
        <div className="song-info">
          <div className="text">
            <h2 className="song-title">{albumTitle}</h2>
            <p className="artist-name">{artistName}</p>
          </div>
        </div>
        <ul className="toolbar" role="toolbar">
          <li>
            <button className="button-previous-next" aria-label="previous">
              <i className="uil uil-previous"></i>
            </button>
          </li>
          <li>
            <button className="button-play" aria-label="play">
              <i className="uil uil-play"></i>
            </button>
          </li>
          <li>
            <button className="button-previous-next" aria-label="next">
              <i className="uil uil-step-forward"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AudioPlayerHome
