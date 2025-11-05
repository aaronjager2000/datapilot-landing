import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    if (email) {
      setMessage("Thank you! We will contact you soon.");
      setEmail("");
    }
  };

  return (
    <section className="hero hero-mailchimp" id="hero">
      <div className="bg-section">
        <img src="/assets/images/background/bg-1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="hero-cotainer text--center">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
              <div className="hero-content">
                <div className="hero-headline mx-auto">
                  Transform Your Data Into Actionable Insights with DataPilot
                </div>
                <div className="hero-bio">
                  DataPilot is an enterprise-grade data analytics platform that
                  empowers organizations to upload, analyze, and visualize large
                  datasets with AI-driven insights, role-based access control,
                  and seamless integrations.
                </div>
                <div className="hero-action text-center">
                  <form
                    className="mb-0 form-action mailchimp"
                    onSubmit={handleSubmit}
                  >
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="btn btn--primary" type="submit">
                        <span>
                          Get Started Now<i className="icon-right-arrow"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                  {message && <div className="subscribe-alert">{message}</div>}
                </div>
              </div>
            </div>
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
              id="linear-gradient5"
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
            fill="url(#linear-gradient5)"
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

export default Hero;
