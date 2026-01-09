import React, { useState } from "react";
import {
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaSms,
} from "react-icons/fa";
import { Globe } from "@/components/ui/globe";

export default function ContactCompact() {
  const [success, setSuccess] = useState(false);

  const contacts = [
    {
      icon: <FaPhone />,
      label: "+998 91 660 56 06",
      link: "tel:+998916605606",
    },
    { icon: <FaSms />, label: "SMS yuborish", link: "sms:+998916605606" },
    {
      icon: <FaEnvelope />,
      label: "dostonbeksolijonov.uz@gmail.com",
      link: "mailto:dostonbeksolijonov.uz@gmail.com",
    },
    {
      icon: <FaTelegram />,
      label: "@Dostonbek_Solijonov",
      link: "https://t.me/Dostonbek_Solijonov",
    },
    {
      icon: <FaGithub />,
      label: "github.com/soliyevdoston",
      link: "https://github.com/soliyevdoston",
    },
    {
      icon: <FaInstagram />,
      label: "@soliyev_web",
      link: "https://instagram.com/soliyev_web",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const botToken = "7449520976:AAHe_Ait9iP4Uj6WOfFOfNlYj73_BvD6X8o"; // O'z tokeningizni qo'ying
    const chatId = "6571597816"; // O'z IDingizni qo'ying

    const text = `🚀 *Yangi xabar!*\n\n👤 *Ism:* ${name}\n📧 *Email:* ${email}\n📝 *Xabar:* ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}&parse_mode=Markdown`;

    try {
      const res = await fetch(url);
      if (res.ok) {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000); // 5 sekundan keyin xabarni o'chirish
      }
    } catch (err) {
      console.error("Xato:", err);
    }
  };

  return (
    <main className="relative min-h-screen  dark:bg-[#09090b] transition-colors duration-500 flex flex-col items-center px-4 py-8 gap-8 overflow-x-hidden">
      {/* Globe Background - Dark modeda xiraroq turadi */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-80 dark:opacity-40 pointer-events-none">
        <Globe />
      </div>

      <div className="relative w-full max-w-md z-10">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-zinc-100 tracking-tight">
            Bog‘lanish
          </h1>
          <p className="mt-2 text-gray-600 dark:text-zinc-400 text-sm sm:text-base">
            Loyihalar, takliflar yoki savollar bo‘lsa — bemalol yozing
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl z-10">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-4 rounded-2xl bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 shadow-sm
                       transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:bg-white dark:hover:bg-zinc-800/80 group"
          >
            <div className="text-xl sm:text-2xl mb-2 text-gray-800 dark:text-zinc-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {item.icon}
            </div>
            <p className="font-medium text-[13px] sm:text-sm text-gray-900 dark:text-zinc-200 break-all text-center">
              {item.label}
            </p>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full max-w-2xl h-px bg-gray-200 dark:bg-zinc-800 z-10"></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3 w-full max-w-2xl z-10 px-2"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            required
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-300 dark:border-zinc-800 w-full px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-300 dark:border-zinc-800 w-full px-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 transition-all"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Xabaringizni shu yerga yozing..."
          required
          className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-300 dark:border-zinc-800 w-full px-4 py-2.5 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-500 transition-all"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3 bg-black dark:bg-zinc-100 text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            Xabarni yuborish
          </button>
        </div>
      </form>

      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full shadow-2xl z-50 animate-bounce text-sm font-medium">
          🚀 Xabaringiz yuborildi! Tez orada javob beraman.
        </div>
      )}

      <div className="flex flex-col items-center gap-1 mt-4">
        <p className="text-center text-x text-gray-500 dark:text-zinc-500 font-medium">
          Odatda 24 soat ichida javob beraman
        </p>
        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </main>
  );
}
