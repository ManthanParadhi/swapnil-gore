import React, { useState } from 'react'
import {ImageData} from "./Imagedata"

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const slides = ImageData
    const length = slides.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        {ImageData.map((slide, index) => { 
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index} onClick={prevSlide}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };
  
export default Carousel;