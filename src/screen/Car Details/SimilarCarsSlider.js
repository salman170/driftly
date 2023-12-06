import React, { useRef, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

// import MercedesAMGGLC from "../../assets/Home/Mercedes AMG GLC.png";
// import AudiQ2 from "../../assets/Home/Audi Q2.png";
// import Porsche from "../../assets/Home/Porsche.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "./HomeSlider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function SimilarCarsSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [selectedCars, setSelectedCars] = useState([]);

  const data = [
    {
      carName: 'BMW X7',
      EMI: '1,20,000',
      detail: 'XDrive 401 M Sport',
      year: '2019',
      fuel: 'Petrol',
      kilometer: '23000',
      img: require('../../assets/Home/BMW X7.png'),
      price: '80,00,000',
      isFavorite: false,
    },
    {
      carName: 'AUDDI 7',
      EMI: '1,20,000',
      detail: 'XDrive 401 M Sport',
      year: '2019',
      fuel: 'Diesel',
      kilometer: '23000',
      img: require('../../assets/Home/BMW X7.png'),
      price: '40,00,000',
      isFavorite: false,
    },
    {
      carName: 'JEEP',
      EMI: '1,20,000',
      detail: 'XDrive 401 M Sport',
      year: '2019',
      fuel: 'CNG',
      kilometer: '23000',
      img: require('../../assets/Home/BMW X7.png'),
      price: '30,00,000',
      isFavorite: false,
    },
    {
      carName: 'BMW X5',
      EMI: '1,20,000',
      detail: 'XDrive 401 M Sport',
      year: '2019',
      fuel: 'Electric',
      kilometer: '23000',
      img: require('../../assets/Home/BMW X7.png'),
      price: '10,00,000',
      isFavorite: false,
    },
  ];

  const handleToggleFavorite = (index) => {
    setSelectedCars((prevSelectedCars) => {
      if (prevSelectedCars.includes(index)) {
        return prevSelectedCars.filter((selectedCar) => selectedCar !== index);
      } else {
        return [...prevSelectedCars, index];
      }
    });
  };

  return (
    <>
      <div className='container px-4 mx-auto mt-15'>
        <div className='z-10 flex justify-between items-center left-4 md:right-10 -top-16 w-[100]'>
          <div className='mb-2 text-4xl text-gray-500 font-extralight'>
            Similar Cars
          </div>
          <div className='flex gap-2'>
            <div
              ref={navigationPrevRef}
              className='p-1 sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
            >
              <AiOutlineArrowLeft />
            </div>
            <div
              ref={navigationNextRef}
              className='sm:p-2 cursor-pointer font-bold text-2xl hover:text-[#0cf2b4] hover:scale-125'
            >
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          centeredSlides={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='max-w-[90%] lg:max-w-[80%]'
        >
          <div className=''>
            {data.map((x, i) => {
              const isFavorite = selectedCars.includes(i);
              return (
                <div className='container justify-end p-2 mx-auto'>
                  {' '}
                  <SwiperSlide
                    key={i}
                    className='justify-end w-[280px] bg-white shadow-lg shadow-gray-300 hover:shadow-2xl hover:shadow-gray-500'
                  >
                    <div className='relative'>
                      <img src={x.img} alt={x.carName} className='w-full' />
                      <div className='bg-[#00F2B4] px-4 py-2.5 bg-opacity-50 text-white rounded-tl-xl absolute bottom-0 right-0'>
                        ₹ {x.price}
                      </div>
                      <AiFillHeart
                        className={`absolute text-2xl top-2 right-2 cursor-pointer ${
                          isFavorite ? 'text-red-500' : 'text-white'
                        }`}
                        onClick={() => handleToggleFavorite(i)}
                      />
                    </div>
                    <div className='p-4'>
                      <div className='flex items-end justify-between p-2 '>
                        <div className='text-xl '>{x.carName}</div>
                        <div className='text-sm'>EMI : {x.EMI}</div>
                      </div>
                      <div className=' mb-2 text-[#8A8A8A]'>{x.detail} </div>
                      <div className=' mb-4 text-[#8A8A8A] font-light text-xs tracking-wider  flex  gap-2'>
                        <div className=''>{x.year}</div> |
                        <div className=''>{x.fuel}</div>|{' '}
                        <div>{x.kilometer}km</div>
                      </div>
                      <div className='flex gap-4  text-[#8A8A8A]'>
                        <input
                          type='checkbox'
                          name='compareCheckbox'
                          id=''
                          className='transform scale-125 cursor-pointer'
                        />
                        <label htmlFor='compareCheckbox '>COMPARE</label>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}