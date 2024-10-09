import React from "react";
import Navbar from "./navbar/Navbar";
import HeroSection from "./herosection/HeroSection";
import FeaturesSection from "./feature-section/FeaturesSection"
import { Footer } from "./footer/Footer";
const LandingPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <HeroSection />
      
      <div className="flex flex-col mx-[18%] items-center">
        <h1 className="text-6xl font-semibold mx-[10%] p-8">Modern Work Experience-Based Learning Approach</h1>
        <FeaturesSection/>
      </div>

      <Footer/>
    </div>
  );
};

export default LandingPage;
