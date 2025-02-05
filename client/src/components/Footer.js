import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-6">
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Salt Lake, Kolkata</p>
            <p>Mobile: +999 123456789</p>
            <p>Phone: +999 123456789</p>
            <p>Email: bazar@gmail.com</p>
          </div>
        </div>

        {/* Profile Section */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <BsPersonFill className="text-lg" />
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <BsPaypal className="text-lg" />
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <FaHome className="text-lg" />
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <MdLocationOn className="text-lg" />
              Help & Support
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm text-white placeholder-gray-400"
            type="text"
            placeholder="E-mail"
          />
          <button className="text-sm border text-white border-t-0 px-4 py-2 hover:bg-gray-900 active:bg-white active:text-black duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
