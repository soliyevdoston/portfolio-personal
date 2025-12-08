// src/components/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { to: "/", label: "Asosiy sahifa" },
    { to: "/projects", label: "Loyihalar" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-[15px] font-medium transition 
     ${
       isActive ? "text-black bg-white/10" : "text-[#2a1818b3] hover:text-black"
     }`;

  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-between gap-4 px-6 py-3 z-50 ">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="flex items-center justify-center text-[#0D1117] font-bold">
          Dostonbekning portfoliosi
        </div>

        <div className="text-white font-bold text-[18px]">Dostonbek</div>
      </Link>

      {/* Nav links */}
      <nav className="flex gap-2 items-center">
        {navLinks.map((n) => (
          <NavLink key={n.to} to={n.to} className={linkStyle}>
            {n.label}
          </NavLink>
        ))}
      </nav>

      {/* Action / CTA */}
    </header>
  );
}
