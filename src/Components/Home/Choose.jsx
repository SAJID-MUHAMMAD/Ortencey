import React from "react";
import { TbTargetArrow } from "react-icons/tb";

import { IoTriangleSharp } from "react-icons/io5";

const Choose = () => {
  return (
    <section className="my-28 py-20 bg-[url('/public/Home/choose-bg.png')] bg-no-repeat bg-cover">
      <div className="container flex justify-between gap-7">
        <div>
          <h3 className="text-xl flex items-center gap-1 font-dmsans font-medium text-[#3661FC]">
            <TbTargetArrow className="text-[#FE651B]" />
            Why Choose Ortencey
          </h3>
          <h2 className="font-bold font-Nunito text-4xl text-black w-[550px] pt-4 pb-7 leading-10">
            Reason For Choosing Our Digital Agency
          </h2>
          <p className="text-lg text-[#6B6161] font-dmsans font-normal w-[605px] leading-7 pb-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majori suffered alteration in some form, by injected humour, or
            randomised word whic look even sligh believable. If you are going to
            use.
          </p>
          <div>
            <div className="pb-6 text-lg text-[#6B6161] font-Poppins font-norma relative">
              <span className="flex justify-between pb-2">
                <label htmlFor="">Software Development</label>
                <label htmlFor="">85%</label>
              </span>
              <IoTriangleSharp className="text-[#3661FC] rotate-180 absolute top-[29%] left-[83.5%]" />
              <div className="w-full h-2 rounded-full bg-slate-400 pb-2"></div>
              <div className="w-[85%] h-1 bg-[#3661FC] rounded-full absolute left-0 top-[56%]"></div>
            </div>

            <div className="pb-6 text-lg text-[#6B6161] font-Poppins font-norma relative">
              <span className="flex justify-between pb-2">
                <label htmlFor="">Web Development</label>
                <label htmlFor="">95%</label>
              </span>
              <IoTriangleSharp className="text-[#3661FC] rotate-180 absolute top-[29%] left-[90.5%]" />
              <div className="w-full h-2 rounded-full bg-slate-400 pb-2"></div>
              <div className="w-[92%] h-1 bg-[#3661FC] rounded-full absolute left-0 top-[56%]"></div>
            </div>

            <div className="pb-6 text-lg text-[#6B6161] font-Poppins font-norma relative">
              <span className="flex justify-between pb-2">
                <label htmlFor="">UL / UX Design</label>
                <label htmlFor="">80%</label>
              </span>
              <IoTriangleSharp className="text-[#3661FC] rotate-180 absolute top-[29%] left-[78.5%]" />
              <div className="w-full h-2 rounded-full bg-slate-400 pb-2"></div>
              <div className="w-[80%] h-1 bg-[#3661FC] rounded-full absolute left-0 top-[56%]"></div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className="rounded-[50px] w-full h-full overflow-hidden">
            <img
              className="w-full h-full"
              src="/public/Home/choose-img.png"
              alt="choose-img"
            />
          </div>
          <div className="py-4 px-10 w-fit rounded-full bg-white flex items-end absolute left-1/2 bottom-20 -translate-x-1/2 z-50">
            <span className="text-[#FE651B] text-4xl font-Nunito font-bold">
              25
            </span>
            <p className="text-lg font-Nunito font-bold text-black">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
