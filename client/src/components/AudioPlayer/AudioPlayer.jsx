import React, { useRef } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const audioElement = useRef(null);

  const play = () => {
    audioElement.current.play();
  };

  const pause = () => {
    audioElement.current.pause();
  };

  return (
    <div>
      <audio ref={audioElement} src={audioUrl} />
      <button onClick={play}><i class="fa-solid fa-play"></i></button>
      <button onClick={pause}><i class="fa-solid fa-pause"></i></button>
    </div>
  );
};

export default AudioPlayer;
