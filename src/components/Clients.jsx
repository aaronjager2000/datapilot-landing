import React, { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    // Initialize Owl Carousel if available
    const initCarousel = () => {
      if (window.jQuery && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery;
        const carousel = $(".clients .owl-carousel");
        if (carousel.length && !carousel.data("owl.carousel")) {
          carousel.owlCarousel({
            loop: carousel.data("loop") !== false,
            autoplay: carousel.data("autoplay") === true,
            margin: carousel.data("space") || 30,
            nav: carousel.data("nav") === true,
            dots: carousel.data("dots") === true,
            dotsSpeed: carousel.data("speed") || 800,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: carousel.data("slide-res") || 3,
              },
              1000: {
                items: carousel.data("slide") || 6,
              },
            },
          });
        }
      }
    };

    // Wait for jQuery and carousel library to load
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      initCarousel();
    } else {
      const checkInterval = setInterval(() => {
        if (window.jQuery && window.jQuery.fn.owlCarousel) {
          initCarousel();
          clearInterval(checkInterval);
        }
      }, 100);

      // Cleanup after 5 seconds if still not loaded
      setTimeout(() => clearInterval(checkInterval), 5000);
    }
  }, []);

  return (
    <section className="clients" id="clients">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div
              className="owl-carousel"
              data-slide="6"
              data-slide-res="3"
              data-autoplay="true"
              data-nav="false"
              data-dots="false"
              data-space="30"
              data-loop="true"
              data-speed="800"
            >
              <div className="client">
                <img
                  src="/assets/images/clients/client-1.png"
                  alt="client-pic"
                />
              </div>
              <div className="client">
                <img
                  src="/assets/images/clients/client-2.png"
                  alt="client-pic"
                />
              </div>
              <div className="client">
                <img
                  src="/assets/images/clients/client-3.png"
                  alt="client-pic"
                />
              </div>
              <div className="client">
                <img
                  src="/assets/images/clients/client-4.png"
                  alt="client-pic"
                />
              </div>
              <div className="client">
                <img
                  src="/assets/images/clients/client-5.png"
                  alt="client-pic"
                />
              </div>
              <div className="client">
                <img
                  src="/assets/images/clients/client-6.png"
                  alt="client-pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
