import React, { Component } from 'react';

export default class Customers extends Component {
  render() {
    return (
      <section id="customers" class="customers-section bg-gray">
        <div class="container">
          <div class="col-md-12">
            <div class="row align-items-center">
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" title="React" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/react-native.png" title="React Native" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/rails.png" title="Rails" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/ruby.jpg" title="Ruby" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/node.jpg" title="NodeJS" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div>
              {/* <div class="col-lg-2 col-md-4 col-sm-6">
                <div class="customer"><img src="img/customers/logo-6.svg" title="brand logo" data-placement="bottom"
                  data-toggle="tooltip" alt="" class="img-fluid d-block mx-auto" /></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
