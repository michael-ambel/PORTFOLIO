import SkillIcon from "../components/SkillIcon";
import { CustomIcon } from "../components/SkillIcon";

const Skills = () => {
  return (
    <div className="flex flex-col ml-[57px] w-full mr-[232px] py-[85px]">
      <h2 className="text-[64px] font-black text-main mb-[60px]">SKILLS</h2>

      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-[24px] font-bold mb-[42px]">CORE STACK +</h3>
          <div className="grid grid-cols-3 gap-[42px] w-[324px]">
            <SkillIcon icon={"js.svg"} />
            <SkillIcon icon={"react.svg"} />
            <SkillIcon icon={"node.svg"} />
            <SkillIcon icon={"ts.svg"} />
            <SkillIcon icon={"next.svg"} />
            <SkillIcon icon={"express.svg"} />
          </div>
          <div className="flex gap-[13px] mt-[42px]">
            <CustomIcon icon={"supabase.svg"} w={105} h={80} />
            <CustomIcon icon={"mongodb.svg"} w={205} h={80} />
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-[42px]">State Management</h3>
          <div className="grid grid-cols-2 gap-[42px] w-[224px]">
            <SkillIcon icon={"redux.svg"} />
            <SkillIcon icon={"zustand.svg"} />
            <SkillIcon icon={"hook.svg"} />
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-[42px]">UI</h3>
          <div className="grid grid-cols-1 gap-[42px] w-[80px]">
            <SkillIcon icon={"tailwind.svg"} />
            <SkillIcon icon={"framer_o.svg"} />
            <SkillIcon icon={"shadcn.svg"} />
            <SkillIcon icon={"bootstrap.svg"} />
          </div>
        </div>

        <div>
          <h3 className="text-[24px] font-bold mb-[42px]">Tools</h3>
          <div className="grid grid-cols-1 gap-[42px] w-[80px]">
            <SkillIcon icon={"vscode.svg"} />
            <SkillIcon icon={"github.svg"} />
            <SkillIcon icon={"postman.svg"} />
            <SkillIcon icon={"figma.svg"} />
          </div>
        </div>
      </div>

      <p className="text-[34px] font-normal text-fade">
        API’s, Library's & More ......
      </p>
    </div>
  );
};

export default Skills;
