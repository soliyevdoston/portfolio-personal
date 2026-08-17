import "./globals.css";
import { Toaster } from "sonner";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Header from "@/components/Header.jsx";

const BASE = "https://soliyev.uz";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Solijonov Dostonbek | Web Dasturchi",
    template: "%s | Solijonov Dostonbek",
  },
  description:
    "Solijonov Dostonbek (Soliyev) - Professional web dasturchi portfoliosi. Zamonaviy dizayn, mukammal funksionallik va yuqori tezlikdagi web saytlar yaratish.",
  applicationName: "Solijonov Dostonbek Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    // Ism variantlari
    "Solijonov Dostonbek",
    "Soliyev Dostonbek",
    "Dostonbek Solijonov",
    "Dostonbek Soliyev",
    "Soliyev",
    "Solijonov",
    "soliyev.uz",
    // Mutaxassislik
    "web dasturchi",
    "fullstack dasturchi",
    "react dasturchi",
    "next.js dasturchi",
    "javascript dasturchi",
    // Mahalliy (transactional)
    "Toshkent web dasturchi",
    "Farg'ona web dasturchi",
    "O'zbekistonda web dasturchi",
    "sayt buyurtma berish",
    "sayt buyurtma berish narxi",
    "sayt yaratish",
    "veb sayt yaratish",
    "web sayt yaratish Toshkent",
    "react dasturchi yollash",
    "frilanser dasturchi",
    "frilanser web dasturchi O'zbekiston",
    // Xizmat turlari
    "biznes sayti yaratish",
    "maktab sayti yaratish",
    "o'quv markazi sayti",
    "onlayn test platformasi",
    "boshqaruv paneli yaratish",
    "dashboard yaratish",
    "Click integratsiyasi",
    "Payme integratsiyasi",
    // Umumiy
    "portfolio",
    "o'zbekiston",
    "dasturlash xizmati",
  ],
  authors: [{ name: "Solijonov Dostonbek", url: BASE }],
  creator: "Solijonov Dostonbek",
  publisher: "Solijonov Dostonbek",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE + "/",
    languages: { "uz-UZ": BASE + "/" },
  },
  openGraph: {
    type: "website",
    url: BASE + "/",
    title: "Solijonov Dostonbek | Web Dasturchi",
    description:
      "Solijonov Dostonbek - Professional web dasturchi. Zamonaviy dizayn va yuqori tezlikdagi web saytlar.",
    images: [
      { url: "/personal.jpg", width: 1200, height: 630, alt: "Dostonbek Solijonov" },
    ],
    locale: "uz_UZ",
    siteName: "Solijonov Dostonbek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solijonov Dostonbek | Web Dasturchi",
    description:
      "Solijonov Dostonbek - Professional web dasturchi. Zamonaviy dizayn va yuqori tezlikdagi web saytlar.",
    images: ["/personal.jpg"],
    creator: "@soliyev_web",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
  verification: {
    google: "rTrwBkVe4yw6O1Y8IRvcI3VHfyyteh1kodyJ8dHlLQk",
    yandex: "e457094e1b8b0d76",
  },
  category: "technology",
};

/* JSON-LD — Person + WebSite + SearchAction (sitelinks search box) */
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#person`,
  name: "Dostonbek Solijonov",
  alternateName: ["Dostonbek Soliyev", "Soliyev", "Solijonov"],
  url: BASE,
  image: `${BASE}/personal.jpg`,
  jobTitle: "Fullstack Web Developer",
  description:
    "Solijonov Dostonbek — professional web dasturchi. Zamonaviy dizayn va yuqori tezlikdagi web saytlar.",
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
  ],
  worksFor: { "@type": "Organization", name: "Freelance" },
  nationality: { "@type": "Country", name: "Uzbekistan" },
  sameAs: [
    "https://github.com/soliyevdoston",
    "https://t.me/dostonbek_solijonov",
    "https://instagram.com/soliyev_web",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Solijonov Dostonbek | Web Dasturchi",
  inLanguage: "uz-UZ",
  publisher: { "@id": `${BASE}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <link rel="preload" href="/personal.jpg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Toaster position="top-right" richColors theme="system" />
        <Header />
        <SmoothCursor />

        <div
          className="fixed inset-0 -z-10 bg-[#F5F5F5] dark:bg-[#09090b]"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="fixed bottom-10 right-10 z-20">
          <AnimatedThemeToggler />
        </div>

        {children}
      </body>
    </html>
  );
}
