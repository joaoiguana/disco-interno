import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000/tracks';

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}
const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setTracks(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div>
      <h3>This are the tracks</h3>
      {tracks.map((track) => {
        return (
              <div key={track.id}>
                <Link to={`/tracks/${track.id}`}>
                  <h2>{track.title}</h2>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Tracks;
