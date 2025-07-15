import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import MyFooter from "./components/myFooter";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Experience />
      <MyProjects />
      <Contact />
      <MyFooter />
    </>
  );
};

export default App;
