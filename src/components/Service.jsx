import React from "react";

const Service = ({ img, title, message }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:-translate-y-2 duration-500 w-full md:w-1/2">
      <div className="relative inline-flex items-center justify-start gap-x-5">
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor flex items-center justify-center">
          <img src={img} alt="" className="w-1/2" />
        </div>
        <span className="font-medium text-xl">{title}</span>
      </div>
      <p className="text-gray-600 mt-4 max-w-lg leading-6 px-3">{message}</p>
    </div>
  );
};

export default Service;
