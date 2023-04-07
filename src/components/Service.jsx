import React from "react";

const Service = ({ img, title, message }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md md:w-1/4">
      <div className="inline-flex items-center space-x-5">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor flex items-center justify-center">
          <img src={img} alt="" className="w-1/2" />
        </div>
        <span className="font-medium text-xl">{title}</span>
      </div>
      <p className="text-gray-600 mt-4 max-w-lg">{message}</p>
    </div>
  );
};

export default Service;
