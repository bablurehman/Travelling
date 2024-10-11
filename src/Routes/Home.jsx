import React from "react";

import Trendings from "../Components/Trending/Trendings.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import AboutUs from "../Components/AboutUs/AboutUs.jsx";
import ContactForm from "../Components/ContactForm/ContactForm.jsx";
import Populars from "../Components/Popular/Populars.jsx";
import Destination from "../Components/Destinations/Destination.jsx";

const Home = () => {
  return (
    <>
      <Trendings />
      <Populars />
      <Destination />
      <AboutUs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
