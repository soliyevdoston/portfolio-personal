// src/components/ContactPage.jsx
import React from "react";
import {
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    { icon: <FaTelegram />, label: "@username", link: "https://t.me/username" },
    {
      icon: <FaInstagram />,
      label: "@username",
      link: "https://instagram.com/username",
    },
    {
      icon: <FaEnvelope />,
      label: "example@gmail.com",
      link: "mailto:example@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "github.com/username",
      link: "https://github.com/username",
    },
    {
      icon: <FaPhone />,
      label: "+998 90 123 45 67",
      link: "tel:+998901234567",
    },
  ];

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-white overflow-hidden">
      {contacts.map((item, index) => {
        const angle = (index / contacts.length) * 360;
        const radius = 150;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`absolute w-56 p-6 rounded-3xl bg-white/20 backdrop-blur-md
                        border border-white/20 shadow-lg flex flex-col items-center gap-3
                        transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
            style={{
              top: `50%`,
              left: `50%`,
              transform: `translate(${x}px, ${y}px) rotate(${
                index % 2 === 0 ? -5 : 5
              }deg)`,
            }}
          >
            <div className="text-gray-900 text-3xl hover:text-gray-700 transition-colors">
              {item.icon}
            </div>
            <span className="text-gray-900 font-semibold text-lg text-center">
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
