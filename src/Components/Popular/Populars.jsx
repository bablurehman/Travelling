import React from "react";

import "./Popular.css";

import pd_1 from "../../assets/pd1.png";
import pd_2 from "../../assets/pd2.png";
import pd_3 from "../../assets/pd3.png";
import pd_4 from "../../assets/pd4.png";
import pd_5 from "../../assets/pd5.png";
import pd_6 from "../../assets/pd6.png";

import PopularData from "./PopularData.jsx";

const Populars = () => {
  return (
    <>
      <div className="popular">
        <h1 className="heading">International Destinations</h1>
        <p className="para">
          Tours give you opportunity to see wonderful adventures and
          architectures
        </p>

        <PopularData
          className="pc-left"
          heading="The Colosseum, Rome"
          text="The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint.
Set in the heart of the city, the Colosseum is an easy place to visit. Direct flights from around the world land in Rome daily, making it a destination you can visit in a weekend if you choose. Wander through Rome's ancient streets."
          image={pd_1}
        />

        <PopularData
          className="pc-right"
          heading="Statue of Liberty, New York City"
          text="America is full of great sights and places to visit, but it's the Statue of Liberty that represents the United States like no other place. This symbol of freedom in New York City was gifted by the French to the American people in 1896.
Of all the attractions in New York City, this is one every tourist must see. The best thing to do at the Statue of Liberty is to take a ride up to her crown and soak up the view over the city. Access to the statue is via ferry, also a highlight of a visit."
          image={pd_2}
        />

        <PopularData
          className="pc-left"
          heading="Great Wall of China"
          text="In a land of modern cities and towering skyscrapers, the Great Wall of China, built between the 14th and 17th centuries, is a stark contrast but a striking image that all visitors to China should see.
A stroll along the top of the wall provides an incredible view of the structure snaking off into the distance. The wall stretches an astounding 21,196 kilometers, through some remote areas.
Many travelers seeing the sights of China choose to visit the wall on easily organized tours from Beijing, a relatively short motorcoach ride away."
          image={pd_3}
        />

        <PopularData
          className="pc-right"
          heading="Mount Kilimanjaro"
          text="The highest peak in all of Africa, this majestic mountain – a dormant volcano – is one of the most recognizable symbols of the continent. The snowcapped peak is an impressive 5,985 meters (19,340 feet) and is often the backdrop to photographs of the wild animals that roam Amboseli National Park and other areas.
You can see this beautiful sight from afar or tackle the multi-day hike to the top of Mount Kilimanjaro for the fantastic views over the land, and to watch the sunrise."
          image={pd_4}
        />

        <PopularData
          className="pc-left"
          heading="Chichen Itza, Mexico"
          text="The ancient Mayan ruins of Chichen Itza have been drawing curious tourists since they were first brought to light by a popular book by John Lloyd Stevens in 1843. Today the site, located near the center of the Yucatan Peninsula, is one of the top tourist attractions in Mexico and is a UNESCO World Heritage Site.
The 30-meter-high Pyramid of Kukulkan has been restored to its full glory along with many of the other significant buildings.
Chichen Itza is located about 200 kilometers from Cancun."
          image={pd_5}
        />

        <PopularData
          className="pc-right"
          heading="Mount Fuji, Japan"
          text="Mount Fuji is the most well-known and highest mountain in Japan. Often pictured snowcapped, this dormant volcano is both a spiritual site and one of the top tourist attractions in Japan. Soaring 3,776 meters high. It is one of three Holy Mountains, all of which are UNESCO World Heritage Sites.
Hiking to the top of the mountain is a popular thing to do in Japan. Each year, nearly 300,000 people follow one of four routes to the top. Mount Fuji is located 100 kilometers east of Tokyo and is easily accessible via public transit and tours.

"
          image={pd_6}
        />
      </div>
    </>
  );
};

export default Populars;
