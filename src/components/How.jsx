import React from "react";

const How = ({ id, title, img, message }) => {
  return (
    <div className="flex flex-col items-center gap-5 my-3 hover:-translate-y-2 duration-500 md:w-1/3">
      <h3 className="font-medium text-xl">{title}</h3>
      <div className="relative w-40 h-40 bg-white shadow-md rounded-full flex items-center justify-center">
        <div className="absolute w-8 h-8 flex items-center justify-center text-white font-medium bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full top-0 right-4">
          {`0` + id}
        </div>
        <img src={img} alt="" />
      </div>
      <p className="text-center max-w-sm md:max-w-md">{message}</p>
    </div>
  );
};

export default How;
