import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const AlbumsDetail = () => {
  const [album, setAlbum] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  const getAPIData = async () => {
    return await axios.get(`http://localhost:3000/albums/${id}`).then((response) => response.data)
  }

  const getTracks = async () => {
    return await axios.get(`http://localhost:3000/tracks`).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setAlbum(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  useEffect(() => {
    let mounted = true;
    getTracks().then((items) => {
      if (mounted) {
        setTracks(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  let filteredTracks = tracks.filter(track => track.album_id === album.id);

  return (
    <div className='tracks-box'>
      <div>
        <img src={album.photo_url} alt="cover-art" className='cover-art' />
        <h3>{album.title} ({album.year}) - {album.catalog_number}</h3>
        <h4>{album.artist_name}</h4>
      </div>
      <div className='bio-tracks-card'>
        <div>
          <p>{album.description}</p>
          <p><i className="uil uil-music-note"></i> {album.genre}</p>
        </div>
        <div>
          {filteredTracks.map((tracks) => {
            return (
              <div className='album-player' key={tracks.id}>
                {/* <button><i class="fa-solid fa-play"></i></button> */}
                <AudioPlayer audioUrl={tracks.audio_url} />
                <p className='text-elipsis'>{tracks.tracks_number} - {tracks.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AlbumsDetail;
