import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#0a0507d0] py-28">
      <div className="container mt-48 flex gap-8">
        <div>
          <h3 className="text-2xl font-dmsans font-medium text-[#FE651B]">
            Your Trusted Ortencey Agency
          </h3>
          <h1 className="text-4xl font-Nunito font-bold text-white w-[600px] leading-[50px] py-5">
            Our Digital Agency With Excellence Services
          </h1>
          <p className="text-xl font-dmsans font-medium text-white w-[594px] pb-12">
            The 3 golden rules professional Digital Marketing Agency don’t want
            you to know about.
          </p>
          <button className="py-4 px-7 bg-[rgb(254,101,27)] rounded-l-full rounded-r-full text-lg font-normal font-dmsans text-white">
            Discover More
          </button>
        </div>

        <div className="relative">
          <div>
            <img src="/public/Home/banner-img.png" alt="banner.png" />
          </div>
          <div className="absolute -top-7 -right-9">
            <img src="/public/Home/Vector.png" alt="Vector" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
