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
        <div className="absolute w-full h-full left-0 right-0 bottom-0 bg-gradient-to-t from-gradient1 to-gradient2"></div>
        <div className="container mx-auto z-10 mt-32">
          <div className="left-side">
            <h1>International Currency Transfer Provider</h1>
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
