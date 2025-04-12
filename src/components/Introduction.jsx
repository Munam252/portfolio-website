import React from "react";
import { motion } from "framer-motion";
import data from "./PageInformation/data.js";
import MyProjects from "./myProjects.jsx";

const Introduction = () => {
  return (
    //<div className="bg-gray-900 text-white flex flex-col items-center px-10 py-20 space-y-12">

    <div className="w-full h-screen  overflow-y-auto">
      {/* Introduction Section */}
      <motion.div
        className="w-full h-screen flex items-center justify-center text-black p-8 bg-white"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex items-center max-w-3xl">
          {/* Image */}
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-80 h-88 rounded-lg object-cover mr-12"
          />

          {/* Text */}
          <div>
            <h2 className="text-5xl font-bold mb-4">{data.name}</h2>
            <p
              className="text-md"
              style={{ textAlign: "justify" }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>

            {/* Social Media Logos */}
            <div className="flex mt-4 space-x-4">
              {data.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={link.icon}
                    alt={link.name}
                    className="w-8 h-8"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* MyProjects Section (Appears Below) */}
      <section className="w-full h-screen flex items-center justify-center">
        <MyProjects />
      </section>
    </div>
  );
};

export default Introduction;
