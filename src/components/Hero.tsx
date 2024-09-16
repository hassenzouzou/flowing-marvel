import {
  heroBg,
  heroBgMobile,
  arrow,
  network,
  coron,
  dolarSign,
  virified,
  cmd,
} from "../constants";
import RotatingWords from "./RotatingWords";

const Hero = () => {
  return (
    <div className="relative sm:pb-[280px] pb-[325px]">
      <img
        className="absolute z-10 sm:hidden md:block hidden w-full md:h-[1150px] lg:h-auto"
        src={heroBg}
        alt=""
      />
      <img
        className="absolute w-full z-10 block sm:block md:hidden sm:w-full sm:h-[850px]"
        src={heroBgMobile}
        alt=""
      />
      <img
        className="absolute z-20 top-[59px] sm:top-[13%] md:top-[9%] left-[10%] sm:left-[25%] md:left-[30%]"
        src={arrow}
        alt=""
      />
      <img
        className="absolute z-20 sm:block md:block hidden top-[70px] sm:top-[7%] right-[350px] sm:right-[34%]"
        src={coron}
        alt=""
      />
      <img
        className="absolute z-20 top-[200px] left-[150px] md:hidden lg:block hidden"
        src={network}
        alt=""
      />
      <img
        className="absolute z-20 sm:top-[250px] md:top-[200px] top-[320.25px] sm:right-[150px] right-[59px] block sm:block md:hidden lg:block "
        src={dolarSign}
        alt=""
      />
      <img
        className="absolute z-20 sm:top-[40%] md:top-[40%] lg:top-[460px] top-[351.58px] sm:left-[20%] lg:left-[300px] left-[18px] "
        src={virified}
        alt=""
      />
      <img
        className="absolute z-20 top-[460px] md:top-[40%] lg:top-[460px] md:right-[20%] lg:right-[350px] sm:hidden md:block hidden"
        src={cmd}
        alt=""
      />
      <div className="flex flex-col justify-center items-center ">
        <RotatingWords />
        <div className="flex flex-col justify-between items-center font-normal font-['Sora'] text-[#FFFF]">
          <p className="sm:text-[20px] text-[14px] pb-[20px] z-20">
            Unlock Your Digital Potential Today
          </p>
          <div className="sm:text-[18px] text-[14px] flex flex-row justify-between sm:w-[380px] w-[300px]">
            <button className="bg-[#F2F2F7] sm:py-[18px] py-[14px] sm:px-[24px] px-[20px] rounded-full z-20">
              <p className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent ">
                Get Started
              </p>
            </button>

            <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-full z-20">
              <button className="sm:py-[18px] py-[14px] sm:px-[24px] px-[20px] rounded-full bg-[#1A1A1A]">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
