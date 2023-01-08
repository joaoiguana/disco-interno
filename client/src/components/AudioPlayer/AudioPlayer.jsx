import React, { useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const audioElement = useRef(null);
  const audioElements = document.getElementsByTagName('audio');

  const play = () => {
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].pause();
    }
    audioElement.current.play();
  };

  const pause = () => {
    audioElement.current.pause();
  };

  return (
    <div className='details-player'>
      <audio ref={audioElement} src={audioUrl} />
      <button onClick={play} className='button-play'><i className="uil uil-play"></i></button>
      <button onClick={pause} className="button-previous-next"><i className="uil uil-pause"></i></button>
    </div>
  );
};

export default AudioPlayer;
