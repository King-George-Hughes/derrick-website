import React from "react";

const HardWork = ({ title, img, message }) => {
  return (
    <div className="flex flex-col items-start gap-5 md:items-center md:flex-row">
      <div className="w-24 h-24 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-xl flex items-center justify-center">
        <img src={img} alt="" className="w-1/2" />
      </div>
      <div className="space-y-3 md:max-w-md">
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default HardWork;
