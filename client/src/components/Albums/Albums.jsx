import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import './Albums.css';

const API_URL = 'http://localhost:3000/albums';

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setAlbums(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div >
      {albums.map((album) => {
        return (
              <div key={album.id} className='albums-show' data-aos="fade-up-right">
                <Link to={`/albums/${album.id}`} className='album-title'>
                  <div className="card-albums">
                    <div className='hole'></div>
                    <h2>{album.title} ({album.year})</h2>
                    <img src={album.photo_url} alt="cover-art" className='cover-label' />
                  </div>
                </Link>
              </div>
        );
      })}
    </div>
  );
}

export default Albums;
