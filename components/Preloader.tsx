import React from "react";

const Preloader = () => {
  return (
    <>
      <div
        className="lm-animated-bg"
        style={{ backgroundImage: "url(img/main_bg.png)" }}
      ></div>
      <div className="preloader">
        <div className="preloader-animation">
          <div className="preloader-spinner"></div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
