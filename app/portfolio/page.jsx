"use client";

import PortfolioBox from "../components/PortfolioBox";
import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div
      className="flex flex-col ml-[20px] md:ml-[40px] lg:ml-[70px] xl:ml-[77px] w-full  md:py-[35px] mr-[20px] md:mr-[160px] lg:mr-[180px] xl:mr-[232px] lg:py-[55px] xl:py-[85px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1.5 }}
    >
      <motion.h2
        className="text-[40px] lg:text-[50px] xl:text-[64px] font-black text-main mb-[40px]"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 10,
          ease: "easeInOut",
        }}
      >
        PORTFOLIO
      </motion.h2>
      <div className="flex flex-col gap-[36px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[42px]">
          <PortfolioBox img={"cinesnap.png"} w={508} h={274} name={""} />
          <PortfolioBox img={"cinesnap.png"} w={508} h={274} name={""} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 pb-[120px] md:pb-[50px] gap-[42px]">
          <PortfolioBox img={"cinesnap.png"} w={326} h={188} name={""} />
          <PortfolioBox img={"cinesnap.png"} w={326} h={188} name={""} />
          <PortfolioBox img={"cinesnap.png"} w={326} h={188} name={""} />
          <PortfolioBox img={"cinesnap.png"} w={326} h={188} name={""} />
          <PortfolioBox img={"cinesnap.png"} w={326} h={188} name={""} />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
