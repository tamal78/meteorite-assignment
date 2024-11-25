import {
  ArrowDownToLine,
  AudioWaveform,
  Drill,
  Map,
  MapPinned,
  MessageCircle,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: <MapPinned />, text: "161 things to do" },
    { icon: <Map />, text: "Interactive Map" },
    { icon: <ArrowDownToLine />, text: "Offline usage in app" },
    { icon: <AudioWaveform />, text: "1 itinerary" },
    { icon: <Drill />, text: "Itinerary Builder access" },
    { icon: <MessageCircle />, text: "Priority in chat" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-t border-slate-200">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-2xl text-gray-700">{feature?.icon}</span>
            <span className="text-slate-700 text-md sm:text-md text-gray-700">
              {feature?.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-16 border-t border-slate-200"></div>
    </div>
  );
};

export default FeaturesSection;
