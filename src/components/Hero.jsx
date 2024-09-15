import { motion } from "framer-motion";
import { InIcon, TwIcon, GhIcon } from "../assets/Icons";
import hero from "../assets/images/profile.jpg";
// import hero2 from "../assets/images/profile2.jpg";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-8 md:items-center lg:flex lg:flex-row lg:items-center lg:space-x-12 lg:justify-between">
          <div>
            <div className={`gradientText`}>
              <h1>
                Creative Software Engineer<span>.</span>
              </h1>
            </div>
            <p
              className={`gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]`}
            >
              A Software Engineer Focused on delivering scalable and
              maintainable frontend solutions, with a strong emphasis on code
              efficiency and user-centric design.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className={`max-w-[310px]`}>
                1+ Years of experience. Specialized in building products, while
                ensuring a seamless web experience for clients.
              </p>
              <p className={`max-w-[335px]`}>
                Skilled in creating seamless user experiences through responsive
                design, interactive UI components, and optimized web
                performance.
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://twitter.com/devDotViju"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#ffffff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#ffffff] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/luqman-abdullahi-54b1b118b/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#ffffff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#ffffff] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>

              <motion.a
                href="https://github.com/luqmonac56"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <GhIcon
                  fill={`#ffffff`}
                  className={`w-[30px] h-[30px] rounded-full border-[#ffffff] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full`}>
                <img
                  src={hero}
                  alt="hero image is here"
                  className="absolute w-full h-[90%] bottom-5 right-3 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12"
                  draggable={false}
                />
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[300px] lg:min-w-[400px] lg:min-h-[400px] border-[3px] border-[#ffffff]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
