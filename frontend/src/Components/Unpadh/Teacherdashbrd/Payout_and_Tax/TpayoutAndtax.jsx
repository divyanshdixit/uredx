import "./TpayoutAndtax.scss";
import React, { useState } from "react";
import TeacherPofilepicture from "./TeacherPofilepicture";
import InstructorTems from "./InstructorTems";
import UredxMarketing from "./UredxMarketing";
import Payout_taxDetails from "./Payout_taxDetails";

export default function TpayoutAndtax() {
  const [activeTab, setactiveTab] = useState(0);
  const handleTab = (index) => {
    setactiveTab(index);
  };

  const Tab = [
    {
      title: " Profile Picture",
      component: <TeacherPofilepicture />,
    },
    {
      title: "Instructor Terms",
      component: <InstructorTems />,
    },
    {
      title: " Uredx Marketing",
      component: <UredxMarketing/>,
    },
    {
      title: "Payout & Tax Details",
      component: <Payout_taxDetails/>,
    },
  ];

  return (
    <>
      {/* <div className="teacher_payoutandtax_container">
        <h1>Instructor Application</h1>
        <div className="teacher_payoutandtax_tiltle_div">
          <div className="teacher_payoutandtax_title">
            <p>
              <NavLink to="" className="payoutAndtax_navlink">
                {" "}
                Profile Picture
              </NavLink>
            </p>
            <p>
              <NavLink   className="payoutAndtax_navlink">
                Instructor Terms
              </NavLink>
            </p>
            <p>
              <NavLink  className="payoutAndtax_navlink">
                Uredx Marketing
              </NavLink>
            </p>
            <p>
              <NavLink className="payoutAndtax_navlink">
                Payout & Tax Details
              </NavLink>
            </p>
          </div>
        </div>
        <Outlet />
      </div> */}
      <div className="">
        {Tab.map((item, index) => (
          <button
            key={index}
            className={`bg-[#F8F8F8] border-r-[1px] last:border-r-[0px] px-[16px] font-medium py-[8px] xl:text-[14px] xxl:text-[14px] 2xl:text-[17px] ${
              index === activeTab
                ? "bg-[#eff8ff] border-t-[3px] rounded-t-[4px] border-t-[#1c85e8]"
                : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {item.title}
          </button>
        ))}

        <div className="grid grid-cols-1 gap-[10px]">
          {Tab[activeTab].component}
        </div>
      </div>
    </>
  );
}
