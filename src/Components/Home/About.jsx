import React from "react";
import { RiFocus2Line } from "react-icons/ri";
import { IoCheckmarkCircle } from "react-icons/io5";

const About = () => {
  return (
    <section className="py-28">
      <div className="container flex gap-20">
        <div className="w-1/2">
          <img src="/public/Home/about-img.png" alt="" />
        </div>

        <div className="w-1/2">
          <h3 className="text-xl flex items-center gap-1 font-dmsans font-medium text-[#3661FC]">
            <RiFocus2Line className="text-[#FE651B]" />
            About Our Company
          </h3>
          <h2 className="font-bold font-Nunito text-4xl text-black w-[550px] pt-4 pb-7">
            Best Digital Marketing Agency For People
          </h2>
          <p className="text-lg text-black font-dmsans font-normal w-[605px] leading-7 pb-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have as suffered alteration in some form, by injected
            humour, or randomised words which don't a look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything.
          </p>
          <div className="flex gap-40">
            <div className="text-lg font-dmsans font-normal text-black">
              <span className="flex items-center gap-1 pb-2">
                <IoCheckmarkCircle className="text-[#FE651B]" />
                Digital Strategy
              </span>
              <span className="flex items-center gap-1">
                <IoCheckmarkCircle className="text-[#FE651B]" />
                Marketing
              </span>
            </div>

            <div className="text-lg font-dmsans font-normal text-black">
              <span className="flex items-center gap-1 pb-2">
                <IoCheckmarkCircle className="text-[#FE651B]" />
                SEO Optimization
              </span>
              <span className="flex items-center gap-1">
                <IoCheckmarkCircle className="text-[#FE651B]" />
                First Working Process
              </span>
            </div>
          </div>
          <button className="py-4 px-8 rounded-l-full rounded-r-full bg-[#FE651B] text-white text-lg font-dmsans font-normal mt-12">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
