import React, { useState, useRef, useEffect } from "react";
import { ImageData } from "./Imagedata";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [run, setRun] = useState(true);
  const length = ImageData.length;
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    if (!run) {
      return;
    }

    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, [run]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(ImageData) || ImageData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {ImageData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "overflow-hidden h-64 absolute active"
                : "overflow-hidden h-64 absolute"
            }
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel"
                className="mt-4 image mx-auto"
                onMouseEnter={() => setRun(false)}
                onMouseLeave={() => setRun(true)}
              />
            )}
          </div>
        );
      })}
      <div
        className="arrow-l h-64"
        onClick={prevSlide}
        onMouseEnter={() => setRun(false)}
        onMouseLeave={() => setRun(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ margin: "38% auto" }}
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
      <div
        className="arrow-r h-64"
        onClick={nextSlide}
        onMouseEnter={() => setRun(false)}
        onMouseLeave={() => setRun(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ margin: "38% auto" }}
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </div>
    </section>
  );
};

export default Carousel;
