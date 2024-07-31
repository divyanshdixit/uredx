import React from "react";
import Page6card from "./Page6card";

export default function Page6() {
  return (
    <>
      <section className="   max-w-[1280px] mx-auto mt-16 items-center    ">
        {/*********************** * Top side Section **************************** */}

        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-[20px] capitalize tracking-widest text-background">
            {/* <h>testimonials</h> */}
          </div>
          <div className=" font-Poppins text-[40px] font-semibold mt-4 tracking-wide dark:text-white">
            <h1>What’s Our Students Are Sayying</h1>
          </div>
        </div>

        {/*********************** *  bottom side Section **************************** */}

        <div className="">
          <Page6card />
        </div>
      </section>
    </>
  );
}
