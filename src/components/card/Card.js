import React from "react";

const Card = ({ title, heading, content, image, themeColor }) => {
  const style = {
    background: themeColor,
  };
  return (
    <div className="flex flex-col bg-[#f8f7ff] gap-4 p-8 rounded-lg w-full md:w-[40%]">
      <h1
        style={style}
        className="border rounded-xl py-2 font-semibold text-sm text-white"
      >
        {title}
      </h1>
      <div className="flex items-center justify-center">
        <img src={image} className="w-50 h-40" />
      </div>

      <h1 className="font-bold text-xl mx-[10%]">{heading}</h1>
      <p className="text-[#7a8b87] mx-[5%]">{content}</p>
    </div>
  );
};

export default Card;
