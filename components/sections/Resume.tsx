import React from "react";

const Resume = () => {
  return (
    <>
      <div className="page-title">
        <h2>Resume</h2>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>Education</h3>
            </div>
            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2015</h5>
                  <span className="item-company"></span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Bachelor of Engineering</h4>
                  <p>
                    Passed with 75%
                    <br />
                    St. Anne&aposs college of Engg, & Tech
                  </p>
                </div>
              </div>
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2011</h5>
                  <span className="item-company"></span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">HSC</h4>
                  <p>
                    Passed with 78%
                    <br />
                    Gov&apost higher Sec, School, Vadugapatti
                  </p>
                </div>
              </div>
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2011</h5>
                  <span className="item-company"></span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">SSLC</h4>
                  <p>
                    Passed with 85%
                    <br />
                    Gov&apost high School, Thamaraikulam{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="white-space-50"></div>
            <div className="block-title">
              <h3>Experience</h3>
            </div>
            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">Feb 2019 – Still</h5>
                  <span className="item-company"></span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Ui Ux Designer</h4>
                  <p>Crunchleads Solution Pvt Ltd</p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">Jan 2017 – Feb 2019</h5>
                  <span className="item-company"></span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Graphics Designer</h4>
                  <p>Crazy Hippos Advertising Private Limited</p>
                </div>
              </div>

              {/* <!-- <div className="timeline-item clearfix">
                <div className="left-part">
                    <h5 className="item-period">2011 - 2013</h5>
                    <span className="item-company">Google</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                    <h4 className="item-title">Junior Ui/Ux Designer</h4>
                    <p>Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.</p>
                </div>
                </div> --> */}
              {/* <div className="white-space-50"></div> */}
            </div>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                Design <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              <div className="skill clearfix">
                <h4>Web Design</h4>
                <div className="skill-value">95%</div>
              </div>
              <div className="skill-container skill-1">
                <div className="skill-percentage"></div>
              </div>

              <div className="skill clearfix">
                <h4>Graphic Design</h4>
                <div className="skill-value">98%</div>
              </div>
              <div className="skill-container skill-2">
                <div className="skill-percentage"></div>
              </div>

              <div className="skill clearfix">
                <h4>Logo Design</h4>
                <div className="skill-value">98%</div>
              </div>
              <div className="skill-container skill-3">
                <div className="skill-percentage"></div>
              </div>

              <div className="skill clearfix">
                <h4>Web development</h4>
                <div className="skill-value">80%</div>
              </div>
              <div className="skill-container skill-4">
                <div className="skill-percentage"></div>
              </div>
            </div>

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>
                Coding <span>Skills</span>
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              <div className="skill clearfix">
                <h4>JavaScript</h4>
                <div className="skill-value">95%</div>
              </div>
              <div className="skill-container skill-5">
                <div className="skill-percentage"></div>
              </div>

              {/* <!-- <div className="skill clearfix">
                          <h4>PHP</h4>
                          <div className="skill-value">85%</div>
                        </div>
                        <div className="skill-container skill-6">
                          <div className="skill-percentage"></div>
                        </div> --> */}

              <div className="skill clearfix">
                <h4>HTML/CSS</h4>
                <div className="skill-value">100%</div>
              </div>
              <div className="skill-container skill-7">
                <div className="skill-percentage"></div>
              </div>

              {/* <!-- <div className="skill clearfix">
                          <h4>Smarty/Twig</h4>
                          <div className="skill-value">75%</div>
                        </div>
                        <div className="skill-container skill-8">
                          <div className="skill-percentage"></div>
                        </div> --> */}

              {/* <!-- <div className="skill clearfix">
                          <h4>Perl</h4>
                          <div className="skill-value">90%</div>
                        </div>
                        <div className="skill-container skill-9">
                          <div className="skill-percentage"></div>
                        </div> -->
                        
                      <!-- </div> --> */}

              <div className="white-space-10"></div>

              <div className="block-title">
                <h3>Knowledges</h3>
              </div>

              <ul className="knowledges">
                <li>Ui/Ux Design</li>
                <li>Wordpress</li>
                <li>AWS Web Hosting</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>Prototyping</li>
                <li>Wireframe</li>
              </ul>
            </div>
            {/* <div className="white-space-50"></div> */}
          </div>
        </div>
        {/* <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>Certificates</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="certificate-item clearfix">
              <div className="certi-logo">
                <img src="img/clients/client-1.png" alt="logo" />
              </div>

              <div className="certi-content">
                <div className="certi-title">
                  <h4>Psyhology of Intertnation Design</h4>
                </div>
                <div className="certi-id">
                  <span>Membership ID: XXXX</span>
                </div>
                <div className="certi-date">
                  <span>19 April 2018</span>
                </div>
                <div className="certi-company">
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div className="certificate-item clearfix">
              <div className="certi-logo">
                <img src="img/clients/client-1.png" alt="logo" />
              </div>

              <div className="certi-content">
                <div className="certi-title">
                  <h4>Psyhology of Intertnation Design</h4>
                </div>
                <div className="certi-id">
                  <span>Membership ID: XXXX</span>
                </div>
                <div className="certi-date">
                  <span>19 April 2018</span>
                </div>
                <div className="certi-company">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Resume;
