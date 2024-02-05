import React from "react";
import Hero from "../components/Home/Hero";
import Sample from "../components/Home/Sample";
import Testimonials from "../components/Home/Testimonials";
import GiftCard from "../components/GiftCard";
import Highlight from "../components/Home/Highlight";

const Home = () => {
  return (
    <>
      <Hero />
      <Sample/>
      <Testimonials/>
      <GiftCard/>
      <Highlight/>
    </>
  );
};

export default Home;
