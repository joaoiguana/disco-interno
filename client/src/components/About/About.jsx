import React from 'react';
import BackButton from '../BackButton/BackButton';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-container">
        <h2 className='margin-reset'>A Disco Interno é uma promessa de jazz.</h2>
        <p>
          Somos uma editora discográfica independente sediada em Lisboa, Portugal.
          <br />
          Apaixonados por todas as estéticas lounge, do modal ao acid jazz, passando por bossas de elevador ou universos
          de latitudes house, fazemos nossa a permissa de apoiar e editar novos criativos portugueses que se revejam
          nesta promessa.
        </p>
        <p>Se sentires que esta label pode ser tua, envia-nos a tua música para: <strong>discointernolx@gmail.com</strong></p>
        <BackButton />
      </div>
    </div>
  );
}

export default About;
