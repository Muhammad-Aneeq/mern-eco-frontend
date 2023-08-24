import React from "react";
import HeroSection from "./HeroSection";
import TopCategories from "../categories/TopCategories";
import FeatureProducts from "../products/FeatureProducts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <FeatureProducts />
    </div>
  );
};

export default Home;
