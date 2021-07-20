import React, { useEffect } from "react";
import Carousel from "./Carousel";

const Home = () => {
  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("style", "background-image: url(../guitar_home_img.jpg)");
  });
  return <>{/* <Carousel /> */}</>;
};
export default Home;
