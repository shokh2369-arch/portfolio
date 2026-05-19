export const LINKS = {
  github: "https://github.com/shokh2369-arch",
  email: "mailto:shokh2369@gmail.com",
  linkedin: "https://www.linkedin.com/in/shokh-abdullayev",
  telegram: "https://t.me/nonfindable",
  cv: "https://docs.google.com/document/d/1Ac2DZ6P1yzVU4mnm6PJ3_WiJS4Nf92Wx26VzQOpfhX0/export?format=pdf",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "6+", label: "Production Projects" },
  { value: "2", label: "Core Languages" },
  { value: "Go", label: "Primary Stack" },
];

export const ABOUT_PARAGRAPHS = [
  {
    before:
      "I have a strong background as a ",
    highlight: "backend developer",
    after:
      ", and I'm currently expanding my skill set by learning both backend and frontend technologies to become a full-stack developer. I enjoy building efficient, scalable systems and creating smooth user experiences.",
  },
  {
    before: "I'm a ",
    highlight: "self-taught developer",
    after:
      " — I mainly learn from official documentation and practicing on my own projects. My core focus is ",
  },
  {
    before: "",
    highlight: "Go and Node.js",
    after:
      ", with Gin, Echo, and Express for APIs, plus PostgreSQL, MySQL, Turso, JWT, and Cloudinary integrations.",
  },
  {
    before: "I'm looking for an opportunity where I can ",
    highlight: "grow, contribute, and collaborate",
    after:
      " with a team that values high-quality products and clean architecture.",
  },
];

export const STACK_TAGS = [
  "Go",
  "Node.js",
  "Gin",
  "Echo",
  "Express",
  "REST API",
  "JWT",
  "PostgreSQL",
  "MySQL",
  "Turso",
  "SQLite",
  "Cloudinary",
  "Swagger",
  "Docker",
];

export const PROJECTS = [
  {
    id: "01",
    type: "Backend Project",
    name: "Logistic Management System",
    description:
      "Automates logistics by connecting clients and carriers directly — removing the broker role for faster, more cost-effective service. Modular architecture with clear separation between routing, middleware, and database layers.",
    tech: ["Go", "REST API", "Modular Architecture"],
    href: "https://github.com/shokh2369-arch/logistic-management",
  },
  {
    id: "02",
    type: "Client Work",
    name: "Portfolio Backend",
    description:
      "Custom Go + Gin backend with secure admin auth, JWT, Turso database, Cloudinary media uploads, relevancy-based search, and multi-language content (Uzbek, Russian, English).",
    tech: ["Go", "Gin", "JWT", "Turso", "Cloudinary"],
    href: "https://github.com/shokh2369-arch/portfolio-backend",
  },
  {
    id: "03",
    type: "Full-Stack / Telegram",
    name: "YettiQanot Taxi MVP",
    description:
      "Telegram-first taxi system with rider, driver, and admin bots, Go backend, and Mini App. Real-time dispatch, WebSocket tracking, wallet ledger, and full trip lifecycle with Turso + goose migrations.",
    tech: ["Go", "Telegram Bots", "WebSocket", "Turso"],
    href: "https://t.me/YettiQanot_taxibot",
  },
  {
    id: "04",
    type: "Backend / Telegram",
    name: "Yanxo Marketplace Bot",
    description:
      "Telegram marketplace for taxi ride sharing and local service listings. Wizard-style bot flows, channel publishing, search with filters, and CRUD synced to channel posts.",
    tech: ["Go", "Turso", "Telegram API"],
    href: "https://t.me/yanxobot",
  },
  {
    id: "05",
    type: "Full-Stack / Telegram",
    name: "Food Delivery System",
    description:
      "Multi-role food delivery via Telegram bots (customer, admin, driver, onboarding). Order lifecycle, geolocation-based restaurant discovery, menu management, and subscription model for restaurant admins.",
    tech: ["Go", "Turso", "Multi-bot Architecture"],
    href: "https://t.me/YettiQanot_bot",
  },
  {
    id: "06",
    type: "Backend Project",
    name: "Web Scraper (pattern.wiki)",
    description:
      "Web scrapers extracting structured skin information and seed data — focused on efficiency, data accuracy, and reusable scraping logic.",
    tech: ["Go", "Web Scraping", "got", "cheerio"],
    href: "https://github.com/shokh2369-arch/scraper",
  },
];

export const SKILLS = [
  {
    name: "Go",
    description: "Gin, Echo, modular services, concurrency, and production Telegram backends.",
    percent: 90,
  },
  {
    name: "Node.js",
    description: "Express APIs, JavaScript tooling, and event-driven server patterns.",
    percent: 80,
  },
  {
    name: "REST API Design",
    description: "JWT auth, Swagger docs, secure password hashing, and multi-language APIs.",
    percent: 85,
  },
  {
    name: "Databases",
    description: "PostgreSQL, MySQL, Turso (libSQL), SQLite3, and migration tooling (goose).",
    percent: 75,
  },
  {
    name: "Frontend / React",
    description: "HTML, CSS, JavaScript, React UIs, and responsive real-world layouts.",
    percent: 70,
  },
  {
    name: "DevOps & Tooling",
    description: "Docker basics, file uploads, Cloudinary, and Linux deployment workflows.",
    percent: 72,
  },
];

export const CONTACT_LINKS = [
  {
    icon: "⌘",
    label: "GitHub",
    value: "github.com/shokh2369-arch",
    href: LINKS.github,
  },
  {
    icon: "✉",
    label: "Email",
    value: "shokh2369@gmail.com",
    href: LINKS.email,
  },
  {
    icon: "◈",
    label: "LinkedIn",
    value: "Shokh Abdullayev",
    href: LINKS.linkedin,
  },
  {
    icon: "◉",
    label: "Telegram",
    value: "@nonfindable",
    href: LINKS.telegram,
  },
];
