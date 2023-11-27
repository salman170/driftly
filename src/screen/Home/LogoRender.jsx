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

const LogoRender = ({clickedImage,setClickedImage}) => {
  
  
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
  
  const handleImageClick = (name) => {
    setClickedImage(name);
    // You can perform additional actions based on the clicked image name
    console.log('Clicked image:', name);
  };
  
  return (
    <div>
      <div className="grid grid-cols-4 gap-8 pt-10 duration-1000 border-none lg:grid-cols-10">
        {data.map((x, i) => (
          <div
            key={i}
            className={`flex items-center justify-center cursor-pointer border p-2 group  overflow-hidden hover:shadow-xl  ${
              x.name === clickedImage ? 'bg-gradient-to-tr select-none to-[#00BAB8] from-[#0BF2B3] via-[#0BF2B3] shadow-xl' : ''
            }`}
            onClick={() => {
              handleImageClick(x.name);
              window.scrollTo(0, 200);
            }}
         >
            <img src={x.img} alt={` ${x.name}`} className="scale-[0.6] group-hover:scale-90 duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoRender;
