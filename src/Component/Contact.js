import React, { useEffect } from "react";
import lottie from "lottie-web";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("style", "background-image: url(../contact.jpg)");

    lottie.loadAnimation({
      container: document.querySelector(".youtube"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("../Logo/youtube.json"),
      name: "youtube",
    });
    lottie.loadAnimation({
      container: document.querySelector(".instagram"),
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: require("../Logo/instagram.json"),
      name: "instagram",
    });
  });

  return (
    <div className="socioicons">
      <Social
        to="https://www.youtube.com/channel/UCfLejVj4daL_V_zkvk9Cnig/videos"
        className="youtube"
      ></Social>
      <Social
        to="https://www.youtube.com/channel/UCfLejVj4daL_V_zkvk9Cnig/videos"
        className="instagram"
      ></Social>
    </div>
  );
};

export default Contact;
function Social({ to, className }) {
  return (
    <Link to={{ pathName: { to } }}>
      <div
        className={className}
        onMouseEnter={() => {
          lottie.setDirection(1);
          lottie.play(className);
        }}
        onMouseLeave={() => {
          lottie.setDirection(-1);
          lottie.play(className);
        }}
      ></div>
    </Link>
  );
}
export { Social };
