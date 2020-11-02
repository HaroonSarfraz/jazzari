import React, { Component } from 'react';

export default class Intro extends Component {
  render() {

    return (
      <section id="intro" style={{ "background": "url(img/home.jpg) center center no-repeat", "backgroundSize": "cover" }} class="intro-section pb-2" >
        <div class="container text-center">
          <div data-animate="fadeInDown" class="logo"><img src="img/logo-big.jpeg" alt="logo" width="130" /></div>
          <h1 data-animate="fadeInDown" class="text-shadow mb-5">Complex Problems, Simple Solutions</h1>
          {/* <p data-animate="slideInUp" class="h3 text-shadow text-400">I grind HTML and CSS and then weld them with PHP into beautiful and efficient websites.</p> */}
        </div>
      </section>
    );
  }
}
