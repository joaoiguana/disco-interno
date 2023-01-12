import React, { useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const audioElement = useRef(null);
  const audioElements = document.getElementsByTagName('audio');
  const progress = document.querySelector('.progress');
  const progressContainer = document.querySelector('.progress-container');

  const play = () => {
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].pause();
    }
    audioElement.current.play();
  };

  const pause = () => {
    audioElement.current.pause();
  };

  function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  };

  const setProgress = (e) => {
    const width = e.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration

    audioElements.currentTime = (clickX / width) * duration;
    console.log(audioElements.currentTime);
  };

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
