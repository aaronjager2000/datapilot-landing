import React from "react";

const CTA = () => {
  const handleScrollTo = (e) => {
    e.preventDefault();
    const target = document.querySelector("#hero");
    if (target) {
      const offset = 100;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="cta text-center" id="cta">
      <div className="shape-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="166.368"
          viewBox="0 0 1921 166.368"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="linear-gradient6"
              x1="0.493"
              y1="0.858"
              x2="0.493"
              y2="0.431"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
          <g transform="translate(1921 166.368) rotate(180)">
            <path
              data-name="Path 2699"
              d="M1921,0V69.536q-544.228,90.1-991.016-13.507Q384.2-70.538,0,165.368L1,0Z"
              transform="translate(1921 166.368) rotate(180)"
              fill="url(#linear-gradient6)"
            />
            <path
              data-name="Path 2700"
              d="M0,165.368V94.33Q403.76-11.385,1004.023,106.337C1493.778,202.387,1921,0,1921,0l-1,165.368Z"
              transform="translate(0 1)"
              fill="rgba(255,255,255,0.3)"
            />
            <path
              data-name="Path 2701"
              d="M0,166.118V94.33Q558.463-47.92,997.019,66.816,1545.805,210.391,1921,0l-1,166.118Z"
              fill="rgba(255,255,255,0.3)"
            />
            <path
              data-name="Path 2702"
              d="M0,165.367V98.332Q599.311-58.249,1032.037,45.3C1464.763,148.859,1786.43,64.534,1921,0l-1,166.118Z"
              fill="rgba(255,255,255,0.35)"
            />
          </g>
        </svg>
      </div>
      <div className="bg-section">
        <img src="/assets/images/background/bg-1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2 text-center">
            <h3 className="mx-auto">
              Ready to transform your data into actionable insights?
            </h3>
            <p>
              DataPilot provides enterprise-grade analytics with AI-driven
              insights, seamless integrations, and robust security. Start your
              free trial today - no credit card required.
            </p>
            <a
              className="btn btn--primary btn--rounded btn--hover-white mx-auto scroll-to"
              href="#hero"
              onClick={handleScrollTo}
            >
              <span>
                Get Started Now <i className="icon-right-arrow"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="shape-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="166.368"
          viewBox="0 0 1921 166.368"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="linear-gradient3"
              x1="0.493"
              y1="0.858"
              x2="0.493"
              y2="0.431"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            data-name="Path 2699"
            d="M1921,0V69.536q-544.228,90.1-991.016-13.507Q384.2-70.538,0,165.368L1,0Z"
            transform="translate(1921 166.368) rotate(180)"
            fill="url(#linear-gradient3)"
          />
          <path
            data-name="Path 2700"
            d="M1,170.087V99.049Q404.76-6.666,1005.023,111.056C1494.778,207.106,1922,4.719,1922,4.719l-1,165.368Z"
            transform="translate(-1 -3.719)"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            data-name="Path 2701"
            d="M1,170.837V99.049Q559.463-43.2,998.019,71.535,1546.805,215.11,1922,4.719l-1,166.118Z"
            transform="translate(-1 -4.719)"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            data-name="Path 2702"
            d="M1,170.086V103.051Q600.311-53.53,1033.037,50.024C1465.763,153.578,1787.43,69.253,1922,4.719l-1,166.118Z"
            transform="translate(-1 -4.719)"
            fill="rgba(255,255,255,0.35)"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
