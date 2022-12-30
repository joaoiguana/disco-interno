import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArtistsDetail = () => {
  const [artist, setArtist] = useState([])
  const { id } = useParams();

  const getAPIData = () => {
    return axios.get(`http://localhost:3000/artists/${id}`).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setArtist(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div>
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
    </div>
  );
}

export default ArtistsDetail;
