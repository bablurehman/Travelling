import "./Trending.css";

import td_1 from "../../assets/td1.png";
import td_2 from "../../assets/td2.png";
import td_3 from "../../assets/td3.png";
import td_4 from "../../assets/td4.png";
import td_5 from "../../assets/td5.png";
import td_6 from "../../assets/td6.png";

import React from "react";

const Trendings = () => {
  return (
    <>
      <div className="trending">
        <h1 className="heading">Trending Trips for 2024</h1>
        <p className="para">
          You can discover unique popular destinations using google Maps
        </p>

        <div className="trending-container">
          <div className="tc-card">
            <div className="tc-image">
              <img src={td_1} alt="image" />
              <span>1</span>
            </div>
            <h4>France</h4>
            <p>
              France has been showcased on the world stage. Such a diverse
              country, where age-old traditions are often given a modern reboot.
            </p>
          </div>

          <div className="tc-card">
            <div className="tc-image">
              <img src={td_2} alt="image" />
              <span>2</span>
            </div>
            <h4>Portugal</h4>
            <p>
              Portugal is rising over the past years. It's landscape is so
              diverse, offering stunning beaches, cities home to ancient
              landmarks and magnificent architecture.
            </p>
          </div>

          <div className="tc-card">
            <div className="tc-image">
              <img src={td_3} alt="image" />
              <span>3</span>
            </div>
            <h4>Switzerland</h4>
            <p>
              Switzerland, renowned for its breathtaking landscapes and pristine
              alpine beauty, offers a wide array of captivating tours that cater
              to every traveler's interest.
            </p>
          </div>

          <div className="tc-card">
            <div className="tc-image">
              <img src={td_4} alt="image" />
              <span>4</span>
            </div>
            <h4>Croatia</h4>
            <p>
              Croatia is one of the most picturesque countries in Europe. Along
              the Dalmatian Coast, the shimmering blue ocean separates the
              mainland and the islands.
            </p>
          </div>

          <div className="tc-card">
            <div className="tc-image">
              <img src={td_5} alt="image" />
              <span>5</span>
            </div>
            <h4>Sri Lanka</h4>
            <p>
              Sri Lanka located on the southern coast of India, Sri Lanka is a
              beautiful island home to vibrant forests, colorful cities, and
              picture-perfect beaches.
            </p>
          </div>

          <div className="tc-card">
            <div className="tc-image">
              <img src={td_6} alt="image" />
              <span>6</span>
            </div>
            <h4>Greece</h4>
            <p>
              Greece is riddled with ancient history and 18 UNESCO World
              Heritage Sites, the Acropolis of Athens, Mystras, and the Temple
              of Asclepius at Epidaurus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendings;
