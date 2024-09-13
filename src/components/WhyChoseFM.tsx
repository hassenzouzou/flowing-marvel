import { cardsBg } from "../constants";

const WhyChoseFM = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-[100px]">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent text-center">
        Why choose Flowing Marvel ?
      </h1>
      <p className="sm:text-[25px] text-[23px] sm:w-[770px] w-[360px] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        Because we believe that every project is a new opportunity for
        creativity and excellence.
      </p>
      <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative font-['Sora'] sm:w-[73%] w-[90%] ">
        <div className="flex flex-col justify-center items-center sm:h-auto h-[725px] bg-[#0F0F0F] rounded-[20px] overflow-hidden ">
          <img src={cardsBg} alt="" />
          <p className="absolute top-[50px] text-[#808080] sm:w-[90%] w-[95%] sm:text-[31px] text-[23px] text-center ">
            We at Flowing Marvel work passionately to provide quality services
            that meet the needs of our customers. Our team of leaders and
            experts in multiple fields ensures integrated solutions from design
            to marketing. We chose transparency, quality, and innovation as our
            core values, and we are committed to helping you achieve your
            business goals in the best possible way.
          </p>
          <div className="flex flex-col justify-between items-center font-normal font-['Sora'] text-[#FFFF] absolute sm:top-[430px] top-[570px] ">
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
    </div>
  );
};

export default WhyChoseFM;
