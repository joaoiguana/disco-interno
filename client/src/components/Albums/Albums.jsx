import React from 'react';
import axios from 'axios';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  useEffect(() => {
    api.get('/albums')
      .then(res => setAlbums(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div>
        {albums.map(album => (
          <div key={album.id}>{album.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Albums;
