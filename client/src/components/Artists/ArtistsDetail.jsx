import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArtistsDetail = () => {
  const [artist, setArtist] = useState({ name: {} })

  const { id } = useParams();

  const fetchDetails = () => {
    fetch(`http://localhost:3000/artists/${id}`)
      .then(res => res.json())
      .then(data => setArtist(data))
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h3>{artist.name}</h3>
      <p>{artist.bio}</p>
    </div>
  );
}

export default ArtistsDetail;
