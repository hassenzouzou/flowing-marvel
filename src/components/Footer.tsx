import { logo } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-start font-['Sora'] w-[90%]">
        <div className="flex flex-row justify-between items-center text-[#FFFF] w-[100%] pb-[15px] ">
          <img src={logo} alt="" />
          <h1 className="sm:text-[24px] text-[17px]">
            Follow Us On Social Media
          </h1>
        </div>
        <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] w-full h-[1px] rounded"></div>
        <div className="flex flex-row justify-between sm:text-[16px] text-[13px] sm:w-[70%] sm:py-[50px] py-[25px] text-[#FFFF] ">
          <div className="sm:w-auto w-[30%]">
            <h1>Home</h1>
            <br />
            <div className="text-[#808080]">
              <a href="#">
                <p className="mb-[13px]">Welcome</p>
              </a>
              <a href="#">
                <p>Why choose Flowing marvel</p>
              </a>
            </div>
          </div>
          <div className="sm:w-auto w-[30%]">
            <h1>About Us</h1>
            <br />
            <div className="text-[#808080]">
              <a href="#">
                <p className="mb-[13px]">Who we are?</p>
              </a>
              <a href="#">
                <p>Our Team</p>
              </a>
            </div>
          </div>
          <div className="sm:w-auto w-[30%]">
            <h1>Services</h1>
            <br />
            <div className="text-[#808080]">
              <a href="#">
                {" "}
                <p className="mb-[13px]">Programming</p>
              </a>
              <a href="#">
                {" "}
                <p className="mb-[13px]">Graphic Design</p>
              </a>
              <a href="#">
                {" "}
                <p className="mb-[13px]">Motion and Video Editing</p>
              </a>
              <a href="#">
                <p className="mb-[13px]">Marketing</p>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#1F1F1F] h-[1px] w-full"></div>

        {/* Footer In Large Screen  */}
        <div className="sm:block hidden w-full">
          <div className="flex flex-row flex-wrap justify-between items-center w-full my-[10px]">
            <p className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              &copy; {currentYear} Flowing Marvel. All Rights Reserved.
            </p>
            <p className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              Version 1.0
            </p>
            <div className="flex flex-row justify-between w-[32%]">
              <a
                className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
                href="#"
              >
                Terms & Conditions
              </a>
              <a
                className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
                href="#"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Footer In Small Screen  */}
        <div className="sm:hidden block ">
          <div className="flex flex-row flex-wrap justify-center gap-x-[40px] gap-y-[10px] my-[10px]">
            <p className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              &copy; {currentYear} Flowing Marvel. All Rights Reserved.
            </p>
            <a
              className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
              href="#"
            >
              Terms & Conditions
            </a>
            <p className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              Version 1.0
            </p>
            <a
              className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent"
              href="#"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
