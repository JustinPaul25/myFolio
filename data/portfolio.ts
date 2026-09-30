export type ProjectCategory =
  | "shopify"
  | "fullstack"
  | "theme"
  | "backend"
  | "training"
  | "repositories";

export interface ProjectLink {
  label?: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  urls?: ProjectLink[];
  tags: string[];
  featured?: boolean;
  category?: ProjectCategory;
  role?: string;
  /** Optional project screenshot — drop file in /public/images/projects/ */
  image?: string;
  /** Shown when the live link may be down, private, or no longer available */
  linkNote?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Review {
  id: string;
  company: string;
  reviewer: string;
  rating: number;
  quote: string;
  summary: string;
  date?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  about: string;
  position: string;
  duties: string[];
  startDate: string;
  endDate: string;
  /** Company mark — file in /public/images/companies/ */
  logo?: string;
  /** Live company site; omit when closed / unavailable */
  website?: string;
}

export const personalInfo = {
  name: "Justin Paul E. Layan",
  role: "Shopify Developer",
  experience: "4+ years",
  location: "Panabo City, Philippines",
  email: "justinpaul1025@gmail.com",
  whatsapp: "+63 976 147 9842",
  /** Opens WhatsApp chat — digits only with country code */
  whatsappUrl: "https://wa.me/639761479842",
  profilePhoto: "/images/profile_image.JPG",
  /** Left column on Contact */
  contactImage: "/images/contact_image.png",
  /**
   * Calendly scheduling — paste your full event link from Calendly (Event types → Copy link).
   * Example: https://calendly.com/your-username/30min
   * Leave empty to hide "Book a meeting" and the inline scheduler.
   */
  calendlyUrl: "https://calendly.com/justinpaul1025",
  availability: "Available for full-time & contract",
  /** Served from /public/resume — keep source copy in /docs if regenerating */
  resumeUrl: "/resume/Justin-Paul-Layan-Resume.docx",
  headline: "Shopify Developer building fast, converting stores",
  subheadline:
    "Specializing in Shopify theme development, checkout extensibility, and CRO. Building merchant-friendly stores with Shopify Plus — and using AI tools like Cursor and Shopify Sidekick to move faster without cutting corners.",
};

export const about = {
  paragraphs: [
    "I'm a Shopify developer with over 4 years of experience building high-performance ecommerce stores. I specialize in custom theme development, Shopify Plus implementations, and checkout extensibility — always with conversion optimization in mind.",
    "My background in Laravel and Vue.js full-stack development gives me a strong foundation in backend architecture, which translates directly to better Shopify implementations. I'm comfortable working with complex data models using Metafields, building custom integrations with the GraphQL Admin API, and architecting scalable solutions for growing brands.",
  ],
};

const LINK_MAY_BE_UNAVAILABLE =
  "Live link may no longer be publicly accessible.";

export const projects: Project[] = [
  {
    id: "acorn-strategy",
    title: "Acorn Strategy",
    description:
      "Professional services site with custom content sections and optimized conversion flows.",
    url: "https://www.acornstrategy.ca",
    tags: ["Shopify", "Liquid", "Tailwind CSS", "CRO"],
    category: "shopify",
    image: "/images/projects/acorn-strategy.jpg",
    role: "Shopify Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "all-things-cedar",
    title: "All Things Cedar",
    description:
      "Full Shopify theme customization with advanced product filtering and custom merchandising features.",
    url: "https://allthingscedar.com",
    tags: ["Shopify", "Liquid", "JavaScript", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/all-things-cedar.jpg",
    role: "Shopify Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "any-baby",
    title: "Any Baby",
    description:
      "Baby apparel storefront for the Smartsie collection with size-based browsing, bundles, and performance fabric storytelling.",
    url: "https://anybaby.io/",
    tags: ["Shopify", "Liquid", "Bundles", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/any-baby.jpg",
    role: "Shopify Developer",

  },
  {
    id: "baehr-feet",
    title: "Baehr Feet",
    description:
      "B2C Shopify store with custom product recommendations and enhanced cart functionality.",
    url: "https://baehrfeet.com",
    tags: ["Shopify", "Liquid", "JavaScript", "Product APIs"],
    category: "shopify",
    image: "/images/projects/baehr-feet.jpg",
    role: "Shopify Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "bright-source",
    title: "Bright Source",
    description:
      "Custom theme development with integrated Klaviyo email capture and multi-variant product displays.",
    url: "https://brightsource.ca",
    tags: ["Shopify", "Klaviyo", "Liquid", "Email Integration"],
    category: "shopify",
    image: "/images/projects/bright-source.jpg",
    role: "Shopify Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "buddyrider",
    title: "BuddyRider",
    description:
      "Custom Shopify Plus store build with subscription integration and dynamic checkout customizations.",
    url: "https://buddyrider.com",
    tags: ["Shopify Plus", "Recharge", "Checkout Extensibility", "Liquid"],
    category: "shopify",
    image: "/images/projects/buddyrider.jpg",
    role: "Shopify Developer",

    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "c-pros-solutions",
    title: "Centurion Pro Solutions",
    description:
      "B2B Shopify Plus implementation with custom pricing logic and bulk ordering features.",
    url: "https://cprosolutions.com",
    tags: ["Shopify Plus", "B2B", "Custom Pricing", "GraphQL"],
    category: "shopify",
    image: "/images/projects/c-pros-solutions.jpg",
    role: "Shopify Developer",

    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "coffee-tree",
    title: "Coffee Tree",
    description:
      "Full ecommerce store with subscription options, loyalty integration, and custom product bundles.",
    url: "https://coffeetree.ca",
    tags: ["Shopify", "Recharge", "Judge.me", "Custom Sections"],
    category: "shopify",
    image: "/images/projects/coffee-tree.jpg",
    role: "Shopify Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,

  },
  {
    id: "cpe-systems",
    title: "CPE Systems",
    description:
      "Industrial ecommerce store for portable pumps, valves, and process equipment — complex product catalogs, configurable assemblies, and B2B/B2C shopping flows.",
    url: "https://www.cpesystems.com/",
    tags: ["Shopify", "Liquid", "Product Configurator", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/cpe-systems.jpg",
    role: "Shopify Developer",


  },
  {
    id: "elite-vodka",
    title: "Elite Vodka",
    description:
      "Premium spirits and ready-to-drink cocktail brand store with product storytelling, multi-market selling, and promotional sale flows.",
    url: "https://elite-vodka.store/",
    tags: ["Shopify", "Liquid", "Brand Store", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/elite-vodka.jpg",
    role: "Shopify Developer",

  },
  {
    id: "everviolet",
    title: "Everviolet",
    description:
      "Recovery and wellness lingerie store with need-based collections, adaptive product discovery, and conversion-focused content sections.",
    url: "https://everviolet.com/",
    tags: ["Shopify", "Liquid", "Collections", "CRO"],
    category: "shopify",
    image: "/images/projects/everviolet.jpg",
    role: "Shopify Developer",

  },
  {
    id: "honda-vintage-culture",
    title: "Honda Vintage Culture",
    description:
      "Officially licensed Honda merchandise store featuring F1 and motorsport collections, multi-currency selling, and collection-driven merchandising.",
    url: "https://www.hondavintageculture.com/",
    tags: ["Shopify", "Liquid", "Licensed Brand", "Collections"],
    category: "shopify",
    image: "/images/projects/honda-vintage-culture.jpg",
    role: "Shopify Developer",

  },
  {
    id: "jayne",
    title: "JAYNE Boutique",
    description:
      "Multi-location fashion boutique store with clothing, footwear, and accessories — focused on conversion-friendly browsing and brand discovery.",
    url: "https://shopjayne.com/",
    tags: ["Shopify", "Liquid", "Boutique", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/jayne.jpg",
    role: "Shopify Developer",

  },
  {
    id: "plenty",
    title: "PLENTY",
    description:
      "Canadian multi-category fashion retailer for men and women with deep navigation, brand merchandising, and high-volume catalog structure.",
    url: "https://www.getplenty.com/",
    tags: ["Shopify", "Liquid", "Fashion", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/plenty.jpg",
    role: "Shopify Developer",

  },
  {
    id: "sari-beauty",
    title: "Sari Beauty",
    description:
      "Zürich beauty studio site and shop for browlifting, lashlifting, and professional beauty products with booking-focused conversion flows.",
    url: "https://saribeauty.ch/",
    tags: ["Shopify", "Liquid", "Beauty", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/sari-beauty.jpg",
    role: "Shopify Developer",

  },
  {
    id: "silverado-saratoga",
    title: "Silverado Saratoga",
    description:
      "Boutique jewelry gallery storefront with designer collections, layered merchandising, and curated shopping-by-style experiences.",
    url: "https://silveradosaratoga.com/",
    tags: ["Shopify", "Liquid", "Collections", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/silverado-saratoga.jpg",
    role: "Shopify Developer",

  },
  {
    id: "solid-custom-heirlooms",
    title: "Solid Custom Heirlooms",
    description:
      "Custom hardwood furniture store with extensive product options, wood/stain choices, and design consultation flows built for made-to-order shopping.",
    url: "https://solidcustomheirlooms.com/",
    tags: ["Shopify", "Liquid", "Custom Options", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/solid-custom-heirlooms.jpg",
    role: "Shopify Developer",

  },
  {
    id: "value-buds",
    title: "Value Buds",
    description:
      "Multi-location cannabis retail storefront with age gate, store selector, local inventory, and rewards-driven shopping experiences.",
    url: "https://valuebuds.com/",
    tags: ["Shopify", "Liquid", "Multi-Store", "Local Inventory"],
    category: "shopify",
    image: "/images/projects/value-buds.jpg",
    role: "Shopify Developer",
    featured: true,
  },
  {
    id: "zeanoir",
    title: "ZÉANOIR",
    description:
      "Swiss brow & lash essentials store with product routines, bestseller merchandising, and conversion-focused care storytelling.",
    url: "https://zeanoir.com/",
    tags: ["Shopify", "Liquid", "Beauty", "Theme Customization"],
    category: "shopify",
    image: "/images/projects/zeanoir.jpg",
    role: "Shopify Developer",

  },
  // Theme Development
  {
    id: "bulmastyles",
    title: "BulmaStyles Theme Development",
    description:
      "Developed multiple Bulma-based website themes with SASS architecture and Webpack build tooling for bulmastyles.com.",
    url: "https://bulmastyle.com/themes/wl4zkD/demo",
    urls: [
      { label: "Demo 1", href: "https://bulmastyle.com/themes/wl4zkD/demo" },
      { label: "Demo 2", href: "https://bulmastyle.com/themes/jrXMle/demo" },
      { label: "Demo 3", href: "https://bulmastyle.com/themes/e927kq/demo" },
      { label: "Demo 4", href: "https://bulmastyle.com/themes/Nkp1rA/demo" },
      { label: "Demo 5", href: "https://bulmastyle.com/themes/3kWwkz/demo" },
    ],
    tags: ["Bulma.css", "SASS", "Webpack"],
    category: "theme",
    role: "Theme Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  // Full Stack
  {
    id: "iwhistle",
    title: "iWhistle",
    description:
      "Full stack web application built with Laravel and Vue.js, featuring real-time updates via Pusher and MariaDB.",
    url: "https://app.iwhistle.de",
    tags: ["Laravel", "Vue.js", "Tailwind.css", "Pusher", "MariaDB"],
    category: "fullstack",
    role: "Full Stack Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "globalcaddy",
    title: "GlobalCaddy",
    description:
      "Full stack platform with Laravel Nova admin, Stripe payments, real-time features via Pusher, and MariaDB.",
    url: "https://globalcaddy.com",
    tags: [
      "Laravel",
      "Vue.js",
      "Tailwind.css",
      "Pusher",
      "Laravel-Nova",
      "Stripe",
      "MariaDB",
    ],
    category: "fullstack",
    role: "Full Stack Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "denti24",
    title: "Denti24",
    description:
      "Dental platform with Stripe payments, real-time messaging, Google Maps integration, and MariaDB.",
    url: "https://app.denti24.com",
    tags: [
      "Laravel",
      "Vue.js",
      "Tailwind.css",
      "Stripe",
      "Pusher",
      "Google Maps API",
      "MariaDB",
    ],
    category: "fullstack",
    role: "Full Stack Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "brooky-io",
    title: "Brooky.io",
    description:
      "PropTech full stack application built with the Frappe Framework and React.js for real estate process automation.",
    url: "",
    tags: ["Frappe Framework", "React.js"],
    category: "fullstack",
    role: "Full Stack Developer",
    linkNote: "Live link is not available.",
  },
  // Backend
  {
    id: "growmodo-client-portal",
    title: "Growmodo Client Portal",
    description:
      "Backend portal integrating Asana and Google Drive APIs with Stripe billing on PostgreSQL.",
    url: "",
    tags: ["Laravel", "Asana API", "Google Drive API", "Stripe", "PgSQL"],
    category: "backend",
    role: "Backend Developer",
    linkNote: "Live link is not available.",
  },
  // Training
  {
    id: "react-training",
    title: "React.js Training Project",
    description:
      "Personal React.js training project deployed on Netlify.",
    url: "https://main--frolicking-torrone-caad24.netlify.app/",
    tags: ["React.js", "Netlify"],
    category: "training",
    role: "Frontend Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  // Repositories
  {
    id: "repo-pnpapp",
    title: "PNP App",
    description: "Local / training project repository.",
    url: "https://github.com/JustinPaulLayan/pnpapp",
    tags: ["GitHub"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-falimobileapp",
    title: "Fali Mobile App",
    description: "Local / training project repository.",
    url: "https://github.com/JustinPaulLayan/falimobileapp",
    tags: ["GitHub"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-asumbrado",
    title: "Asumbrado",
    description: "Local / training project repository.",
    url: "https://github.com/JustinPaulLayan/asumbrado",
    tags: ["GitHub"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-ecommercefinal",
    title: "Ecommerce Final",
    description: "Local / training project repository.",
    url: "https://github.com/JustinPaulLayan/ecommercefinal",
    tags: ["GitHub"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-goodis",
    title: "Goodis",
    description: "Local / training project repository.",
    url: "https://bitbucket.org/JustinPaul1025/goodis/src/master/",
    tags: ["Bitbucket"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-little-panay",
    title: "Little Panay Health Center",
    description: "Local / training project repository.",
    url: "https://bitbucket.org/JustinPaul1025/little-panay-health-center/src/master/",
    tags: ["Bitbucket"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-jvf-inventory",
    title: "JVF Inventory",
    description: "Local / training project repository.",
    url: "https://bitbucket.org/JustinPaul1025/jvf-inventory/src/master/",
    tags: ["Bitbucket"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
  {
    id: "repo-hardware-inventory",
    title: "Hardware Inventory",
    description: "Local / training project repository.",
    url: "https://bitbucket.org/JustinPaul1025/hardware-inventory/src/master/",
    tags: ["Bitbucket"],
    category: "repositories",
    role: "Developer",
    linkNote: LINK_MAY_BE_UNAVAILABLE,
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: "growmodo",
    company: "Growmodo GmbH",
    about:
      "Growmodo is a design and development subscription service for growing agencies, marketing teams, and scale-ups that allows you to access various design and coding skills and a dedicated project manager at a flat monthly rate.",
    position: "Developer (Full-Time)",
    duties: [
      "Static Web Developer (HTML, CSS, Javascript, Bootstrap, Tailwind)",
      "Back-end Developer (Laravel/PHP)",
      "Shopify Developer",
      "Other technical tasks within my skill sets",
    ],
    startDate: "December 2022",
    endDate: "September 2026",
    logo: "/images/companies/growmodo.png",
    website: "https://www.growmodo.com/",
  },
  {
    id: "ubernet",
    company: "Ubernet GmbH",
    about:
      "Ubernet GmbH is a limited liability company based in Oberursel, Germany, focused on web application development and digital solutions.",
    position: "Full Stack Web Developer (Full-Time)",
    duties: [
      "Full Stack Web Developer (Laravel, Vue.js, Tailwind, PgSQL, Pusher, Laravel Forge)",
    ],
    startDate: "May 2022",
    endDate: "October 2022",
    logo: "/images/companies/ubernet.svg",
  },
  {
    id: "thinkbit",
    company: "Thinkbit Solutions",
    about:
      "An IT solutions company that specializes in web app development, mobile app development, mobile game development, and event technology solutions.",
    position: "Backend Web Developer (Full-Time)",
    duties: [
      "Back End Developer (Laravel, Livewire, JQuery)",
    ],
    startDate: "March 2022",
    endDate: "May 2022",
    logo: "/images/companies/thinkbit.png",
    website: "https://thinkbitsolutions.com/",
  },
  {
    id: "brooky",
    company: "Brooky.io",
    about:
      "Brooky Technologies is a PropTech company focused on providing technological innovations like process automation, data management systems, and enterprise resource planning solutions to the Real Estate industry.",
    position: "Full Stack Developer (Full-Time)",
    duties: [
      "Full Stack Developer (Frappe, React.js)",
    ],
    startDate: "October 2021",
    endDate: "January 2022",
    logo: "/images/companies/brooky.svg",
    website: "https://brooky.io/",
  },
  {
    id: "codes-edge",
    company: "Codes Edge",
    about:
      "Local outsourcing business for web apps, static websites, and theme development.",
    position: "Full Stack Developer (Full-Time)",
    duties: [
      "Full Stack Developer (Laravel, Vue.js, Tailwind, Bulma, Laravel-Nova, Webpack)",
    ],
    startDate: "June 2019",
    endDate: "October 2021",
    logo: "/images/companies/codes-edge.svg",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Shopify",
    skills: [
      "Liquid",
      "Shopify Plus",
      "Checkout Extensibility",
      "Metafields",
      "Shopify CLI",
      "Theme Kit",
      "Storefront API",
      "GraphQL Admin API",
      "Product & Order APIs",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Web Performance",
      "Accessibility",
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      "Ruby",
      "Laravel",
      "PHP",
      "RESTful APIs",
      "Git & GitHub",
      "Cursor",
      "Laravel Forge",
      "Klaviyo",
      "Recharge",
      "Judge.me",
      "Matrixify",
    ],
  },
];

export const reviews: Review[] = [
  {
    id: "zeanoir",
    company: "ZÉANOIR",
    reviewer: "Angie",
    rating: 5,
    date: "Aug 2026",
    quote:
      "Thank you for being so thorough with your work I really appreciate it!",
    summary:
      "Praised the quality and care of execution after reviewing open technical decisions on a complex multi-brand e-commerce project.",
  },
  {
    id: "any-baby",
    company: "Any Baby",
    reviewer: "Client",
    rating: 5,
    date: "Aug 2026",
    quote:
      "Thanks, this looks great! Page looks good otherwise — I don't think further dev is needed besides any minor refinements.",
    summary:
      "Strong praise for the e-commerce build. Follow-on asks (more product images, color pairing on PDPs) were scope extensions, not quality corrections.",
  },
  {
    id: "acorn-strategy-nav",
    company: "Acorn Strategy",
    reviewer: "Client",
    rating: 5,
    quote: "Nice Work.",
    summary:
      "Positive feedback during theme polish — fast turnaround on nav updates including FAQ jump-to and the new blog page.",
  },
  {
    id: "acorn-strategy-turnaround",
    company: "Acorn Strategy",
    reviewer: "Client",
    rating: 5,
    date: "Sep 2026",
    quote: "Great, thanks for the quick turnaround.",
    summary:
      "Positive note calling out fast turnaround and smooth delivery.",
  },
  {
    id: "acorn-strategy-launch",
    company: "Acorn Strategy",
    reviewer: "Client",
    rating: 5,
    date: "Jul 2026",
    quote: "Domain is set and working. Client is happy with the design.",
    summary:
      "Positive close-out — domain live and the client happy with the design quality.",
  },
  {
    id: "acorn-strategy-psat",
    company: "Acorn Strategy",
    reviewer: "Client",
    rating: 4,
    quote:
      "QA would be the biggest opportunity, making sure small errors are avoided",
    summary:
      "Satisfied overall — highlighted stronger QA checks before delivery as the main opportunity to improve.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/JustinPaul25",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/justin-paul-layan-733517191",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/639761479842",
  },
  {
    platform: "Email",
    url: "mailto:justinpaul1025@gmail.com",
  },
];
