import Main from "@/components/Main.jsx";

const BASE = "https://soliyev.uz";

export const metadata = {
  title: "Dostonbek Solijonov | Web Dasturchi va Fullstack Mutaxassis",
  description:
    "Solijonov Dostonbek — O'zbekistondan professional web dasturchi. React, Next.js va fullstack ilovalar. Zamonaviy, tez va konversiyaga yo'naltirilgan saytlar yarataman.",
  alternates: { canonical: BASE + "/" },
};

const profileLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: BASE,
  mainEntity: { "@id": `${BASE}/#person` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: BASE + "/" },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />
      <Main />
    </>
  );
}
