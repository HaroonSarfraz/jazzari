import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/eduleaf.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Eduleaf</h5>
                          <p>Ruby on Rails</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt="" src="images/portfolio/hrms.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HRMS</h5>
                          <p>Ruby on Rails, ReactJs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt="" src="images/portfolio/acloud.jpeg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Acloud - GLM</h5>
                          <p>Ruby on Rails, ReactJs</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-05" title>
                      <img alt="" src="images/portfolio/trm.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>TRM</h5>
                          <p>Ruby on Rails</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/eduleaf.png" alt="" />
              <div className="description-box">
                <h4>Eduleaf</h4>
                <p>Eduleaf is an automated online tool that allows the grading of ordinary paper-based exams containing any type of questions. It can handle math questions, chemical diagrams, essay questions, as well as multiple-choice.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
              </div>
              <div className="link-box">
                <a href="http://eduleaf.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/hrms.png" alt="" />
              <div className="description-box">
                <h4>HRMS</h4>
                <p>It's a Human resource management system. It manages resource leaves, extra expenses, queries, etc.</p>
                <span className="categories"><i className="fa fa-tag" />Branding</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/acloud.jpg" alt="" />
              <div className="description-box">
                <h4>Acloud - GLM</h4>
                <p>The Global License Manager (GLM) is the master licensing and billing system for A10 vThunder. GLM collects information from the distributed LLPs and issues licenses for the vThunder instances upon request.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails, ReactJs</span>
              </div>
              <div className="link-box">
                <a href="https://glm.a10networks.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-04 End */}
            <div id="modal-05" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/trm.png" alt="" />
              <div className="description-box">
                <h4>TRM</h4>
                <p>A platform for universities and students where Universities can offer courses and Students can enroll themselves into multiple courses.</p>
                <span className="categories"><i className="fa fa-tag" />Ruby on Rails</span>
              </div>
              <div className="link-box">
                <a href="https://www.via-trm.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-05 End */}
          </div> {/* row End */}
        </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}