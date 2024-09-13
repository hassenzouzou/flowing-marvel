import {
  cardsBg,
  arrowBtn,
  ourResponseIcon,
  privacyAsIcon,
} from "../constants";

const getInTouch = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:pb-[200px] pb-[100px] ">
      <h1 className="sm:text-[50px] text-[40px] font-['Viga'] font-normal bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] bg-clip-text text-transparent text-center ">
        Get in Touch with Us Today!
      </h1>
      <p className="sm:text-[25px] text-[23px] sm:w-[770px] w-[360px] text-center text-[#FFFFFF] sm:pb-[65px] pb-[50px]">
        Let's start the journey of success together!
      </p>
      <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] w-[90%] relative mb-[50px] ">
        <div className="flex flex-col items-center h-auto bg-[#0F0F0F] rounded-[20px] sm:pb-[30px] pb-[12px] ">
          <img src={cardsBg} alt="" />
          <div className="absolute top-[50px] sm:left-[50px] left-[10px] right-[50px] text-[#FFFF]">
            <div className="flex flex-row flex-wrap justify-between mb-[50px] sm:gap-[50px] gap-[20px]">
              <div className="flex flex-col">
                <label>Name:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] relative mt-[10px]">
                  <input
                    className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none "
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Email:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] relative mt-[10px]">
                  <input
                    className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none "
                    type="text"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Phone Number:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] relative mt-[10px]">
                  <input
                    className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none "
                    type="number"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Select Service:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] mt-[10px]">
                  <select className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none ">
                    <option value="" disabled selected hidden>
                      Select an option
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label>Company / Organization Name:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] relative mt-[10px]">
                  <input
                    className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none "
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label>Subject:</label>
                <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[100px] relative mt-[10px]">
                  <input
                    className="rounded-[100px] px-[15px] py-[10px] w-[350px] bg-[#0F0F0F] font-['Roboto'] outline-none "
                    type="text"
                    placeholder="Enter Your Subject"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Message:</label>
              <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] relative mt-[10px] sm:mb-[50px] sm:w-auto w-[113%] ">
                <textarea
                  className="rounded-[20px] px-[15px] py-[10px] bg-[#0F0F0F] font-['Roboto'] outline-none w-[100%] h-[200px] "
                  placeholder="Enter Your Message"
                />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[74px] mb-[50px]  sm:mt-0 mt-[670px]">
            <div className="flex flex-row justify-center items-center bg-[#1A1A1A] rounded-[74px] px-[20px] py-[14px]">
              <button className=" font-['Sora'] mr-[10px] text-[#FFFF] ">
                Send your request
              </button>
              <img className="h-[15px]" src={arrowBtn} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-[25px] w-full font-['Sora'] ">
        <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] sm:w-[44%] w-[95%]">
          <div className="bg-[#0F0F0F] rounded-[20px]">
            <div className="flex flex-col justify-start items-start sm:p-[25px] p-[18px] ">
              <div className="flex justify-start items-center pb-[20px]">
                <img className="w-[60px]" src={ourResponseIcon} alt="" />
                <h1 className="text-[#FFFF] ml-[15px] text-[20px]">
                  Our Response
                </h1>
              </div>
              <p className="text-[#8C8C8C] text-[16px] ">
                We understand the importance of timely responses, and our team
                is committed to addressing your inquiries promptly. Whether you
                have a specific project in mind, need advice on digital
                strategies, or want to explore partnership opportunities, we are
                here to assist you at every step.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#007EFF] to-[#0BFAE6] p-[1px] rounded-[20px] sm:w-[44%] w-[95%]">
          <div className="bg-[#0F0F0F] rounded-[20px]">
            <div className="flex flex-col justify-start items-start sm:p-[25px] p-[18px]">
              <div className="flex justify-start items-center pb-[20px]">
                <img className="w-[60px]" src={privacyAsIcon} alt="" />
                <h1 className="text-[#FFFF] ml-[15px] text-[20px]">
                  Privacy Assurance
                </h1>
              </div>
              <p className="text-[#8C8C8C] text-[16px] ">
                At Flowing Marvel, we prioritize your privacy and protect your
                personal information in compliance with data protection
                regulations. Rest assured that your details will only be used
                for the purpose of addressing your inquiries and will not be
                shared with third parties without your consent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getInTouch;
