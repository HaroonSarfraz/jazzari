import React, { Component } from 'react';

export default () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <header className="text-center">
          <h2 data-animate="fadeInDown" className="title">About Us</h2>
        </header>
        <div className="row">
          <div data-animate="fadeInUp" className="col-lg-6">
            <p>
              <strong>We’re consultants, software developers, digital marketers and DevOps engineers.</strong>
              <br/><br/>We have a collective experience of over a decade in software industry, producing new solutions, enhancing and improving existing solutions. We emphasize on smart, effective and long-lasting solutions for our satisfied clients worldwide. Here, at Jazzari, customer satisfaction and engagement come first.
            </p>
          </div>
          <div data-animate="fadeInUp" className="col-lg-6">
            <div className="skill-item">
              <div className="progress-title">Web Application Development</div>
              <div className="progress">
                <div role="progressbar" style={{ width: "90%" }} aria-valuenow="0" aria-valuemin="60" aria-valuemax="100"
                  className="progress-bar progress-bar-skill1"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Mobile Application Development</div>
              <div className="progress">
                <div role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="60" aria-valuemax="100"
                  className="progress-bar progress-bar-skill2"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Cloud Computing</div>
              <div className="progress">
                <div role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                  className="progress-bar progress-bar-skill3"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Digital Marketing</div>
              <div className="progress">
                <div role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                  className="progress-bar progress-bar-skill4"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="progress-title">Consultancy</div>
              <div className="progress">
                <div role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                  className="progress-bar progress-bar-skill5"></div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5"><img src="img/about.jpg"
            alt="This is a - IT worker" className="image rounded-circle img-fluid" /></div>
        </div>
      </div>
    </section>
  );
}
