import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer class="main-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center text-lg-left">
              <p class="social"><a href="#" class="external facebook wow fadeInUp"><i class="fa fa-facebook"></i></a><a
                href="#" data-wow-delay="0.2s" class="external instagram wow fadeInUp"><i
                  class="fa fa-instagram"></i></a><a href="#" data-wow-delay="0.4s"
                    class="external gplus wow fadeInUp"><i class="fa fa-google-plus"></i></a><a href="#"
                      data-wow-delay="0.6s" class="email wow fadeInUp"><i class="fa fa-envelope"></i></a></p>
            </div>
            <div class="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
              <p>© 2018 Your name goes here. All rights reserved.</p>
            </div>
            <div class="col-12 mt-4">
              <p class="template-bootstrapious">Template by <a
                href='https://bootstrapious.com/p/bootstrap-carousel'>Bootstrapious</a> & <a
                  href="https://fity.cz/ostrava">Fity</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}