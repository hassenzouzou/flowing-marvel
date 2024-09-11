import React from "react";

const RotatingWords: React.FC = () => {
  return (
    <div className="flex items-center justify-center sm:h-[515px] h-[400px] font-['Viga'] z-20">
      <div className="text-center flex sm:flex-row flex-col">
        <p className="sm:text-[64px] text-[60px] font-bold text-[#F2F2F7] sm:mr-[7px] mr-0">Let's make it </p>
        <span className="inline-block overflow-hidden text-[64px] font-bold ">
          <span className="block h-[95px] animate-rotate-words ">
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
