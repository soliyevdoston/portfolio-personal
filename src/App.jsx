import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
import Header from "./components/Header.jsx";

import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import bodyImg from "./assets/body2.svg";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SmoothCursor />

      <div
        className="
    fixed 
    inset-0
    -z-10 
    bg-[#F5F5F5]
    bg-cover
    bg-center
    bg-no-repeat
    dark:bg-black
  "
        style={{
          backgroundImage: `url(${bodyImg})`,
        }}
      />
      <div className="fixed bottom-10 right-10 z-20">
        <AnimatedThemeToggler />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
