import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="page-title">
        <h2>Portfolio</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="portfolio-content">
              <ul className="portfolio-filters">
                <li className="active">
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_uidesign"
                  >
                    Ui Design
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_webdesign"
                  >
                    Web design
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_logodesign"
                  >
                    Logo Design
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_graphicsdesign"
                  >
                    Graphics Design
                  </a>
                </li>
                <li>
                  <a
                    className="filter btn btn-sm btn-link"
                    data-group="category_youtube-videos"
                  >
                    Video
                  </a>
                </li>
              </ul>

              <div className="portfolio-grid three-columns">
                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign", "category_logodesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/1.jpg"
                      alt="Media Project 2"
                      title="PYOS - Meat Delivery App"
                    />
                    <a
                      href="https://www.behance.net/gallery/104063607/PYOS-Meat-Delivery-App"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">PYOS - Meat Delivery App</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign", "category_webdesign", "category_logodesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/2.jpg"
                      alt="Media Project 2"
                      title="Trustorigin - Ui/Ux Design"
                    />
                    <a
                      href="https://www.behance.net/gallery/103900665/Trustorigin-UiUx-Design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Trustorigin - Ui/Ux Design</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign", "category_webdesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/3.jpg"
                      alt="Media Project 2"
                      title="Fusion website Ui/Ux design"
                    />
                    <a
                      href="https://www.behance.net/gallery/78329435/Fusion-website-ui-ux-design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Fusion website Ui/Ux design</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/4.jpg"
                      alt="Media Project 2"
                      title="Car booking app UI Design"
                    />
                    <a
                      href="https://www.behance.net/gallery/87175681/Car-booking-app-UI-Design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Car booking app UI Design</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/5.jpg"
                      alt="Media Project 2"
                      title="UI Design For Offers App"
                    />
                    <a
                      href="https://www.behance.net/gallery/75673881/UI-Design-For-Offers-App"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">UI Design For Offers App</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign", "category_webdesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/6.jpg"
                      alt="Media Project 2"
                      title="Appster Web design"
                    />
                    <a
                      href="https://www.behance.net/gallery/77647217/UiUx-Web-design-for-Appster"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Appster Web design</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_webdesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/7.jpg"
                      alt="Media Project 2"
                      title="Landing Page Design"
                    />
                    <a
                      href="https://www.behance.net/gallery/84654231/Landing-Page-Design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Landing Page Design</h4>
                  <span className="category">Web Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/8.jpg"
                      alt="Media Project 2"
                      title="UI Design for Shopin Mobile App"
                    />
                    <a
                      href="https://www.behance.net/gallery/54816027/UI-Design-for-Shopin-Mobile-App"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">UI Design for Shopin App</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_uidesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/9.jpg"
                      alt="Media Project 2"
                      title="UI design for Zone App"
                    />
                    <a
                      href="https://www.behance.net/gallery/56391037/UI-design-for-Entertainment-App"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Ui design for Zone App</h4>
                  <span className="category">Ui Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_graphicsdesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/10.jpg"
                      alt="Media Project 2"
                      title="Poster Design"
                    />
                    <a
                      href="https://www.behance.net/gallery/79604091/Poster-Design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Poster Design</h4>
                  <span className="category">Graphics Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_graphicsdesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/11.jpg"
                      alt="Media Project 2"
                      title="Break the rules-Typography"
                    />
                    <a
                      href="https://www.behance.net/gallery/57337863/Break-the-rules-typography"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Break the rules-Typography</h4>
                  <span className="category">Graphics Design</span>
                </figure>

                <figure
                  className="item standard"
                  data-groups='["category_all", "category_logodesign"]'
                >
                  <div className="portfolio-item-img">
                    <img
                      src="img/portfolio/12.jpg"
                      alt="Media Project 2"
                      title="Logo Design"
                    />
                    <a
                      href="https://www.behance.net/gallery/80848675/Logo-Design"
                      target="_blank"
                      className=""
                    ></a>
                  </div>

                  <i className="far fa-file-alt"></i>
                  <h4 className="name">Logo Design</h4>
                  <span className="category">Logo Design</span>
                </figure>
              </div>
              <button
                type="button"
                className="button btn-send"
                style={{ marginTop: " 20px" }}
              >
                <a
                  href="https://www.behance.net/pradeeparu4ad4"
                  target="_blank"
                  //   onMouseOver="this.style.color='#fff'"
                  //   onMouseOut="this.style.color='#0099cc'"
                  style={{
                    padding: "10px 0 10px 0",
                  }}
                >
                  More works
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
