import React from "react";
import { TbTargetArrow } from "react-icons/tb";

import { FaDollarSign } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
const Pricing = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="flex flex-col justify-center items-center pb-10">
          <h3 className="text-xl flex items-center gap-1 font-dmsans font-medium text-[#3661FC]">
            <TbTargetArrow className="text-[#FE651B]" />
            Our Pricing
          </h3>
          <h2 className="font-bold font-Nunito text-4xl text-black w-[550px] text-center pt-4 pb-7">
            Our Best Pricing Plan
          </h2>
        </div>
        {/* ========================================lower part ======================================== */}
        <div className="flex justify-between">
          <div className="cursor-pointer homePricing">
            <div className="pl-8 pb-7 flex justify-between gap-2 bg-[#F4F4FF] rounded-tr-[34px] rounded-tl-[34px] border-b-2">
              <div className="mt-5">
                <h4 className="pb-4 text-xl text-black font-Nunito font-bold">
                  Basic Plan
                </h4>
                <div className="flex">
                  <FaDollarSign className="text-sm text-[#3661FC]" />
                  <h3 className="text-5xl text-[#3661FC] font-Nunito font-bold">
                    30
                    <span className="text-base text-[#6B6161] font-normal">
                      Per Month
                    </span>
                  </h3>
                </div>
              </div>
              <div className="bg-[#3661FC] w-20 h-20 flex justify-center items-center rounded-tr-[34px] rounded-bl-[34px] pricingIcon">
                <img src="/public/Home/pricingIcon1.png" alt="pricingIcon" />
              </div>
            </div>
            <div className="py-7 px-10 bg-[#F4F4FF] rounded-br-[34px] rounded-bl-[34px]">
              <ul className="text-base font-medium font-dmsans flex flex-col gap-4 items-center">
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Free Consultations
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Business Planning
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Investment Process
                </li>
                <li className="flex items-center gap-1 text-[#BCBCBC]">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Market Research
                </li>
                <li className="flex items-center gap-1 text-[#BCBCBC]">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Online Support
                </li>
                <li className="flex items-center gap-1 text-[#BCBCBC]">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Unlimited Updates
                </li>
              </ul>
              <button className="text-base font-normal font-dmsans py-4 px-24 mt-9 border-2 rounded-full pricingBton">
                Choose Plan
              </button>
            </div>
          </div>

          {/* ========================================================================== */}

          <div className="cursor-pointer homePricing">
            <div className="pl-8 pb-7 flex justify-between gap-2 bg-[#F4F4FF] rounded-tr-[34px] rounded-tl-[34px] border-b-2">
              <div className="mt-5">
                <h4 className="pb-4 text-xl text-black font-Nunito font-bold">
                  Glod Plan
                </h4>
                <div className="flex">
                  <FaDollarSign className="text-sm text-[#3661FC]" />
                  <h3 className="text-5xl text-[#3661FC] font-Nunito font-bold">
                    60
                    <span className="text-base text-[#6B6161] font-normal">
                      Per Month
                    </span>
                  </h3>
                </div>
              </div>
              <div className="bg-[#3661FC] w-20 h-20 flex justify-center items-center rounded-tr-[34px] rounded-bl-[34px] pricingIcon">
                <img src="/public/Home/pricingIcon2.png" alt="pricingIcon" />
              </div>
            </div>
            <div className="py-7 px-10 bg-[#F4F4FF] rounded-br-[34px] rounded-bl-[34px]">
              <ul className="text-base font-medium font-dmsans flex flex-col gap-4 items-center">
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Free Consultations
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Business Planning
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Investment Process
                </li>
                <li className="flex items-center gap-1 text-[#BCBCBC]">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Market Research
                </li>
                <li className="flex items-center gap-1 text-[#BCBCBC]">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Online Support
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Unlimited Updates
                </li>
              </ul>
              <button className="text-base font-normal font-dmsans py-4 px-24 mt-9 border-2 rounded-full pricingBton">
                Choose Plan
              </button>
            </div>
          </div>

          {/* ================================================================================ */}

          <div className="cursor-pointer homePricing">
            <div className="pl-8 pb-7 flex justify-between gap-2 bg-[#F4F4FF] rounded-tr-[34px] rounded-tl-[34px] border-b-2">
              <div className="mt-5">
                <h4 className="pb-4 text-xl text-black font-Nunito font-bold">
                  Silver Plan
                </h4>
                <div className="flex">
                  <FaDollarSign className="text-sm text-[#3661FC]" />
                  <h3 className="text-5xl text-[#3661FC] font-Nunito font-bold">
                    90
                    <span className="text-base text-[#6B6161] font-normal">
                      Per Month
                    </span>
                  </h3>
                </div>
              </div>
              <div className="bg-[#3661FC] w-20 h-20 flex justify-center items-center rounded-tr-[34px] rounded-bl-[34px] pricingIcon">
                <img src="/public/Home/pricingIcon3.png" alt="pricingIcon" />
              </div>
            </div>
            <div className="py-7 px-10 bg-[#F4F4FF] rounded-br-[34px] rounded-bl-[34px]">
              <ul className="text-base font-medium font-dmsans flex flex-col gap-4 items-center">
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Free Consultations
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Business Planning
                </li>
                <li className="flex items-center gap-1">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Investment Process
                </li>
                <li className="flex items-center gap-1 ">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Market Research
                </li>
                <li className="flex items-center gap-1 ">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Online Support
                </li>
                <li className="flex items-center gap-1 ">
                  <IoCheckmarkCircle className="text-[#FE651B]" />
                  Unlimited Updates
                </li>
              </ul>
              <button className="text-base font-normal font-dmsans py-4 px-24 mt-9 border-2 rounded-full pricingBton">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
