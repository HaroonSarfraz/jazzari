import React, { Component } from 'react';

export default () => {
  return (
    <section id="references">
      <div class="container">
        <div class="col-sm-12">
          <div class="mb-5 text-center">
            <h2 data-animate="fadeInUp" class="title">Our work</h2>
            <p data-animate="fadeInUp" class="lead">I have worked on dozens of projects so I have picked only the latest
            for you.</p>
          </div>
          <ul id="filter" data-animate="fadeInUp">
            <li class="active"><a href="#" data-filter="all">All</a></li>
            <li><a href="#" data-filter="webdesign">Web Design</a></li>
            <li><a href="#" data-filter="tools">Tools</a></li>
            <li><a href="#" data-filter="marketing">Marketing</a></li>
            <li><a href="#" data-filter="other">Other</a></li>
          </ul>
          <div id="detail">
            <div class="row">
              <div class="col-lg-10 mx-auto"><span class="close">×</span>
                <div id="detail-slider" class="owl-carousel owl-theme"></div>
                <div class="text-center">
                  <h1 id="detail-title" class="title"></h1>
                </div>
                <div id="detail-content"></div>
              </div>
            </div>
          </div>
          <div id="references-masonry" data-animate="fadeInUp">
            <div class="row">
              {/* Project 1 A10 A-cloud */}
              <div data-category="webdesign" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/a10networks.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">ACloud</h3>
                      <p>Network security licenses sale and management tool</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/a10networks.png"
                    class="sr-only reference-description">
                    <p>The Global License Manager (GLM) is the master licensing and billing system for A10 vThunder.
                      GLM collects information from the distributed LLPs and issues licenses for the vThunder
                      instances upon request.
                    </p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>
              {/* Project 2 PatientIQ */}
              <div data-category="tools" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/patientiq.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Medical Platform</h3>
                      <p>For healthcare providers, researchers, and others to collaborate on the mission to improve patient outcomes.</p>
                    </div>
                  </div>
                </a>
                  <div
                    data-images="img/references/patientiq/PatientIq1.png, img/references/patientiq/PatientIq2.png, img/references/patientiq/PatientIq3.png, img/references/patientiq/PatientIq4.png \
                    img/references/patientiq/PatientIq5.png, img/references/patientiq/PatientIq6.png, img/references/patientiq/PatientIq7.png"
                    class="sr-only reference-description">
                    <p>A multi-tenant platform for clinics and health care centers to centralize their data about patients. There are many advance presentations of patients data</p>
                    <p>It's a cloud-based platform couples industry leading patient engagement technology with research quality advanced analytics. We do the heavy lifting so you can focus on what matters - improving patient outcomes.</p>
                    <p>This platform is designed to automate clinical workflows, increase patient engagement and systematically measure outcomes on every patient that walks through the door.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>
              {/* Project 3 Eduleaf */}
              <div data-category="marketing" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/eduleaf.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Eduleaf</h3>
                      <p>Automated online tool that allows the grading of ordinary paper-based exams</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/eduleaf.png"
                    class="sr-only reference-description">
                    <p>Eduleaf is an automated online tool that allows the grading of ordinary paper-based exams containing any type of questions. It can handle math questions, chemical diagrams, essay questions, as well as multiple-choice.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>
              {/* Project 4 TRM */}
              <div data-category="marketing" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/trm.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">TRM</h3>
                      <p>A student enrolment system for universities</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/trm.png"
                    class="sr-only reference-description">
                    <p>A platform for universities and students where Universities can offer courses and Students can enroll themselves into multiple courses.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>
              {/* FlowDash */}
              <div data-category="tools" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/references/flowdash/fd2.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">PMT</h3>
                      <p>Build custom tools, or working with software too generic for your unique business processes</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/references/flowdash/fd2.png, img/references/flowdash/fd3.png, img/references/flowdash/fd4.png, img/references/flowdash/fd5.png"
                    class="sr-only reference-description">
                    <p>Spend less time building custom tools, or working with software too generic for your unique business processes.
                      Empower your operations teams to get better workflows, faster, that drive your business forward.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>
              {/* Shokat Khanam */}
              <div data-category="other" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/references/shaukatKhanam/sk1.png" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Storage Unit</h3>
                      <p>A platform to manage storage units for different goods</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/references/shaukatKhanam/sk1.png, img/references/shaukatKhanam/sk2.png, img/references/shaukatKhanam/sk3.png, img/references/shaukatKhanam/sk4.png"
                    class="sr-only reference-description">
                    <p>
                      An app on which users can manage their storage units and the stock calculations in a better way.
                      Can define different roles of users to have a larger management group to handle different tasks.
                    </p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div>

              {/* Project 6 A10 A-cloud */}
              {/* <div data-category="other" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/portfolio-6.jpg" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Project name 6</h3>
                      <p>Short project description goes here...</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg"
                    class="sr-only reference-description">
                    <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why
                      cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye
                      literature. Day behaviour explained law remainder. Produce can cousins account you pasture.
                    Peculiar delicate an pleasant provided do perceive.</p>
                    <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection
                      happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put
                      ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen.
                    Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div> */}
              {/* Project 7 A10 A-cloud */}
              {/* <div data-category="seo" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/portfolio-7.jpg" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Project name</h3>
                      <p>Short project description goes here...</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg"
                    class="sr-only reference-description">
                    <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why
                      cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye
                      literature. Day behaviour explained law remainder. Produce can cousins account you pasture.
                    Peculiar delicate an pleasant provided do perceive.</p>
                    <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection
                      happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put
                      ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen.
                    Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div> */}
              {/* Project 8 A10 A-cloud */}
              {/* <div data-category="webdesign" class="reference-item col-lg-3 col-md-6">
                <div class="reference"><a href="#"><img src="img/portfolio-8.jpg" alt="" class="img-fluid" />
                  <div class="overlay">
                    <div class="inner">
                      <h3 class="h4 reference-title">Project name</h3>
                      <p>Short project description goes here...</p>
                    </div>
                  </div>
                </a>
                  <div data-images="img/main-slider1.jpg,img/main-slider2.jpg,img/main-slider3.jpg"
                    class="sr-only reference-description">
                    <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why
                      cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye
                      literature. Day behaviour explained law remainder. Produce can cousins account you pasture.
                    Peculiar delicate an pleasant provided do perceive.</p>
                    <p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection
                      happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put
                      ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen.
                    Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought.</p>
                    <p class="buttons text-center"><a href="javascript:void(0);" class="btn btn-outline-primary"><i
                      class="fa fa-globe"></i> Visit website</a><a href="javascript:void(0);"
                        class="btn btn-outline-primary"><i class="fa fa-download"></i> Download case study</a></p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
