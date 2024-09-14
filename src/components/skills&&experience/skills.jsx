import { motion } from "framer-motion";
import Experience from "./experience";

const Skills = () => {
  return (
    <section className="overflow-hidden px-[33px] mt-[20px] lg:px-[70px] lg:mt-[50px]">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px]   lg:justify-cente">
        {/*skills */}
        <div className={`flex flex-col`}>
          <div>
            <h2
              className={`flex items-center font-clashbold text-white font-semibold text-[20px] leading-[24.6px] lg:text-[60px] lg:leading-[49.2px]`}
            >
              Skills <small className="animate-bounce">🤹‍♂️</small>
            </h2>
            <p
              className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[30px] lg:tracking-wide`}
            >
              yo, I{"'"}ve honed some of these skills over the years...
            </p>
          </div>
          <div className="w-fit">
            <div
              className={`mt-[31px] grid grid-cols-1 md:grid md:grid-cols-2 md:space-y-0 md:gap-3 space-y-[18.67px] lg:mt-[36px] lg:grid-cols-2 lg:space-y-0 lg:gap-[20px]`}
            >
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#000000] max-w-full w-[368px] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Html
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Css
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Tailwind css
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    JavaScript
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Git
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Github
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    ReactJs
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Next js
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Typescript
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    SCSS
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Jest
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#000000]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Vue js
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/*experience*/}
        <Experience />
      </div>
    </section>
  );
};

export default Skills;
