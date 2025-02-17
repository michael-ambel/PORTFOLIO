"use client";

import PortfolioBox from "../components/PortfolioBox";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    img: "olcart.png",

    name: "olcart",
    link: "",
    type: "Shopping Platform",
    description:
      "An online shopping platform featuring products from multiple stores, with a user-friendly interface, a secure checkout process, and reliable, secured payment solutions through PayPal and Stripe",
    finished: true,
    link: "https://www.olcart.store/",
  },
  {
    img: "cinesnap.png",

    name: "CineSnap",
    type: "Movie Database",
    description:
      "A dynamic movie search app with real-time data, offering users the ability to discover latest and explore movie details.",
    finished: true,
    link: "https://cinesnap.vercel.app/",
  },
  {
    img: "portfolio.png",

    name: "Portfolio",
    type: "Portfolio Website",
    description:
      "Portfolio website highlighting skills, projects, and a contact page with a seamless messaging feature for easy inquiries and email confirmations.",
    finished: true,
    link: "https://www.michaelambel.dev/",
  },
  {
    img: "lib.png",

    name: "LibDental",
    type: "Dental Clinic",
    description:
      "A responsive dental clinic landing page providing easy access to services and clinic information.",
    finished: true,
    link: "https://www.libdental.com/",
  },
  {
    img: "eLearning.jpg",

    name: "corbit-x",
    type: "eLearning website",
    description:
      "eLearning platform offering a seamless learning experience, featuring a wide range of courses, user-friendly navigation, and progress tracking tools.",
    finished: false,
    statustxt: "Cancelled project",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="flex z-20 flex-col pl-[20px] md:pl-[40px] lg:pl-[70px] xl:pl-[77px] w-full pr-[20px] md:pr-[160px] lg:pr-[180px] xl:pr-[232px] py-[35px] xl:py-[50px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1.5 }}
    >
      <motion.h2
        className="text-[40px] lg:text-[50px] xl:text-[64px] font-black text-main mb-[26px] lg:mb-[40px]"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 4,
          type: "spring",
          stiffness: 100,
          damping: 6,
          delay: 1,
          ease: "easeInOut",
        }}
      >
        PORTFOLIO
      </motion.h2>
      <div className="flex flex-col gap-[36px]">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-[120px] md:pb-[50px] gap-[42px]">
          {portfolioProjects.map((project, index) => (
            <PortfolioBox key={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
