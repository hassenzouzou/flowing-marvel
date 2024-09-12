import LeadersCard from "./LeadersCard";
import { hassen, azzeddine, seedik, ibrahim } from "../constants";

const AboutLeaders = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pb-[150px] pb-[80px]">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
        About Leaders
      </h1>
      <p className="sm:text-[25px] text-[23px] sm:w-[770px] w-[360px] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        A bold leader is one who pushing his team forward with a will that knows
        no impossible.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[25px]">
        <LeadersCard
          imgSrc={hassen}
          altImg=""
          name="Hassen Zouzou"
          role="leader Programming team"
          description="An expert in web development and providing customized software solutions that meet customer needs."
        />
        <LeadersCard
          imgSrc={azzeddine}
          altImg=""
          name="Azzeddine Lafkir"
          role="leader Graphic design team"
          description="professional in Graphic design, he has extensive experience in creating distinctive visual designs that reflect the brand's identity and attract audiences."
        />
        <LeadersCard
          imgSrc={ibrahim}
          altImg=""
          name="Ibrahim Amiri"
          role="leader Marketing team"
          description="An expert in developing and implementing digital marketing strategies that enhance brand presence and achieve tangible results."
        />
        <LeadersCard
          imgSrc={seedik}
          altImg=""
          name="Seedik Ben kada"
          role="leader Motion and Video Editing team"
          description="Specializes in video editing, Motion and animation. It focuses on producing attractive and impactful visual content that contributes to delivering messages in creative ways"
        />
      </div>
    </div>
  );
};

export default AboutLeaders;
