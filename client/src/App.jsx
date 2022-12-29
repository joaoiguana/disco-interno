import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Artists from './components/Artists/Artists';
import Albums from './components/Albums/Albums';
import Tracks from './components/Tracks/Tracks';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/tracks">Tracks</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />
        <Route path="/tracks" component={Tracks} />
      </div>
    </Router>
  );
}

export default App
