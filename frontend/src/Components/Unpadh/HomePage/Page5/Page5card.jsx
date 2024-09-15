import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Page5card() {
  const [counteron, setcounteron] = useState(false);

  const card = [
    {
      count: <CountUp end={200} suffix="K+" duration={2.75} />,
      title: "More Students",
    },
    {
      count: <CountUp end={140} suffix="K+" duration={2.75} />,

      title: "Expert Mentor’s",
    },
    {
      count: <CountUp end={500} suffix="+" duration={2.75} />,
      title: "Expert Mentor’s",
    },
    {
      count: <CountUp end={20} suffix="+" duration={2.75} />,
      title: "Expert Member’s",
    },
  ];

  return (
    <ScrollTrigger
      onEnter={() => setcounteron(true)}
      onExit={() => setcounteron(false)}
    >
      <div className="flex flex-wrap gap-16     ">
        {card.map((data, index) => (
          <div
            key={index}
            className="max-w-xs p-3 rounded overflow-hidden  bg-teal-50   hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className=" flex text-2xl  text-background">
              <h1 className="  text-2xl  font-semibold text- tracking-wider">
                {counteron && data.count}
              </h1>
            </div>
            <div className="">
              <p className=" mb-3 text-lg   text-gray-600  tracking-wider">
                {data.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
}
