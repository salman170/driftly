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
  const [BodyType, setBodyType] = useState(true);
  const [colors, setColors] = useState(true);
  const [OtherFeatures, setOtherFeatures] = useState(false);

  return (
    <div className="px-2 ">
      {/* filter Section */}
      <section>
        <div className="flex items-end justify-between py-3 border-b-2">
          <div className="flex gap-3 ">
            <PiSlidersLight className="text-2xl" />
            <div className="text-xl uppercase">Filter</div>
          </div>
          <div className="cursor-pointer text-[#00BAB8] underline underline-offset-2  ">
            Clear All
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <div className="mt-5 mb-3 border-b-2 ">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer "
          onClick={() => setBudget(!Budget)}
        >
          <div className="text-sm font-semibold select-none"> Budget</div>
          <div className={`duration-200 ${Budget ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {Budget && <BudgetFilter />}
      </div>

      {/* Brand and Model */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setBrandModel(!BrandModel)}
        >
          <div className="text-sm font-semibold select-none">
            Brand and Model
          </div>
          <div className={`duration-200 ${BrandModel ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {BrandModel && <BrandModelFilter />}
      </div>

      {/* Model Year */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setModalYear(!ModalYear)}
        >
          <div className="text-sm font-semibold select-none"> Model Year</div>
          <div className={`duration-200 ${ModalYear ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {ModalYear && <ModelYearFilter />}
      </div>

      {/* Kilometers Driven */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setKilometers(!Kilometers)}
        >
          <div className="text-sm font-semibold select-none">
            Kilometers Driven
          </div>
          <div className={`duration-200 ${Kilometers ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {Kilometers && <KilometersDrivenFilter />}
      </div>

      {/* Gearbox */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setGearBox(!GearBox)}
        >
          <div className="text-sm font-semibold select-none"> Gearbox</div>
          <div className={`duration-200 ${GearBox ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {GearBox && <GearBoxFilter />}
      </div>

      {/* Fuel Type */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setFuelType(!FuelType)}
        >
          <div className="text-sm font-semibold select-none"> Fuel Type</div>
          <div className={`duration-200 ${FuelType ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {FuelType && <FuelTypeFilter />}
      </div>

      {/* Body Type */}
      <div className="mt-5 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setBodyType(!BodyType)}
        >
          <div className="text-sm font-semibold select-none"> Body Type</div>
          <div className={`duration-200 ${BodyType ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {BodyType && <BodyTypeFiter />}
      </div>

      {/* Other features */}
      <div className="mt-5 mb-3 border-b-2 ">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setColors(!colors)}
        >
          <div className="text-sm font-semibold select-none"> Colour</div>
          <div className={`duration-200 ${colors ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {colors && <ColourFilter />}
      </div>

      {/* Other features */}
      <div className="py-3 mb-3 border-b-2">
        <div
          className="flex items-center justify-between pt-1 pb-3 cursor-pointer"
          onClick={() => setOtherFeatures(!OtherFeatures)}
        >
          <div className="text-sm font-semibold select-none">
            {" "}
            Other features
          </div>
          <div className={`duration-200 ${OtherFeatures ? "rotate-180" : ""}`}>
            <BsChevronDown />
          </div>
        </div>
        {OtherFeatures && <OtherFeaturesFilter />}
      </div>
    </div>
  );
};

const BudgetFilter = () => {
  const [minValue, setMinValue] = useState(5000);
  const [maxValue, setMaxValue] = useState(1000000);

  const handleMinChange = (event) => {
    setMinValue(parseInt(event.target.value, 10));
  };

  const handleMaxChange = (event) => {
    setMaxValue(parseInt(event.target.value, 10));
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between mb-4">
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{minValue}</div>
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{maxValue}</div>
      </div>
      <div>
        <div className="flex mb-1">
          <input
            type="range"
            min="0"
            max={maxValue}
            value={minValue}
            step={10000}
            onChange={handleMinChange}
            className="w-full bg-none"
          />
          <input
            type="range"
            min={100000}
            max={1000000}
            value={maxValue}
            step={10000}
            onChange={handleMaxChange}
            className="w-full "
          />
        </div>
        <div className="flex justify-between">
          <div>Min</div>
          <div>Max</div>
        </div>
        <div
          onClick={() => {
            setMaxValue(1000000);
            setMinValue(5000);
          }}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-[#00BAB8]"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

const BrandModelFilter = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCheckboxChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);

    if (searchText.length === 0) {
      setSearchResults([]);
    } else {
      const filteredResults = BrandModelData.filter((brand) =>
        brand.brandName.toLowerCase().includes(searchText)
      );
      setSearchResults(filteredResults);
    }
  };

  const clearSearch = () => {
    setSearchText("");
    setSearchResults([]);
  };

  const BrandModelData = [
    {
      brandName: "Maruti Suzuki",
      totalCount: "240",
    },
    {
      brandName: "Nissan",
      totalCount: "160",
    },
    {
      brandName: "Honda",
      totalCount: "100",
    },
    {
      brandName: "Toyota",
      totalCount: "100",
    },
    {
      brandName: "BMW",
      totalCount: "80",
    },
    {
      brandName: "Audi",
      totalCount: "80",
    },
    {
      brandName: "Ford",
      totalCount: "70",
    },
    {
      brandName: "Chevrolet",
      totalCount: "60",
    },
    {
      brandName: "Hyundai",
      totalCount: "55",
    },
    {
      brandName: "Volkswagen",
      totalCount: "50",
    },
    {
      brandName: "Mercedes-Benz",
      totalCount: "45",
    },
    {
      brandName: "Kia",
      totalCount: "40",
    },
    {
      brandName: "Volvo",
      totalCount: "35",
    },
    {
      brandName: "Subaru",
      totalCount: "30",
    },
    {
      brandName: "Porsche",
      totalCount: "25",
    },
    {
      brandName: "Ferrari",
      totalCount: "20",
    },
    {
      brandName: "Jaguar",
      totalCount: "18",
    },
    {
      brandName: "Mazda",
      totalCount: "16",
    },
    {
      brandName: "Lexus",
      totalCount: "14",
    },
    {
      brandName: "Bentley",
      totalCount: "12",
    },
    {
      brandName: "Land Rover",
      totalCount: "10",
    },
    {
      brandName: "McLaren",
      totalCount: "9",
    },
  ];

  return (
    <div className="mb-6 ">
      <div className="relative mb-4">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          className="w-full p-1 mt-1 border rounded"
          placeholder="Search Brands"
        />
        {searchText.length > 0 && (
          <div
            onClick={clearSearch}
            className="absolute text-lg text-red-400 cursor-pointer top-[20%] right-4"
          >
            x
          </div>
        )}
      </div>
      <div className="max-h-[45vh] overflow-y-scroll">
        {(searchText.length > 0 ? searchResults : BrandModelData).map(
          (data, index) => (
            <div key={index} className="mb-1">
              <input
                type="checkbox"
                className="transform cursor-pointer scale-[1.0] mx-2"
                id={`compareCheckbox${index}`}
                onChange={() => handleCheckboxChange(data.brandName)}
                checked={selectedBrands.includes(data.brandName)}
              />
              <label
                htmlFor={`compareCheckbox${index}`}
                className="cursor-pointer"
              >
                {data.brandName} ({data.totalCount})
              </label>
            </div>
          )
        )}

        {searchText.length > 0 && searchResults.length === 0 && (
          <p>No search results</p>
        )}
      </div>
      <div className="mt-4 text-sm">
        <div className="mb-1 font-medium">Selected Brands:</div>
        <div className="flex flex-wrap gap-x-2 font-extralight">
          {selectedBrands.map((brand, index) => (
            <div key={index}>{brand},</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ModelYearFilter = () => {
  const [minYear, setMinYear] = useState(2009);
  const [maxYear, setMaxYear] = useState(2023);

  const handleMinChange = (event) => {
    setMinYear(parseInt(event.target.value, 10));
  };

  const handleMaxChange = (event) => {
    setMaxYear(parseInt(event.target.value, 10));
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between mb-4">
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{minYear}</div>
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{maxYear}</div>
      </div>
      <div>
        <div className="flex mb-1">
          <input
            type="range"
            min={2009}
            max={maxYear}
            value={minYear}
            step={1}
            onChange={handleMinChange}
            className="w-full bg-none"
          />
          <input
            type="range"
            min={2009}
            max={2023}
            value={maxYear}
            step={1}
            onChange={handleMaxChange}
            className="w-full "
          />
        </div>
        <div className="flex justify-between">
          <div>Min</div>
          <div>Max</div>
        </div>
        <div
          onClick={() => {
            setMaxYear(1000000);
            setMinYear(5000);
          }}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-[#00BAB8]"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

const KilometersDrivenFilter = () => {
  const [minKM, setMinKM] = useState(0);
  const [maxKM, setMaxKM] = useState(50000);

  const handleMinChange = (event) => {
    setMinKM(parseInt(event.target.value, 10));
  };

  const handleMaxChange = (event) => {
    setMaxKM(parseInt(event.target.value, 10));
  };

  return (
    <div className="mb-6 text-xs">
      <div className="flex justify-between mb-4">
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{minKM}</div>
        <div className="px-5 py-2 rounded bg-[#F4F4F4] w-min">{maxKM}</div>
      </div>
      <div>
        <div className="flex mb-1">
          <input
            type="range"
            min={0}
            max={maxKM}
            value={minKM}
            step={1000}
            onChange={handleMinChange}
            className="w-full bg-none"
          />
          <input
            type="range"
            min={0}
            max={50000}
            value={maxKM}
            step={1000}
            onChange={handleMaxChange}
            className="w-full "
          />
        </div>
        <div className="flex justify-between">
          <div>0</div>
          <div>50K+</div>
        </div>
        <div
          onClick={() => {
            setMaxKM(1000000);
            setMinKM(5000);
          }}
          className="mt-2 underline cursor-pointer text-end underline-offset-2 text-[#00BAB8]"
        >
          Clear filter
        </div>
      </div>
    </div>
  );
};

const GearBoxFilter = () => {
  const [selectedGearBox, setSelectedGearBox] = useState([]);

  const handleCheckboxChange = (gearBox) => {
    if (selectedGearBox.includes(gearBox)) {
      setSelectedGearBox(
        selectedGearBox.filter((gearBoxType) => gearBoxType !== gearBox)
      );
    } else {
      setSelectedGearBox([...selectedGearBox, gearBox]);
    }
  };

  return (
    <div className="mb-6 ">
      <div className="mb-1">
        <input
          type="checkbox"
          className="transform cursor-pointer scale-[1.0] mx-2"
          id={`Mannual`}
          onChange={() => handleCheckboxChange("Mannual")}
          checked={selectedGearBox.includes("Mannual")}
        />
        <label htmlFor={`Mannual`} className="cursor-pointer ">
          Mannual
        </label>
      </div>
      <div className="mb-2">
        <input
          type="checkbox"
          className="transform cursor-pointer scale-[1.0] mx-2"
          id={`Automatic`}
          onChange={() => handleCheckboxChange("Automatic")}
          checked={selectedGearBox.includes("Automatic")}
        />
        <label htmlFor={`Automatic`} className="cursor-pointer">
          Automatic
        </label>
      </div>
      {/* <div>{selectedGearBox}</div> */}
    </div>
  );
};

const FuelTypeFilter = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCheckboxChange = (brandName) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  const FuelTypeData = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];

  return (
    <div className="mb-6 ">
      {FuelTypeData.map((data, index) => (
        <div key={index} className="mb-2 select-none">
          <input
            type="checkbox"
            className="transform cursor-pointer scale-[1.0] mx-2"
            id={`compareCheckbox${index}`}
            onChange={() => handleCheckboxChange(data)}
            checked={selectedBrands.includes(data)}
          />
          <label htmlFor={`compareCheckbox${index}`} className="cursor-pointer">
            {data}
          </label>
        </div>
      ))}
    </div>
  );
};

const BodyTypeFiter = () => {
  const [selectedBodyTypes, setSelectedBodyTypes] = useState([]);

  const BodyTypeData = [
    {
      title: "Hatchback",
      img2: require("../../assets/Home/HATCHBACK-B.png"),
      color: "F4F4F4",
    },
    {
      title: "SUV",
      img2: require("../../assets/Home/SUV-B.png"),
      color: "fff7eb",
    },
    {
      title: "SEDAN",
      img2: require("../../assets/Home/SEDAN-B.png"),
      color: "ecfad7",
    },
    {
      title: "MUV",
      img2: require("../../assets/Home/MUV-B.png"),
      color: "d4faf6",
    },
    {
      title: "Coupe",
      img2: require("../../assets/Home/COUPE-B.png"),
      color: "deebff",
    },
    {
      title: "Convertible",
      img2: require("../../assets/Home/Convertible-B.png"),
      color: "e7e1fa",
    },
  ];

  const handleSelect = (title) => {
    if (selectedBodyTypes.includes(title)) {
      setSelectedBodyTypes(
        selectedBodyTypes.filter((selected) => selected !== title)
      );
    } else {
      setSelectedBodyTypes([...selectedBodyTypes, title]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 mb-6 lg:grid-cols-3">
      {BodyTypeData.map((x, i) => {
        const isSelected = selectedBodyTypes.includes(x.title);

        return (
          <div
            key={i}
            className={`bg-[#${x.color}] rounded text-center cursor-pointer relative select-none`}
            onClick={() => handleSelect(x.title)}
          >
            <div className="flex items-end justify-center mb-2 h-14 ">
              <img src={x.img2} alt="" srcSet="" className="px-1" />
            </div>
            <div className="text-sm">{x.title}</div>
            {isSelected && (
              <div className="absolute top-2 right-2">
                <img
                  src={require("../../assets/Home/ionic-ios-checkmark-circle-outline.png")}
                  alt=""
                  srcSet=""
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ColourFilter = () => {
  const [selectedColourTypes, setSelectedColourTypes] = useState([]);

  const ColourFilterData = [
    {
      title: "Red",
      color: "#D91414",
    },
    {
      title: "Blue",
      color: "#18386C",
    },
    {
      title: "Black",
      color: "#000000",
    },
    {
      title: "White",
      color: "#FAFAFA",
    },
    {
      title: "Silver",
      color: "#F4F4F4",
    },
    {
      title: "Brown",
      color: "#8B461B",
    },
    {
      title: "Yellow",
      color: "#FFCE2C",
    },
  ];

  const handleSelect = (title) => {
    if (selectedColourTypes.includes(title)) {
      setSelectedColourTypes(
        selectedColourTypes.filter((selected) => selected !== title)
      );
    } else {
      setSelectedColourTypes([...selectedColourTypes, title]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 lg:gap-5 lg:grid-cols-4">
      {ColourFilterData.map((x, i) => {
        const isSelected = selectedColourTypes.includes(x.title);
        return (
          <div
            key={i}
            className={` rounded text-center cursor-pointer relative`}
            onClick={() => handleSelect(x.title)}
          >
            <div
              className={`flex items-end justify-center mb-2 h-14 rounded duration-200 bg-[${
                x.color
              }]  ${isSelected ? " shadow-lg shadow-gray-600" : "border"} `}
            ></div>
            <div className={`text-xs ${isSelected && "font-semibold text-xl"}`}>
              {" "}
              {x.title}
            </div>
            {/* {isSelected && (
              <div className="absolute top-2 right-2">
                <img
                  src={require("../../assets/Home/ionic-ios-checkmark-circle-outline.png")}
                  alt=""
                  srcSet=""
                />
              </div>
            )} */}
          </div>
        );
      })}

      <div
        className={` rounded text-center cursor-pointer relative`}
        onClick={() => handleSelect("Others")}
      >
        <div
          className={`flex items-end justify-center mb-2 h-14 rounded duration-200   ${
            selectedColourTypes.includes("Others")
              ? " shadow-lg shadow-gray-600"
              : "border"
          } `}
        >
          <img
            src={require("../../assets/Home/otherColor.png")}
            alt=""
            srcset=""
            className="w-full h-full"
          />
        </div>
        <div
          className={`text-xs ${
            selectedColourTypes.includes("Others") && "font-semibold text-xl"
          }`}
        >
          Others
        </div>
      </div>
    </div>
  );
};

const OtherFeaturesFilter = () => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleCheckboxChange = (brandName) => {
    if (selectedFeatures.includes(brandName)) {
      setSelectedFeatures(
        selectedFeatures.filter((brand) => brand !== brandName)
      );
    } else {
      setSelectedFeatures([...selectedFeatures, brandName]);
    }
  };

  const OthersFeaturesData = [
    "ABS",
    "Traction Control",
    "Climate Control",
    "CarPlay",
    "Rear AC Vents",
  ];

  return (
    <div className="mb-6 ">
      {OthersFeaturesData.map((data, index) => (
        <div key={index} className="mb-2 select-none">
          <input
            type="checkbox"
            className="transform cursor-pointer scale-[1.0] mx-2"
            id={`compareCheckbox${index}`}
            onChange={() => handleCheckboxChange(data)}
            checked={selectedFeatures.includes(data)}
          />
          <label htmlFor={`compareCheckbox${index}`} className="cursor-pointer">
            {data}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilteringPanel;
