import React from 'react';

export default () => {
  return (
    <section id="testimonials" class="testimonials-section bg-gray">
      <div class="container">
        <header class="text-center mb-2">
          <h2 data-animate="fadeInUp" class="title">Our customers said<br /><span>about us</span></h2>
          <p data-animate="fadeInUp" class="lead">We are always glad to hear that our customers leave satisfied. Some of
          them shared with you their insights on our cooperation.</p>
        </header>
        <ul data-animate="fadeInUp" class="owl-carousel owl-theme testimonials equalize-height">
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>Throughout our working relationship, they have demonstrated exceptional management and development skills.
                  Technical knowledge and efficiency was extra-ordinary.</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/hermonn.jpeg" />
                  <h5>Hermann</h5>
                  <p>Italy</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>Great job... Once more</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/kendogg.jpg" />
                  <h5>Kendogg</h5>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>It was efficient and helpful.</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/default.jpg" />
                  <h5>Troyacox</h5>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>Excellent. Anticipated my needs and delivered immediately.</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/default.jpg" />
                  <h5>Hiqent</h5>
                  <p>Canada</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>An excellent seller with excellent communication skills. I highly recommend others to buy from him.</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/fahad-saleem.jpg" />
                  <h5>Fahad Saleem</h5>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="testimonial full-height">
              <div class="text">
                <p>Good innovative team to enhance our project's protocol and isolate the challenges.</p>
              </div>
              <div class="bottom">
                <div class="icon"><i class="fa fa-quote-left"></i></div>
                <div class="name-picture"><img alt="" src="img/testimonials/biene-track.jpg" />
                  <h5>Bienetech</h5>
                  <p>Singapore</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
