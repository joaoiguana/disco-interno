import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArtistsDetail = () => {
  const [artist, setArtist] = useState([]);
  const { id } = useParams();


  const getAPIData = async () => {
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
    <div className='artists-grid'>
      <img src={artist.photo_url} alt="artist-pic"  className='artist-pic'/>
      <h1 className='hiddenY'>Y</h1>
      <img src='https://res.cloudinary.com/doa9kh79y/image/upload/v1672853287/disco%20interno/design-tools/rectangle_fit_cefuua.jpg' alt="artist-pic"  className='artist-pic hidden'/>
      <div className='artist-bio'>
        <h3>{artist.name}</h3>
        <p>{artist.bio}</p>
        <div className='link-icons'>
          <i className="fa-brands fa-spotify artists-icons"></i>
          <i className="fa-brands fa-bandcamp artists-icons"></i>
          <i className="fa-brands fa-soundcloud artists-icons"></i>
          <i className="fa-brands fa-instagram artists-icons"></i>
        </div>
      </div>
    </div>
  );
}

export default ArtistsDetail;
