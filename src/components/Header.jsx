import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Bosh sahifa" },
    { to: "/projects", label: "Loyihalar" },
    { to: "/contact", label: "Bog'lanish" },
  ];

  // NavLink uchun yangilangan stil (Dark mode qo'shildi)
  const linkStyle = ({ isActive }) =>
    `relative block px-3 py-2 text-[15px] font-medium transition-colors duration-300
     ${
       isActive
         ? "text-black dark:text-white"
         : "text-[#2a1818b3] dark:text-zinc-400 hover:text-black dark:hover:text-white"
     }
     
     /* Pastdagi chiziq effekti (Dark modeda oq chiziq) */
     after:content-[''] 
     after:absolute 
     after:bottom-0 
     after:left-0 
     after:h-[2px] 
     after:bg-black dark:after:bg-white
     after:transition-all 
     after:duration-300 
     after:origin-left
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `;

  return (
    <header className="sticky top-0 z-50 px-4 py-3  dark:bg-[#09090b]/50  transition-colors duration-500">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo (Dark modeda oqimtir rang) */}
        <Link
          to="/"
          className="font-bold text-[#0D1117] dark:text-zinc-100 text-[16px] tracking-tight"
        >
          Dostonbek Portfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkStyle}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Burger Button (Dark modeda oq chiziqlar) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center z-50"
          aria-label="Menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-black dark:bg-white transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu (Dark mode uchun moslangan) */}
      {open && (
        <nav
          className="
            absolute right-4 top-[65px]
            w-[200px]
            md:hidden
            flex flex-col gap-2
            bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl
            rounded-2xl
            p-4
            shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            animate-fadeIn
            border border-gray-100 dark:border-zinc-800
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
