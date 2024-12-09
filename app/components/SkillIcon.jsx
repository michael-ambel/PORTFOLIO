import React from "react";

const SkillIcon = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] p-[6px] lg:p-[8px] xl:p-0 border-[2px] border-fade rounded-[17px]">
      <img src={`/skills/${icon}`} alt="" />
    </div>
  );
};

export const SupaIcon = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-[80px] lg:w-[110px] xl:w-[140px] h-[60px] md:h-[54px] lg:h-[60px] xl:h-[80px] p-[8px] lg:p-[10px] xl:p-0 border-[2px] border-fade rounded-[17px]">
      <img
        src={`/skills/${icon}`}
        alt=""
        className="h-[40px] lg:h-[46px] xl:h-[56px]"
      />
    </div>
  );
};

export const MongoIcon = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-[140px] lg:w-[170px] xl:w-[210px] h-[60px] md:h-[54px] lg:h-[66px] xl:h-[80px] p-[8px] lg:p-[10px] xl:p-0 border-[2px] border-fade rounded-[17px]">
      <img
        src={`/skills/${icon}`}
        alt=""
        className=" h-[40px] lg:h-[46px] xl:h-[56px]"
      />
    </div>
  );
};

export default SkillIcon;
