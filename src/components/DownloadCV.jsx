import React from "react";
import CV from "../assets/Munam Mustafa_Full_Stack_Resume.pdf";
import { FiDownload } from "react-icons/fi";

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Munam Mustafa_Full_Stack_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600">
        Get My Resume
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Download my full resume to learn more about my skills, experience, and professional journey.
      </p>
      
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg"
        >            
          <FiDownload className="text-xl" />
          Download Resume
        </button>
      </div>
      
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default DownloadCV;