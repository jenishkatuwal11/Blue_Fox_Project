import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";  // Importing the up arrow icon

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 bg-[var(--primary-color)] text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Scroll;