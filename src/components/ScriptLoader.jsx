import { useEffect } from "react";

const ScriptLoader = () => {
  useEffect(() => {
    // Load vendor scripts dynamically
    const scripts = [
      "/assets/js/vendor/bootstrap.min.js",
      "/assets/js/vendor/owl.carousel.min.js",
      "/assets/js/vendor/owl.carousel2.thumbs.min.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default ScriptLoader;
