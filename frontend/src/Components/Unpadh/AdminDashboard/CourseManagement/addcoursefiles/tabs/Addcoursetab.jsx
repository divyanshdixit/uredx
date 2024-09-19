import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Pricing from "./Pricing";
import Shipping from "./Shipping";
import Globaldelevery from "./Globaldelevery";
import Attributes from "./Attributes";

const Addcoursetab = () => {
  const tabData = [
    {
      title: "Pricing",
      content: <Pricing />,
    },
    {
      title: "Shipping",
      content: <Shipping />,
    },
    {
      title: "Global Delivery",
      content: <Globaldelevery />,
    },
    {
      title: "Attributes",
      content: <Attributes />,
    },
    {
      title: "Advanced",
      content: (
        <h3 className="text-[18px] 2xl:text-[22px] font-bold px-[10px] py-[20px]">
          No data available
        </h3>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-white grid grid-cols-5 mt-[10px] border-[1px]">
      <div className="col-span-1 bg-white border-r">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`block w-full text-left px-[12px] py-[15px] font-medium text-[11px] md:text-[14px] lg:text-[16px] border-b ${
              index === activeTab
                ? "bg-[#ffff] text-blue-600 border-l-[3px] border-l-[#1c85e8]"
                : "bg-[#F8F8F8] text-gray-800"
            }`}
            onClick={() => handleTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="col-span-4 bg-[#ffff] p-[10px]">
        {tabData[activeTab].content}
      </div>
    </div>
  );
};

export default Addcoursetab;
