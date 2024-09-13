// import { motion } from "framer-motion";
import { ExpCircle } from "../../assets/Icons";

const Experience = () => {
  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop mb-4">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text- lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some of my experiences over the years..
          </p>
        </div>
        <div className="flex flex-row relative z-[10000000000]  lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[740px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Frontend Intern <span>-</span> &nbsp;
                  <span className="italic text-[#FFFFFF99]">
                    June 2024 - till date
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  HNG Tech
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  Worked closely with backend developers, designers, and project
                  managers to meet project deadlines and deliver a high-quality
                  product.
                </h5>
              </div>
            </div>

            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer <span>-</span>&nbsp;
                  <span className="italic text-[#FFFFFF99]">2023</span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Freelance
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I worked as a freelance Web developer with the responsibility
                  of building the portfolio website for a product designer to
                  showcase the client’s skills and previous projects.
                </h5>
              </div>
            </div>

            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Frontend developer&nbsp;
                  <span>-</span> &nbsp;
                  <span className="italic text-[#FFFFFF99]">
                    May 2022 – Sept. 2022
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Freelance
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I Worked as a freelance frontend developer in a team of
                  developers to build a whitelist allocation webapp for crypto
                  enthusiasts, specifically for Solana and Ethereum projects.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
