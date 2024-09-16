import ServicesCard from "./ServicesCard";

import {
  programmingIcon,
  graphicDesignIcon,
  marketingIcon,
  videoEditingIcon,
} from "../constants";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-[90px]">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
        Our Services
      </h1>
      <p className="sm:text-[25px] text-[23px] w-[90%] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        A bold leader is one who pushing his team forward with a will that knows
        no impossible.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[25px]">
        <ServicesCard
          imgSrc={programmingIcon}
          service="Programming"
          serviceDescription="We provide integrated software solutions that include web design and
            development, website performance optimization (SEO), and web
            application development. We aim to create responsive and secure
            websites that meet the needs of your customers and provide an
            excellent user experience."
          whyUs="Because we combine creativity and technology to deliver high-quality
            websites that help enhance your digital presence."
        />
        <ServicesCard
          imgSrc={graphicDesignIcon}
          service="Graphic Design"
          serviceDescription="We provide innovative visual designs that enhance brand identity visibility and attract target audiences that include all services related to graphic design."
          whyUs="Because we understand that design is the key to success in eye contact, we work to provide designs that reflect your brand identity in a unique and attractive way."
        />
        <ServicesCard
          imgSrc={marketingIcon}
          service="Marketing"
          serviceDescription="We offer comprehensive digital marketing strategies that include social media management, pay-per-click (PPC) advertising, email marketing, branding, and digital performance analysis. We work to increase brand awareness and attract customers."
          whyUs="Because we focus on achieving a tangible return on investment, we implement marketing strategies that target the right audience and achieve tangible results."
        />
        <ServicesCard
          imgSrc={videoEditingIcon}
          service="Motion and Video Editing"
          serviceDescription="We specialize in video editing and motion graphics that create a creative character to content. Whether you need a promotional video, tutorial, or social media content, our team offers visual solutions that meet your needs."
          whyUs="Because we believe that video is a powerful means of communication, we focus on delivering elaborate editing and animation that captures attention and increases the impact of the message."
        />
      </div>
    </div>
  );
};

export default OurServices;
