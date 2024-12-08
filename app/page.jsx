import React from "react";

const Home = () => {
  return (
    <div className="flex  ml-[57px] w-full mr-[212px] my-auto py-[85px]">
      <div className=" mr-[30px]  my-auto">
        <img src="/michael.svg" alt="MICHAEL IMG" className=" w-[420px] " />
      </div>
      <div className="flex flex-col items-start w-[727px] justify-center ">
        <h2 className="text-fade font-black text-[52px] mb-[30px]">
          HI, THIS IS <span className="text-main">MICHAEL</span>
        </h2>

        <p className="text-[32px] font-black mb-[58px]">
          Full-stack developer
          <span className="text-fade text-[24px] font-bold block">
            Specializing in the MERN Stack, Next.js + other Modern tools
          </span>
        </p>

        <p className="text-[24px] text-fade font-bold mb-[58px]">
          <span className="font-light block">
            I build web applications that blend
          </span>{" "}
          High-quality, Scalable, User-Centric, Intuitive UI & Performance.
        </p>

        <div className="w-full h-[160px] px-6 flex-col justify-between">
          <p className="w-full text-[28px] font-bold text-center mb-[18px]">
            “ <span className="font-extralight">I</span> Love Implementing{" "}
            <span className="font-extralight">the</span> Latest Trends.”
          </p>

          <div className="flex justify-between items-end">
            <img src="/idea.svg" alt="" />
            <h2 className="text-main text-[40px] font-black mb-[-10px]">
              <span className="text-[20px] font-thin block">
                LET’S CHANGE YOUR{" "}
              </span>
              IDEA<span className="font-thin "> TO </span>REALITY
            </h2>
            <img src="reality.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
