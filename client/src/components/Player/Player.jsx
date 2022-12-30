import React from 'react';
import './Player.css';

const Player = (props) => {
  const musicContainer = document.querySelector('.music-container');
  const playBtn = document.querySelector('#play');
  // const prevBtn = document.querySelector('#prev');
  // const nextBtn = document.querySelector('#next');
  const audio = document.querySelector('#audio');
  const progress = document.querySelector('.progress');
  const progressContainer = document.querySelector('.progress-container');
  const title = document.querySelector('#title');
  const cover = document.querySelector('#cover');

  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
  }

  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();
  }

  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    isPlaying ? pauseSong() : playSong();
  })

  return (
    <div class="music-container">
      <div class="music-info">
        <h4 id="title">{props.tracks_number} - {props.title}</h4>
        <div class="progress-container">
          <div class="progress"></div>
        </div>
      </div>

      <audio src={props.audio_url} id="audio"></audio>
      <div class="img-container">
        {/* <img src="./images/connan.jpg" alt="music-cover" id="cover" /> */}
      </div>
      <div class="navigation">
        {/* <button id="prev" class="action-btn">
          <i class="fas fa-backward"></i>
        </button> */}
        <button id="play" class="action-btn action-btn-big">
          <i class="fas fa-play"></i>
        </button>
        {/* <button id="next" class="action-btn">
          <i class="fas fa-forward"></i>
        </button> */}
      </div>
    </div>
  );
}

export default Player;
