import Projects from "@/components/Projects.jsx";

const BASE = "https://soliyev.uz";

export const metadata = {
  title: "Loyihalar — Web ilovalar va saytlar",
  description:
    "Dostonbek Solijonov yaratgan web loyihalar — React, Next.js, fullstack ilovalar, maktab va biznes saytlari, onlayn test platformasi.",
  alternates: { canonical: BASE + "/projects" },
  openGraph: {
    title: "Loyihalar — Dostonbek Solijonov",
    description:
      "Web ilovalar va loyihalar to'plami — React, Next.js, fullstack yechimlar.",
    url: BASE + "/projects",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: BASE + "/" },
    { "@type": "ListItem", position: 2, name: "Loyihalar", item: BASE + "/projects" },
  ],
};

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: BASE + "/projects",
  name: "Loyihalar",
  description: "Dostonbek Solijonov yaratgan web ilovalar va loyihalar to'plami.",
  isPartOf: { "@id": `${BASE}/#website` },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Projects />
    </>
  );
}
