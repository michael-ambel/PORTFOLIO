"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
const Home = () => {
  const [startSecondText, setStartSecondText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartSecondText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="flex h-auto justify-between gap-[30px] ml-[10px] md:ml-[38px] lg:ml-[57px] w-full mr-[10px] md:mr-[120px] lg:mr-[140px] xl:mr-[180px] mt-[50px] md:mt-auto my-auto pb-[100px] md:py-[60px] xl:py-[85px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1.5 }}
    >
      <div className="fixed hidden lg:block top-1/2 transform -translate-y-1/2 mr-[30px]  my-auto">
        <Image
          src="/michael.svg"
          alt="MICHAEL IMG"
          layout="intrinsic"
          width={500} // This sets the intrinsic width
          height={500} // This sets the intrinsic height
          className="w:full lg:w-[350px] xl:w-[400px] "
        />
      </div>

      <div className="flex flex-col lg:ml-[380px] xl:ml-[440px] items-start w-full justify-center ">
        <div className="flex mb-[30px] lg:mb-0">
          <div className="hidden md:block lg:hidden mr-[20px]  my-auto">
            <Image
              src="/michael.svg"
              alt="MICHAEL IMG"
              layout="intrinsic"
              width={500}
              height={500}
              className=" w-[300px]  "
            />
          </div>
          <div className="w-full">
            <div className="flex items-center mb-[20px] md:mb-0">
              <div className="block md:hidden  mr-[10px]  my-auto">
                <Image
                  src="/michael.svg"
                  alt="MICHAEL IMG"
                  layout="intrinsic"
                  width={500} // This sets the intrinsic width
                  height={500} // This sets the intrinsic height
                  className=" w-[190px]  "
                />
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 sm:space-y-0">
                <span className="block lg:inline-block text-white w-auto font-black text-[22px] mr-4 md:text-[20px] lg:text-[43px] xl:text-[52px]">
                  <Typewriter
                    options={{
                      strings: ["Hi THIS IS"],
                      autoStart: true,
                      loop: false,
                      cursor: "",
                      typeSpeed: 50,
                      deleteSpeed: 10000000,
                    }}
                  />
                </span>
                <span className="font-black block lg:inline-block lg:mb-0  md:flex  text-main text-[42px] md:text-[44px] lg:text-[44px] xl:text-[52px]">
                  {startSecondText && (
                    <Typewriter
                      options={{
                        strings: ["MICHAEL"],
                        autoStart: true,
                        loop: false,
                        cursor: "|",
                        typeSpeed: 50,
                        deleteSpeed: 10000000,
                      }}
                    />
                  )}
                </span>
              </div>
            </div>

            <motion.p
              className="text-[26px] md:text-[24px] lg:text-[28px] mt-[20px]  xl:text-[32px] font-black mb-[10px] md:mb-[20px] lg:mb-[30px]  xl:mb-[50px]"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 4,
                delay: 4,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              Full-stack developer
              <span className="text-fade text-[18px] xl:text-[22px] font-semibold block">
                Specializing in the MERN Stack, Next.js + other Modern tools
              </span>
            </motion.p>
          </div>
        </div>
        <p className="text-[18px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-fade font-semibold mb-[44px] md:mb-[24px] lg:mb-[38px] xl:mb-[58px]">
          <span className="font-normal block">
            I build web applications that{" "}
            <span className="text-main font-normal">blend</span>
          </span>
          High-quality, Scalable, User-Centric, Intuitive UI & Performance.
        </p>

        <div className="w-full lg:h-[120px] xl:h-[160px] md:pr-[50px] lg:pr-[100px] flex-col justify-between">
          <p className="w-full text-[19px] md:text-[20px]  lg:text-[22px] xl:text-[28px] font-bold text-center mb-[22px] md:mb-[12px] lg:mb-[14px] xl:mb-[18px]">
            “ <span className="font-extralight">I</span> Love Implementing{" "}
            <span className="font-extralight">the</span> Latest Trends.”
          </p>

          <div className="flex justify-between items-end mb-[30px] md:mb-0">
            <Image
              src="/idea.svg"
              alt="idea"
              layout="intrinsic"
              width={500} // This sets the intrinsic width
              height={500} // This sets the intrinsic height
              className="w-[70px] lg:w-[85px] xl:w-[100px]"
            />
            <h2 className="text-main text-[28px] md:text-[30px] lg:text-[38px] xl:text-[44px]  font-black mb-[-10px]">
              <span className="text-[16px] md:text-[20px] lg:text-[26px] font-thin block">
                LET’S CHANGE YOUR{" "}
              </span>
              IDEA<span className="font-thin "> TO </span>REALITY
            </h2>
            <Image
              src="reality.svg"
              alt="reality"
              layout="intrinsic"
              width={500} // This sets the intrinsic width
              height={500} // This sets the intrinsic height
              className="w-[70px] lg:w-[85px] xl:w-[100px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
