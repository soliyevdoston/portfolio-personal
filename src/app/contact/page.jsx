import Contact from "@/components/Contact.jsx";

const BASE = "https://soliyev.uz";

export const metadata = {
  title: "Bog'lanish — Loyiha buyurtma va aloqa",
  description:
    "Dostonbek Solijonov bilan bog'lanish — sayt buyurtma, loyiha taklif yoki savol uchun. Telegram, telefon va email orqali yozing.",
  alternates: { canonical: BASE + "/contact" },
  openGraph: {
    title: "Bog'lanish — Dostonbek Solijonov",
    description:
      "Web sayt va loyiha buyurtmasi uchun bog'laning — tezkor javob beraman.",
    url: BASE + "/contact",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Bog'lanish", item: BASE + "/contact" },
  ],
};

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: BASE + "/contact",
  name: "Bog'lanish",
  mainEntity: {
    "@type": "Person",
    "@id": `${BASE}/#person`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+998-91-660-56-06",
        contactType: "customer support",
        availableLanguage: ["Uzbek", "Russian"],
      },
      {
        "@type": "ContactPoint",
        email: "dostonbeksolijonov.uz@gmail.com",
        contactType: "customer support",
        availableLanguage: ["Uzbek", "Russian", "English"],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
      <Contact />
    </>
  );
}
