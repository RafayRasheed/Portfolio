import React, { useEffect, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import Title from "../layouts/Title";
import { motion } from "framer-motion";

export const PopupExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  const togglePopup = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      // Cleanup overflow setting when the component is unmounted
      document.body.style.overflow = "";
    };
  }, [isVisible]);
  return (
    <div>
      {/* Button to show/hide popup */}
      <button
        onClick={togglePopup}
        className="p-2 bg-blue-500 text-white rounded-md"
      >
        {isVisible ? "Hide Overlay" : "Show Overlay"}
      </button>

      {/* Full window overlay */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto"
        >
          <div className="bg-bodyColor p-6 rounded-lg shadow-lg w-[calc(100%_-_300px)] h-[calc(100%_-_200px)]  mx-4 my-8 relative overflow-auto">
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
                My Projects
              </h1>
            </div>

            <div className="flex flex-row gap-5 justify-between">
              <div>
                <h2 className="text-lg font-bold mb-4">Overlay Content</h2>
                <p className="mb-2">This is the content of the overlay.</p>
                {/* Repeat or add more content as needed */}
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
                <p className="mb-2">This is the content of the overlay.</p>
              </div>
              <VideoPlayer />
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
      )}
    </div>
  );
};
