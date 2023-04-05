import React from "react";
import { NavBar } from "../components";
import { bg } from "../assets";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-screen flex">
        <img
          src={bg}
          alt=""
          className="absolute h-full left-0 top-0 bottom-0 w-full object-cover bg-cover z-0"
        />
        <div className="absolute w-full h-full left-0 right-0 bottom-0 bg-gradient-to-l from-gradient1 to-gradient2"></div>

        <div className="container mx-auto z-10 mt-32 flex flex-col md:flex-row">
          <div className="left-side w-1/2">
            <h1 className="text-5xl font-poppins text-white font-bold max-w-lg leading-10">
              International Currency Transfer Provider
            </h1>
          </div>
          <div className="right-side">
            <div className="card bg-gradient-to-r from-primaryColor to-secondaryColor p-4 rounded-xlg">
              <p>Exchange Rate</p>
              <h2>1 GBP = 1.29356 USD</h2>
            </div>
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
