import React from "react";

const Features = () => {
  return (
    <>
      <section className="features text-center" id="feature">
        <div className="container">
          <div className="row clearfix">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <div className="heading heading-2 text--center">
                <p className="heading-subtitle">
                  <span>About DataPilot</span>
                </p>
                <h2 className="heading-title">
                  We design tools to unlock <br /> your data superpowers
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="feature-panel">
                <div className="feature-icon text-center">
                  <i className="flaticon-archive-3"></i>
                </div>
                <div className="feature-content">
                  <h3>AI-Powered Insights</h3>
                  <p>
                    Automated trend detection, pattern recognition, and anomaly
                    identification with natural language summaries and
                    actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="feature-panel active">
                <div className="feature-icon text-center">
                  <i className="flaticon-albums"></i>
                </div>
                <div className="feature-content">
                  <h3>Interactive Dashboards</h3>
                  <p>
                    Create powerful multi-chart visualizations with real-time
                    data synchronization, export capabilities, and synchronized
                    filtering.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="feature-panel">
                <div className="feature-icon text-center">
                  <i className="flaticon-fingerprint"></i>
                </div>
                <div className="feature-content">
                  <h3>Enterprise Security</h3>
                  <p>
                    Role-based access control, data classification, audit
                    logging, and encryption at rest and in transit for complete
                    data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="bg-section">
          <img
            src="/assets/images/background/bg-testimonials.svg"
            alt="background"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="features-card pt-30">
                <div className="heading heading-3">
                  <p className="heading-subtitle">
                    <span>Our Features</span>
                  </p>
                  <h2 className="heading-title">
                    Comprehensive Data <br /> Analytics Platform
                  </h2>
                  <p className="heading-desc">
                    Upload, process, and analyze large datasets with automated
                    pipelines. Transform and clean data with intelligent rules.
                    Track data lineage and maintain complete version control.
                  </p>
                </div>
                <div className="divider-1"></div>
                <ul className="list-unstyled feature-list">
                  <li>
                    <span className="icon-tick-inside-circle"></span> Support
                    for CSV, Excel, and JSON files up to 50MB
                  </li>
                  <li>
                    <span className="icon-tick-inside-circle"></span> Automated
                    data cleaning with customizable rules <br /> and presets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-space"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="features-card pt-30">
                <div className="heading heading-3">
                  <p className="heading-subtitle">
                    <span>Our Features</span>
                  </p>
                  <h2 className="heading-title">
                    Seamless Integrations <br /> with Your Data Sources
                  </h2>
                  <p className="heading-desc">
                    Connect with Google Sheets, Salesforce, HubSpot, Klaviyo,
                    and custom APIs. Real-time sync with webhook-based updates
                    and scheduled synchronization intervals.
                  </p>
                </div>
                <div className="divider-1"></div>
                <ul className="list-unstyled feature-list">
                  <li>
                    <span className="icon-tick-inside-circle"></span> OAuth 2.0
                    integration for Google Sheets, Salesforce, and HubSpot
                  </li>
                  <li>
                    <span className="icon-tick-inside-circle"></span> Real-time
                    sync with automatic data mapping <br /> and transformation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
