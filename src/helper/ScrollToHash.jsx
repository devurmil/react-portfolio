import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let attempts = 0;
    const maxAttempts = 20;
    const headerOffset = 96; // fixed header height

    const tryScroll = () => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        attempts++;
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;
