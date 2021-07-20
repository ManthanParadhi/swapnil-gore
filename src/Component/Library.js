import React, { useEffect } from "react";

const Library = () => {
  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("style", "background-image: url(../guitar_home_img.jpg)");
  });
  return <div></div>;
};

export default Library;
