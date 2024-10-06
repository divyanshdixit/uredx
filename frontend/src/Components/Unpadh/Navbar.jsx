import "../Scss/Navbar.scss";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { Badge } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Navbar({ AddCart }) {
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const [MobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [PcDropdownVisible, setPcDropdownVisible] = useState(false);

  const navigate = useNavigate();
  
  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(prevstate=>!prevstate);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible(prevstate=>!prevstate)
  };

  // const togglePcDropdown = () => {
  //   setPcDropdownVisible(prevstate=>!prevstate);   
  // };
    // New event handlers for hover
    const handleMouseEnter = () => {
      setPcDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setPcDropdownVisible(false);
    };
  

  const handleRoute = () => {
    navigate("/Dashboard");
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center lg:sticky top-0 z-20 bg-white p-1 lg:p-[8px]">
        {/* Logo and Dashboard link */}
        <div
          className="w-32 ml-4 lg:w-36 cursor-pointer"
          onClick={handleRoute}
        >
          <img src="./uredx_logos.webp" alt="Logo" />
        </div>

        {/* Dropdown items in desktop mode */}
        <div className="hidden lg:flex lg:space-x-6">
          <div className="relative" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>
            <Link className="hover:text-[#42a38c]">
              Programs
            </Link>
            {PcDropdownVisible && <Dropdown/>}
          </div>

          <Link to="/business" className="hover:text-[#42a38c]">
            Business
          </Link>

          <Link to="/teachersignup" className="hover:text-[#42a38c]">
            Become Instructor
          </Link>

          <Link to="/about" className="hover:text-[#42a38c]">
            About us
          </Link>

          <Link to="/contact" className="hover:text-[#42a38c]">
            Contact
          </Link>
        </div>

        {/* Cart icon and login/signup buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="nav_link">
            <Badge count={AddCart.length}>
              <FaShoppingCart className="text-3xl text-background" />
            </Badge>
          </Link>
          <div className="lg:hidden">
            <RxHamburgerMenu
              className="text-3xl font-medium text-[black]"
              onClick={toggleMobileSidebar}
            />
          </div>

          <button className="site_btn border_btn hidden lg:block rounded-full py-[2px] px-[18px]">
            <Link to="/login">
              Login
            </Link>
          </button>
          <button className="site_btn rounded-full hidden lg:block py-[2px] px-[18px]">
            <Link to="/signup">
              Sign Up
            </Link>
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {isMobileSidebarVisible && (
        <div className="lg:hidden absolute top-[0px] w-[320px] left-[0px] md:top-0 bg-[#ffffff] lg:relative z-10  justify-evenly">
          <div className="w-[100%] p-[15px] bg-[#2a554fd6] text-[white] flex justify-between items-center">
            <AccountCircleOutlinedIcon style={{ fontSize: 60 }} />
            <div className="">
              <Link to="/login" className="text-[18px]">
                Login
              </Link>
              <Link to="/signup" className="text-[18px]">
                {" "}
                / Signup
              </Link>
            </div>
            <p
              className="text-3xl font-medium cursor-pointer"
              onClick={toggleMobileSidebar}
            >
              {"X"}
            </p>
          </div>
          <div className="lg:hidden h-[625px] flex flex-col items-start p-[8px] gap-[5px] overflow-scroll">
            <div className="w-[100%] p-[5px] rounded">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleMobileDropdown}
              >
                <Link
                  className={`text-[20px] ml-[10px] font-medium ${
                    MobileDropdownVisible ? "text-[#33a092]" : ""
                  }`}
                >
                  Programs
                </Link>
                <span className="text-[28px] font-medium">
                  {MobileDropdownVisible ? "-" : "+"}
                </span>
              </div>
              {MobileDropdownVisible && <Dropdown />}
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/business" className="text-[20px] ml-[10px]">
                Business
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/teachersignup" className="text-[20px] ml-[10px]">
                Become Instructor
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/about" className="text-[20px] ml-[10px]">
                About us
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/contact" className="text-[20px] ml-[10px]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
}
