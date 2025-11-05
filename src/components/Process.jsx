import React from "react";

const Process = () => {
  return (
    <section className="steps" id="process">
      <div className="bg-section">
        <img src="/assets/images/background/bg-1.jpg" alt="background" />
      </div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="heading heading-2 text-center">
              <p className="heading-subtitle">
                <span>Work Process</span>
              </p>
              <h2 className="heading-title text-white">
                How DataPilot <br /> Works
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="step-card step-line-left">
              <div className="step-card-indicator">
                <span className="point"></span>
              </div>
              <div className="step-card-number">01</div>
              <div className="step-card-title">Upload & Connect</div>
              <div className="step-card-desc">
                <p>
                  Upload your datasets or connect to external sources like
                  Google Sheets, Salesforce, or HubSpot. Our platform
                  automatically validates and profiles your data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step-card step-line-left step-line-right">
              <div className="step-card-indicator">
                <span className="point"></span>
              </div>
              <div className="step-card-number">02</div>
              <div className="step-card-title">Analyze & Transform</div>
              <div className="step-card-desc">
                <p>
                  Use AI-powered analysis to detect trends, patterns, and
                  anomalies. Transform and clean your data with automated
                  pipelines and visual builders.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step-card step-line-right">
              <div className="step-card-indicator">
                <span className="point"></span>
              </div>
              <div className="step-card-number">03</div>
              <div className="step-card-title">Visualize & Share</div>
              <div className="step-card-desc">
                <p>
                  Create interactive dashboards with multiple chart types. Share
                  insights with your team through role-based access control and
                  export capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
