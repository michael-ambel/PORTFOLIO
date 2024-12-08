import React from "react";

const PortfolioBox = ({ img, w, h, name }) => {
  return (
    <div
      className="flex flex-col justify-between w-full bg-bs rounded-[13px]"
      style={{ height: `${h}px` }}
    >
      {/* <img src={`portfolio/${img}`} /> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default PortfolioBox;
