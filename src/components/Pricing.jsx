import React, { useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  // Arrow icon for features
  const ArrowIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.77503 4.02515C7.95081 3.84959 8.18909 3.75098 8.43753 3.75098C8.68597 3.75098 8.92425 3.84959 9.10003 4.02515L14.4125 9.33765C14.5881 9.51343 14.6867 9.75171 14.6867 10.0002C14.6867 10.2486 14.5881 10.4869 14.4125 10.6627L9.10003 15.9752C8.9222 16.1407 8.68714 16.2308 8.44424 16.2266C8.20135 16.2224 7.96953 16.1242 7.79753 15.9527C7.62598 15.7806 7.52778 15.5488 7.52359 15.3059C7.51939 15.063 7.60952 14.828 7.77503 14.6502L12.425 10.0002L7.77503 5.35015C7.59947 5.17437 7.50085 4.93609 7.50085 4.68765C7.50085 4.43921 7.59947 4.20093 7.77503 4.02515Z"
        fill="#000"
      />
    </svg>
  );

  const plans = [
    {
      name: "FREE",
      price: { monthly: "0", yearly: "0" },
      description:
        "Perfect for individuals and small teams getting started with data analytics.",
      features: [
        { text: "Up to 5 datasets", enabled: true },
        { text: "Basic visualizations", enabled: true },
        { text: "AI-powered insights", enabled: false },
        { text: "External integrations", enabled: false },
      ],
      icon: "flame", // flame icon
    },
    {
      name: "PRO",
      price: { monthly: "99", yearly: "990" },
      description:
        "Ideal for growing teams that need comprehensive analytics and AI insights.",
      features: [
        { text: "Unlimited datasets", enabled: true },
        { text: "Advanced visualizations", enabled: true },
        { text: "AI-powered insights", enabled: true },
        { text: "Priority support", enabled: false },
      ],
      icon: "lightbulb", // lightbulb icon
      active: true,
    },
    {
      name: "ENTERPRISE",
      price: { monthly: "299", yearly: "2990" },
      description:
        "For large organizations requiring enterprise-grade security, compliance, and support.",
      features: [
        { text: "Unlimited datasets", enabled: true },
        { text: "All visualizations", enabled: true },
        { text: "Advanced AI insights", enabled: true },
        { text: "Priority support & integrations", enabled: true },
      ],
      icon: "briefcase", // briefcase icon
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-background">
        <img
          src="/assets/images/pricing8_bg.png"
          alt="background"
          className="pricing-bg-image"
        />
      </div>
      <div className="container">
        <div className="pricing-header">
          <p className="pricing-subtitle">
            <img src="/assets/images/pricing8_boxshap.png" alt="icon" />
            Pricing Table
          </p>
          <h1 className="pricing-title">
            Transparent pricing{" "}
            <span className="pricing-title-highlight">choose your plan</span>
          </h1>
        </div>

        <div className="pricing-toggle">
          <input
            type="checkbox"
            id="pricing-toggle"
            checked={isYearly}
            onChange={togglePricing}
          />
          <label htmlFor="pricing-toggle">
            <span className={!isYearly ? "active" : ""}>Monthly</span>
            <span className="toggle-switch">
              <span
                className={`toggle-ball ${isYearly ? "yearly" : "monthly"}`}
              ></span>
            </span>
            <span className={isYearly ? "active" : ""}>Yearly</span>
          </label>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.active ? "active" : ""}`}
            >
              {/* Decorative icon */}
              <div className="pricing-card-icon">
                {plan.icon === "flame" && (
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 75 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.4286 4.03565C29.25 9.39279 25.0714 17.8571 23.4643 24.0714C22.8214 26.7499 21.8571 28.9999 21.4286 28.9999C20.5714 28.9999 18.9643 25.4642 17.6786 20.5356C16.9286 18.0714 16.8214 18.1785 11.6786 23.2142C3.85714 30.8214 0.75 37.9999 0.75 47.6428C0.857143 56.2142 2.67857 62.2142 7.5 69.1785C10.8214 73.9999 17.7857 79.4642 23.0357 81.4999L25.8214 82.5714L22.6071 78.4999C18.3214 73.0356 16.7143 66.7142 18.3214 60.9285C19.1786 57.2856 21.3214 54.6071 28.1786 48.0714C33 43.4642 37.1786 39.7142 37.5 39.7142C37.8214 39.7142 42 43.4642 46.8214 48.0714C53.4643 54.3928 55.8214 57.3928 56.6786 60.7142C58.6071 67.9999 56.1429 76.0356 50.6786 80.4285L47.6786 82.7856L50.3571 82.0356C58.0714 79.7856 66.5357 71.7499 71.0357 62.3214C73.7143 56.6428 74.25 54.0714 74.25 47.6428C74.25 37.3571 70.9286 30.4999 61.8214 21.9285C51.9643 12.6071 37.7143 0.0713637 37.1786 0.0713637C36.8571 0.0713637 35.1429 1.89279 33.4286 4.03565Z"
                      fill="#7A68ED"
                    />
                    <path
                      d="M30.9644 56.7499C26.5715 61.0357 25.7144 62.5357 25.7144 65.9642C25.7144 71.8571 31.2858 77.2142 37.5001 77.2142C43.7144 77.2142 49.2858 71.8571 49.2858 65.9642C49.2858 62.5357 48.4286 61.0357 44.0358 56.7499C41.2501 53.8571 38.2501 51.4999 37.5001 51.4999C36.7501 51.4999 33.7501 53.8571 30.9644 56.7499Z"
                      fill="#7A68ED"
                    />
                  </svg>
                )}
                {plan.icon === "lightbulb" && (
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 75 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M30.375 1.24999C13.25 4.74999 0.875 19.875 0.875 37.5C0.875 47.5 4.125 55.5 11.25 63.375C14 66.25 17 70.125 17.75 71.875C19 74.625 19.875 75 25.875 75H32.5V60.75C32.5 46.5 32.5 46.5 28.625 42.625C25.5 39.5 24.875 38 25.25 34.125C25.625 30 26 29.375 28.625 29.375C30.75 29.375 32.375 30.625 33.75 33.125C34.875 35.125 36.625 36.875 37.5 36.875C38.375 36.875 40.125 35.125 41.25 33.125C42.625 30.625 44.25 29.375 46.375 29.375C49 29.375 49.375 30 49.75 34.125C50.125 38 49.5 39.5 46.375 42.375L42.5 46V60.5V75H48.75C53.875 75 55.125 74.5 56.375 72.125C57.25 70.625 60.375 66.625 63.375 63.375C71 55.125 74.125 47.625 74.125 37.5C74.125 14.5 52.75 -3.12501 30.375 1.24999Z"
                        fill="#7A68ED"
                      />
                      <path
                        d="M21.25 86.125C21.25 90.375 26.75 96.75 32 98.625C36.375 100.125 37.75 100.125 42.5 98.625C48.25 96.75 53.75 90.625 53.75 86.125C53.75 83.875 52.5 83.75 37.5 83.75C22.5 83.75 21.25 83.875 21.25 86.125Z"
                        fill="#7A68ED"
                      />
                    </g>
                  </svg>
                )}
                {plan.icon === "briefcase" && (
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 75 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M-7.74562e-05 44C0.815416 44.4822 0.815416 44.4822 1.64738 44.9741C4.44035 46.1921 6.59923 46.317 9.64055 46.4141C11.2454 46.4721 11.2454 46.4721 12.8827 46.5312C14.5495 46.5777 14.5495 46.5777 16.2499 46.625C17.3766 46.6637 18.5032 46.7023 19.664 46.7422C22.4425 46.8364 25.2209 46.922 27.9999 47C28.2719 47.7863 28.5439 48.5727 28.8241 49.3828C29.8329 52.2486 29.8329 52.2486 32.8124 53.875C37.3738 55.4849 39.4883 54.7215 43.7499 52.6875C46.3143 50.7642 46.4272 50.0193 46.9999 47C47.706 46.9802 48.4121 46.9604 49.1396 46.9399C52.3434 46.8446 55.5466 46.735 58.7499 46.625C59.8611 46.5941 60.9723 46.5631 62.1171 46.5312C63.187 46.4926 64.257 46.4539 65.3593 46.4141C66.8361 46.3669 66.8361 46.3669 68.3427 46.3188C71.0084 45.999 72.7061 45.3563 74.9999 44C75.0288 48.4792 75.0467 52.9583 75.0624 57.4375C75.0708 58.7169 75.0792 59.9963 75.0878 61.3145C75.091 62.5294 75.0943 63.7443 75.0976 64.9961C75.1028 66.122 75.1081 67.2479 75.1134 68.408C74.9999 71 74.9999 71 73.9999 72C71.7354 72.0997 69.4678 72.128 67.2011 72.1294C66.4905 72.1311 65.78 72.1329 65.0479 72.1347C62.6881 72.1391 60.3284 72.1362 57.9687 72.1328C56.3358 72.1335 54.703 72.1345 53.0701 72.1357C49.6436 72.1372 46.217 72.135 42.7905 72.1304C38.3884 72.1247 33.9864 72.128 29.5843 72.1339C26.2112 72.1375 22.8382 72.1364 19.4651 72.1338C17.8416 72.1331 16.218 72.134 14.5944 72.1363C12.3291 72.1388 10.064 72.135 7.79875 72.1294C5.86135 72.1282 5.86135 72.1282 3.88481 72.127C0.999923 72 0.999923 72 -7.74562e-05 71C-0.0876575 69.0004 -0.107043 66.9976 -0.0977337 64.9961C-0.094511 63.7812 -0.0912884 62.5662 -0.0879681 61.3145C-0.0795892 60.0351 -0.0712103 58.7557 -0.0625775 57.4375C-0.0580657 56.1542 -0.053554 54.871 -0.0489056 53.5488C-0.0370729 50.3658 -0.0205881 47.1829 -7.74562e-05 44Z"
                        fill="#7B68ED"
                      />
                      <path
                        d="M7.79883 18.8706C8.50938 18.8688 9.21993 18.8671 9.95201 18.8653C12.3118 18.8609 14.6715 18.8638 17.0312 18.8672C18.6641 18.8665 20.297 18.8655 21.9298 18.8643C25.3564 18.8628 28.7829 18.865 32.2095 18.8696C36.6115 18.8753 41.0136 18.872 45.4156 18.8661C48.7887 18.8624 52.1617 18.8636 55.5348 18.8662C57.1584 18.8669 58.7819 18.866 60.4055 18.8637C62.6708 18.8612 64.9359 18.865 67.2012 18.8706C69.1386 18.8718 69.1386 18.8718 71.1151 18.873C74 19 74 19 75 20C75.3053 23.0946 75.2783 26.2046 75.3125 29.3125C75.356 30.6148 75.356 30.6148 75.4004 31.9434C75.4646 38.3764 75.4646 38.3764 73.1055 41.543C69.7981 43.8317 67.9854 44.1206 63.9922 44.0977C63.0061 44.0944 62.0199 44.0912 61.0039 44.0879C59.9714 44.0795 58.9388 44.0711 57.875 44.0625C56.3146 44.0557 56.3146 44.0557 54.7227 44.0488C52.1484 44.037 49.5742 44.0205 47 44C47 42.02 47 40.04 47 38C40.73 38 34.46 38 28 38C28 39.98 28 41.96 28 44C24.6252 44.0877 21.2506 44.1406 17.875 44.1875C16.448 44.2252 16.448 44.2252 14.9922 44.2637C9.57695 44.3201 5.64313 44.1436 1 41C-0.165819 38.6684 -0.129056 37.2785 -0.132812 34.6836C-0.134102 33.8373 -0.135391 32.9911 -0.136719 32.1191C-0.132852 31.2342 -0.128984 30.3493 -0.125 29.4375C-0.128867 28.5487 -0.132734 27.6599 -0.136719 26.7441C-0.13543 25.8992 -0.134141 25.0542 -0.132812 24.1836C-0.131685 23.4056 -0.130557 22.6275 -0.129395 21.8259C0.177735 17.4919 4.33621 18.8727 7.79883 18.8706Z"
                        fill="#7B68ED"
                      />
                      <path
                        d="M37.4375 2.62505C38.4874 2.60056 39.5374 2.57606 40.6191 2.55083C41.6304 2.54696 42.6417 2.5431 43.6836 2.53911C44.6071 2.53089 45.5307 2.52268 46.4822 2.51421C49.7522 3.1452 50.9418 4.43967 53 7.00005C53.5076 9.78147 53.1903 12.1458 53 15C51.35 15 49.7 15 48 15C47.67 12.69 47.34 10.38 47 8.00005C40.73 8.00005 34.46 8.00005 28 8.00005C27.67 10.31 27.34 12.62 27 15C25.02 15 23.04 15 21 15C21.2552 13.3725 21.5297 11.748 21.8125 10.125C21.9633 9.22013 22.1141 8.31521 22.2695 7.38286C24.2356 0.969419 32.0278 2.63167 37.4375 2.62505Z"
                        fill="#7B68ED"
                      />
                      <path
                        d="M32 41C35.63 41 39.26 41 43 41C43 43.97 43 46.94 43 50C38.8018 52.0991 38.2081 52.2181 34 51C33.34 50.67 32.68 50.34 32 50C32 47.03 32 44.06 32 41Z"
                        fill="#7B68ED"
                      />
                    </g>
                  </svg>
                )}
              </div>

              {/* Background pattern */}
              <img
                src="/assets/images/price8_bg.png"
                alt="pattern"
                className="pricing-card-bg"
              />

              {/* Card content */}
              <div className="pricing-card-content">
                <div className="pricing-card-header">
                  {plan.active && (
                    <span className="pricing-active-badge">ACTIVE</span>
                  )}
                  <div className="pricing-plan-badge">
                    <img src="/assets/images/pricing8_boxshap.png" alt="icon" />
                    {plan.name}
                  </div>
                </div>

                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">
                    {isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                </div>

                <p className="pricing-description">{plan.description}</p>

                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={feature.enabled ? "" : "disabled"}>
                      <span className="feature-icon">
                        <ArrowIcon />
                      </span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button className="pricing-button">PURCHASE NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
