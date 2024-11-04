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

const Navbar = () => {
  return (
    <nav>
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
            <FaPhoneAlt className=" text-[#FE651B]" />
            +88 ( 5548 ) 6548
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:infoyour@gmail.com"
            target="blank"
          >
            <IoIosMail className="text-[#FE651B] text-xl" />
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

      {/* =========Upper header============ */}

      {/* =========lower header============ */}
      <div className="container py-4 bg-white rounded-l-full flex items-center justify-between">
        <div className="pl-3">
          <img src="/logo.png" alt="logo.png" />
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link className="flex items-center">
              Home
              <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link className="flex items-center">
              Services
              <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link className="flex items-center">
              Team
              <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link className="flex items-center">
              Pages
              <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link className="flex items-center">
              News
              <FaChevronDown />
            </Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <h2>hello</h2>
          <h2>hello</h2>
          <h2>hello</h2>
        </div>
      </div>
      {/* =========lower header============ */}
    </nav>
  );
};

export default Navbar;
