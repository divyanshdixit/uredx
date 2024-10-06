import React, { useState } from "react";
import "./ProfileEdit.scss";
import UredxProfile from "./UredxProfile";
import ProfilePicture from "./ProfilePicture";
import PrivacySetting from "./PrivacySetting";

export default function ProfileEdit() {

  const [activeTab, setactiveTab] = useState(0);


  const handleTab = (index) => {
    setactiveTab(index);
  };

  const Tab = [
    {
      title: " Uredx profile",
      component: <UredxProfile/>,
    },
    {
      title: "Profile picture",
      component: <ProfilePicture />,
    },
    {
      title: "Privacy setting",
      component: <PrivacySetting/>,
    },
  ];

  return (
    <>
      {/* <div className="Profile_edit_container">
        <h1>Profile & Setting</h1>
        <div className="Profile_edit_title_div">
          <div className="Profile_edit_title">
            <p>
              <NavLink to="" className="Profile_edit_link">
                Uredx profile
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/teacherdashboard/Edit_profile/profile_picture"
                className="Profile_edit_link"
              >
                Profile picture
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/teacherdashboard/Edit_profile/privacy_setting"
                className="Profile_edit_link"
              >
                Privacy setting
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
