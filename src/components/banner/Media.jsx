import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaWhatsapp,
  FaNodeJs,
  FaAndroid,
  FaPython,
} from "react-icons/fa";
import { MdIosShare, MdIso, MdMail } from "react-icons/md";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiMongodb,
  SiIos,
  SiFirebase,
} from "react-icons/si";
export const FindMe = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/rafay-rasheed-3b398a215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>

        <a
          href="https://wa.me/+923308246728"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaWhatsapp />
          </span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100006772158483"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
        </a>
        <a
          href="mailto:rafayrasheed777.rr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="bannerIcon">
            <MdMail />
          </span>
        </a>
      </div>
    </div>
  );
};
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <FindMe />
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>

          <span className="bannerIcon">
            <SiMongodb />
          </span>
          <span className="bannerIcon">
            <FaAndroid />
          </span>
          <span className="bannerIcon">
            <SiIos />
          </span>
          <span className="bannerIcon">
            <SiFirebase />
          </span>

          <span className="bannerIcon">
            <FaPython />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
