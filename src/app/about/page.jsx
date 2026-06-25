import About from "@/components/About.jsx";

const BASE = "https://soliyev.uz";

export const metadata = {
  title: "Haqimda — Dostonbek Solijonov haqida",
  description:
    "Dostonbek Solijonov — web dasturchi, tajriba, ish uslubi va texnologiyalar. Interfeyslar quraman, UXni tahlil qilaman va kodni samarali yozaman.",
  alternates: { canonical: BASE + "/about" },
  openGraph: {
    title: "Haqimda — Dostonbek Solijonov",
    description:
      "Web dasturchi Dostonbek Solijonov haqida — tajriba, falsafa va texnologiyalar.",
    url: BASE + "/about",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Haqimda", item: BASE + "/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <About />
    </>
  );
}
