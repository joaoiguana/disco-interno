import React from 'react';
import BackButton from '../BackButton/BackButton';
import HomeFooter from '../Home/HomeFooter';
import './About.css';

const About = () => {
  return (
    <div className='about-page'>
      <div className="about-container">
        <div className='about-text'>
          <h2 className='margin-reset'>A Disco Interno é uma promessa de jazz.</h2>
          <p>
            Somos uma editora discográfica independente sediada em Lisboa, Portugal.
            <br />
            Apaixonados por todas as estéticas <em>lounge</em>, do <em>modal</em> ao <em>acid jazz</em>, passando por <em>bossas</em> de elevador ou universos
            de latitudes <em>house</em>, fazemos nossa a permissa de apoiar e editar novos criativos portugueses que se revejam
            nesta promessa.
          </p>
          <p>Se sentires que esta label pode ser tua, envia-nos a tua música para: <strong>discointernolx@gmail.com</strong></p>
          <BackButton />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default About;
