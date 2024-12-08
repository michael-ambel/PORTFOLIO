import React from "react";

const SkillIcon = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-[80px] h-[80px] border-[2px] rounded-[17px] border-fade ">
      <img src={`/skills/${icon}`} alt="" />
    </div>
  );
};
export const CustomIcon = ({ icon, w, h }) => {
  return (
    <div
      style={{ width: `${w}px`, height: `${h}px` }}
      className="flex items-center justify-center border-[2px] rounded-[17px] border-fade"
    >
      <img src={`/skills/${icon}`} alt="" />
    </div>
  );
};

export default SkillIcon;
