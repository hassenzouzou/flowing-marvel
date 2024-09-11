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
import RotatingWords from "./rotatingWords";

const Hero = () => {
  return (
    <div className="relative pb-[1000px]">
      <img className="absolute z-10 sm:block hidden" src={heroBg} alt="" />
      <img className="absolute z-10 sm:hidden block" src={heroBgMobile} alt="" />
      <img
        className="absolute z-20 sm:top-[70px] top-[59px] sm:left-[350px] left-[59px] "
        src={arrow}
        alt=""
      />
      <img
        className="absolute z-20 sm:block hidden top-[70px] right-[350px]"
        src={coron}
        alt=""
      />
      <img
        className="absolute z-20 top-[200px] left-[150px] sm:block hidden"
        src={network}
        alt=""
      />
      <img
        className="absolute z-20 sm:top-[200px] top-[317.25px] sm:right-[150px] right-[59px] "
        src={dolarSign}
        alt=""
      />
      <img
        className="absolute z-20 sm:top-[460px] top-[351.58px] sm:left-[300px] left-[18px] "
        src={virified}
        alt=""
      />
      <img
        className="absolute z-20 top-[460px] right-[350px] sm:block hidden"
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
