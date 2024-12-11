import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioBox = ({ img, w, h, name }) => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full bg-bs rounded-[13px]"
      style={{ height: `${h}px` }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Image
        src={`/portfolio/${img}`}
        layout="intrinsic"
        width={500}
        height={500}
      />
      <p>{name}</p>
    </motion.div>
  );
};

export default PortfolioBox;
