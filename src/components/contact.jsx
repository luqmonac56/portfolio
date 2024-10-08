import { LocationIcon, MailIcon, PhoneIcon } from "../assets/Icons";

const Contact = () => {
  return (
    <section className="mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[150px]">
      <div className="flex flex-col items-center gap-6">
        <h3
          className={`font-medium text-[#FFFFFF99] text-base text-center max-w-[320px] hidden md:block md:max-w-[992px] md:text-lg md:leading-[37.5px]`}
        >
          I can help you build or improve the product experience for your new or
          existing products. Feel free to get in touch with me.
        </h3>
        <h1 className="font-clashbold font-semibold text-xl text-white md:text-[60px] md:leading-[73.8px]">
          Do You Have Any Ideas?
        </h1>

        <p className="flex items-center font-semibold text-[15px] leading-[22.5px] md:text-[20px] md:leading-[30px] text-[#FFFFFF99]">
          Say Hi! <small className={`animate-bounce`}>👋</small>
        </p>
      </div>
      <div
        className={`mt-10 flex flex-col lg:gap-[60px] gap-6  lg:flex-row items-center justify-center`}
      >
        <a
          className={`text-[#FFFFFF99] font-medium text-base md:text-[20px] md:leading-[30px]`}
          href="mailto:luqmonac5@gmail.com"
        >
          <div className="flex flex-col items-center gap-[10px]">
            <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
              <MailIcon
                className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#000000] md:w-[36px] md:h-[36px]`}
              />
            </div>
            <span>luqmonac5@gmail.com</span>
          </div>
        </a>

        <a
          href="tel:+2348144638782"
          className={`text-[#FFFFFF99] tex-base font-medium md:text-[20px] md:leading-[30px]`}
        >
          <div className="flex flex-col items-center gap-[10px]">
            <div className="bg-gradient-to-r to-[#CFFAFF] from-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[50px]">
              <PhoneIcon
                className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#000000] md:w-[36px] md:h-[36px]`}
              />
            </div>
            <span>+2348144638782</span>
          </div>
        </a>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
            <LocationIcon
              className={`w-[30px] h-[30px] p-2 md:p-[5px] bg-[#000000] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <p
            className={`text-[#FFFFFF99] text-base mx-auto text-center font-medium md:text-[20px] md:leading-[30px]`}
          >
            Lagos, Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
