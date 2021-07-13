import React from "react";
import Navigation from "../Component/Navigation";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Navigation />
        </div>
        <div className="col-span-7">
          <Carousel />
        </div>
      </div>
    </>
  );
};
export default Home;
