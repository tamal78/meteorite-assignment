import {
  Binoculars,
  Camera,
  FishIcon,
  GlassWaterIcon,
  Mountain,
  PlaneIcon,
  StarIcon,
  SunDim,
  TreeDeciduous,
} from "lucide-react";

const ThingsToDoSection = ({ title, subtitle, linkText, linkHref, cards }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Text Section */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-400 font-semibold text-sm sm:text-md mt-2 leading-loose">
            {subtitle}
          </p>
          {linkText && linkHref && (
            <a
              href={linkHref}
              className="mt-2 font-semibold underline text-blue-500 block"
            >
              {linkText}
            </a>
          )}
        </div>

        {/* Cards Section */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index}>
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="p-1">
                <p className="text-gray-800 text-xs flex items-center">
                  <span className="mr-2">{card.icon}</span>
                  {card.category}
                </p>
                <h3 className="text-gray-800 font-semibold text-sm mt-2">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ThingsToDoSections = () => {
  const sections = [
    {
      title: "161 Things to do",
      subtitle:
        "Get a curated list of all the best things to do with exact location, detailed info and inspiring content",
      cards: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNB3Z62gMn49v5t49v-cRlLXxlmy0kA-ihQ&s",
          category: "Hike",
          icon: <Mountain size={10} />,
          title: "Beautiful view point",
        },
        {
          image:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
          category: "Sightseeing",
          icon: <Binoculars size={10} />,
          title: "Walk around a beautiful old fishing town",
        },
        {
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449967271.jpg?k=92be7bd7ffa456a575e7f5e9c26ec2b21cbae366c4da7f08c2d3c5554f029919&o=&hp=1",
          category: "Photoshoot",
          icon: <Camera size={10} />,
          title: "Perfect drone place",
        },
      ],
    },
    {
      title: "Top Experiences",
      subtitle:
        "Discover the best experiences that will make your trip truly unforgettable. From guided tours to exciting adventures.",
      cards: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJqfRQdOMOXXlPRaZemBW8bi7imzsYPIj_Q&s",
          category: "Adventure",
          icon: <PlaneIcon size={10} />,
          title: "Climb the tallest peaks",
        },
        {
          image:
            "https://www.shutterstock.com/image-photo/toad-rock-on-hill-mount-600nw-2493244167.jpg",
          category: "Stargazing",
          icon: <StarIcon size={10} />,
          title: "Aurora Borealis experience",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWZcrxau-3H_o0AZK6Yx81pgzFuifTwyXjgTn8HiQgVd4o3f_cxAIoTtpAVdgKjgG2r8&usqp=CAU",
          category: "Fishing",
          icon: <FishIcon size={10} />,
          title: "Catch and cook your meal",
        },
      ],
    },
    {
      title: "Scenic Locations",
      subtitle:
        "Explore breathtaking landscapes, serene lakes, and hidden gems perfect for relaxation and photography.",
      cards: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2H4pO0S9Ghwd2_inKPv41VUa84tZH9bb3Cg&s",
          category: "Landscape",
          icon: <TreeDeciduous size={10} />,
          title: "Majestic mountain view",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYiSTPwLSSMEsBpc1A3T66wtw9DLtO5pu0cW0TlPdBXe_Omhx5bH58GK1AzwEWRkBjuU&usqp=CAU",
          category: "Lake",
          icon: <GlassWaterIcon size={10} />,
          title: "Crystal clear lake",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTjnuRCUa88Ol5-jxfo1CCoquOeNzsQ2Fy1Vd0-iNLUJC1HFk6jVOGYmNTsqecuaYfJA&usqp=CAU",
          category: "Sunset",
          icon: <SunDim size={10} />,
          title: "Golden hour by the sea",
        },
      ],
    },
  ];
  return (
    <>
      {sections.map((section, index) => (
        <ThingsToDoSection
          key={index}
          title={section?.title}
          subtitle={section?.subtitle}
          cards={section?.cards}
        />
      ))}
      <div className="max-w-7xl mx-auto py-8">
        <div className="border-t border-slate-200"></div>
      </div>
    </>
  );
};

export default ThingsToDoSections;
