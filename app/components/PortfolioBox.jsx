import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PortfolioBox = ({
  img,
  w,
  h,
  name,
  link,
  type,
  description,
  finished,
  statustxt,
}) => {
  const router = useRouter();
  const [comingsoon, setCommingSoon] = useState("");
  const handleClick = () => {
    if (finished) {
      window.open(link, "_blank");
    } else {
      setCommingSoon(statustxt);
      setTimeout(() => {
        setCommingSoon("");
      }, 3000);
    }
  };

  return (
    <div>
      <motion.div
        className="relative flex justify-center items-center group xl:w-[494px] h-[180px] md:h-[160px] lg:h-[270px] xl:h-[290px] p-[2px]  bg-main rounded-[13px] overflow-hidden"
        whileHover={{
          scale: 1.07,
          boxShadow: "0px 0px 18px rgb(255, 255, 255)",
        }}
        transition={{
          duration: 0.5,
        }}
        onClick={handleClick}
      >
        <div className="relative w-full h-full">
          <Image
            src={`/portfolio/${img}`}
            alt="project"
            layout="fill"
            objectFit="cover"
            className="absolute h-full top-0 left-0 rounded-[12px]"
          />
        </div>

        {!finished && (
          <div className="absolute hiddne lg:block text-[18px] right-0 top-[50px] pr-4   ">
            <p className="bg-bg text-[14px] text-fade bg-opacity-80 p-2 rounded-full">
              {comingsoon}
            </p>
          </div>
        )}
        <div className="absolute hidden w-0 h-0 text-[15px] lg:w-[340px] lg:px-[10px] lg:py-[7px] lg:rounded-[20px] lg:h-auto lg:bg-bg bg-opacity-80 text-main group-hover:block bottom-4 right-4">
          <div className="flex gap-6 ">
            <button className="bg-main text-black px-3 py-2 text-[14px] rounded-full">
              {name}
            </button>
            <p className="mt-2">{type}</p>
          </div>
          <p className="text-white text-[13px]">{description}</p>
        </div>
      </motion.div>
      <div className="lg:hidden mt-[12px] flex gap-6 ">
        <button
          onClick={handleClick}
          className="bg-main text-black px-3 py-2 text-[14px] rounded-full"
        >
          {name}
        </button>
        <p className="mt-2">{type}</p>
      </div>
    </div>
  );
};

export default PortfolioBox;
