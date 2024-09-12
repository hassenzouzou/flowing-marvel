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
      <div className="flex flex-col items-center bg-[#0F0F0F] rounded-[20px] sm:w-[550px] w-[360px] h-auto pt-[26px]">
        <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative w-[90%]">
          <div className="bg-[#0F0F0F] rounded-[20px]">
            <img src={servicesBg} alt="" />
            <div className="flex flex-col justify-center items-center">
              <img
                className="absolute top-[70px] w-[150px]"
                src={imgSrc}
                alt=""
              />
              <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[74px] absolute bottom-[-30px]">
                <div className="bg-[#0F0F0F] rounded-[74px] px-[20px] py-[14px]">
                  <p className="text-[24px] font-['Viga'] bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
                    {service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-[90%]">
          <h1 className="font-['Sora'] text-[#FFFF] pt-[50px] ">
            Service Description:
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
