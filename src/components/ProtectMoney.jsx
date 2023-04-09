import React from "react";

const ProtectMoney = ({ id, title, message }) => {
  return (
    <>
      <div className="bg-white rounded-xl flex items-center w-full shadow-md md:w-1/2">
        <div className="bg-bgCardColor p-8 text-primaryColor font-bold text-3xl -rotate-90">
          0{id}
        </div>
        <div className="p-5 md:p-10">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-gray-600 mt-4">{message}</p>
        </div>
      </div>
    </>
  );
};

export default ProtectMoney;
