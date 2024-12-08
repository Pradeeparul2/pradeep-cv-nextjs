import React from "react";
import Script from "next/script";

const ThirdPartyScripts = () => {
  return (
    <>
      <Script src="js/modernizr.custom.js" strategy="afterInteractive" />
      <Script src="js/jquery-2.1.3.min.js" strategy="afterInteractive" />
      {/* <Script src="js/animating.js" strategy="afterInteractive" /> */}
      <Script src="js/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
      <Script
        async
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />
      <Script src="js/perfect-scrollbar.min.js" strategy="afterInteractive" />
      <Script src="js/jquery.shuffle.min.js" strategy="afterInteractive" />
      <Script src="js/masonry.pkgd.min.js" strategy="afterInteractive" />
      <Script src="js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script
        src="js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      {/* <Script src="js/jquery.googlemap.js" strategy="afterInteractive" /> */}
      <Script src="js/validator.js" strategy="afterInteractive" />
      <Script src="js/main.js" strategy="afterInteractive" />
      {/* <Script
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o"
        strategy="afterInteractive"
      /> */}
    </>
  );
};

export default ThirdPartyScripts;
