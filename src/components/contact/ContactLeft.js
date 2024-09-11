import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { FindMe } from "../banner/Media";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-68 object-cover rounded-lg mb-1"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-row gap-3 justify-between">
        <div className="flex flex-col gap-3  space-y-2">
          <h3 className="text-3xl font-bold text-white">Abdul Rafay</h3>
          <p className="text-lg font-normal text-gray-400">
            Full Stack Developer
          </p>
          {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+923308246728</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email:{" "}
            <span className="text-lightText">rafayrasheed777.rr@gmail.com</span>
          </p>
        </div>
        <FindMe />
      </div>
    </div>
  );
};

export default ContactLeft;
