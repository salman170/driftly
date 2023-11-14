import React from "react";
import Slider from "react-slider";

const RangeSlider = ({ MIN, MAX, values, setValues,steps }) => {
  const styles = `
  .slider {
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #00BAB8, #0BF2B3);
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

      <div className="mb-4">
        <Slider
          className="slider "
          min={MIN}
          max={MAX}
          step={steps}
          onChange={setValues}
          value={values}
        />
      </div>
    </>
  );
};

export default RangeSlider;
