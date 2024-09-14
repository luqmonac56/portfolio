import { motion } from "framer-motion";
import { Copyright, GhIcon, InIcon, TwIcon } from "../assets/Icons";

const Footer = () => {
  return (
    <section className={`mx-[30px] mt-[60px] pb-6 lg:mx-[76px] `}>
      {/* line */}
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#0A1C20]"></div>
      <div className="mt-8 flex flex-col gap-6 md:flex md:flex-row justify-between items-center ">
        <div className="flex items-center gap-[10px]">
          <span>
            <Copyright
              className={`w-[20px] h-[20px] md:w-[25px] md:h-[25px]`}
            />
          </span>
          <p className={`text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
            Luqman Abdullahi <span> {new Date().getFullYear()} </span>
          </p>
        </div>
        <div className="flex justify-start items-center  gap-[26px] md:gap-[40px]">
          <motion.a
            href="https://twitter.com/devDotViju"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className={`h-auto w-auto`}
          >
            <TwIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-[#0a1c20]`}
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
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#0a1c20]`}
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
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#0a1c20]`}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
