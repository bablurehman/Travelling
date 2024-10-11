import React from "react";

import "./Popular.css";

const PopularData = (props) => {
  return (
    <div className={props.className}>
      <div className="pc-text">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>

      <div className="pc-image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default PopularData;
