import React, { Component } from 'react';
import "./style.css";

export default class ContactUS extends Component {
  state = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    success: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    const { name, surname, email, phone, message } = this.state;

    e.preventDefault();

    fetch(this.props.action, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        message: message
      })
    });

    this.setState({
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
      success: true
    });
  }

  render() {
    const { name, surname, email, phone, message, success } = this.state;

    return (
      <section id="contact" data-animate="bounceIn" className="contact-section contact">
        <div className="container">
          <header className="text-center">
            <h2 className="title">Contact us</h2>
          </header>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form id="contact-form" method={this.props.method} action={this.props.action} onSubmit={this.handleSubmit}>
                {success &&
                  <div className="messages">We have received your message and you will be contacted soon!</div>
                }
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your firstname *"
                        required="required"
                        className="form-control"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="surname"
                        placeholder="Your lastname *"
                        required="required"
                        className="form-control"
                        value={surname}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email *"
                        required="required"
                        className="form-control"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your phone"
                        className="form-control"
                        value={phone}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        placeholder="Message for me *"
                        rows="4"
                        required="required"
                        className="form-control"
                        value={message}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-outline-primary">Send message</button>
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

ContactUS.defaultProps = {
  action: 'https://formspree.io/f/mleopabz',
  method: 'POST'
};

