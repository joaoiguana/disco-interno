import React from 'react';

const Artists = (props) => {
  return (
    <div>
      <h3>This are the artists</h3>
      {props.artists.map((artist) => {
        return (
              <div key={artist.id}>
                <h2>{artist.name}</h2>
                <img src={artist.photos} alt="artist" />
              </div>
        );
      })}
    </div>
  );
}

export default Artists;
