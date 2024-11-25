import { Button } from "./ui/button";

import { useEffect, useState } from "react";

const TopRecommendations = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight;
      const threshold = windowHeight * 0.25;
      setIsStickyVisible(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isStickyVisible && (
        <div
          className={`fixed ${
            isMobile ? "bottom-0" : "top-0"
          } z-50 w-full bg-white shadow-md px-4 md:px-40 py-4 flex ${
            isMobile
              ? "justify-center"
              : "flex sm:flex-row items-center justify-between"
          } transition-all duration-300`}
        >
          {/* Content for Desktop */}
          {!isMobile && (
            <button className="text-sm tracking-wider font-semibold text-title underline focus:outline-none">
              unclear? Ask me a question
            </button>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-between md:w-1/3 sm:w-auto space-x-4">
            <Button variant="outline" className="w-full py-6 border-black">
              Preview for Free
            </Button>
            <Button
              variant="secondary"
              className="w-full py-6 bg-cyan-700 text-white"
            >
              GET ACCESS
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopRecommendations;
