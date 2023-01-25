import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Artists.css';

const API_URL = 'http://localhost:3000/artists';

const getAPIData = async () => {
  return axios.get(API_URL).then((response) => response.data)
}

const Artists = (props) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setArtists(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div className='artist-outer-container'>
      <div className='artists-container'>
        <h2 className='artists-h2'>Os nossos artistas:</h2>
        {artists.map((artist) => {
          return (
                <div key={artist.id} className='artists-show'>
                  <Link to={`/artists/${artist.id}`} className='artist-name'>
                    <div className="card-artists">
                      <h2 className='card-artist-name'>{artist.name}</h2>
                      <img src={artist.cover_url} alt="artist-cover" className='artist-cover' />
                    </div>
                  </Link>
                </div>
          );
        })}
      </div>
    </div>
  );
}

export default Artists;
