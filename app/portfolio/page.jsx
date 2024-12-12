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
          duration: 2,
          type: "spring",
          stiffness: 100,
          damping: 8,
          ease: "easeInOut",
        }}
      >
        PORTFOLIO
      </motion.h2>
      <div className="flex flex-col gap-[36px]">
        <div className=" grid grid-cols-1 md:grid-cols-2 pb-[120px] md:pb-[50px] gap-[42px]">
          <PortfolioBox
            img={"ecom.jpg"}
            w={490}
            h={280}
            name={"GrabCart"}
            link={""}
            type={"eCommerce website"}
            description={
              "An eCommerce platform aiming to offer quality tech products with user-friendly navigation, a secure checkout process, and a seamless shopping experience."
            }
            finished={false}
            statustxt={"Will be available soon"}
          />
          <PortfolioBox
            img={"cinesnap.png"}
            w={490}
            h={280}
            name={"CineSnap"}
            type={"Movie Database website"}
            description={
              "A dynamic movie search app with real-time data, offering users the ability to discover latast and explore movie details."
            }
            finished={true}
            link={"https://cinesnap.vercel.app/"}
          />
          <PortfolioBox
            img={"portfolio.png"}
            w={490}
            h={280}
            name={"Portfolio"}
            type={"Personal website"}
            description={
              "Portfolio website highlighting skills, projects, and a contact page with a seamless messaging feature for easy inquiries and email confirmations."
            }
            finished={true}
            link={"http://localhost:3000/"}
          />
          <PortfolioBox
            img={"lib.png"}
            w={490}
            h={280}
            name={"LibDental"}
            type={"Dental clinic website"}
            description={
              "A responsive dental clinic landing page providing easy access to services and clinic information."
            }
            finished={true}
            link={"https://www.libdental.com/"}
          />
          <PortfolioBox
            img={"eLearning.jpg"}
            w={490}
            h={280}
            name={"corbit-x"}
            type={"eLearning website"}
            description={
              "eLearning platform offering a seamless learning experience, featuring a wide range of courses, user-friendly navigation, and progress tracking tools."
            }
            finished={false}
            statustxt={"Cancleld project"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
