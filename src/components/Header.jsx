import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Asosiy" },
    { to: "/projects", label: "Loyihalar" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/skills", label: "Skills" },
  ];

  const linkStyle = ({ isActive }) =>
    `block text-left px-3 py-2 rounded-lg text-[15px] font-medium transition
     ${
       isActive
         ? "text-black bg-white/20"
         : "text-[#2a1818b3] hover:text-black hover:pl-4"
     }`;

  return (
    <header className="sticky top-0 z-50 px-4 py-3 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-[#0D1117] text-[15px]">
          Dostonbek Portfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkStyle}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-2"}
            `}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "opacity-0" : ""}
            `}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-2"}
            `}
          />
        </button>
      </div>

      {/* Mobile menu (RIGHT SIDE, NOT FULL WIDTH) */}
      {open && (
        <nav
          className="
            absolute right-4 top-[60px]
            w-[220px]
            md:hidden
            flex flex-col gap-2
            bg-white/70 backdrop-blur-xl
            rounded-2xl
            p-4 pl-5
            shadow-xl
            animate-fadeIn
          "
        >
          {navLinks.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
