import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white bg-black lg:text-left">
        <div className="container mx-auto">
          <div className="py-10 mx-6 text-left md:text-left">
            <div className="flex">
              <Link to="/">
                <img
                  className="w-auto h-10 sm:h-16"
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/Driftly_Logo_Reverse.webp"
                  alt=""
                />
              </Link>
            </div>

            <div className="grid justify-between gap-1 grid-1 md:grid-cols-2 lg:grid-cols-5">
              <div className="p-2 ">
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

              <div className="m-auto font-light">
                <p className="flex justify-center mb-4 uppercase md:justify-start">
                  Search Cars
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Sell/Trade
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Financing
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Car Care
                  </a>
                </p>
              </div>

              <div className="m-auto font-light">
                <h6 className="flex justify-center mb-4 uppercase md:justify-start">
                  How it Works
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    About Us
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Career
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Support
                  </a>
                </p>
              </div>

              <div className="m-auto font-light">
                <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
                  FOLLOW US
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Facebook
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Twitter
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-white ">
                    Instagram
                  </a>
                </p>
              </div>

              <div className="my-auto">
                <h6 className="flex justify-center m-auto mb-4 font-semibold uppercase md:justify-start">
                  Subscribe to our newsletter
                </h6>
                <div className="">
                  <div className="relative">
                    {" "}
                    <input
                      type="text"
                      className="w-full h-10 px-4 bg-white focus:outline-none hover:cursor-pointer"
                      name=""
                    />
                    <button className="h-10 text-[#0cf2b4] absolute  text-2xl right-1 px-3  hover:scale-125">
                      <AiOutlineArrowRight />
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2"></div>
          <div className="flex items-center justify-center p-6 text-gray-400 border-neutral-200 lg:justify-between ">
            <div className="hidden mr-12 lg:block">
              <span>©Driftly 2021. All rights reserved</span>
            </div>

            <div className="flex justify-center">
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
