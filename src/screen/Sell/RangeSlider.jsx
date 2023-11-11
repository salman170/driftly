import React from "react";
import Slider from "react-slider";
import { useState } from "react";

const RangeSlider = () => {
  const MIN = 100000;
  const MAX = 3000000;
  const [values, setValues] = useState([MIN, MAX]);

  const styles = `
  .swiper-pagination-bullet {
    /* Add gradient styles */
    background: linear-gradient(to right, #00BAB8, #0BF2B3); /* Your gradient color */
    /* Other styles */
    width: 10px;
    height: 10px;
    margin: 0 8px;
    opacity: 1;
    transition: opacity 0.2s ease-out;
  }
  
  .slider {
   
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #00BAB8, #0BF2B3);
    margin-top : 20px;
  }

  .slider .thumb {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid red;
    border-color:  #00BAB8;
    top:-9px;
    background-color: white;
  }

  .track-1 {
    background-color: red;
    z-index: 40;
  }
  
  `;

  return (
    <>
      <style>{styles}</style>
      <div className=" ">
        <div>
          <div>{MIN}</div>
          <div>{MAX}</div>
          <div> {values[0]}</div>
          {values[1]}
          <div className="px-4">
            <Slider
              className="slider "
              min={MIN}
              max={MAX}
              step={10000}
              onChange={setValues}
              value={values}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
