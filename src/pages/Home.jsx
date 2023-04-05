import React from "react";
import { NavBar } from "../components";
import { bg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-full flex md:h-screen">
        <img
          src={bg}
          alt=""
          className="absolute h-full left-0 top-0 bottom-0 w-full object-cover bg-cover z-0"
        />
        <div className="absolute w-full h-full left-0 right-0 bottom-0 bg-gradient-to-l from-gradient1 to-gradient2"></div>

        <div className="container mx-auto z-10 mt-32 flex flex-col md:flex-row md:gap-5">
          <div className="left-side">
            <h1 className="text-4xl font-poppins text-white font-medium max-w-2xl leading-none md:text-7xl md:font-bold">
              International Currency Transfer Provider
            </h1>
            <p className="mt-4">
              <FontAwesomeIcon
                size="lg"
                icon={faCircleCheck}
                className="text-primaryColor2"
              />
              <span className="text-white text-2xl ml-5">
                Great exchanges rates
              </span>
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                size="lg"
                icon={faCircleCheck}
                className="text-primaryColor2"
              />
              <span className="text-white text-2xl ml-5">No hidden fees</span>
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                size="lg"
                icon={faCircleCheck}
                className="text-primaryColor2"
              />
              <span className="text-white text-2xl ml-5">24/7 Transfers</span>
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                size="lg"
                icon={faCircleCheck}
                className="text-primaryColor2"
              />
              <span className="text-white text-2xl ml-5">
                5-star customer rating
              </span>
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                size="lg"
                icon={faCircleCheck}
                className="text-primaryColor2"
              />
              <span className="text-white text-2xl ml-5">
                Award-winning service
              </span>
            </p>

            <div className="flex items-center gap-4 mt-8">
              <button className="w-16 h-16 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full"></button>
              <span className="text-xl text-white">See how it works</span>
            </div>
          </div>

          <div className="mt-10 right-side md:mt-0 md:w-1/3">
            <div className="card bg-gradient-to-r from-primaryColor to-secondaryColor p-4 rounded-xl text-center text-white">
              <p className="text-xl">Exchange Rate</p>
              <h2 className="text-2xl">1 GBP = 1.29356 USD</h2>
            </div>
            <div className="bg-white p-5">
              <select name="bank" id="bank" className="w-full p-2 my-5">
                <option value="bank_transfer">Bank Transfer</option>
                <option value="bank_transfer">Send Money</option>
                <option value="bank_transfer">Interest Money</option>
                <option value="bank_transfer">Invest Money</option>
              </select>
              <select name="bank" id="bank" className="w-full p-2 my-5">
                <option value="bank_transfer">GBP</option>
                <option value="bank_transfer">USD</option>
                <option value="bank_transfer">EUR</option>
                <option value="bank_transfer">YEN</option>
              </select>
              <select name="bank" id="bank" className="w-full p-2 my-5">
                <option value="bank_transfer">USD</option>
                <option value="bank_transfer">GBP</option>
                <option value="bank_transfer">EUR</option>
                <option value="bank_transfer">YEN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
