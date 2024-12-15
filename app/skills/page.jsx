"use client";

import SkillIcon, { MongoIcon, SupaIcon } from "../components/SkillIcon";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="flex flex-col md:ml-[50px] ml-[20px] lg:ml-[70px] xl:ml-[77px] w-full md:mr-[150px] mr-[20px] lg:mr-[180px] xl:mr-[232px] py-[25px] md:py-[35px] lg:py-[55px] xl:py-[85px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <motion.h2
        className="text-[40px] lg:text-[50px] xl:text-[64px] font-black text-main mb-[26px] lg:mb-[40px]"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          duration: 3,
          type: "spring",
          stiffness: 100,
          damping: 6,

          ease: "easeInOut",
        }}
      >
        SKILLS
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-[20px]">
        <div className="flex flex-col col-span-1 md:col-span-3 lg:col-span-3">
          <h3 className="text-[17px] lg:text-[20px] xl:text-[24px] font-bold mb-[14px] lg:mb-[30px] xl:mb-[42px]">
            CORE STACK +
          </h3>
          <div className="grid grid-cols-3 justify-between gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"js.svg"} text={"JavaScript"} />
            <SkillIcon icon={"react.svg"} text={"react"} />
            <SkillIcon icon={"node.svg"} text={"node.js"} />
            <SkillIcon icon={"ts.svg"} text={"TypeScript"} />
            <SkillIcon icon={"next.svg"} text={"next.js"} />
            <SkillIcon icon={"express.svg"} text={"express.js"} />
          </div>
          <div className="flex gap-[40px]  md:gap-[30px] lg:gap-[40px] mt-[36px] md:mt-[24px] lg:mt-[42px]">
            <SupaIcon icon={"supabase.svg"} text={"supabase"} />
            <MongoIcon icon={"mongodb.svg"} text={"mobgoDB"} />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-[17px] lg:text-[20px] xl:text-[24px] font-bold mt-[36px] md:mt-0 mb-[14px] lg:mb-[30px] xl:mb-[42px]">
            STATE MANAGEMENT
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"redux.svg"} text={"redux+RTK"} />
            <SkillIcon icon={"zustand.svg"} text={"zustand"} />
            <SkillIcon icon={"hook.svg"} text={"context API + hooks"} />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-1 col-span-1 md:col-span-5 lg:col-span-1 mt-[30px] lg:mt-0">
          <h3 className="md:col-span-1 text-[17px] lg:text-[20px] min-w-[80px]  xl:text-[24px] font-bold mb-[14px] md:mb-0 lg:mb-[30px] xl:mb-[42px]">
            UI
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 md:col-span-4 lg:grid-cols-1 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"tailwind.svg"} text={"tailwindCSS"} />
            <SkillIcon icon={"framer_o.svg"} text={"framer motion"} />
            <SkillIcon icon={"shadcn.svg"} text={"shadcn UI"} />
            <SkillIcon icon={"bootstrap.svg"} text={"bootstrap"} />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-1 col-span-1 md:col-span-5 lg:col-span-1 mt-[30px] lg:mt-0">
          <h3 className="md:col-span-1 text-[17px] lg:text-[20px] min-w-[80px]  xl:text-[24px] font-bold mb-[14px] md:mb-0 lg:mb-[30px] xl:mb-[42px]">
            TOOLS
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 md:col-span-4 lg:grid-cols-1 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"vscode.svg"} text={"vscode"} />
            <SkillIcon icon={"github.svg"} text={"github"} />
            <SkillIcon icon={"postman.svg"} text={"postman"} />
            <SkillIcon icon={"figma.svg"} text={"figma"} />
          </div>
        </div>
      </div>

      <p className="pb-[160px] md:pb-[80px] text-[20px] h-[50px] lg:text-[24px] xl:text-[34px] font-normal text-fade pt-[30px]">
        API&apos;s, Library&apos;s & More ......
      </p>
    </motion.div>
  );
};

export default Skills;
