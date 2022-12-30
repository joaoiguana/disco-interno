import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000/artists';

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}

const Artists = (props) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setArtists(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div>
      <h3>This are the artists</h3>
      {artists.map((artist) => {
        return (
              <div key={artist.id}>
                <Link to={`/artists/${artist.id}`}>
                  <h2>{artist.name}</h2>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Artists;
