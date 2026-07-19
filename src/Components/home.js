import React, { Component } from 'react';
import { setDocumentTitle, setFavicon } from '../helpers/helpers';

class Home extends Component {
  componentDidMount() {
    setDocumentTitle('The Official Webpage of Tobias Fox');
    setFavicon('/favicon.png');
  }

  render() {
    return (
      <div className="home-container">
        <header className="home-header">
          <h1 className="home-title">tobias fox</h1>
          <p className="home-subtitle">is ambi-natalist</p> <br />
          <a href="https://linktr.ee/ambinatalist">[ LINKS ]</a>
        </header>

        <div className="home-embedded-video-container">
          <iframe title="ConstructiveAmbiguity" className="home-embedded-video" src="https://www.youtube.com/embed/kRSIaqoip90" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <footer className="home-footer">
          <p>tobyfox.co.uk est. 2008.</p>
        </footer>

      </div>
    );
  }
}

export default Home;