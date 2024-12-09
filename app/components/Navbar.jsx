"use client";

import {
  homeSvg,
  skillsSvg,
  portfolioSvg,
  contactSvg,
} from "../utils/SvgIcons";
import { motion } from "framer-motion";
import Link from "next/link";

import { usePathContext } from "../context/PathContext";

const Navbar = () => {
  const { path } = usePathContext();

  const icons = [homeSvg, skillsSvg, portfolioSvg, contactSvg];

  const svgVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.3 } },
    clicked: { pathLength: 0, transition: { duration: 2, ease: "easeInOut" } },
  };

  const pathVariant = {
    initial: { fillOpacity: 0, pathLength: 0 },
    animate: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed bottom-0 left-0 md:top-1/2 md:left-auto md:transform md:-translate-y-1/2 md:mr-[0px] md:ml-auto h-[80px] md:h-[240px] lg:h-[342px] w-full md:w-[126px] xl:w-[132px] flex md:flex-col items-start py-[10px] px-[20px] md:p-0 justify-between bg-bg">
      {icons.map((icon) => (
        <button
          key={icon.id}
          className="flex flex-col md:flex-row items-center w-[40px] md:w-[80px] lg:w-[102px] xl:w-[132px] h-[50px]  md:h-[48px] gap-1 md:gap-4 justify-start align-bottom border-none focus:outline-none group"
        >
          <Link href={icon.link}>
            <motion.svg
              // width={icon.width}
              // height={icon.height}
              viewBox={icon.viewBox}
              fill={path === icon.link ? "#FFB912" : "#737373"}
              xmlns={icon.xmlns}
              variants={svgVariants}
              initial="initial"
              whileHover="hover"
              whileTap="clicked"
              stroke="none"
              className="border-none w-[40px] md:w-[38px] xl:w-[50px] focus:outline-none"
            >
              <motion.path
                fill={path === icon.link ? "#FFB912" : "#737373"}
                d={icon.d}
                variants={pathVariant}
                initial="initial"
                animate="animate"
              />
            </motion.svg>
          </Link>
          <span className="hidden group-hover:block group-active:block text-[14] md:text-[18px] font-normal my-auto text-fade">
            {icon.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
