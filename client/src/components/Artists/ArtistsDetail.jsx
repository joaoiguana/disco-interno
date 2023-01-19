import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import "aos/dist/aos.css";

const ArtistsDetail = () => {
  const [artist, setArtist] = useState([]);
  const { id } = useParams();


  const getAPIData = async () => {
    return await axios.get(`http://localhost:3000/artists/${id}`).then((response) => response.data)
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
      <img src={artist.photo_url} alt="artist-pic"  className='artist-pic' data-aos="fade-up-right"/>
      <h1 className='hiddenY'>Y</h1>
      <img src='https://res.cloudinary.com/doa9kh79y/image/upload/v1672853287/disco%20interno/design-tools/rectangle_fit_cefuua.jpg' alt="artist-pic"  className='artist-pic hidden'/>
      <div className='artist-bio' data-aos="fade-left">
        <h3>{artist.name}</h3>
        <p>{artist.bio}</p>
        <div className='link-container'>
          <div className='link-icons'>
            <a href={artist.spotify_url} target='_blank' alt='Spotify'><i className="fa-brands fa-spotify artists-icons"></i></a>
            <a href={artist.bandcamp_url} target='_blank'><i className="fa-brands fa-bandcamp artists-icons"></i></a>
            <a href={artist.youtube_url} target='_blank'><i class="fa-brands fa-youtube artists-icons"></i></a>
            <a href={artist.soundcloud_url} target='_blank'><i className="fa-brands fa-soundcloud artists-icons"></i></a>
            <a href={artist.instagram_url} target='_blank'><i className="fa-brands fa-instagram artists-icons"></i></a>
          </div>
          <div>
            <a href={artist.press} target='_blank'><p><strong>Press</strong></p></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistsDetail;
