
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample project data
const experiences = [
  {
    title: "ARch360",
    shortTitle: "Final Year Project at FAST NUCES, ISB",
    description:
      "ARch360 bridges the gap between clients, architects, and construction specialists by making architectural ideas easier to understand and explore. It turns 3D models, like AutoCAD files, into interactive AR experiences, allowing clients to walk through and adjust designs for their future homes, workplaces, or buildings before construction even begins.",
    github: "https://github.com/ABAbdulah/ARch360",
    media: ["src/assets/poster.jpg", "src/assets/solution.png", "src/assets/arch360.mp4"],
    tools: "Unity, Vuforia, C#, Python, AutoCAD models, Firebase, ARCore, ARKit, Git, CI/CD",
  },
  {
    title: "Smart Timetable Scheduler",
    shortTitle:"Artificial Intelligence Course Project",
    description:
      "Smart Timetable Scheduler is an AI-powered system designed to solve the university timetable scheduling problem using genetic algorithms. It efficiently assigns time slots to courses, ensuring minimal conflicts between professors, sections, and classrooms. The system adheres to strict constraints, such as preventing schedule overlaps, optimizing classroom allocation, and maintaining balanced teaching loads. Additionally, it considers soft constraints like minimizing movement across floors and ensuring course continuity in the same room. The result is a well-structured, optimized timetable that enhances efficiency for students and faculty alike.",
    github: "https://github.com/ABAbdulah/Timetable-Scheduling.git",
    tools: "Python, Jupyter notebook",
    // No media for this project
  },
  
];
function WorkExperience() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
  return (
    <div>
        <div className="min-h-screen bg-white text-black flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-10">Work Experience</h1>

      {experiences.map((experiences, index) => (
        <div
          key={index}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start"
        >
          {/* Left Section - Text */}
          <div className="md:w-1/2 w-full p-6">
            <h1 className="text-4xl font-bold mb-0">{experiences.title}</h1>
            {experiences.shortTitle && <h3 className="text-2xl mb-5">{experiences.shortTitle}</h3>}
            <p className="text-gray-300 mb-4">
              <b>Project Description: </b> {experiences.description}
            </p>
            {experiences.tools && (
              <p className="text-gray-300 mb-4">
                <b>Tools & Technology:</b> {experiences.tools}
              </p>
            )}
            <a
              href={experiences.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View on GitHub
            </a>
          </div>

          {/* Right Section - Carousel (Only Render if Media Exists) */}
          {experiences.media && experiences.media.length > 0 && (
            <div className="md:w-1/2 w-full p-6">
              <Slider {...settings}>
                {experiences.media.map((item, i) =>
                  item.endsWith(".mp4") ? (
                    <div key={i} className="flex justify-center">
                      <video
                        src={item}
                        controls
                        className="w-full max-h-64 rounded-lg"
                      />
                    </div>
                  ) : (
                    <div key={i} className="flex justify-center">
                      <img
                        src={item}
                        alt={`Project ${index + 1}`}
                        className="w-full max-h-64 object-cover rounded-lg"
                      />
                    </div>
                  )
                )}
              </Slider>
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
  )
}

export default WorkExperience

