import React from "react";
import Header from "../../others/Header";

const Compare = () => {
  return (
    <>
      <Header />
      <CompareHero />
    </>
  );
};

const CompareHero = () => {
  return (
    <>
      <div className="container p-5 mx-auto">
        <nav className="bg-grey-light w-full rounded-md">
          <ol className="list-reset flex">
            <li>
              <a
                href="/"
                className="text-primary transition duration-150 ease-in-out font-extralight"
              >
                All Cars
              </a>
            </li>
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                &gt;
              </span>
            </li>
            <li>
              <a href="/" className="text-[#0CF2B4]">
                Compare
              </a>
            </li>
          </ol>
        </nav>
        {/* compare block */}
        <div className=" text-black">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {/* <div className='container mx-auto px-4 flex h-full mt-10'></div> */}
            {/* card 1 */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 p-2">
              <div className="overflow-hidden">
                <div className="block max-w-sm pt-2">
                  <div className="text-4xl text-gray-500 font-extralight tracking-tight">
                    Compare Car Model
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="my-1 w-full md:w-1/2 lg:my-4  lg:w-1/4 p-2">
              <div className="w-30 bg-white shadow rounded">
                {" "}
                <div
                  className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  {" "}
                  <div className="flex justify-between">
                    {" "}
                    <input type="checkbox" />{" "}
                    <button className="text-white hover:text-blue-500">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                      {" "}
                      available{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 flex flex-col items-left">
                  <h1 className="text-gray-800 text-start mt-1">BMW X7</h1>{" "}
                  <p className="text-gray-400 font-light text-xs text-left">
                    {" "}
                    XDrive401 M Sport
                  </p>{" "}
                  <button className="p-2">
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
                        x="50%"
                        y="50%"
                        fill="#fff"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        fontSize="14"
                        dominant-baseline="middle"
                      >
                        <tspan x="50%" dy="0">
                          RESERVE
                        </tspan>
                      </text>
                    </svg>
                  </button>
                  <div className="flex justify-between w-full mt-4">
                    {" "}
                    <div className="flex items-center text-gray-500">
                      {" "}
                      <input id="input1" type="checkbox" className="mr-2" />{" "}
                      <label for="input1" className="select-none cursor-pointer">
                        Compare
                      </label>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <button className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                        {" "}
                        Add to List{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />{" "}
                        </svg>{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>

            {/* card 3 */}
            <div className="my-1 w-full md:w-1/2 lg:my-4  lg:w-1/4 p-2">
              <div className="w-30 bg-white shadow rounded">
                {" "}
                <div
                  className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  {" "}
                  <div className="flex justify-between">
                    {" "}
                    <input type="checkbox" />{" "}
                    <button className="text-white hover:text-blue-500">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                      {" "}
                      available{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 flex flex-col items-left">
                  <h1 className="text-gray-800 text-start mt-1">BMW X7</h1>{" "}
                  <p className="text-gray-400 font-light text-xs text-left">
                    {" "}
                    XDrive401 M Sport
                  </p>{" "}
                  <button className="p-2">
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
                        x="50%"
                        y="50%"
                        fill="#fff"
                        text-anchor="middle"
                        alignment-baseline="middle"
                        fontSize="14"
                        dominant-baseline="middle"
                      >
                        <tspan x="50%" dy="0">
                          RESERVE
                        </tspan>
                      </text>
                    </svg>
                  </button>
                  <div className="flex justify-between w-full mt-4">
                    {" "}
                    <div className="flex items-center text-gray-500">
                      {" "}
                      <input id="input1" type="checkbox" className="mr-2" />{" "}
                      <label for="input1" className="select-none cursor-pointer">
                        Compare
                      </label>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <button className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                        {" "}
                        Add to List{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />{" "}
                        </svg>{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            {/* card 4 */}
            <div className="my-1 w-full md:w-1/2 lg:my-4  lg:w-1/4 p-2">
              <div className="w-30 bg-white shadow rounded">
                {" "}
                <div
                  className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
                  }}
                >
                  {" "}
                  <div className="flex justify-between">
                    {" "}
                    <input type="checkbox" />{" "}
                    <button className="text-white hover:text-blue-500">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 4v16m8-8H4"
                        />{" "}
                      </svg>{" "}
                    </button>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
                      {" "}
                      available{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-4 flex flex-col items-left">
                  <h1 className="text-gray-800 text-start mt-1">BMW X7</h1>{" "}
                  <p className="text-gray-400 font-light text-xs text-left">
                    {" "}
                    XDrive401 M Sport
                  </p>{" "}
                  <div className="justify-items-center">
                    {" "}
                    <button className="p-2 justify-items-center">
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
                          x="50%"
                          y="50%"
                          fill="#fff"
                          text-anchor="middle"
                          alignment-baseline="middle"
                          fontSize="14"
                          dominant-baseline="middle"
                        >
                          <tspan x="50%" dy="0">
                            RESERVE
                          </tspan>
                        </text>
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between w-full mt-4">
                    {" "}
                    <div className="flex items-center text-gray-500">
                      {" "}
                      <input id="input1" type="checkbox" className="mr-2" />{" "}
                      <label for="input1" className="select-none cursor-pointer">
                        Compare
                      </label>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <button className="py-1 px-4 bg-white text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center">
                        {" "}
                        Add to List{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {" "}
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />{" "}
                        </svg>{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Card = () => {
//   return (
//     <div className="flex-none w-1/3 p-4">
//       <div className="block text-left bg-white rounded-lg shadow-lg dark:bg-neutral-700">
//         <a href="#!">
//           <img
//             className="rounded-t-lg"
//             src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
//             alt=""
//           />
//         </a>
//         <div className="p-6">
//           <h5 className="mb-2 text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50">
//             Explore the hidden beauty
//           </h5>
//           <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
//             Explore the captivating beauty of Antelope Canyon's red sandstone
//             formations and intricate play of light and shadows.
//           </p>
//           <a
//             href="/"
//             className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//           >
//             Book now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Compare;
