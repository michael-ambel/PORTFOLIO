import PortfolioBox from "../components/PortfolioBox";

const Portfolio = () => {
  return (
    <div className="flex flex-col ml-[57px] w-full mr-[232px] py-[85px]">
      <h2 className="text-[64px] font-black text-main mb-[60px]">PORTFOLIO</h2>
      <div className="flex flex-col gap-[36px]">
        <div className="flex justify-between gap-[42px]">
          <PortfolioBox img={"/.svg"} w={508} h={274} name={""} />
          <PortfolioBox img={"/.svg"} w={508} h={274} name={""} />
        </div>

        <div className="flex justify-between gap-[42px]">
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
