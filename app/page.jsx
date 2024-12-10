import React from "react";

const Home = () => {
  return (
    <div className="flex h-auto justify-between gap-[30px] ml-[10px] md:ml-[38px] lg:ml-[57px] w-full mr-[10px] md:mr-[120px] lg:mr-[140px] xl:mr-[180px] mt-[50px] md:mt-auto my-auto pb-[100px] md:py-[60px] xl:py-[85px]">
      <div className="fixed hidden lg:block top-1/2 transform -translate-y-1/2 mr-[30px]  my-auto">
        <img
          src="/michael.svg"
          alt="MICHAEL IMG"
          className=" lg:w-[360px] xl:w-[400px] "
        />
      </div>

      <div className="flex flex-col lg:ml-[420px] xl:ml-[440px] items-start w-full justify-center ">
        <div className="flex mb-[30px] lg:mb-0">
          <div className="hidden md:block lg:hidden mr-[20px]  my-auto">
            <img
              src="/michael.svg"
              alt="MICHAEL IMG"
              className=" w-[300px]  "
            />
          </div>
          <div className="w-full">
            <div className="flex items-center mb-[20px] md:mb-0">
              <div className="block md:hidden  mr-[10px]  my-auto">
                <img
                  src="/michael.svg"
                  alt="MICHAEL IMG"
                  className=" w-[164px]  "
                />
              </div>
              <h2 className="text-fade font-black text-[22px] md:text-[20px] lg:text-[46px] xl:text-[52px] mb-[10px]">
                HI, THIS <span></span>
                <span className="md:mt-[-16px] lg:mb-0 sm:block lg:inline text-main text-[48px] md:text-[44px] lg:text-[46px] xl:text-[52px]">
                  MICHAEL
                </span>
              </h2>
            </div>

            <p className="text-[30px] md:text-[24px] lg:text-[28px]  xl:text-[32px] font-black mb-[20px] md:mb-[20px] lg:mb-[38px]  xl:mb-[58px]">
              Full-stack developer
              <span className="text-fade text-[18px] xl:text-[22px] font-semibold block">
                Specializing in the MERN Stack, Next.js + other Modern tools
              </span>
            </p>
          </div>
        </div>
        <p className="text-[20px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-fade font-semibold mb-[44px] md:mb-[24px] lg:mb-[38px] xl:mb-[58px]">
          <span className="font-light block">
            I build web applications that blend
          </span>
          High-quality, Scalable, User-Centric, Intuitive UI & Performance.
        </p>

        <div className="w-full lg:h-[120px] xl:h-[160px] md:pr-[50px] lg:pr-[100px] flex-col justify-between">
          <p className="w-full text-[19px] md:text-[20px]  lg:text-[22px] xl:text-[28px] font-bold text-center mb-[22px] md:mb-[12px] lg:mb-[14px] xl:mb-[18px]">
            “ <span className="font-extralight">I</span> Love Implementing{" "}
            <span className="font-extralight">the</span> Latest Trends.”
          </p>

          <div className="flex justify-between items-end mb-[30px] md:mb-0">
            <img
              src="/idea.svg"
              alt=""
              className="w-[70px] lg:w-[85px] xl:w-[100px]"
            />
            <h2 className="text-main text-[28px] md:text-[30px] lg:text-[38px] xl:text-[44px]  font-black mb-[-10px]">
              <span className="text-[16px] md:text-[20px] lg:text-[26px] font-thin block">
                LET’S CHANGE YOUR{" "}
              </span>
              IDEA<span className="font-thin "> TO </span>REALITY
            </h2>
            <img
              src="reality.svg"
              alt=""
              className="w-[70px] lg:w-[85px] xl:w-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
