import React, { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Initialize Owl Carousel if available
    const initCarousel = () => {
      if (window.jQuery && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery;
        const carousel = $(".testimonials .owl-carousel");
        if (carousel.length && !carousel.data("owl.carousel")) {
          carousel.owlCarousel({
            loop: carousel.data("loop") !== false,
            autoplay: carousel.data("autoplay") === true,
            margin: carousel.data("space") || 0,
            nav: carousel.data("nav") === true,
            dots: carousel.data("dots") === true,
            dotsSpeed: carousel.data("speed") || 800,
            thumbs: true,
            thumbsPrerendered: true,
            thumbContainerClass: "owl-thumbs",
            thumbItemClass: "owl-thumb-item",
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: carousel.data("slide-res") || 1,
              },
              1000: {
                items: carousel.data("slide") || 1,
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
    <section className="testimonials" id="testimonials">
      <div className="bg-section">
        <img
          src="/assets/images/background/bg-testimonials.svg"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div
              className="owl-carousel"
              data-slider-id="1"
              data-slide="1"
              data-slide-res="1"
              data-autoplay="false"
              data-nav="false"
              data-dots="false"
              data-space="0"
              data-loop="true"
              data-speed="800"
            >
              <div className="testimonial-panel">
                <div className="testimonial-body">
                  <div className="testimonial-icon"></div>
                  <p>
                    "DataPilot has transformed how we analyze our business data.
                    The AI-powered insights have uncovered patterns we never
                    would have found manually, and the visualization tools make
                    it easy to share findings with stakeholders."
                  </p>
                  <div className="testimonial-author">
                    <p>
                      <span>Sarah Johnson</span> Chief Data Officer, TechCorp
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-panel">
                <div className="testimonial-body">
                  <div className="testimonial-icon"></div>
                  <p>
                    "The seamless integration with Salesforce and Google Sheets
                    has eliminated hours of manual data entry. Our team can now
                    focus on analysis instead of data preparation, and the
                    role-based access control gives us confidence in our data
                    security."
                  </p>
                  <div className="testimonial-author">
                    <p>
                      <span>Michael Chen</span> Analytics Director, GrowthCo
                    </p>
                  </div>
                </div>
              </div>
              <div className="testimonial-panel">
                <div className="testimonial-body">
                  <div className="testimonial-icon"></div>
                  <p>
                    "As a data analyst, I love how intuitive the platform is.
                    The automated data cleaning and transformation features save
                    me so much time, and the AI recommendations help me identify
                    the most important insights to focus on."
                  </p>
                  <div className="testimonial-author">
                    <p>
                      <span>Emily Rodriguez</span> Senior Data Analyst,
                      DataFirst Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
