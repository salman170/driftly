import React from "react";
import AstonMartin from "../../assets/BrandsLogo/Aston Martin.png";
import Audi from "../../assets/BrandsLogo/Audi.png";
import BMW from "../../assets/BrandsLogo/BMW.png";
import BYD from "../../assets/BrandsLogo/BYD.png";
import Citreon from "../../assets/BrandsLogo/Citreon.png";
import Ferrari from "../../assets/BrandsLogo/Ferrari.png";
import Honda from "../../assets/BrandsLogo/Honda.png";
import Hyundai from "../../assets/BrandsLogo/Hyundai.png";
import Isuzu from "../../assets/BrandsLogo/Isuzu.png";
import Jaguar from "../../assets/BrandsLogo/Jaguar.png";
import Jeep from "../../assets/BrandsLogo/Jeep.png";
import KIA from "../../assets/BrandsLogo/KIA.png";
import Lambo from "../../assets/BrandsLogo/Lambo.png";
import LandRover from "../../assets/BrandsLogo/Land Rover.png";
import Lexus from "../../assets/BrandsLogo/Lexus.png";
import MG from "../../assets/BrandsLogo/MG.png";
import Mahindra from "../../assets/BrandsLogo/Mahindra.png";
import MarutiSuzuki from "../../assets/BrandsLogo/Maruti Suzuki.png";
import Maserati from "../../assets/BrandsLogo/Maserati.png";
import Mclaren from "../../assets/BrandsLogo/Mclaren.png";
import Mercedes from "../../assets/BrandsLogo/Mercedes.png";
import Mini from "../../assets/BrandsLogo/Mini.png";
import Nissan from "../../assets/BrandsLogo/Nissan.png";
import PMV from "../../assets/BrandsLogo/PMV.png";
import Porsche from "../../assets/BrandsLogo/Porsche.png";
import Renault from "../../assets/BrandsLogo/Renault.png";
import RollsRoyce from "../../assets/BrandsLogo/Rolls Royce.png";
import Skoda from "../../assets/BrandsLogo/Skoda.png";
import Tata from "../../assets/BrandsLogo/Tata.png";
import Toyota from "../../assets/BrandsLogo/Toyota.png";
import Volkswagen from "../../assets/BrandsLogo/Volkswagen.png";
import Volvo from "../../assets/BrandsLogo/Volvo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const BBBrand = () => {
  // const [clickedImage, setClickedImage] = useState(null);
  const [full, setFull] = useState(false);

  const data = [
    {
      img: AstonMartin,
      name: "Aston Martin",
    },
    {
      img: Audi,
      name: "Audi",
    },
    {
      img: BMW,
      name: "BMW",
    },
    {
      img: BYD,
      name: "BYD",
    },
    {
      img: Citreon,
      name: "Citreon",
    },
    {
      img: Ferrari,
      name: "Ferrari",
    },
    {
      img: Honda,
      name: "Honda",
    },
    {
      img: Hyundai,
      name: "Hyundai",
    },
    {
      img: Isuzu,
      name: "Isuzu",
    },
    {
      img: Jaguar,
      name: "Jaguar",
    },
    {
      img: Jeep,
      name: "Jeep",
    },
    {
      img: KIA,
      name: "KIA",
    },
    {
      img: Lambo,
      name: "Lambo",
    },
    {
      img: LandRover,
      name: "Land Rover",
    },
    {
      img: Lexus,
      name: "Lexus",
    },
    {
      img: MG,
      name: "MG",
    },
    {
      img: Mahindra,
      name: "Mahindra",
    },
    {
      img: MarutiSuzuki,
      name: "Maruti Suzuki",
    },
    {
      img: Maserati,
      name: "Maserati",
    },
    {
      img: Mclaren,
      name: "Mclaren",
    },
    {
      img: Mercedes,
      name: "Mercedes",
    },
    {
      img: Mini,
      name: "Mini",
    },
    {
      img: Nissan,
      name: "Nissan",
    },
    {
      img: PMV,
      name: "PMV",
    },
    {
      img: Porsche,
      name: "Porsche",
    },
    {
      img: Renault,
      name: "Renault",
    },
    {
      img: RollsRoyce,
      name: "Rolls Royce",
    },
    {
      img: Skoda,
      name: "Skoda",
    },
    {
      img: Tata,
      name: "Tata",
    },
    {
      img: Toyota,
      name: "Toyota",
    },
    {
      img: Volkswagen,
      name: "Volkswagen",
    },
    {
      img: Volvo,
      name: "Volvo",
    },
  ];

  // const handleImageClick = (name) => {
  //   setClickedImage(name);
  //   // You can perform additional actions based on the clicked image name
  //   console.log("Clicked image:", name);
  // };

  return (
    <>
      <div className="grid grid-cols-2 gap-2 px-10 pt-5 mt-10 duration-1000 border-none md:pt-10 sm:grid-cols-4 lg:gap-4 lg:grid-cols-5">
        {data.slice(0, full ? data.length : 10).map((x, i) => (
          <div
            key={i}
            className={`flex items-center justify-center cursor-pointer border p-2 group  overflow-hidden hover:shadow-xl hover:bg-gradient-to-tr select-none to-[#00BAB8] from-[#0BF2B3] via-[#0BF2B3]  hover:border-0 `}
          >
            <Link to="/find-a-car">
              <img
                src={x.img}
                alt={` ${x.name}`}
                className="scale-[0.6] group-hover:scale-[0.8] duration-500"
              />
            </Link>
          </div>
        ))}
      </div>
      <div
        onClick={() => setFull(!full)}
        className="hover:bg-gradient-to-l select-none from-[#00BAB8] to-[#0BF2B3] rounded-r-full rounded-bl-full w-min whitespace-nowrap uppercase px-12 py-3 cursor-pointer bg-white text-black hover:text-white border border-gray-300 mx-auto mt-10 lg:mt-14"
      >
        {full ? "View Less" : "View More"}
      </div>
    </>
  );
};

export default BBBrand;
