import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

class ArtistsList extends React.Component {
  state = {
    artists: []
  }

  componentDidMount() {
    axios.get('/artists')
      .then(response => {
        const artists = response.data.artists;
        this.setState({ artists });
      })
      .catch(error => {
        this.setState({ error: 'An error occurred while fetching the artists' });
        console.error(error)
      })
  }

  render() {
    return (
      <ul>
        {this.state.artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
