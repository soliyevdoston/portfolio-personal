import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
import Header from "./components/Header.jsx";
import SkillsTools from "./components/SkillsTools.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

import bodyImg from "./assets/body2.svg";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <div
        className="
    fixed 
    inset-0
    -z-10 
    bg-[#F5F5F5]
    bg-cover
    bg-center
    bg-no-repeat
  "
        style={{
          backgroundImage: `url(${bodyImg})`,
        }}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<SkillsTools />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
