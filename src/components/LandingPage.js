import React from "react";
import Navbar from "./navbar/Navbar";
import HeroSection from "./herosection/HeroSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-[10rem] h-full">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
