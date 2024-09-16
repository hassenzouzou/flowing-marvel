import React from "react";

const RotatingWords: React.FC = () => {
  return (
    <div className="flex items-center justify-center sm:h-[400px] md:h-[440px] h-[400px] font-['Viga'] z-20">
      <div className="text-center flex sm:flex-row flex-col">
        <p className="sm:text-[45px] md:text-[64px] text-[50px] font-bold text-[#F2F2F7] sm:mr-[7px] mr-0">
          Let's make it{" "}
        </p>
        <span className="inline-block overflow-hidden sm:text-[45px] md:text-[64px] text-[50px] font-bold ">
          <span className="block sm:h-[68px] md:h-[95px] h-[80px] animate-rotate-words ">
            <span className="block bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              True.
            </span>
            <span className="block bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              memorable.
            </span>
            <span className="block bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              amazing.
            </span>
            <span className="block bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
              now.
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default RotatingWords;
