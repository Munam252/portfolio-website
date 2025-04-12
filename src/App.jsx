import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import MyProjects from "./components/MyProjects";
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Myproject" element={<MyProjects />} />
      </Routes>
    </Router>

    </>
  );
};

export default App;
