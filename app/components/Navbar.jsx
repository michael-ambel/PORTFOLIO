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
    <div className="fixed top-1/2 transform -translate-y-1/2 mr-[0px] ml-auto h-[342px]  w-[132px] flex flex-col items-start justify-between">
      {icons.map((icon) => (
        <button
          key={icon.id}
          className="flex w-[132px] h-[48px] gap-4 justify-start align-bottom border-none focus:outline-none group"
        >
          <Link href={icon.link}>
            <motion.svg
              width={icon.width}
              height={icon.height}
              viewBox={icon.viewBox}
              fill={path === icon.link ? "#FFB912" : "#737373"}
              xmlns={icon.xmlns}
              variants={svgVariants}
              initial="initial"
              whileHover="hover"
              whileTap="clicked"
              stroke="none"
              className="border-none focus:outline-none"
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
          <span className="hidden group-hover:block text-[18px] font-normal my-auto text-fade">
            {icon.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
