import React from "react";
import Slider from "react-slider";

const EMISlider = ({ MIN, MAX, value, setValue, steps }) => {
  const styles = `
    .slider {
      width: 100%;
      height: 4px;
      background: linear-gradient(to left, #00BAB8, #0BF2B3);
      margin-top: 20px;
    }

    .slider .thumb {
      width: 20px;
      height: 20px;
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid red;
      border-color: #00BAB8;
      top: -8px;
      background-color: white;
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
          onChange={setValue}
          value={value}
        />
      </div>
    </>
  );
};

export default EMISlider;
