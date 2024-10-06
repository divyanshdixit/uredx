import { useState } from "react";
import Teacheractsecurity from "./Teacheractsecurity";
import TeachernotificSetting from "./TeachernotificSetting";
import TeacherMessagestng from "./TeacherMessagestng";
import TeachercloseAccount from "./TeachercloseAccount";

export default function Teacheractsetting() {
  const [activeTab, setactiveTab] = useState(0);

  const handleTab = (index) => {
    setactiveTab(index);
  };

  const Tab = [
    {
      title: "Account security",
      component: <Teacheractsecurity />,
    },
    {
      title: "Notifications setting",
      component: <TeachernotificSetting />,
    },
    {
      title: "Massage setting",
      component: <TeacherMessagestng />,
    },
    {
      title: "Close account",
      component: <TeachercloseAccount />,
    },
  ];

  return (
    <>
      {/* <div className="Tacst_container">
        <h1>Account setting</h1>
        <div className="Tacst_content">
          <div className="Tacst_row">
            <div className="Tacstcol1">
              <NavLink to="" className="Tacst_link">
                Account security
              </NavLink>
            </div>
            <div className="Tacstcol2">
              <NavLink to="teacher_notification_setting" className="Tacst_link">
                Notifications setting
              </NavLink>
            </div>
            <div className="Tacstcol3">
              <NavLink to="teacher_message_setting" className="Tacst_link">
                Massage setting
              </NavLink>
            </div>
            <div className="Tacstcol4">
              <NavLink to="teacher_close_account" className="Tacst_link">
                Close account
              </NavLink>
            </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-[10px]">
          {Tab[activeTab].component}
        </div>
      </div>
    </>
  );
}
