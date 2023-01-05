import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Albums.css';

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
      {albums.map((album) => {
        return (
              <div key={album.id} className='albums-show'>
                <Link to={`/albums/${album.id}`} className='album-title'>
                  <h2>{album.title} ({album.year})</h2>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Albums;
