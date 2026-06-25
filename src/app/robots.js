export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://soliyev.uz/sitemap.xml",
    host: "https://soliyev.uz",
  };
}
