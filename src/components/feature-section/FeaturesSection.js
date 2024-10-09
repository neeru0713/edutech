import React, { useState } from "react";
import Card from "../card/Card";
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
const FeaturesSection = () => {
  const cardData = [
    {
      title: "Personalized Learning Paths",
      heading: "Tailored to Your Learning Style",
      image: img1,
      themeColor: "#641d63",
      content:
        "EduTech+ adapts to each user’s unique needs and goals, helping you focus on the areas that need improvement",
    },
    {
      title: "Real-Time Progress Tracking",
      heading: "Monitor Your Growth and Achievements",
      image: img2,
      themeColor: "#f1b26b",
      content:
        "Track your learning journey with detailed progress reports and celebrate milestones as you advance through your courses.",
    },
    {
      title: "Seamless Integration ",
      heading: "Collaboration Made Easy",
      image: img3,
      themeColor: "#0369a9",
      content:
        "Educators can access integrated tools for creating assignments, tracking student progress and giving feedback in real time. ",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 pt-10 w-full">
      {cardData.map((card, index) => (
        <Card
          title={card.title}
          heading={card.heading}
          content={card.content}
          image={card.image}
          themeColor={card.themeColor}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
