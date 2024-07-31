import React from "react";
import Page3card from "./Page3card";

export default function Page3() {
  return (
    <>
      <section className="max-w-[1300px]  mx-auto mt-[80px]">
        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-4xl text-black">
            <h1>Our Popular Program</h1>
          </div>
          <div className=" font-Poppins text-black text-xl font-medium pt-3">
            <h1>Get the world class & verified program</h1>
          </div>
        </div>

        {/********************Slider Card*************************/}
        <div data-aos="fade-up" className="mt-16   ">
          <Page3card />
        </div>
      </section>
    </>
  );
}
