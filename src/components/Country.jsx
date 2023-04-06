import React from "react";

const Country = ({ id, img, name }) => {
  return (
    <div className="bg-white p-5 shadow-md rounded-full w-full flex items-center justify-start gap-5 pr-10 my-2 md:w-52 md:mx-5 transition ease-out delay-50 hover:-translate-y-2 duration-500">
      <img src={img} width={50} alt="" />
      <span>{name}</span>
    </div>
  );
};

export default Country;
