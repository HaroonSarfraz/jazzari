import React, { Component } from 'react';

export default () => {
  return (
    <section id="services" className="bg-gradient services-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">Services</h2>
        </header>
        <div className="row services text-center">
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-search"></i></div>
            <h3 className="heading mb-3 text-400">Consultancy</h3>
            <p className="text-left description">We provide evolution, advice and expertise to organization to help them in improving their business. We provide customized advice according to business needs of our clients.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-html5"></i></div>
            <h3 className="heading mb-3 text-400">Web Development</h3>
            <p className="text-left description">Modern <strong>web design</strong> is more involved than creating an attractive website. Consideration of user experience, search engine optimization, ease of use, and technical details are just a few elements that are involved. And we provide all of that.</p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-4">
            <div className="icon"><i className="fa fa-tachometer"></i></div>
            <h3 className="heading mb-3 text-400">Mobile App Development</h3>
            <p className="text-left description"><strong>We provide Cross-platform mobile app development services</strong> to build cost-effective solutions that work on multiple platforms and help the brand stand out in the market.</p>
          </div>
        </div>
        <hr data-animate="fadeInUp" />
        <div data-animate="fadeInUp" className="text-center">
          <p className="lead">Would you like to know more or just discuss something?</p>
          <p><a href="#contact" className="btn btn-outline-light link-scroll">Contact us</a></p>
        </div>
      </div>
    </section>
  );
}
