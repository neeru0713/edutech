import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 m-[6rem]">
      <h1 className="font-semibold text-center text-5xl md:text-7xl md:mx-[20%]">
        Unlock the Future of Learning with EduTech+
      </h1>
      <p className="text-[#566072] text-center text-xl md:mx-[22%]">
        EduTech+ provides cutting-edge tools to help students and educators
        reach their full potential. With adaptive learning, personalized
        dashboards, and real-time insights, we make education accessible and
        tailored to each learner's needs. Join thousands of learners and
        educators using EduTech+ to enhance learning experiences, track
        progress, and achieve goals with ease.
      </p>
      <button className="border rounded-md px-4 py-2 font-semibold bg-[#5845ee] text-white hover:bg-[#382ca5] m-auto w-[12rem] shadow shadow-lg">
        Get started for free
      </button>
    </div>
  );
};

export default HeroSection;
