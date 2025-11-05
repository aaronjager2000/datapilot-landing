import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroScreenshots from "./components/HeroScreenshots";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScriptLoader from "./components/ScriptLoader";
import "./assets/js/functions";

function App() {
  useEffect(() => {
    // Initialize background images
    const bgSections = document.querySelectorAll(".bg-section");
    bgSections.forEach((section) => {
      const img = section.querySelector("img");
      if (img) {
        const bgSrc = img.getAttribute("src");
        const bgUrl = `url(${bgSrc})`;
        section.parentElement.style.backgroundImage = bgUrl;
        section.parentElement.classList.add("bg-section");
        section.remove();
      }
    });
  }, []);

  return (
    <div className="wrapper clearfix" id="wrapper">
      <ScriptLoader />
      <Header />
      <Hero />
      <HeroScreenshots />
      <Features />
      <Process />
      <Pricing />
      <Testimonials />
      <div className="container">
        <div className="divider-1"></div>
      </div>
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
