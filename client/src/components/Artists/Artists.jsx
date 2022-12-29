import React from 'react';
import axios from 'axios';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  useEffect(() => {
    api.get('/artists')
      .then(res => setArtists(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {artists.map(artist => (
        <div key={artist.id}>{artist.name}</div>
      ))}
    </div>
  );
}

export default Artists;
