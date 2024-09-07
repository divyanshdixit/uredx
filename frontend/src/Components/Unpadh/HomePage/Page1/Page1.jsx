import React from 'react';

const Page1 = () => {
  return (
    <section className=' bg-teal-600 min-h-screen md:min-h-[600px]  .clip-path-diagonal-bottom' style={{clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)'}}>
     <div className="container mx-auto  flex flex-col justify-center items-center xl:pt-[100px]  md:flex-row md:justify-between md:px-20 px-5">
      {/* Left Text Section */}
      <div className="text-white text-center md:text-left md:w-1/2">
        <h1 className="text-[25px] md:text-[40px] md:font-extrabold font-medium md:leading-[4rem] md:pt-0 pt-4 leading-[2.5rem] mb-4">
          Discover the best  course online <br /> for the <span className="text-background bg-white px-3 py-1 rounded ">best learning</span>
        </h1>
        <p className="text-lg md:text-[18px] font-medium mb-6">
          Relatively permanent change in behavior or potential behavior as a result of the or practice occurring 
          learning is the result of the interaction between stimulus a person has learned something if he can show a 
          change in behavior.
        </p>
        {/* <div className="flex flex-col md:flex-row items-center  relative">
          <input
            type="text"
            placeholder="Search your course here..."
            className="p-3 rounded-full w-full md:w-auto flex-grow mb-4 md:mb-0 md:mr-4 "
          />
          <button className="bg-teal-700 hover:bg-teal-700 absolute right-5 text-white font-semibold py-3 px-8 rounded-full">
            Get started
          </button>
        </div> */}
        <div className="md:w-[520px] w-full">
                <form class=" mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only"
                  ></label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 d"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
                      placeholder="Search your course here..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-[9px] 
            
                      bg-background hover:bg-teal-700 focus:ring-4 focus:outline-none  font-semibold rounded-full text-sm px-6 py-3 "
                    >
                      Get started
                    </button>
                  </div>
                  </form></div>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="about.png" // Replace with the correct image path
            alt="Learning"
            className="w-80 md:w-96 rounded-full"
          />
          {/* Placeholder for Graph and Dots */}

          <div className="absolute top-0 right-0 grid grid-cols-3 gap-2">
            {/* Dots */}
            {[...Array(9)].map((_, i) => (
              <span key={i} className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            ))}
          </div>
        </div>
      </div>
    </div>
            
    </section>
   
  );
};

export default Page1;
