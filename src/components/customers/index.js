import React, { Component } from 'react';

export default class Customers extends Component {
  render() {
    return (
      <section id="customers" class="customers-section bg-gray">
        <div class="container">
          <div class="col-md-12">
            <div class="row align-items-center">
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-1.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-2.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-3.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-4.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-5.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-6.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}