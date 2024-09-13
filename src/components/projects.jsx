import { motion } from "framer-motion";
import { Arrow } from "../assets/Icons";
import { projectData } from "../Data/data";

const Projects = () => {
  return (
    <section className={`mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[152px]`}>
      <div>
        <div>
          <h2
            className={`flex items-center font-clashbold text-[20px] text-white md:text-[60px] md:font-semibold md:leading-[73.8px]`}
          >
            Do...ings? Yo! <span className={`animate-bounce`}>👨‍🍳</span>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[18px] lg:leading-[27px]`}
          >
            some of my fun and real projects I{"'"}ve worked on both in a team and personally...
          </p>
        </div>

        <div className={`mt-[46px] flex flex-wrap gap-8 md:gap-6 justify-start md:justify-between `}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`p-4 w-full md:w-[48%] xl:w-[390px] md:mb-8 rounded-t-md hover:shadow-2xl hover:shadow-emerald-400/20  bg-[#000000] flex flex-col gap-[25px] `}
            >
              <h5
                className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
              >
                {project.name}
              </h5>
              <p
                className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
              >
                {project.lang}
              </p>
              <small
                className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
              >
                {project.desc}
              </small>
              <div className="w-[68px]">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    className="flex items-center space-x-2"
                  >
                    <span>
                      <Arrow
                        className={`w-[20px] h-[20px] md:w-[18px] md:h-[18px]`}
                      />
                    </span>
                    <p
                      className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
                    >
                      view
                    </p>
                  </motion.div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
