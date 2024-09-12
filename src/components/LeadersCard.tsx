import { cardsBg } from "../constants";

interface LeadersCardProps {
  imgSrc: string;
  altImg: string;
  name: string;
  role: string;
  description: string;
}

const LeadersCard: React.FC<LeadersCardProps> = ({
  imgSrc,
  altImg,
  name,
  role,
  description,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative">
      <div className=" sm:w-[550px] w-[360px] sm:h-[350px] h-[490px] rounded-[20px] bg-[#0F0F0F]">
        <img src={cardsBg} alt={altImg} />
        <div className="flex justify-center items-center">
          <img
            className="sm:w-[100px] w-[150px] absolute sm:top-[65px] top-[55px]"
            src={imgSrc}
            alt=""
          />
          <h1 className="absolute sm:top-[180px] top-[225px] text-center text-[20px] font-['Viga'] bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent">
            {name} <p className="text-[#FFFFFF] font-['Sora']">{role}</p>{" "}
          </h1>
          <p className="absolute sm:top-[250px] top-[320px] text-[#8C8C8C] font-['sora'] text-center sm:w-[500px] w-[260px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadersCard;
