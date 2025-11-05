import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-widgets-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-widget" style={{ textAlign: "center" }}>
                <a
                  className="logo navbar-brand"
                  href="/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="logo"
                    src="/assets/images/logo/DataPilotLogo.png"
                    alt="DataPilot Logo"
                  />
                  <span className="logo-text">DataPilot</span>
                </a>
                <div className="footer-contact">
                  <ul className="list-unstyled">
                    <li>
                      <a href="mailto:support@datapilot.com">
                        support@datapilot.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sales@datapilot.com">
                        sales@datapilot.com
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="list-unstyled navigation">
                  <li className="nav-item">
                    <a className="nav-link" href="#hero">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#feature">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#process">
                      Process
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 text--center">
            <div className="footer-copyright">
              <span>
                2024 &copy; <a href="/">DataPilot</a>. All rights reserved.
              </span>
              <div className="footer-social">
                <ul className="list-unstyled">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
