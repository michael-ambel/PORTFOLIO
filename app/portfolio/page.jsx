import PortfolioBox from "../components/PortfolioBox";

const Portfolio = () => {
  return (
    <div className="flex flex-col ml-[20px] md:ml-[40px] lg:ml-[70px] xl:ml-[77px] w-full  md:py-[35px] mr-[20px] md:mr-[160px] lg:mr-[180px] xl:mr-[232px] lg:py-[55px] xl:py-[85px]">
      <h2 className="text-[40px] lg:text-[50px] xl:text-[64px] font-black text-main mb-[40px]">
        PORTFOLIO
      </h2>
      <div className="flex flex-col gap-[36px]">
        <div className="flex flex-col lg:flex-row justify-between gap-[42px]">
          <PortfolioBox img={"/.svg"} w={508} h={274} name={""} />
          <PortfolioBox img={"/.svg"} w={508} h={274} name={""} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 pb-[120px] md:pb-[50px] gap-[42px]">
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
          <PortfolioBox img={"/.svg"} w={326} h={188} name={""} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
