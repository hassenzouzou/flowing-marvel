import {
  linkedInBtn,
  instagramBtn,
  facebookBtn,
  xBtn,
  youtubeBtn,
  socialMediaBg,
} from "../constants";

const JoinUs = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pb-[200px] pb-[100px] ">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent text-center ">
        Join Us on Social Media
      </h1>
      <p className="sm:text-[25px] text-[20px] w-[90%] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        Stay updated with our latest projects, industry insights, and company
        news by following us on social media
      </p>
      <div className="flex flex-col justify-center items-center w-[90%] h-auto sm:py-[100px] py-[50px] border-[#1F1F1F] border rounded-[20px] font-['Sora'] text-[#FFFF] relative overflow-hidden">
        <img
          className="absolute top-[-10px] right-[7px]"
          src={socialMediaBg}
          alt=""
        />
        <div className="flex flex-row justify-between items-center w-[85%] lg:w-[50%] pb-[70px] ">
          <a href="#">
            <img className="sm:w-auto w-[50px]" src={linkedInBtn} alt="" />
          </a>
          <a href="#">
            <img className="sm:w-auto w-[50px]" src={instagramBtn} alt="" />
          </a>
          <a href="#">
            <img className="sm:w-auto w-[50px]" src={facebookBtn} alt="" />
          </a>
          <a href="#">
            <img className="sm:w-auto w-[50px]" src={xBtn} alt="" />
          </a>
          <a href="#">
            <img className="sm:w-auto w-[50px]" src={youtubeBtn} alt="" />
          </a>
        </div>
        <h1 className="text-[35px] pb-[20px]">Thank You!</h1>
        <p className="text-[#8C8C8C] sm:text-[24px] text-[18px] text-center sm:w-[70%] w-[85%]">
          For considering DigitX for your digital needs. We look forward to
          connecting with you and being part of your digital success!
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
