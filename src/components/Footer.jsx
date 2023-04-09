import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black pt-8">
      <div className="container mx-auto p-3 text-white flex flex-col items-center">
        <div className="w-full flex flex-col items-start md:pt-5 md:pb-20 md:flex-row">
          <div className="py-6 px-2 w-full md:w-1/4">
            <h1 className="text-3xl font-bold mb-5">LOGO</h1>
            <p className="font-light md:max-w-md leading-8">
              Quis ipsum suspendisse ultrices gravida commodo. Risus commodo
              veliliee vel viverra maecenas accumsan lacus vel facilisis
            </p>
          </div>

          <div className="py-6 px-2 w-full md:w-1/4">
            <h2 className="text-2xl font-medium pb-2">Company</h2>
            <hr className="w-[50px] h-[2px] border-none bg-primaryColor mb-3" />
            <ul className="space-y-2 text-md font-light">
              <li>
                <a href="#" className="hover:text-primaryColor">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primaryColor">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primaryColor">
                  Our Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primaryColor">
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          <div className="py-6 px-2 w-full md:w-1/4">
            <h2 className="text-2xl font-medium pb-2">Supprot</h2>
            <hr className="w-[50px] h-[2px] border-none bg-primaryColor mb-3" />
            <ul className="space-y-2 text-md font-light">
              <li>
                <a href="#" className="hover:text-primaryColor">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primaryColor">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primaryColor">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="py-6 px-2 w-full md:w-1/4">
            <h2 className="text-2xl font-medium pb-2">Address</h2>
            <hr className="w-[50px] h-[2px] border-none bg-primaryColor mb-3" />
            <ul className="space-y-2 text-md font-light">
              <li className="md:max-w-md">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="mr-3 text-primaryColor"
                />
                Location: 27 Division St, New York, NY 10002, USA
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="mr-3 text-primaryColor"
                />
                Email:
                <a href="#" className="hover:text-primaryColor">
                  {" "}
                  logo@gmail.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-primaryColor"
                />
                Phone:
                <a href="#" className="hover:text-primaryColor">
                  {" "}
                  +233 573 849 441
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full text-center mt-5">
          <hr className="w-full border-none h-[2px] bg-primaryColor" />
          <h4 className="py-5">
            Copyright @{new Date().getFullYear()} LOGO | All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
