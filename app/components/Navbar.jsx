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

  return (
    <div className="fixed z-50  bottom-0 right-0 md:top-1/2 md:left-auto md:transform md:-translate-y-1/2 md:mr-[0px] md:ml-auto h-[80px] md:h-[240px] lg:h-[342px] w-full md:w-[110px] xl:w-[132px] flex md:flex-col items-start py-[10px] px-[20px] md:p-0 justify-between bg-bg">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="flex flex-col md:flex-row items-center w-[40px] md:w-[80px] lg:w-[102px] xl:w-[132px] h-[50px]  md:h-[48px] gap-1 md:gap-2 justify-start align-bottom border-none focus:outline-none group"
          whileHover={{}}
        >
          <motion.button
            className=" flex items-center  justify-center w-[40px] h-[40px]  "
            whileHover={{
              rotate: 10,
              scale: 1.2,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            <Link href={icon.link}>
              <svg
                viewBox={icon.viewBox}
                fill={path === icon.link ? "#FFB912" : "#737373"}
                xmlns={icon.xmlns}
                stroke="none"
                className="border-none w-[40px] md:w-[38px] xl:w-[50px] focus:outline-none"
              >
                <path
                  fill={path === icon.link ? "#FFB912" : "#737373"}
                  d={icon.d}
                />
              </svg>
            </Link>
          </motion.button>
          <span className="hidden group-hover:block group-active:block text-[14px] md:text-[16px] xl:text-[18px] font-medium my-auto text-fade">
            {icon.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
