import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Page2card() {

    const card =[
        {
            icon: <RiGraduationCapFill />,
            title: "Expert Mentor’s",
            subtitle: "The best mentors in the world from the best college graduates"
        },
        {
            icon: <FaMedal />,
            title: "Lifetime Access",
            subtitle: "Certificate that can be used to apply for work"
        },
        {
            icon:<FaUser />,
            title: " online",
            subtitle: "Wide relationship and get my opportunities to work"
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 pt-5 justify-center  items-center ">
            {card.map((data, index) => (
                <div key={index} className="max-w-xs p-2  bg-teal-50 dark:bg-zinc-800 rounded-lg overflow-hidden  bg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="p-2 flex text-2xl  text-background">
                        {data.icon}
                        <h1 className="ml-[20px]  text-lg font-semibold text-textcolor tracking-wide dark:text-white">{data.title}</h1>
                    </div>
                    <div className="">
                        <p className="ml-[53px] mb-3 text-sm  text-gray-600 tracking-wide dark:text-gray-200">
                            {data.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

 