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
      label: "@username",
      link: "https://instagram.com/username",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const text = `
Yangi xabar!
Ism: ${name}
Email: ${email}
Xabar: ${message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const res = await fetch(url);
      if (res.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        console.error("Xabar yuborilmadi");
      }
    } catch (err) {
      console.error("Xato:", err);
    }
  };

  return (
    <main className="relative min-h-screen  flex flex-col items-center px-4 py-8 gap-8 -z-10">
      <Globe />
      <div className="relative w-full max-w-md">
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Bog‘lanish
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Loyihalar, takliflar yoki savollar bo‘lsa — bemalol yozing
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl ">
        {contacts.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-white/70  backdrop-blur border shadow-md text-center min-w-[180px]
                       transition transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:bg-white"
          >
            <div className="text-xl sm:text-2xl mb-1 text-gray-900 hover:text-blue-600 transition-colors">
              {item.icon}
            </div>{" "}
            <p className="font-medium text-sm sm:text-base text-gray-900 hover:text-blue-600 transition-colors">
              {item.label}
            </p>
          </a>
        ))}{" "}
      </div>

      {/* Divider */}
      <div className="w-full max-w-2xl h-px bg-gray-200"></div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2 w-full max-w-2xl z-20">
        {" "}
        <input
          type="text"
          name="name"
          placeholder="Ismingiz"
          required
          className="bg-[#fffdfd] border-[2px] border-black/20 w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-[#fffdfd] border-[2px] border-black/20 w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base"
        />
        <textarea
          name="message"
          rows="3"
          placeholder="Xabaringiz"
          required
          className="bg-[#fffdfd] border-[2px] border-black/20 w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border resize-none focus:outline-none focus:ring-2 focus:ring-black/20 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 transition transform duration-300 text-sm sm:text-base"
        >
          Yuborish
        </button>
      </form>

      {success && (
        <p className="text-center text-green-600 mt-2 text-sm sm:text-base">
          Xabaringiz muvaffaqiyatli yuborildi!
        </p>
      )}

      <p className="text-center text-xs text-gray-500 mt-4">
        Odatda 24 soat ichida javob beraman
      </p>
    </main>
  );
}
