export default function manifest() {
  return {
    name: "Solijonov Dostonbek | Web Dasturchi",
    short_name: "Dostonbek",
    description:
      "Solijonov Dostonbek — Professional web dasturchi portfoliosi. Zamonaviy dizayn va yuqori tezlikdagi web saytlar.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F5",
    theme_color: "#09090b",
    lang: "uz",
    orientation: "portrait",
    icons: [
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
