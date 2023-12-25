import React from "react";
import img from "../assets/freelancer tips img.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FreelancerTips = () => {
  return (
    <section className=" mt-[50px]  md:mt-0 flex justify-center m-auto">
      <Link to=''>
      <div className="px-[15px] py-[20px] md:flex md:items-center  md:gap-[10px] sm:py-[40px] sm:px-[30px] md:py-[60px] md:px-[30px]">
        <div className="left md:flex-1">
          <img src={img} className=" w-full h-full object-cover" alt="" />
        </div>

        <div className="right md:flex-1 flex flex-col gap-[20px] md:gap-[15px] mt-[30px] md:mt-0 md:ml-[60px] md:mb-[20px]">
          <span className=" text-[16px] font-[700] text-[#bdca47]">
            FREELANCER TIPS
          </span>
          <h2 className=" md:leading-[60px] md:mr-[60px] text-[1.8rem] text-[#404145] font-[700] md:text-[3rem] xl:text-[3rem]">
            Fiverr Ease: A Mental Wellness Month Special
          </h2>
          <p className=" md:mt-[20px] text-[#404145] text-[.7rem] font-[700] xl:font-medium xl:text-[1.2rem]">
            By Netta Goldberg |{" "}
            <span className=" font-[400]"> May 25, 2023</span>
          </p>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default FreelancerTips;
