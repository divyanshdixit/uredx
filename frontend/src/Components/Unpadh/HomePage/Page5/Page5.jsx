import React from "react";
import Page5card from "./Page5card";

export default function Page5() {
  return (
    <>
      <section className=" max-w-[1280px] mx-auto mt-16 items-center   ">
        {/*********************** * Left side Section **************************** */}

        <div className="mx-auto justify-between flex">
          <div data-aos="fade-right" className="max-w-[40%]">
            <div className="text-[40px] font-semibold tracking-wide dark:text-white ">
              <h1>
                Why to choose<br></br> our{" "}
                <span className="text-background">program</span>{" "}
              </h1>
            </div>
            <div className="mt-5 text-[15px] font-medium leading-8 dark:text-gray-200">
              <h1>
                We are the largest and oldest provider of online education
                services in the world, best served and with professional, smart
                and intelligent teachers, best graduates from the best campuses
                in the world
              </h1>
            </div>

            <div className="mt-16">
              <Page5card />
            </div>
          </div>

          {/*********************** * Right side Section **************************** */}
          <div data-aos="fade-left" className="mt-8">
            <img src="/Group .png" alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}
