import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CryptoMarquee from "../components/CryptoMarquee";
import ToolsToInvest from "../components/ToolsToInvest";
import CryptoJourney from "../components/CryptoJourney";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <CryptoMarquee />
        <ToolsToInvest />
        <CryptoJourney />
        <WhyChooseUs />
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
