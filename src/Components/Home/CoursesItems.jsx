import React from "react";

const CoursesItems = ({ img, titel }) => {
  return (
    <div className="cursor-pointer coursesItems">
      <div className="px-10 py-7 flex justify-center items-center bg-[#CCCCCC] rounded-tr-[34px] rounded-tl-[34px]">
        <div className="bg-[#3661FC] w-20 h-20 flex justify-center items-center rounded-full coursesIcon">
          <img src={img} alt="coursesIcon" />
        </div>
      </div>
      <div className="py-7 px-10 bg-[#F4F4FF] rounded-br-[34px] rounded-bl-[34px]">
        <h2 className="font-Nunito font-bold text-xl text-black coursesTitel">
          {titel}
        </h2>
        <p className="font-normal font-dmsans text-sm text-[#6B6161] pt-3">
          Contrary to popular belief, Lorem Ips is not simply random text. It
          has root in a piece of classical.
        </p>
      </div>
    </div>
  );
};

export default CoursesItems;
