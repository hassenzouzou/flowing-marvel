import { servicesBg } from "../constants";

interface ServicesCardProps {
  imgSrc: string;
  service: string;
  serviceDescription: string;
  whyUs: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  imgSrc,
  service,
  serviceDescription,
  whyUs,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative">
      <div className="flex flex-col items-center bg-[#0F0F0F] rounded-[20px] sm:w-[550px] w-[360px] sm:h-[780px] h-[670px] sm:py-[33px] py-[23px]">
        <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative w-[88%]">
          <div className="bg-[#0F0F0F] rounded-[20px]">
            <img src={servicesBg} alt="" />
            <div className="flex flex-col justify-center items-center">
              <img
                className="absolute sm:top-[70px] top-[40px] sm:w-[150px] w-[100px]"
                src={imgSrc}
                alt=""
              />
              <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[74px] absolute sm:bottom-[-30px]">
                <div className="bg-[#0F0F0F] rounded-[74px] sm:px-[20px] px-[16px] sm:py-[14px] py-[10px]">
                  <p className="sm:text-[24px] text-[17px] font-['Viga'] bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
                    {service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-[90%]">
          <p className="font-['Sora'] text-[#8C8C8C] sm:pt-[100px] pt-[50px] text-[15px] ">
            <span className="text-[20px] text-[#FFFF] ">
              Service Description:
            </span>
            <br />
            <br />
            {serviceDescription} <br />
            <br />
            <span className="text-[20px] text-[#FFFF] ">o Why Us? </span>
            <br />
            <br />
            {whyUs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
