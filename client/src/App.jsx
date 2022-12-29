import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Artists from './components/Artists/Artists';

const API_URL = 'http://localhost:3000/artists';

const getAPIData = () => {
  return axios.get(API_URL).then((response) => response.data)
}

const App = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setArtists(items);
      }
    });
    return () => (mounted = false) ;
  }, []);

  return (
    <div className="App">
      <h1>Disco Interno</h1>
      <Artists artists={artists} />
    </div>
  )
}

export default App;
