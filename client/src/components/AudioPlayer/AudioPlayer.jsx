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

  const setProgress = (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration

    audioElement.currentTime = (clickX / width) * duration;
  }

  return (
    <div className='details-player'>
      <audio ref={audioElement} src={audioUrl} />
      <button onClick={play} className='button-play'><i className="uil uil-play"></i></button>
      <button onClick={pause} className="button-previous-next"><i className="uil uil-pause"></i></button>
      <div class="progress-container" onClick={setProgress}>
        <div class="progress"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
