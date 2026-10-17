export type ProjectCategory = "Web design" | "Web applications";
export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl: string;
  sourceUrl?: string;
  featured: boolean;
  context?: "SRDT";
  monogram: string;
  accentClass: string;
};

// Add your next project here. Images live in public/projects/.
// Tags describe product domains; add technology names only when confirmed.
// Use full, static Tailwind classes in accentClass so Tailwind detects them.
export const projects: Project[] = [
  {
    id: "srmu",
    title: "SRMU",
    category: "Web design",
    summary:
      "A 90+ page university website I designed and built in Next.js.",
    description:
      "I designed and built the Shri Ramswaroop Memorial University website in Next.js, with an approximate scope of 90+ pages. The site brings together academic programmes, admissions, campus life, placements, and research in one institutional web experience.",
    tags: ["Next.js", "90+ pages", "Design & development"],
    image: "/projects/srmu.jpg",
    liveUrl: "https://srmu.ac.in/",
    featured: false,
    monogram: "SRMU",
    accentClass: "bg-[#202e57]",
  },
  {
    id: "srmcem",
    title: "SRMCEM",
    category: "Web design",
    summary:
      "A 90+ page college website I designed and built in Next.js.",
    description:
      "I designed and built the Shri Ramswaroop Memorial College of Engineering & Management website in Next.js, with an approximate scope of 90+ pages. The site connects prospective students and the college community with departments, courses, admissions, campus facilities, and placement information.",
    tags: ["Next.js", "90+ pages", "Design & development"],
    image: "/projects/srmcem.jpg",
    liveUrl: "https://srmcem.ac.in/",
    featured: false,
    monogram: "SRM",
    accentClass: "bg-[#203442]",
  },
  {
    id: "qualtspire",
    title: "QualtSpire",
    category: "Web applications",
    summary:
      "An online learning platform for discovering courses and building new skills.",
    description:
      "A course platform bringing learning opportunities together in one place, with a searchable course collection spanning development, design, communication, and professional skills.",
    tags: ["EdTech", "Course platform"],
    image: "/projects/qualtspire.jpg",
    liveUrl: "https://qualtspire.vercel.app/",
    featured: true,
    monogram: "QS",
    accentClass: "bg-[#152554]",
  },
  {
    id: "owlchapter",
    title: "OwlChapter",
    category: "Web applications",
    summary:
      "An ebook storefront connecting discovery, purchases, and a personal reading library.",
    description:
      "A digital book platform where readers explore categories, discover authors, save favorites, and purchase ebooks. Purchased books can be read online or downloaded as PDFs from a personal library.",
    tags: ["Ecommerce", "Digital library"],
    image: "/projects/owlchapter.jpg",
    liveUrl: "https://www.owlchapter.in/",
    featured: true,
    monogram: "OC",
    accentClass: "bg-[#202d40]",
  },
  {
    id: "khetidaar",
    title: "Khetidaar",
    category: "Web design",
    summary:
      "A consumer brand website telling a farm-to-home story through products and process.",
    description:
      "A website for Khetidaar’s mustard oil and natural fertiliser range. Product discovery, the production process, lab-report information, and brand storytelling help visitors learn about the products and the people behind them.",
    tags: ["Brand website", "Product showcase"],
    image: "/projects/khetidaar.jpg",
    liveUrl: "https://www.khetidaar.in/",
    featured: true,
    monogram: "KH",
    accentClass: "bg-[#163831]",
  },
  {
    id: "unif-crm",
    title: "UNIF CRM",
    category: "Web applications",
    summary:
      "SRDT’s higher-education CRM for admissions, enrollment, and student engagement.",
    description:
      "Professional work at SRDT on a higher-education CRM supporting the admissions journey. The product brings together lead management, applicant tracking, follow-ups, student records, and fee-management workflows. The link opens SRDT’s public product page.",
    tags: ["Higher education", "Admissions CRM"],
    image: "/projects/unif-crm.jpg",
    liveUrl: "https://srdt.co.in/products/unif-crm",
    featured: false,
    context: "SRDT",
    monogram: "UN",
    accentClass: "bg-[#202e57]",
  },
  {
    id: "srdt",
    title: "SRDT",
    category: "Web design",
    summary:
      "A corporate web presence for enterprise technology and consulting services.",
    description:
      "The corporate website for SRDT Private Limited, presenting its enterprise technology services, including ERP, PeopleSoft, cloud migration, integrations, and application support. Included as professional work at SRDT.",
    tags: ["Corporate website", "IT consulting"],
    image: "/projects/srdt.jpg",
    liveUrl: "https://srdt.co.in/",
    featured: false,
    context: "SRDT",
    monogram: "SR",
    accentClass: "bg-[#18263d]",
  },
  {
    id: "srdt-training",
    title: "SRDT Training",
    category: "Web design",
    summary:
      "An institutional training website connecting campuses with industry-focused learning.",
    description:
      "A website presenting SRDT’s technical training, faculty development, placement readiness, and institutional learning services. It helps education partners explore programmes and start a conversation about their training requirements.",
    tags: ["Education website", "Training programmes"],
    image: "/projects/srdt-training.jpg",
    liveUrl: "https://training.srdt.co.in/",
    featured: false,
    context: "SRDT",
    monogram: "ST",
    accentClass: "bg-[#203442]",
  },
  {
    id: "ipl-buzz",
    title: "IPL Buzz",
    category: "Web design",
    summary:
      "A cricket publication bringing together match coverage, player stories, and news.",
    description:
      "A cricket content website covering the IPL and the wider game through news, match highlights, player profiles, and editorial stories. A category-led reading experience helps fans find the coverage they want.",
    tags: ["Sports media", "Editorial website"],
    image: "/projects/ipl-buzz.jpg",
    liveUrl: "https://www.iplbuzzofficial.in/",
    featured: false,
    monogram: "IPL",
    accentClass: "bg-[#292542]",
  },
];
