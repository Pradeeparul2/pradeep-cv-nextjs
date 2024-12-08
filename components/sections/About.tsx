import React from "react";

const About = () => {
  return (
    <>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <p>
              An innovative, passionate and creative professional who has a
              wealth of knowledge and experience around design, user interface,
              user experience and development across the web, mobile, service,
              application, e-commerce sectors.Strengths include a fusion of
              design, front-end development and leadership skills and also an
              ability to solve complex problems using both logic and creativity.
            </p>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Age</span>
                  <span className="value">27</span>
                </li>

                <li>
                  <span className="title">Residence</span>
                  <span className="value">India</span>
                </li>

                <li>
                  <span className="title">Address</span>
                  <span className="value">Kotturpuram,Chennai</span>
                </li>

                <li>
                  <span className="title">e-mail</span>
                  <span className="value">pradeeparul2@gmail.com</span>
                </li>

                <li>
                  <span className="title">Phone</span>
                  <span className="value">+91 88708 78315</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                What <span>I Do</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Graphics design</h4>
                    <p>
                      Created new design themes for marketing and collateral
                      materials. Collaborated with creative team to design and
                      produce computer-generated artwork for marketing and
                      promotional materials.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-rocket"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Prototyping</h4>
                    <p>
                      Work independently and collaboratively with team members
                      to develop UI/UXworkflow, design and Prototype using
                      Software such as Figma, Invision Studio, Adobe XD and
                      Sketch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="col-inner">
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Web design</h4>
                    <p>
                      Designing engaging and responsive landing pages.
                      Optimising sites for maximum speed and scalability.
                      Employing industry and design best practice through
                      website build process. Conducting website testing.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-code"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Front-end development</h4>
                    <p>
                      Bringing mock-ups to life using HTML, CSS, JavaScript.
                      Collaborating closely with the team to support projects
                      during all phases of delivery. Building websites and apps
                      that are responsive and usable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- <div className="white-space-30"></div> --> */}

        {/* <!-- Testimonials -->
                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Testimonials</h3>
                      </div>
                    </div>
                  </div> -->

                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="testimonials owl-carousel">
                        <!-- Testimonial 1 -->
                        <!-- <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-1.jpg" alt="Pradeep Arul">
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Julia Hickman</h4>
                            <h5 className="company">Omni Source</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div> -->
                        <!-- End of Testimonial 1 -->

                        <!-- Testimonial 2 -->
                        <!-- <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-2.jpg" alt="Pradeep Arul">
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Robert Watkins</h4>
                            <h5 className="company">Endicott Shoes</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div> -->
                        <!-- End of Testimonial 2 -->

                        <!-- Testimonial 3 -->
                        <!-- <div className="testimonial">
                          <div className="img">
                            <img src="img/testimonials/testimonial-3.jpg" alt="Pradeep Arul">
                          </div>
                          <div className="text">
                            <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                          </div>

                          <div className="author-info">
                            <h4 className="author">Kristin Carroll</h4>
                            <h5 className="company">Helping Hand</h5>
                            <div className="icon">
                              <i className="fas fa-quote-right"></i>
                            </div>
                          </div>
                        </div> -->
                        <!-- End of Testimonial 3 -->
                      <!-- </div>
                    </div>
                  </div>  -->
                  <!-- End of Testimonials -->

                  <!-- <div className="white-space-50"></div> -->

                  <!-- Clients -->
                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="block-title">
                        <h3>Cilents</h3>
                      </div>
                    </div>
                  </div> -->

                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="clients owl-carousel">
                        
                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-1.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-2.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-3.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-4.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-5.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-6.png" alt="Logo">
                          </a>
                        </div>

                        <div className="client-block">
                          <a href="#" target="_blank" title="Logo">
                            <img src="img/clients/client-7.png" alt="Logo">
                          </a>
                        </div>
  
                      </div>
                    </div>
                  </div> -->
                  <!-- End of Clients -->

                  <!-- <div className="white-space-50"></div> -->

                  <!-- Pricing -->
                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Pricing</h3>
                      </div>
                    </div>
                  </div> -->

                  <!-- <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                      <div className="fw-pricing clearfix row">
                        
                        <div className="fw-package-wrap col-md-6 ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Silver</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$64</span>
                              <small>per month</small>
                            </div>
                            
                            <div className="fw-button-row">
                              <a href="#" target="_self" className="btn btn-secondary">Free Trial</a>
                            </div>

                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                          </div>
                        </div>
     
                        <div className="fw-package-wrap col-md-6 highlight-col ">
                          <div className="fw-package">
                            <div className="fw-heading-row">
                              <span>Gold</span>
                            </div>
                            
                            <div className="fw-pricing-row">
                              <span>$128</span>
                              <small>per month</small>
                            </div>

                            <div className="fw-button-row">
                              <a href="#" target="_self" className="btn btn-primary">Free Trial</a>
                            </div>
                            
                            <div className="fw-default-row">Lorem ipsum dolor</div>
                            <div className="fw-default-row">Pellentesque scelerisque</div>
                            <div className="fw-default-row">Morbi eu sagittis</div>
                            <div className="fw-default-row">Donec non diam</div>
                            <div className="fw-default-row"></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div> -->
                  <!-- End of Pricing -->

                  <!-- <div className="white-space-50"></div> -->

                  <!-- Fun Facts -->
                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-12">

                      <div className="block-title">
                        <h3>Fun <span>Facts</span></h3>
                      </div>
                    </div>
                  </div> -->

                  <!-- <div className="row">
                    <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-heart"></i>
                        <h4>Happy Clients</h4>
                        <span className="fun-fact-block-value">578</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-clock"></i>
                        <h4>Working Hours</h4>
                        <span className="fun-fact-block-value">4,780</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>

                    <div className="col-xs-12 col-sm-4 ">
                      <div className="fun-fact gray-default">
                        <i className="lnr lnr-star"></i>
                        <h4>Awards Won</h4>
                        <span className="fun-fact-block-value">15</span>
                        <span className="fun-fact-block-text"></span>
                      </div>
                    </div>
                  </div> -->
                  <!-- End of Fun Facts -->*/}
      </div>
    </>
  );
};

export default About;
