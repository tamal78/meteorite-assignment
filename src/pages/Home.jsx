import React from "react";
import Navbar from "../components/navbar";
import InteractiveMapSection from "@/components/map";
import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/features";
import ThingsToDoSections from "@/components/gallery";
import GuideProfile from "@/components/guide";
import TopRecommendations from "@/components/recommendationbar";
import FAQSection from "@/components/faqs";
import { ChevronLeft } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen w-full text-rexbygray-800">
      <ChevronLeft
        className="absolute left-8 top-28 bg-white shadow-md rounded-xl"
        size={28}
      />
      <Navbar />
      <TopRecommendations />
      <HeroSection />
      <FeaturesSection />
      <InteractiveMapSection />
      <ThingsToDoSections />
      <GuideProfile />
      <div className="border-t border-slate-200"></div>
      <FAQSection />
    </div>
  );
};

export default Home;
