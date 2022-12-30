import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TracksDetail = () => {
  const [track, setTrack] = useState([]);
  const { id } = useParams();

  const getAPIData = () => {
    return axios.get(`http://localhost:3000/tracks/${id}`).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setTrack(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  if (track.artist_id === 1 && track.album_id === 1) {
    return (track.artist_id = 'Iguana Garcia', track.album_id = 'Ilha Da Iguana');
  } else if (track.artist_id === 2 && track.album_id === 2) {
    return (track.artist_id = 'Yakuza', track.album_id = 'Aileron');
  }

  return (
    <div>
      <h3>{track.tracks_number} - {track.title} ({track.album_id}, {track.artist_id})</h3>
    </div>
  );
}

export default TracksDetail;
