const BASE = "https://soliyev.uz";

export default function sitemap() {
  const now = new Date().toISOString();
  return [
    { url: `${BASE}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
