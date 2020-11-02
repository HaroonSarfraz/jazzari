import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact" data-animate="bounceIn" class="contact-section contact">
        <div class="container">
          <header class="text-center">
            <h2 class="title">Contact me</h2>
          </header>
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <form id="contact-form" method="post" action="">
                <div class="messages"></div>
                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <input type="text" name="name" placeholder="Your firstname *" required="required"
                        class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" name="surname" placeholder="Your lastname *" required="required"
                        class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" name="email" placeholder="Your email *" required="required" class="form-control" />
                    </div>
                    <div class="col-md-6">
                      <input type="text" name="phone" placeholder="Your phone" class="form-control" />
                    </div>
                    <div class="col-md-12">
                      <textarea name="message" placeholder="Message for me *" rows="4" required="required"
                        class="form-control"></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                      <button type="submit" class="btn btn-outline-primary">Send message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}