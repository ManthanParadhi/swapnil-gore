import React, { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("style", "background-image: url(../guitar_home_img.jpg)");
  });
  return <div></div>;
};

export default Events;
