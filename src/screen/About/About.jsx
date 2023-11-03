import React from "react";
import { Header } from "../../others/Header";

const About = () => {
  return (
    <div>
      <Header />
      <HeroImage />
    </div>
  );
};

const HeroImage = () => {
  return (
    <>
      <header>
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",

            backgroundImage: `url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/driftly/banners/image.webp')`,

            height: "500px",
          }}
        >
          <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div class="container mx-auto px-4 flex h-full mt-10">
              <div class="px-6 text-left text-white md:px-12">
                <div class="mt-2 mb-16 text-xl font-bold tracking-tight md:text-4xl xl:text-4xl">
                  We sell cars, but <br></br>we aren't car salesmen <br />
                  <span>Hotel Inner Circle</span>
                </div>

                <div className="text-xs p-2">
                  Your experience doesn’t end once you get the keys. Our goal is
                  to make sure you have peace of mind when it comes to your new
                  ride.
                </div>

                <button className="">
                  <svg
                    width="180"
                    height="48"
                    viewBox="0 0 180 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0"
                        y1="0.5"
                        x2="1"
                        y2="0.5"
                      >
                        <stop offset="0" stopColor="#0BF2B3" />

                        <stop offset="1" stopColor="#00BAB8" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,0H156a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24H24A24,24,0,0,1,0,24V0A0,0,0,0,1,0,0Z"
                      fill="url(#linear-gradient)"
                    />

                    <text
                      transform="translate(90 29)"
                      fill="#fff"
                      fontSize="14"
                    >
                      <tspan x="-62.48" y="0">
                        SEE HOW IT WORKS
                      </tspan>
                    </text>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default About;
