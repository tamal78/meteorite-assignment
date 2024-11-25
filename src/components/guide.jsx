import { Facebook, Globe2, Instagram, Twitter } from "lucide-react";

const GuideProfile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 flex flex-col sm:flex-row items-start gap-8">
      {/* Left Image Section */}
      <div className="w-full sm:w-1/3 flex-shrink-0 bg-white shadow-2xl rounded-lg p-2">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/449967271.jpg?k=92be7bd7ffa456a575e7f5e9c26ec2b21cbae366c4da7f08c2d3c5554f029919&o=&hp=1"
          alt="Guide"
          className="w-full shadow-md object-cover md:h-[400px]"
        />
        <div className="my-4 p-2 px-4">
          <p className="text-gray-400 text-sm">
            161 things to do | 1 itinerary | 0 travel tips
          </p>
          <h3 className="font-semibold text-lg mt-1">Norway Guide</h3>
          <p className="text-gray-500 text-sm">Norway</p>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="flex-grow max-w-2xl md:mt-20">
        <h2 className="text-2xl font-bold">Guide by Ása Steinars</h2>
        <p className="text-gray-400 text-sm mt-1">Joined in April 2022</p>

        {/* Social Icons */}
        <div className="flex space-x-3 mt-4 text-gray-600">
          <Globe2 />
          <Instagram />
          <Facebook />
          <Twitter />
        </div>

        {/* Description */}
        <p className="text-md mt-4 text-gray-600 leading-loose max-w-2xl">
          Ása Steinars is an adventure photographer and videographer from
          Iceland. Growing up in the north, surrounded by extreme landscapes and
          forever changing weather has given her a tight bond to nature and its
          forces. This you can clearly see in her photography. She works as a
          full-time content creator, helping people to travel Iceland like she
          does. She has a total following of almost 2 million across her social
          media platforms.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-2 border border-gray-900 rounded-md hover:bg-slate-100 font-bold">
            Message
          </button>
          <button className="px-6 py-2 border border-gray-900 rounded-md hover:bg-slate-100 font-bold">
            Storefront
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-slate-100 font-bold">
            Guide Affiliate Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
