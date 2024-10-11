import React from "react";
import "./Destination.css";

import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";
import d4 from "../../assets/d4.png";
import d5 from "../../assets/d5.png";
import india from "../../assets/india.png";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1 className="heading">Famous Destination</h1>
        <p className="para">
          All time most popular destination choices for travellers in India
        </p>

        {/* ---------------------- dc - 1 ------------------ */}

        <div className="dc-1">
          <div className="dc1-data">
            <span>
              Tajmahal <img src={india} alt="" />{" "}
            </span>

            <div className="dc1-image">
              <img src={d1} alt="" />
            </div>

            <p>
              It is located on the banks of Yamuna River, and this wonder of the
              world was built by the Mughal Emperor Shah Jahan as a memorial for
              his beloved wife Mumtaz Mahal.
            </p>
          </div>
          <div className="dc1-data">
            <span>
              Red Fort <img src={india} alt="" />
            </span>
            <div className="dc1-image">
              <img src={d2} alt="" />
            </div>{" "}
            <p>
              It is located in Chandni Chowk Old Delhi, and it was constructed
              under the reign of Mughal emperor Shah Jahan for protection
              against invaders."
            </p>
          </div>
        </div>

        {/*------------------ dc -2 -----------------  */}

        <div className="dc-2">
          <div className="dc2-data">
            <span>
              Amber Fort <img src={india} alt="" />
            </span>
            <div className="dc2-image">
              <img src={d3} alt="" />
            </div>{" "}
            <p>
              It was the residence of the Rajput Maharajas and their families -
              Rajasthan
            </p>
          </div>

          <div className="dc2-data">
            <span>
              Victoria Memorial <img src={india} alt="" />
            </span>
            <div className="dc2-image">
              <img src={d4} alt="" />
            </div>{" "}
            <p>
              Victoria Memorial Hall stands today, as a veritable icon city of
              the - Kolkata.
            </p>
          </div>
          <div className="dc2-data">
            <span>
              India Gate <img src={india} alt="" />
            </span>
            <div className="dc2-image">
              <img src={d5} alt="" />
            </div>{" "}
            <p>
              The India Gate - located on the eastern edge of 'ceremonial axis'
              of - New Delhi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
