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

  return (
    <div>
      <h3>{track.tracks_number} - {track.title}</h3>
    </div>
  );
}

export default TracksDetail;
