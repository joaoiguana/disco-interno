import React, { useRef, useState } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ audioUrl }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioElement = useRef(null);
  const progressBar = useRef();
  const progress = useRef();
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

  const updateProgress = (e) => {
    console.log(e.nativeEvent.srcElement)
    const duration = e.nativeEvent.srcElement.duration;
    const currentTime = e.nativeEvent.srcElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;

    progress.current.style.width = `${progressPercent}%`
  }

  const setProgress = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.current.offsetWidth;
    const duration = audioElement.current.duration;

    audioElement.current.currentTime = (clickX / width) * duration;
  }

  return (
    <div className='details-player'>
      <audio ref={audioElement} src={audioUrl} onTimeUpdate={updateProgress} />
      <button onClick={play} className='button-play'><i className="uil uil-play"></i></button>
      <button onClick={pause} className="button-previous-next"><i className="uil uil-pause"></i></button>
      <div className="progress-container" ref={progressBar} onClick={setProgress}>
        <div className="progress" ref={progress}></div>
      </div>
    </div>
  );
};

export default AudioPlayer;
