import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Why = ({ id, title, message }) => {
  return (
    <div className="card">
      <h2 className="my-4">
        <FontAwesomeIcon
          size="xl"
          icon={faCircleCheck}
          className="text-primaryColor2"
        />
        <span className="text-2xl ml-5">{title}</span>
      </h2>
      <p className="text-gray-600 max-w-lg">{message}</p>
    </div>
  );
};

export default Why;
