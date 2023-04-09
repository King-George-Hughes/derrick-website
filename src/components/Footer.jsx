import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black pt-8">
      <div className="container mx-auto p-3 text-white flex flex-col items-center">
        <div className="w-full flex flex-col items-start md:flex-row">
          <div className="py-6 md:w-1/4">
            <h1 className="text-3xl font-bold mb-5">LOGO</h1>
            <p className="font-light">
              Quis ipsum suspendisse ultrices gravida commodo. Risus commodo
              veliliee vel viverra maecenas accumsan lacus vel facilisis
            </p>
          </div>

          <div className="py-6 md:w-1/4">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Our Pricing</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
            </ul>
          </div>

          <div className="py-6 md:w-1/4">
            <h2>Supprot</h2>
            <ul>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="py-6 md:w-1/4">
            <h2>Address</h2>
            <ul>
              <li>Location: 27 Division St, New York, NY 10002, USA</li>
              <li>
                Email:
                <a href="#"> logo@gmail.com</a>
              </li>
              <li>
                Phone:
                <a href="#"> +233 573 849 441</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4>
            Copyright @{new Date().getFullYear()} LOGO | All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
