import { useState } from "react";
import { logo, home, aboutUs, services, contactUs } from "../constants";

const Header = () => {
  type IconType = "home" | "aboutUs" | "services" | "contactUs" | null;

  const [activeIcon, setActiveIcon] = useState<IconType>(null);

  const handleIconClick = (iconName: IconType) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#1F1F1F] py-[13px] px-[80px]">
      <img className="w-[70px]" src={logo} alt="Logo" />

      <div className="flex flex-row justify-between font-['DM Sans'] w-[(à0px]">
        {/* زر الصفحة الرئيسية */}
        <button
          onClick={() => handleIconClick("home")}
          className={`flex items-center px-[21px] py-[12px] cursor-pointer transition-all duration-300 ease-in-out rounded-[42px] ${
            activeIcon === "home" ? "bg-[#F2F2F7] scale-105" : ""
          }`}
        >
          <img className="w-[24px] h-[24px]" src={home} alt="Home" />
          {activeIcon === "home" && (
            <p className="text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-300 opacity-100">
              Home
            </p>
          )}
        </button>

        {/* زر حولنا */}
        <button
          onClick={() => handleIconClick("aboutUs")}
          className={`flex items-center px-[21px] py-[12px] cursor-pointer transition-all duration-300 ease-in-out rounded-[42px] ${
            activeIcon === "aboutUs" ? "bg-[#F2F2F7] scale-105" : ""
          }`}
        >
          <img
            className="w-[24px] h-[24px]"
            src={aboutUs}
            alt="About Us"
          />
          {activeIcon === "aboutUs" && (
            <p className="text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-300 opacity-100">
              About Us
            </p>
          )}
        </button>

        {/* زر الخدمات */}
        <button
          onClick={() => handleIconClick("services")}
          className={`flex items-center px-[21px] py-[12px] cursor-pointer transition-all duration-300 ease-in-out rounded-[42px] ${
            activeIcon === "services" ? "bg-[#F2F2F7] scale-105" : ""
          }`}
        >
          <img
            className="w-[24px] h-[24px]"
            src={services}
            alt="Services"
          />
          {activeIcon === "services" && (
            <p className="text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-300 opacity-100">
              Services
            </p>
          )}
        </button>

        {/* زر اتصل بنا */}
        <button
          onClick={() => handleIconClick("contactUs")}
          className={`flex items-center px-[21px] py-[12px] cursor-pointer transition-all duration-300 ease-in-out rounded-[42px] ${
            activeIcon === "contactUs" ? "bg-[#F2F2F7] scale-105" : ""
          }`}
        >
          <img
            className="w-[24px] h-[24px]"
            src={contactUs}
            alt="Contact Us"
          />
          {activeIcon === "contactUs" && (
            <p className="text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-300 opacity-100">
              Contact Us
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
