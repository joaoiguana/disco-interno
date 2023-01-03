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
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};

export default AudioPlayer;
