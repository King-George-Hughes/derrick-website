import React, { useState } from "react";
import { bg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faAppleAlt,
  faPlay,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavBar,
  Country,
  How,
  Why,
  Service,
  HardWork,
  ProtectMoney,
  Footer,
} from "../components";
import {
  allCountries,
  howItWorks,
  whyChoose,
  transferServices,
  hardWorks,
  protectingMoney,
} from "../data/data";

const Home = () => {
  const [countries, setCountries] = useState(allCountries);
  const [howTo, setHowTo] = useState(howItWorks);
  const [whyYou, setWhyYou] = useState(whyChoose);
  const [service, setService] = useState(transferServices);
  const [hardWork, setHardWork] = useState(hardWorks);
  const [protectMoney, setProtectMoney] = useState(protectingMoney);

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

          <div className="flex flex-col md:flex-row md:space-x-4 md:flex-wrap md:items-center md:justify-center">
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
      <div className="why-choose relative w-full h-full bg-hero-bg2 bg-no-repeat bg-cover bg-center bg-fixed flex md:h-screen">
        <div className="container bg-bgColor w-full mt-auto mx-auto flex flex-col items-center justify-center p-5 md:w-1/2 md:ml-auto md:mt-0 md:mx-0">
          <h1 className="text-center text-4xl font-medium py-3 mb-5">
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

      {/* Transfer Service */}
      <div className="transfer-service py-5">
        <div className="container mx-auto p-3">
          <h1 className="text-center text-4xl font-medium py-3 mb-5 mt-10">
            Personal Currency Transfers Services
          </h1>

          <div className="flex flex-col md:items-center md:justify-center md:flex-row gap-5 md:gap-5">
            {service.map((data) => {
              const { id, title, img, message } = data;

              return (
                <Service key={id} title={title} img={img} message={message} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="key-features bg-bgCardColor mt-10 md:mt-20 py-5 md:py-10">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl font-medium py-3 mb-5 mt-10">
            Money Transfer Company Key Features
          </h1>

          <div className="flex flex-col px-3 md:px-0 md:flex-row">
            <div className="bg-gradient-to-r from-primaryColor to-secondaryColor text-center p-8 w-full md:w-1/4">
              <span className="text-white text-xl">Security</span>
            </div>
            <div className="transition duration-500 ease-in bg-gradient-to-r from-primaryColor2 to-secondaryColo2 text-center p-8 w-full hover:from-primaryColor hover:to-secondaryColor md:w-1/4">
              <span className="text-white text-xl">Cost</span>
            </div>
            <div className="transition duration-500 ease-in bg-gradient-to-r from-primaryColor2 to-secondaryColo2 text-center p-8 w-full hover:from-primaryColor hover:to-secondaryColor md:w-1/4">
              <span className="text-white text-xl">Speed</span>
            </div>
            <div className="transition duration-500 ease-in bg-gradient-to-r from-primaryColor2 to-secondaryColo2 text-center p-8 w-full hover:from-primaryColor hover:to-secondaryColor md:w-1/4">
              <span className="text-white text-xl">Accessibility</span>
            </div>
          </div>

          <div className="bg-white p-5 mx-3 flex flex-col items-center justify-between gap-5 md:gap-10 mb-10 md:p-10 md:mx-0 md:flex-row rounded-b-xl">
            <img
              src="./card.jpg"
              alt=""
              className="w-full max-h-[400px] object-cover md:w-1/3 md:max-h-[550px] rounded-xl"
            />
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 my-5 max-w-3xl">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui. pretium ut lacinia in, elementum id enim.
              </p>
              <p className="text-lg text-gray-600 my-5 max-w-3xl">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae donec velit neque, auctor sit amet aliquam
                vel, ullamcorper sit amet ligula. pellentesque in ipsum id orci
                porta dapibus. curabitur non nulla sit amet nisl tempus
                convallis quis ac lectus. quisque velit nisi elementum id enim
              </p>
              <p className="my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  className="text-primaryColor2 mr-5"
                />
                <span className="text-lg text-gray-600">
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </span>
              </p>
              <p className="my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  className="text-primaryColor2 mr-5"
                />
                <span className="text-lg text-gray-600">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet.
                </span>
              </p>
              <p className="my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  className="text-primaryColor2 mr-5"
                />
                <span className="text-lg text-gray-600">
                  Donec rutrum congue leo eget malesuada.
                </span>
              </p>
              <p className="my-5">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="xl"
                  className="text-primaryColor2 mr-5"
                />
                <span className="text-lg text-gray-600">
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hard Working People */}
      <div className="why-choose relative w-full h-full bg-hero-bg3 bg-no-repeat bg-cover bg-center bg-fixed flex md:h-screen mt-20">
        <div className="container bg-bgColor w-full mt-auto mx-auto flex flex-col items-center justify-center p-5 md:w-1/2 md:mr-auto md:mt-0 md:mx-0">
          <h1 className="text-center text-4xl font-medium py-3 mb-8">
            Being A Money Transfer Service For Hard Working People
          </h1>

          <div className="flex flex-col gap-5 md:gap-16">
            {hardWork.map((data) => {
              const { id, img, title, message } = data;

              return (
                <HardWork key={id} img={img} title={title} message={message} />
              );
            })}
          </div>
        </div>
      </div>

      {/* Protecting your money */}
      <div className="protecting pt-10 md:pt-24 md:pb-10">
        <div className="container mx-auto p-3">
          <h1 className="text-center text-4xl font-medium py-3 mb-8">
            Protecting Your Money
          </h1>

          <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
            {protectMoney.map((data) => {
              const { id, title, message } = data;

              return (
                <ProtectMoney
                  key={id}
                  id={id}
                  title={title}
                  message={message}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Download App */}
      <div className="download-app py-16 md:my-10">
        <div className="container mx-auto flex flex-col items-center p-3 gap-10 md:flex-row md:gap-0">
          <div className="w-full md:w-1/2">
            <p className="text-primaryColor text-lg font-medium">
              Download App
            </p>
            <h2 className="font-bold text-4xl my-4 md:max-w-lg">
              Popular Countries Our Customers Send Money
            </h2>
            <p className="text-gray-600 text-lg md:max-w-lg">
              Instant free download from store cloud based storage for your data
              backup just log in with your mail account from play store and
              using whatever you want for your business purpose.
            </p>
            <div className="flex items-center justify-start my-5 gap-5">
              <button className="transition duration-500 bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full px-8 py-3 text-white flex items-center gap-3 justify-between hover:from-primaryColor2 hover:to-secondaryColo2">
                <FontAwesomeIcon size="xl" icon={faAppleAlt} />
                <div>
                  <h3 className="text-sm font-light">Download on</h3>
                  <h3 className="font-medium">App Store</h3>
                </div>
              </button>
              <button className="transition duration-500 bg-gradient-to-r from-primaryColor2 to-secondaryColo2 rounded-full px-8 py-3 text-white flex items-center gap-3 justify-between hover:from-primaryColor hover:to-secondaryColor">
                <FontAwesomeIcon size="xl" icon={faPlay} />
                <div>
                  <h3 className="text-sm font-light">Download on</h3>
                  <h3 className="font-medium">App Store</h3>
                </div>
              </button>
            </div>
            <h3 className="font-medium text-xl mt-5">
              Over 10 million downloads worldwide
            </h3>
          </div>
          <div className="w-full md:w-1/2">
            <img src="../app.png" alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
