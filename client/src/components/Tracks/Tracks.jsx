import React from 'react';

const Tracks = () => {
  const [tracks, setTracks] = useState([]);
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  useEffect(() => {
    api.get('/tracks')
      .then(res => setTracks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div>
        {tracks.map(track => (
          <div key={track.id}>{track.name}</div>
        ))}
      </div>
    </div>
  )
}

export default Tracks;
