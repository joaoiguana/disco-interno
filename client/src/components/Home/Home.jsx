import React from 'react';
import axios from 'axios';

function Home() {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  return (
    <div>
      <h1>Disco Interno</h1>
    </div>
  )
}

export default Home;
