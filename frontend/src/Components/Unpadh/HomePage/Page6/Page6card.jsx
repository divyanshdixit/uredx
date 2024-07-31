import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page6card() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const stuCard = [
    {
      commaimg: "comma.png",
      img: "man-pass-1.jpg",
      title:
        "I wanted to express my gratitude for the incredible experience I've had with your education platform. As a student, I've found immense value in the resources and opportunities provided, and I wanted to share some feedback ",
      subtitle: "Saraubh Kumar",
      course: "MCA Student",
    },
    {
      commaimg: "comma.png",

      img: "man2.jpg",
      title:
        "Your educational platform has been an absolute game-changer for me, and I'm deeply appreciative of the enriching journey it has offered. The wealth of resources and opportunities available has truly transformed my learning experience.",
      subtitle: "Virendra Kumar",
      course: "B.tech Student",
    },
    {
      commaimg: "comma.png",

      img: "women2.jpg",
      title:
        "I am profoundly grateful for the unparalleled educational journey your platform has enabled me to undertake. The abundance of resources and opportunities has been instrumental in equipping me with the skills and knowledge necessary for success. ",
      subtitle: "Roshni Srivastav",
      course: "MBA Student",
    },
    {
      commaimg: "comma.png",

      img: "women1.jpg",
      title:
        "I am profoundly grateful for the exceptional educational journey your platform has enabled me to embark on. The diverse array of resources and opportunities have been instrumental in shaping my academic growth and development.",
      subtitle: "Bharti Singh",
      course: "PG & Advance Diploma Student",
    },
    {
      commaimg: "comma.png",

      img: "man4.jpg",
      title:
        "I wanted to extend my heartfelt appreciation for the extraordinary educational experience your platform has afforded me. The myriad of resources and opportunities have been instrumental in nurturing my intellectual curiosity and fostering academic excellence.",
      subtitle: "Aniket Kumar",
      course: "Msc Student",
    },
    {
      commaimg: "comma.png",

      img: "women2.jpg",
      title:
        "I gratitude for the incredible educational journey your platform has facilitated for me. The diverse range of resources and opportunities have been instrumental in broadening my horizons and nurturing my passion for learning.",
      subtitle: "Anushka Anu",
      course: "Bsc Student",
    },
    {
      commaimg: "comma.png",

      img: "man4.jpg",
      title:
        "Words cannot express the depth of my gratitude for the invaluable learning experience your platform has provided. The abundance of resources and opportunities has been nothing short of remarkable, profoundly impacting my educational journey.",
      subtitle: "Rishul Verma",
      course: "MCA Student",
    },
  ];

  return (
    <>
      {/*********************** * left Right side Section **************************** */}
      <div className=" py-24">
        <Slider {...settings}>
          {stuCard.map((data, index) => (
            <div key={index} className=" items-center justify-center mx-auto  ">
              <div className="  border-2 border-gray-400 dark:border-background bg-slate-200 dark:bg-zinc-800 p-8 rounded-xl ">
                <img
                  src={data.commaimg}
                  alt="no img"
                  className="h-8 dark:text-gray-200"
                />
                <p className="dark:text-gray-200">{data.title}</p>

                <div className="inline-flex items-center">
                  <img
                    className="h-[80px] w-[80px] mt-4 object-cover object-center rounded-full  border-[5px] border-yellow-300"
                    src={data.img}
                    alt="icon"
                  />
                  <span className="flex flex-col pl-4">
                    <span className="font-bold dark:text-gray-200 ">
                      {data.subtitle}
                    </span>
                    <span className="text-sm dark:text-gray-200">
                      {data.course}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
