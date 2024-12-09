import SkillIcon, { MongoIcon, SupaIcon } from "../components/SkillIcon";

const Skills = () => {
  return (
    <div className="flex flex-col md:ml-[50px] ml-[20px] lg:ml-[70px] xl:ml-[77px] w-full md:mr-[150px] mr-[20px] lg:mr-[180px] xl:mr-[232px] py-[25px] md:py-[35px] lg:py-[55px] xl:py-[85px]">
      <h2 className="text-[40px] lg:text-[50px] xl:text-[64px] font-black text-main mb-[26px] lg:mb-[40px]">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-[20px]">
        <div className="flex flex-col col-span-1 md:col-span-3 lg:col-span-3">
          <h3 className="text-[17px] lg:text-[20px] xl:text-[24px] font-bold mb-[14px] lg:mb-[30px] xl:mb-[42px]">
            CORE STACK +
          </h3>
          <div className="grid grid-cols-3 justify-between gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"js.svg"} />
            <SkillIcon icon={"react.svg"} />
            <SkillIcon icon={"node.svg"} />
            <SkillIcon icon={"ts.svg"} />
            <SkillIcon icon={"next.svg"} />
            <SkillIcon icon={"express.svg"} />
          </div>
          <div className="flex gap-[40px]  md:gap-[30px] lg:gap-[40px] mt-[36px] md:mt-[24px] lg:mt-[42px]">
            <SupaIcon icon={"supabase.svg"} />
            <MongoIcon icon={"mongodb.svg"} />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h3 className="text-[17px] lg:text-[20px] xl:text-[24px] font-bold mt-[36px] md:mt-0 mb-[14px] lg:mb-[30px] xl:mb-[42px]">
            STATE MANAGEMENT
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"redux.svg"} />
            <SkillIcon icon={"zustand.svg"} />
            <SkillIcon icon={"hook.svg"} />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-1 col-span-1 md:col-span-5 lg:col-span-1 mt-[30px] lg:mt-0">
          <h3 className="md:col-span-1 text-[17px] lg:text-[20px] min-w-[80px]  xl:text-[24px] font-bold mb-[14px] md:mb-0 lg:mb-[3px] xl:mb-[42px]">
            UI
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 md:col-span-4 lg:grid-cols-1 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"tailwind.svg"} />
            <SkillIcon icon={"framer_o.svg"} />
            <SkillIcon icon={"shadcn.svg"} />
            <SkillIcon icon={"bootstrap.svg"} />
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-1 col-span-1 md:col-span-5 lg:col-span-1 mt-[30px] lg:mt-0">
          <h3 className="md:col-span-1 text-[17px] lg:text-[20px] min-w-[80px]  xl:text-[24px] font-bold mb-[14px] md:mb-0 lg:mb-[30px] xl:mb-[42px]">
            TOOLS
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 md:col-span-4 lg:grid-cols-1 gap-[34px] lg:gap-[28px] xl:gap-[42px] w-full">
            <SkillIcon icon={"vscode.svg"} />
            <SkillIcon icon={"github.svg"} />
            <SkillIcon icon={"postman.svg"} />
            <SkillIcon icon={"figma.svg"} />
          </div>
        </div>
      </div>

      <p className="pb-[160px] md:pb-[80px] text-[20px] h-[50px] lg:text-[24px] xl:text-[34px] font-normal text-fade pt-[30px]">
        API’s, Library's & More ......
      </p>
    </div>
  );
};

export default Skills;
