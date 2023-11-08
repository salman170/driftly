import React, { useState } from "react";
import { PiSlidersLight } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";

const FilteringPanel = () => {
  const [Budget, setBudget] = useState(false);
  const [BrandModel, setBrandModel] = useState(false);
  const [ModalYear, setModalYear] = useState(false);
  const [Kilometers, setKilometers] = useState(false);
  const [GearBox, setGearBox] = useState(false);
  const [FuelType, setFuelType] = useState(false);
  const [BodyType, setBodyType] = useState(false);
  const [OtherFeatures, setOtherFeatures] = useState(false);

  return (
    <div className="  px-2">
      {/* filter Section */}
      <section>
        <div className="flex justify-between items-end  py-3 border-b-2">
          <div className=" flex gap-3  ">
            <PiSlidersLight className="text-2xl" />
            <div className="text-xl uppercase">Filter</div>
          </div>
          <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2  ">
            Clear All
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <div  className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setBudget(!Budget)}
        >
          <div className="font-semibold text-sm"> Budget</div>
          <BsChevronDown />
        </div>
        {Budget && <div>500</div>}
      </div>

      {/* Brand and Model */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setBrandModel(!BrandModel)}
        >
          <div className="font-semibold text-sm"> Brand and Model</div>
          <BsChevronDown />
        </div>
        {BrandModel && <div>500</div>}
      </div>

      {/* Model Year */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setModalYear(!ModalYear)}
        >
          <div className="font-semibold text-sm"> Model Year</div>
          <BsChevronDown />
        </div>
        {ModalYear && <div>500</div>}
      </div>

      {/* Kilometers Driven */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setKilometers(!Kilometers)}
        >
          <div className="font-semibold text-sm"> Kilometers Driven</div>
          <BsChevronDown />
        </div>
        {Kilometers && <div>500</div>}
      </div>

      {/* Gearbox */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setGearBox(!GearBox)}
        >
          <div className="font-semibold text-sm"> Gearbox</div>
          <BsChevronDown />
        </div>
        {GearBox && <div>500</div>}
      </div>

      {/* Fuel Type */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setFuelType(!FuelType)}
        >
          <div className="font-semibold text-sm"> Fuel Type</div>
          <BsChevronDown />
        </div>
        {FuelType && <div>500</div>}
      </div>

      {/* Body Type */}
      <div className="border-b-2 py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setBodyType(!BodyType)}
        >
          <div className="font-semibold text-sm"> Body Type</div>
          <BsChevronDown />
        </div>
        {BodyType && <div>500</div>}
      </div>

      {/* Other features */}
      <div className=" py-3">
        <div
          className="flex items-center justify-between mb-3"
          onClick={() => setOtherFeatures(!OtherFeatures)}
        >
          <div className="font-semibold text-sm"> Other features</div>
          <BsChevronDown />
        </div>
        {OtherFeatures && <div>500</div>}
      </div>
    </div>
  );
};

export default FilteringPanel;
