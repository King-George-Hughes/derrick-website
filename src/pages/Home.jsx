import React, { useState } from "react";
import { NavBar, Country, How, Why } from "../components";
import { bg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { allCountries, howItWorks, whyChoose } from "../data/data";

const Home = () => {
  const [countries, setCountries] = useState(allCountries);
  const [howTo, setHowTo] = useState(howItWorks);
  const [whyYou, setWhyYou] = useState(whyChoose);

  return (
    <div className="bg-bgColor">
      {/* NavBar */}
      <NavBar />

      {/* Hero */}
      <div className="relative w-full h-full flex md:h-screen pb-10">
        <img
          src={bg}
          alt=""
          className="absolute h-full left-0 top-0 bottom-0 w-full object-cover bg-cover z-0"
        />
        <div className="absolute w-full h-full left-0 right-0 bottom-0 bg-gradient-to-l from-gradient1 to-gradient2"></div>

        <div className="container px-3 mx-auto z-10 mt-32 flex items-center justify-between flex-col md:flex-row md:gap-5">
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
            <div className="card bg-gradient-to-r from-primaryColor to-secondaryColor p-4 rounded-t-xl text-center text-white">
              <p className="text-xl">Exchange Rate</p>
              <h2 className="text-2xl">1 GBP = 1.29356 USD</h2>
            </div>
            <div className="bg-white p-5 rounded-b-xl">
              <select
                name="bank"
                id="bank"
                className="w-full p-5 my-5 border-2 border-gray-200 rounded-md"
              >
                <option value="bank_transfer" className="p-5">
                  Bank Transfer
                </option>
                <option value="bank_transfer">Send Money</option>
                <option value="bank_transfer">Interest Money</option>
                <option value="bank_transfer">Invest Money</option>
              </select>
              <select
                name="bank"
                id="bank"
                className="w-full p-5 my-5 border-2 border-gray-200 rounded-md"
              >
                <option value="bank_transfer">GBP</option>
                <option value="bank_transfer">USD</option>
                <option value="bank_transfer">EUR</option>
                <option value="bank_transfer">YEN</option>
              </select>
              <select
                name="bank"
                id="bank"
                className="w-full p-5 my-5 border-2 border-gray-200 rounded-md"
              >
                <option value="bank_transfer">USD</option>
                <option value="bank_transfer">GBP</option>
                <option value="bank_transfer">EUR</option>
                <option value="bank_transfer">YEN</option>
              </select>
              <p className="text-md text-gray-600">
                <span className="font-bold text-black">Note: </span>Delivery
                Time 1 Working Days
              </p>

              <button className="text-white bg-gradient-to-r from-primaryColor2 to-secondaryColo2 p-5 w-full my-5 rounded-full">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Countries */}
      <div className="countries py-10">
        <div className="container mx-auto px-5">
          <h1 className="text-center text-4xl font-medium py-5 mb-5">
            Popular Countries Our Customers Send Money
          </h1>

          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center">
            {countries.map((country) => {
              const { id, img, name } = country;

              return <Country key={id} img={img} name={name} />;
            })}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="how-it-works py-10 mb-10">
        <div className="container mx-auto px-5">
          <h1 className="text-center text-4xl font-medium py-5 mb-5">
            How Does Money Transfer Works?
          </h1>

          <div className="flex flex-col gap-5 md:flex-row">
            {howTo.map((how) => {
              const { id, title, img, message } = how;

              return (
                <How
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  message={message}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-choose relative w-full bg-hero-bg bg-no-repeat bg-cover bg-center bg-fixed flex h-screen py-10">
        <div className="container bg-bgColor w-full mt-auto mx-auto flex flex-col items-center justify-center p-5 md:w-1/2 md:ml-auto md:mt-0 md:mx-0">
          <h1 className="text-center text-4xl font-medium py-5 mb-5">
            Why Choose Us
          </h1>

          <div className="flex flex-col md:gap-10">
            {whyYou.map((data) => {
              const { id, title, message } = data;

              return <Why key={id} title={title} message={message} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
