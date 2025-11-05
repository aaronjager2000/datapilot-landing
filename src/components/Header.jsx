import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Navbar fixed on scroll
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-sticky");
      const scrolled =
        window.scrollY > window.innerHeight || window.scrollY > 105;
      setIsScrolled(scrolled);
      if (scrolled) {
        navbar?.classList.add("navbar-fixed");
      } else {
        navbar?.classList.remove("navbar-fixed");
      }
    };

    // Navbar toggle
    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler?.addEventListener("click", () => {
      const togglerIcon = document.querySelector(".navbar-toggler-icon");
      togglerIcon?.classList.toggle("active");
    });

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll(
      '.nav-link[data-scroll="scrollTo"]'
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            const offset = 100;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse?.classList.contains("show")) {
              navbarCollapse.classList.remove("show");
              const togglerIcon = document.querySelector(
                ".navbar-toggler-icon"
              );
              togglerIcon?.classList.remove("active");
              const toggler = document.querySelector(".navbar-toggler");
              toggler?.classList.add("collapsed");
            }
          }
        }
      });
    });

    // Active nav on scroll
    const sections = document.querySelectorAll("section[id]");
    const handleScrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        const navItem = navLink?.closest(".nav-item");

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
          navItem?.classList.add("active");
          navItem?.parentElement
            ?.querySelectorAll(".nav-item")
            .forEach((item) => {
              if (item !== navItem) {
                item.classList.remove("active");
              }
            });
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollActive);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollActive);
    };
  }, []);

  return (
    <header className="header header-transparent header-sticky">
      <nav
        className="navbar navbar-sticky navbar-light navbar-expand-lg"
        id="primary-menu"
      >
        <div className="container">
          <a className="logo navbar-brand" href="/">
            <img
              className="logo"
              src={
                isScrolled
                  ? "/assets/images/logo/DataPilotLogo.png"
                  : "/assets/images/logo/datapilotwithbackground.png"
              }
              alt="DataPilot Logo"
            />
            <span className="logo-text">DataPilot</span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" data-scroll="scrollTo" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#feature">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#process">
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-scroll="scrollTo"
                  href="#testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#cta">
                  Get Started
                </a>
              </li>
            </ul>
            <div className="module-container">
              <div className="module module-cta">
                <a className="btn btn--white" href="javascript:void(0)">
                  <span>
                    Contact Us <i className="icon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
