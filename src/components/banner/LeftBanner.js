import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { myImage } from "../../assets/index";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Mobile Application Developer",
      "Full Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/1 flex flex-col gap-20">
      <div className="flex flex-col gap-5 space-y-8">
        <div className="flex flex-row gap-5 justify-between">
          <div className="space-y-4">
            <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
            <h1 className="text-5xl font-bold text-white">
              Hi, I'm{" "}
              <span className="text-designColor capitalize">Abdul Rafay</span>
            </h1>
            <h2 className="text-3xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#02f7de"
              />
            </h2>
          </div>
          <div className="w-36 h-36 rounded-full border-2 border-white overflow-hidden">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-base font-bodyFont leading-6 tracking-wide  text-justify">
          As a mobile developer with a focus on React Native, I am eager to
          learn and grow my skills in JavaScript and mobile development. With 2
          years of experience working with React Native, as well as experience
          with Python, Java, Express.js, Node.js, and MongoDB, I am excited to
          work on projects that allow me to apply my knowledge and gain further
          experience in these areas. I am a fast learner and always seeking new
          opportunities to expand my expertise in full-stack development.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
