import { cardBgWhoWeAre, cardBgWhoWeAreMobile } from "../constants";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pb-[90px] pb-[100px]">
      <h1 className="sm:text-[57px] text-[47px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
        Who we are ?
      </h1>
      <p className="text-[#FFFFFF] sm:text-[30px] text-[19px] font-['Sora'] sm:pb-[60px] pb-[50px]">
        Welcome To Flowing Marvel
      </p>
      <img className="sm:hidden block" src={cardBgWhoWeAreMobile} alt="" />
      <div className=" hidden w-[950px] mb-[50px] sm:flex flex-col justify-center items-center">
        <img src={cardBgWhoWeAre} alt="" />
        <p className="absolute sm:top-[1235px] top-[1085px] text-center text-[22px] leading-[36px] text-[#808080] w-[859px] font-['Sora'] ">
          <p>At Flowing Marvel,</p>{" "}
          <p>
            we appreciate the power of creativity and technology in achieving
            our clients' goals. Our agency was established to be the number one
            destination for businesses looking for excellence and innovation in
            the digital world.
          </p>{" "}
          Our agency is led by a team of experts in the fields of graphic
          design, motion and video editing, programming, and marketing. We are
          committed to transparency, quality, and innovation to ensure the best
          results for our clients.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
