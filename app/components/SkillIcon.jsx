import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const SkillIcon = ({ icon, text }) => {
  return (
    <motion.div
      data-cursor-text={text}
      className="flex items-center  justify-center w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] p-[6px] lg:p-[8px]  border-[2px] border-fade rounded-[17px]"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 12px rgb(255, 255, 255)",
      }}
    >
      <Image
        src={`/skills/${icon}`}
        layout="intrinsic"
        width={500} // This sets the intrinsic width
        height={500} // This sets the intrinsic height
        alt=""
      />
    </motion.div>
  );
};

export const SupaIcon = ({ icon, text }) => {
  return (
    <motion.div
      data-cursor-text={text}
      className="flex items-center justify-center w-[80px] lg:w-[110px] xl:w-[140px] h-[60px] md:h-[54px] lg:h-[60px] xl:h-[80px] p-[8px] lg:p-[10px] border-[2px] border-fade rounded-[17px]"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      }}
    >
      <Image
        src={`/skills/${icon}`}
        alt=""
        layout="intrinsic"
        width={500} // This sets the intrinsic width
        height={500} // This sets the intrinsic height
        className="h-[40px] lg:h-[46px] xl:h-[56px]"
      />
    </motion.div>
  );
};

export const MongoIcon = ({ icon, text }) => {
  return (
    <motion.div
      data-cursor-text={text}
      className="flex items-center justify-center w-[140px] lg:w-[170px] xl:w-[210px] h-[60px] md:h-[54px] lg:h-[66px] xl:h-[80px] p-[8px] lg:p-[10px] xl:p-0 border-[2px] border-fade rounded-[17px]"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      }}
    >
      <Image
        src={`/skills/${icon}`}
        alt=""
        width={500}
        height={500}
        className=" h-[40px] lg:h-[46px] xl:h-[56px]"
      />
    </motion.div>
  );
};

export default SkillIcon;
