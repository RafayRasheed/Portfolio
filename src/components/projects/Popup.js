import React, { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

export const PopupExample = ({ item, setItem, ProjectLinks }) => {
  const togglePopup = () => {
    setItem(null);
  };
  if (!item) {
    return null;
  }
  const { title, des, longDes, video, link, androidLink, iosLink, gitLink } =
    item;
  return (
    <div>
      {/* Full window overlay */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto"
      >
        <div className="bg-bodyColor p-6 rounded-lg shadow-lg w-[calc(100%_-_300px)] h-[calc(100%_-_200px)]  mx-4 my-8 relative overflow-auto">
          <div className="flex justify-center items-center text-center">
            <div style={{ height: "80px" }} />

            <h1 className="text-4xl md:text-5xl  font-bold capitalize">
              {title}
            </h1>
          </div>
          <div style={{ height: "10px" }} />

          <div className="flex flex-row gap-5 justify-between">
            <div
              style={{
                // width: "60%",
                paddingLeft: "20px",
                paddingBlockStart: "10px",
                flex: 0.95,
              }}
            >
              <div style={{ height: "40px" }} />
              <h1 className="text-lg font-bold mb-4 text-designColor ">
                Overview
              </h1>

              <h2 className="mb-2">{des}</h2>
              <div style={{ height: "40px" }} />
              <h1 className="text-lg font-bold mb-4  text-designColor">
                Description
              </h1>

              <h2 className="mb-2">{longDes}</h2>
              <div style={{ height: "40px" }} />
              <h1 className="text-lg font-bold mb-4  text-designColor">
                Links
              </h1>
              <ProjectLinks it={item} />
            </div>
            <VideoPlayer video={video} />
          </div>

          {/* Close button with cross icon in the top right */}
          <button
            onClick={togglePopup}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "red",
              height: 30,
              width: 30,
              borderRadius: "100%",
            }}
            //   className="absolute  top-2 right-2 p-2 rounded-full bg-red-500 text-white"
          >
            <h1 className="text-lg font-bold">X</h1>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
