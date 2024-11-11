import React from "react";
import Banner from "../Components/Home/Banner";
import About from "../Components/Home/About";
import Courses from "../Components/Home/Courses";
import Choose from "../Components/Home/Choose";
import Pricing from "../Components/Home/Pricing";
import Appointment from "../Components/Home/Appointment";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Courses />
      <Choose />
      <Pricing />
      <Appointment />
    </>
  );
};

export default Home;
