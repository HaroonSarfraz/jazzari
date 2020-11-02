import React, { Component } from 'react';

export default class Statiscs extends Component {
  render() {
    return (
      <section id="statistics" data-dir="up" style={{ background: "url(&quot;img/parallax.jpg&quot;)" }} class="statistics-section text-white parallax parallax">
        <div class="container">
          <div class="row showcase text-center">
            <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
              <div class="item">
                <div class="icon"><i class="fa fa-align-justify"></i></div>
                <h5 class="text-400 mt-4 text-uppercase"><span class="counter">120</span><br />Websites</h5>
              </div>
            </div>
            <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
              <div class="item">
                <div class="icon"><i class="fa fa-users"></i></div>
                <h5 class="text-400 mt-4 text-uppercase"><span class="counter">50</span><br />Satisfied Clients</h5>
              </div>
            </div>
            <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
              <div class="item">
                <div class="icon"><i class="fa fa-copy"></i></div>
                <h5 class="text-400 mt-4 text-uppercase"><span class="counter">320</span><br />Projects</h5>
              </div>
            </div>
            <div data-animate="fadeInUp" class="col-lg-3 col-md-6">
              <div class="item">
                <div class="icon"><i class="fa fa-font"></i></div>
                <h5 class="text-400 mt-4 text-uppercase"><span class="counter">333</span><br />Magazines and Brochures</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="dark-mask"></div>
      </section>
    );
  }
}