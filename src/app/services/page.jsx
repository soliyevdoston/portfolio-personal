import Services from "@/components/Services.jsx";

const BASE = "https://soliyev.uz";

export const metadata = {
  title: "Xizmatlar — Web sayt va boshqaruv panellari",
  description:
    "Toshkent va O'zbekiston bo'ylab web sayt yaratish xizmatlari: biznes sayti, maktab platformasi, boshqaruv paneli va onlayn ilovalar. Dostonbek Solijonov bilan ishlang.",
  alternates: { canonical: BASE + "/services" },
  openGraph: {
    title: "Xizmatlar — Dostonbek Solijonov",
    description:
      "Web sayt va boshqaruv panellari yaratish — biznes, maktab, onlayn platforma yechimlari.",
    url: BASE + "/services",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Xizmatlar", item: BASE + "/services" },
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#service`,
  name: "Web sayt va boshqaruv paneli yaratish",
  provider: { "@id": `${BASE}/#person` },
  areaServed: { "@type": "Country", name: "Uzbekistan" },
  serviceType: [
    "Web sayt yaratish",
    "Boshqaruv paneli (Dashboard)",
    "Onlayn platforma",
    "E-commerce",
    "Maktab va o'quv markazi platformasi",
  ],
  url: BASE + "/services",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Services />
    </>
  );
}
