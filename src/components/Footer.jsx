import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto p-3 text-white">
        <div>
          <h1>LOGO</h1>
          <p>
            Quis ipsum suspendisse ultrices gravida commodo. Risus commodo
            veliliee vel viverra maecenas accumsan lacus vel facilisis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
