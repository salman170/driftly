import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer class=" text-center text-white bg-black  lg:text-left ">
        <div className="container mx-auto">
          <div class="mx-6 py-10 text-left md:text-left">
            <div className="flex">
              <img
                className="w-auto h-10 sm:h-16"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/Driftly_Logo_Reverse.webp"
                alt=""
              />
            </div>

            <div class="grid-1 grid gap-1 md:grid-cols-2 lg:grid-cols-5 justify-between">
              <div class=" p-2">
                <p className="font-thin">
                  If you need any help, we're available from{" "}
                  <span className="font-bold">8am-8pm, 7 days</span> a week
                </p>
                <br />
                <p className="font-thin">
                  Call us on{" "}
                  <span className="font-bold">040&nbsp;2593&nbsp;5587</span>
                </p>
                <br />
                <p className="font-thin">
                  Whatsapp us{" "}
                  <span className="font-bold">+91&nbsp;9817287234</span>
                </p>
              </div>

              <div class="font-light  m-auto">
                <p class="mb-4 flex justify-center uppercase md:justify-start">
                  Search Cars
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Sell/Trade
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Financing
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Car Care
                  </a>
                </p>
              </div>

              <div class="font-light  m-auto">
                <h6 class="mb-4 flex justify-center uppercase md:justify-start">
                  How it Works
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    About Us
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Career
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Support
                  </a>
                </p>
              </div>

              <div class="font-light  m-auto">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  FOLLOW US
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Facebook
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Twitter
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-white ">
                    Instagram
                  </a>
                </p>
              </div>

              <div className="my-auto">
                <h6 class="mb-4 m-auto  flex justify-center font-semibold uppercase md:justify-start">
                  Subscribe to our newsletter
                </h6>
                <div class="">
                  <div class="relative">
                    {" "}
                    <input
                      type="text"
                      class="bg-white h-10  px-4 w-full  focus:outline-none hover:cursor-pointer"
                      name=""
                    />
                    <button class="h-10 text-[#0cf2b4] absolute  text-2xl right-1 px-3  hover:scale-125">
                      <AiOutlineArrowRight />
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2"></div>
          <div class="flex items-center justify-center text-gray-400 border-neutral-200 p-6  lg:justify-between ">
            <div class="mr-12 hidden lg:block">
              <span>©Driftly 2021. All rights reserved</span>
            </div>

            <div class="flex justify-center">
              <p className="mr-1">Site map</p>|
              <p className="ml-1">Terms of Use</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
