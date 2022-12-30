import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000/albums';

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setAlbums(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div>
      <h3>This are the albums</h3>
      {albums.map((album) => {
        return (
              <div key={album.id}>
                <Link to={`/albums/${album.id}`}>
                  <h2>{album.title} ({album.year})</h2>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Albums;
