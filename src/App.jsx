import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main.jsx";
import Projects from "./components/Projects.jsx";
import Header from "./components/Header.jsx";

import bodyImg from "./assets/body.svg";

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
      </Routes>
    </BrowserRouter>
  );
}
