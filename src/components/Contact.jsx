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
import { toast } from "sonner";

export default function ContactCompact() {
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

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Check if env vars are loaded
    if (!botToken || !chatId) {
      toast.error("Tizimda xatolik: Bot sozlamalari topilmadi.");
      console.error("Telegram credentials missing properly.");
      return;
    }

    const text = `
<b>📬 Yangi Murojaat!</b>

👤 <b>Foydalanuvchi:</b> ${name}
📧 <b>Email:</b> ${email}

📝 <b>Murojaat mazmuni:</b>
<i>${message}</i>

#portfolio #aloqa #contact
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}&parse_mode=HTML`;

    const promise = fetch(url).then(async (res) => {
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Telegram API Error:", errorData);
        throw new Error("Telegramga yuborishda xatolik");
      }
      return res.json();
    });

    toast.promise(promise, {
      loading: "Xabar yuborilmoqda... ⏳",
      success: () => {
        e.target.reset();
        return "Xabaringiz muvaffaqiyatli yuborildi! ✅";
      },
      error: "Xatolik yuz berdi. Qaytadan urinib ko‘ring. ❌",
      style: {
        background: "#ffffff",
        color: "#000000",
        border: "1px solid #E5E7EB",
      }, // Ensuring black/white style explicitly just in case
    });
  };

  return (
    <main className="relative min-h-[calc(100vh-80px)] sm:h-[calc(100vh-80px)] dark:bg-[#09090b] transition-colors duration-500 flex flex-col items-center justify-center px-4 py-8 sm:py-0 gap-8 sm:gap-4 overflow-y-auto sm:overflow-hidden">
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
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl z-10">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-4 rounded-2xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 shadow-sm
                       transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-lg hover:bg-white dark:hover:bg-zinc-700 group"
          >
            <div className="text-xl sm:text-2xl mb-2 text-slate-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.icon}
            </div>
            <p className="font-medium text-[13px] sm:text-sm text-slate-700 dark:text-zinc-200 break-all text-center group-hover:text-black dark:group-hover:text-white">
              {item.label}
            </p>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full max-w-2xl h-px bg-slate-200 dark:bg-zinc-800 z-10"></div>

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
            className="bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition-all font-medium shadow-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition-all font-medium shadow-sm"
          />
        </div>
        <textarea
          name="message"
          rows="4"
          placeholder="Xabaringizni shu yerga yozing..."
          required
          className="bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 w-full px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-slate-900 dark:text-zinc-100 placeholder:text-slate-400 dark:placeholder:text-zinc-500 transition-all font-medium shadow-sm"
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

      <div className="flex flex-col items-center gap-1 mt-4">
        <p className="text-center text-x text-gray-500 dark:text-zinc-500 font-medium">
          Odatda 24 soat ichida javob beraman
        </p>
        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
      </div>
    </main>
  );
}
