import React, { useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const audioElement = useRef(null);
  const progressBar = useRef();
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
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.current.offsetWidth;
    const duration = audioElement.current.duration;

    audioElement.current.currentTime = (clickX / width) * duration;
  }

  return (
    <div className='details-player'>
      <audio ref={audioElement} src={audioUrl} />
      <button onClick={play} className='button-play'><i className="uil uil-play"></i></button>
      <button onClick={pause} className="button-previous-next"><i className="uil uil-pause"></i></button>
      <div className="progress-container" ref={progressBar} onClick={setProgress}>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
