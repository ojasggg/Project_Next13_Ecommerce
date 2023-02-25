import React from "react";
import { Hero, ProductList } from "../components";

const newArrival = [
  "Top 20",
  "Audio & Video",
  "Laptops & Computers",
  "Video Cameras",
];

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div className="mt-10">
        <ProductList heading="Hot New Arrivals" itemCategories={newArrival} />
      </div>
      <div className="mt-10">
        <ProductList heading="Trending Now" itemCategories={newArrival} />
      </div>
    </main>
  );
};

export default HomePage;
