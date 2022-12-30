import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AlbumsDetail = () => {
  const [album, setAlbum] = useState([]);
  const { id } = useParams();

  const getAPIData = () => {
    return axios.get(`http://localhost:3000/albums/${id}`).then((response) => response.data)
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

  if (album.artist_id === 1) {
    return album.artist_id = 'Iguana Garcia';
  } else if (album.artist_id === 2) {
    return album.artist_id = 'Yakuza';
  }

  return (
    <div>
      <h3>{album.title} ({album.year})</h3>
      <h4>{album.artist_id}</h4>
      <p>{album.description} - {album.catalog_number}</p>
      <p>{album.genre}</p>
    </div>
  );
}

export default AlbumsDetail;
