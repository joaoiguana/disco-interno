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
    <div data-aos="fade-up-right">
      {artists.map((artist) => {
        return (
              <div key={artist.id} className='artists-show'>
                <Link to={`/artists/${artist.id}`} className='artist-name'>
                  <div className="card-artists">
                    <h2 className='card-artist-name'>{artist.name}</h2>
                    <img src={artist.cover_url} alt="artist-cover" className='artist-cover' />
                    <img src="https://res.cloudinary.com/doa9kh79y/image/upload/v1673878257/disco%20interno/graphics-diagrams/svg/Asset_24_-_Fox_Rockett_Studio_ayjy2q.svg" alt="" />
                  </div>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Artists;
