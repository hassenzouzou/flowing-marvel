import { useState } from "react";
import { logo, home, aboutUs, services, contactUs } from "../constants";

const Header = () => {
  type IconType = "home" | "aboutUs" | "services" | "contactUs" | null;

  const [activeIcon, setActiveIcon] = useState<IconType>(null);

  const handleIconClick = (iconName: IconType) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#1F1F1F] sm:py-[13px] py-[10px] sm:px-[80px] px-[16px]">
      <img className="sm:w-[70px] w-[50px]" src={logo} alt="Logo" />

      <div className="flex flex-row sm:justify-between justify-end font-['DM Sans'] sm:w-[359px] w-[261px]">
        {/* زر الصفحة الرئيسية */}
        <button
          onClick={() => handleIconClick("home")}
          className={`flex items-center sm:px-[21px] px-[13px] sm:py-[12px] py-[10px] cursor-pointer transition-all duration-500 ease-in-out rounded-[42px] ${
            activeIcon === "home" ? "bg-[#F2F2F7]" : "bg-transparent"
          }`}
        >
          <img className="w-[24px] h-[24px]" src={home} alt="Home" />
          {activeIcon === "home" && (
            <p className="sm:block hidden text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-700 ease-in-out opacity-100">
              Home
            </p>
          )}
        </button>

        {/* زر حولنا */}
        <button
          onClick={() => handleIconClick("aboutUs")}
          className={`flex items-center sm:px-[21px] px-[13px] sm:py-[12px] py-[10px] cursor-pointer transition-all duration-500 ease-in-out rounded-[42px] ${
            activeIcon === "aboutUs" ? "bg-[#F2F2F7]" : "bg-transparent"
          }`}
        >
          <img className="w-[24px] h-[24px]" src={aboutUs} alt="About Us" />
          {activeIcon === "aboutUs" && (
            <p className="sm:block hidden text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-700 ease-in-out opacity-100">
              About Us
            </p>
          )}
        </button>

        {/* زر الخدمات */}
        <button
          onClick={() => handleIconClick("services")}
          className={`flex items-center sm:px-[21px] px-[13px] sm:py-[12px] py-[10px] cursor-pointer transition-all duration-500 ease-in-out rounded-[42px] ${
            activeIcon === "services" ? "bg-[#F2F2F7]" : "bg-transparent"
          }`}
        >
          <img className="w-[24px] h-[24px]" src={services} alt="Services" />
          {activeIcon === "services" && (
            <p className="sm:block hidden text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-700 ease-in-out opacity-100">
              Services
            </p>
          )}
        </button>

        {/* زر اتصل بنا */}
        <button
          onClick={() => handleIconClick("contactUs")}
          className={`flex items-center sm:px-[21px] px-[13px] sm:py-[12px] py-[10px] cursor-pointer transition-all duration-500 ease-in-out rounded-[42px] ${
            activeIcon === "contactUs" ? "bg-[#F2F2F7]" : "bg-transparent"
          }`}
        >
          <img className="w-[24px] h-[24px]" src={contactUs} alt="Contact Us" />
          {activeIcon === "contactUs" && (
            <p className="sm:block hidden text-[16px] ml-[16px] font-medium bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent transition-opacity duration-700 ease-in-out opacity-100">
              Contact Us
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
