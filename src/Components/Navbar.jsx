import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiHandbagSimple } from "react-icons/pi";
import { LiaArrowRightSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full">
      {/* =========Upper header============ */}

      <div className="container bg-[#3661FC] py-2 rounded-r-full text-sm text-white font-dmsans font-normal flex justify-between">
        <div className="flex ">
          <p className=" border-r-[1px] pr-6 mr-6">
            Welcome to Ortencey Digital Market Agency
          </p>
          <a
            className=" border-r-[1px] pr-6 mr-6 flex items-center gap-2"
            href="tel: +88 ( 5548 ) 6548"
            target="blank"
          >
            <FaPhoneAlt className=" text-[rgba(254,101,27,1)]" />
            +88 ( 5548 ) 6548
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:infoyour@gmail.com"
            target="blank"
          >
            <IoIosMail className="text-[rgb(254,101,27)] text-xl" />
            infoyour@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <p className="flex gap-1 items-center pr-5">
            <LiaFlagUsaSolid className="text-lg text-red-500" />
            English
            <FaChevronDown />
          </p>
          <div className="flex items-center pr-3 gap-3">
            <a href="#" target="blank">
              <FaFacebookF className="border-r-[1px] pr-3 text-[#95ACFF] text-2xl hover:text-[#FE651B] " />
            </a>
            <a href="#" target="blank">
              <FaLinkedinIn className="border-r-[1px] pr-3 text-[#95ACFF] text-3xl hover:text-[#FE651B] " />
            </a>
            <a href="#" target="blank">
              <FaTwitter className="border-r-[1px] pr-3 text-[#95ACFF] text-3xl hover:text-[#FE651B] " />
            </a>
            <a href="#" target="blank">
              <FaYoutube className="text-[#95ACFF] text-2xl hover:text-[#FE651B]" />
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================Upper header=================================== */}

      {/* =========================================================lower header=============================== */}
      <div className="container py-4 bg-white rounded-l-full flex items-center justify-between">
        <div className="pl-3">
          <img src="/public/Home/logo.png" alt="logo.png" />
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link className="flex items-center gap-1 hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              Home
              <FaChevronDown className="text-xs" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              About
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              Services
              <FaChevronDown className="text-xs" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              Team
              <FaChevronDown className="text-xs" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              Pages
              <FaChevronDown className="text-xs" />
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-1 hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              News
              <FaChevronDown className="text-xs" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FE651B] hover:border-b-2 hover:border-[#FE651B]">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <span className="text-xl border-2 rounded-full p-3 border-[#3661FC] text-[#3661FC] cursor-pointer">
            <CiSearch />
          </span>
          <span className="text-xl border-2 rounded-full p-3 border-[#3661FC] text-[#3661FC] cursor-pointer">
            <PiHandbagSimple />
          </span>
          <button>
            <Link className="flex items-center gap-1 py-4 px-7 bg-[#3661FC] text-white rounded-l-full rounded-r-full">
              Free Quote <LiaArrowRightSolid />
            </Link>
          </button>
        </div>
      </div>
      {/* =========lower header============ */}
    </nav>
  );
};

export default Navbar;
