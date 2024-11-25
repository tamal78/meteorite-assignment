import { useState } from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <div className="flex flex-col sm:flex-row items-stretch justify-center max-w-6xl md:mt-3 md:mx-auto px-5 md:px-4 md:py-12 gap-6">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src="https://cdn.prod.rexby.com/image/d80440c7-36f3-49f7-b69b-b390f0cf7b8f?format=webp&width=1080&height=1350"
          alt="Norway Guide"
          className="w-[450px] h-[560px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-between py-4 md:pr-6 lg:pr-10">
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-slate-800 mt-16">
            Norway Guide
          </h1>
          <div className="flex items-center space-x-2 my-5">
            <img
              src="https://cdn.prod.rexby.com/image/90ca806e-c988-4993-8bcb-302fff6b27db?format=webp&width=32&height=32"
              alt="Guide Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-slate-600 text-lg flex items-center gap-2 md:gap-5">
              <p className="lg:text-lg text-xs">Guide by Ása Steinars</p>
              <p className="lg:text-md text-xs">Norway</p>
              <p className="lg:text-md text-xs">★ New</p>
            </div>
          </div>
          <p className="text-slate-600 text-md mt-4 leading-relaxed">
            Norway is my second home. I was born in Norway and I lived there
            until I was 7 years old. I often come back and I love this country
            almost as much as Iceland. Last summer I spent 3 months on the road
            with my van exploring everything from the south tip up to Lofoten.
          </p>
          <div className="mt-4">
            <p
              className={`text-slate-600 text-md leading-relaxed ${
                showFullText ? "" : "line-clamp-2"
              }`}
            >
              This guide is my best tips for Norway to make sure you get the
              most out of your trip. It's focused around the fjords in the west
              and Lofoten in the north. In my opinion, it's the best areas to
              explore in Norway.
            </p>
            <button
              className="text-gray-400 text-sm mt-2 hover:underline"
              onClick={toggleText}
            >
              {showFullText ? "less" : "more"}
            </button>
          </div>
        </div>

        <div className="mt-6 border border-slate-200" />

        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
    </div>
  );
};

export default HeroSection;
