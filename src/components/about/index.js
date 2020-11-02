import React, { Component } from 'react';

export default class About extends Component {
  render() {

    return (
      <section id="about" class="about-section">
        <div class="container">
          <header class="text-center">
            <h2 data-animate="fadeInDown" class="title">About Us</h2>
          </header>
          <div class="row">
            <div data-animate="fadeInUp" class="col-lg-6">
              <p>
                We at <strong>Jazzari</strong> provide the best possible IT solutions with <strong>Boosted Performance</strong> and <strong>High Quality</strong> to our valuable clients. We deal in Website, Mobile and Desktop Development. We also maintain pre-developed solutions too.
                <br/><br/>Our main concern is <strong>Customer Satisfaction</strong>. We keep your business up to the latest market trends by providing elegant IT Solutions for your Business Problems.
              </p>
            </div>
            <div data-animate="fadeInUp" class="col-lg-6">
              <div class="skill-item">
                <div class="progress-title">Web Application Development</div>
                <div class="progress">
                  <div role="progressbar" style={{ width: "90%" }} aria-valuenow="0" aria-valuemin="60" aria-valuemax="100"
                    class="progress-bar progress-bar-skill1"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Mobile Application Development</div>
                <div class="progress">
                  <div role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="60" aria-valuemax="100"
                    class="progress-bar progress-bar-skill2"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Cloud Computing</div>
                <div class="progress">
                  <div role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                    class="progress-bar progress-bar-skill3"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Digital Marketing</div>
                <div class="progress">
                  <div role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                    class="progress-bar progress-bar-skill4"></div>
                </div>
              </div>
              <div class="skill-item">
                <div class="progress-title">Consultancy</div>
                <div class="progress">
                  <div role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                    class="progress-bar progress-bar-skill5"></div>
                </div>
              </div>
            </div>
            <div data-animate="fadeInUp" class="col-sm-6 mx-auto mt-5"><img src="img/about.jpg"
              alt="This is me - IT worker" class="image rounded-circle img-fluid" /></div>
          </div>
        </div>
      </section>
    );
  }
}