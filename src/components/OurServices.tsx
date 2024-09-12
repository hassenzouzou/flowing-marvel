import ServicesCard from "./ServicesCard";

import {
  programmingIcon,
  graphicDesignIcon,
  marketingIcon,
  videoEditingIcon,
} from "../constants";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
        About Leaders
      </h1>
      <p className="sm:text-[25px] text-[23px] sm:w-[770px] w-[360px] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        A bold leader is one who pushing his team forward with a will that knows
        no impossible.
      </p>
      <div>
        <ServicesCard imgSrc={programmingIcon} service="Programming" />
      </div>
    </div>
  );
};

export default OurServices;
