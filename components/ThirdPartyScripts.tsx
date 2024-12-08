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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-55M3Q1F8T7"
        strategy="afterInteractive"
      />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-55M3Q1F8T7');`,
        }}
      ></Script>
      <Script
        id="msClarity"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "pasp9jy8z7");`,
        }}
      ></Script>
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
