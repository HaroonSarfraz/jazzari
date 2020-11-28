import React from 'react';
import './style.css';

export default () => {
  return (
    <div id="intro">
      <video autoPlay muted loop className="background-video" poster="animations/blue-plexus.jpg">
        <source src="animations/blue-plexus.mov" type="video/mp4" />
      </video>

      <div className="container text-center foreground" >
        <div data-animate="fadeInDown" className="logo">
          <img className="logo-image" src="img/logo/full-logo.png" alt="logo" />
        </div>
        <h1 data-animate="fadeInDown" className="text-shadow mb-5">Complex Problems, Simple Solutions</h1>
        {/* <p data-animate="slideInUp" className="h3 text-shadow text-400">I grind HTML and CSS and then weld them with PHP into beautiful and efficient websites.</p> */}
      </div>
    </div>
  );
}
