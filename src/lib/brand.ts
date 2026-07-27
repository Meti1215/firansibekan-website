export const brandMedia = {
  logo: "/assets/logo/logo-placeholder.jpg",
  hero: {
    desktopVideo: "/assets/hero/hero-placeholder-1.jpg",
    mobileVideo: "/assets/hero/hero-placeholder-1.jpg",
    poster: "/assets/hero/hero-placeholder-1.jpg",
  },
  founder: {
    portrait: "/assets/leadership/leadership-placeholder-1.jpg",
    beginnings: "/assets/hero/hero-placeholder-1.jpg",
  },
  ventures: {
    distribution: "/assets/hero/hero-placeholder-1.jpg",
    paper: "/assets/hero/hero-placeholder-2.jpg",
    partner: "/assets/hero/hero-placeholder-2.jpg",
    fitness: "/assets/hero/hero-placeholder-3.jpg",
    hotel: "/assets/hero/hero-placeholder-4.jpg",
    realEstate: "/assets/hero/hero-placeholder-5.jpg",
    mining: "/assets/hero/hero-placeholder-6.jpg",
    coalMining: "/assets/hero/hero-placeholder-6.jpg",
    agriculture: "/assets/hero/hero-placeholder-7.jpg",
    export: "/assets/hero/hero-placeholder-8.jpg",
    grandPalace1: "/assets/hero/hero-placeholder-2.jpg",
    grandPalace2: "/assets/hero/hero-placeholder-4.jpg",
    grandPalace3: "/assets/hero/hero-placeholder-3.jpg",
  },
} as const;

export const heroSlides = [
  {
    src: "/assets/hero/hero-placeholder-1.jpg",
    eyebrow: "Firansibekan Trade & Investment",
    headline: "Connecting the dots makes all the difference",
  },
  {
    src: "/assets/hero/hero-placeholder-2.jpg",
    eyebrow: "Health & Hospital Solutions",
    headline: "Diagnostic systems for better care",
  },
  {
    src: "/assets/hero/hero-placeholder-3.jpg",
    eyebrow: "Electromechanical Works",
    headline: "Reliable systems for daily operations",
  },
  {
    src: "/assets/hero/hero-placeholder-4.jpg",
    eyebrow: "IT & IT Consulting",
    headline: "Technology that supports the work",
  },
] as const;

export const brand = {
  name: "Firansibekan Trade and Investment",
  shortName: "Firansibekan",
  founderName: "Gebremariam Atsbha Gebreyohannes",
  founderTitle: "General Manager",
  tagline: "Connecting the dots makes all the difference",
  signatureLine: "Delivering IT consulting, electromechanical works, and health and hospital solutions across Ethiopia.",
  logoPath: brandMedia.logo,
  phone: "+251 911 280 885",
  phoneHref: "tel:+251911280885",
  phone2: "+251 11 855 0009",
  phone2Href: "tel:+251118550009",
  location: "Bole Atlas Area, Century Executive Tower, 9th Floor, Room No. 09-A-01, Addis Ababa, Ethiopia",
  hours: "Mon-Sun: 8:00 AM - 6:00 PM",
  emailLabel: "info@firansibekan.com",
  heroRotatingTexts: [
    "Connecting the dots, makes all the difference.",
    "IT & IT consulting services",
    "Electromechanical installations",
    "Mindray DigiEye 330 diagnostic systems",
    "Built on quality, reliability & trust",
  ],
  heroHighlights: [
    "Health & Hospitals",
    "IT & IT Consulting",
    "Electromechanical Works",
    "Medical Imaging",
  ],
  heroStats: [
    { value: "Since 2012", label: "Company Journey" },
    { value: "4", label: "Core Departments" },
    { value: "1,102+", label: "Platform Followers" },
    { value: "3+", label: "Technical Specialists" },
  ],
} as const;

export const founderStory = [
  {
    id: "beginnings",
    title: "Company Beginnings",
    year: "2012",
    description:
      "Established in 2012, Firansibekan Trade and Investment started with a core objective to bridge gaps in local service delivery, focusing on trading, electromechanical works, and IT installations in Addis Ababa.",
  },
  {
    id: "medical-imaging",
    title: "Health & Medical Equipment",
    year: "Healthcare Expansion",
    description:
      "To improve local healthcare diagnostics, Firansibekan expanded into advanced medical systems, specializing in sourcing, installing, and servicing cutting-edge radiography solutions like the Mindray DigiEye 330.",
  },
  {
    id: "electromechanical-growth",
    title: "Electromechanical Projects",
    year: "Engineering Leadership",
    description:
      "We built strong capabilities in industrial electrical installation, complex system wiring, and equipment support, establishing ourselves as a reliable electromechanical partner.",
  },
  {
    id: "it-consulting",
    title: "IT Consulting Services",
    year: "Digital Integration",
    description:
      "Firansibekan established a dedicated IT consulting team to design structured network configurations, support secure database systems, and deliver client-focused technical support.",
  },
] as const;

export const departments = [
  {
    id: "health-hospitals",
    title: "Health & Hospital Solutions",
    tagline: "Diagnostic systems for better care",
    description:
      "Supporting hospitals and clinics with high-quality medical equipment. We specialize in sourcing, installing, and servicing critical diagnostic systems to improve diagnostic outcomes.",
    features: [
      "Advanced medical equipment supply",
      "Precision system installation",
      "Hospital workflow optimization",
      "After-sales service support",
    ],
    benefits: [
      "Improved patient care",
      "Shorter diagnostic cycle",
      "Trusted equipment quality",
      "Professional local support",
    ],
    image: "/assets/hero/hero-placeholder-2.jpg",
    image2: "/assets/gallery/gallery-placeholder-3.jpg",
  },
  {
    id: "it-consulting",
    title: "IT & IT Consulting",
    tagline: "Technology that supports the work",
    description:
      "Helping teams build practical, dependable technology systems. From hardware setup to custom software configuration, we deliver IT solutions that align with business needs.",
    features: [
      "Network setup & security",
      "Database configuration",
      "Software systems integration",
      "Ongoing IT technical support",
    ],
    benefits: [
      "Higher operational uptime",
      "Secured business data",
      "Streamlined workflows",
      "Scalable systems growth",
    ],
    image: "/assets/hero/hero-placeholder-4.jpg",
    image2: "/assets/hero/hero-placeholder-8.jpg",
  },
  {
    id: "electromechanical",
    title: "Electromechanical Works",
    tagline: "Reliable systems for daily operations",
    description:
      "Delivering engineering and electrical maintenance services. Our certified team helps construct, repair, and optimize machinery and infrastructure systems.",
    features: [
      "Industrial machinery setup",
      "Wiring & electrical engineering",
      "Power systems maintenance",
      "Site safety inspections",
    ],
    benefits: [
      "Reduced operational hazards",
      "Reliable power solutions",
      "Optimized machine life",
      "Compliance with standards",
    ],
    image: "/assets/hero/hero-placeholder-3.jpg",
    image2: "/assets/gallery/gallery-placeholder-4.jpg",
  },
  {
    id: "medical-imaging",
    title: "Medical Imaging Solutions",
    tagline: "Mindray DigiEye 330 Digital X-Ray System",
    description:
      "Bringing the latest digital radiography technology to medical facilities. The DigiEye 330 supports high-resolution imaging, fast acquisition, and smoother workflow.",
    features: [
      "Mindray digital radiography",
      "High-resolution image detail",
      "Flexible system positioning",
      "Durable ceiling/floor suspension",
    ],
    benefits: [
      "Highly accurate diagnostics",
      "Fast patient throughput",
      "Low dose radiation safety",
      "Easy operational controls",
    ],
    image: "/assets/hero/hero-placeholder-1.jpg",
    image2: "/assets/gallery/gallery-placeholder-1.jpg",
  },
] as const;

export const partnershipReasons = [
  {
    title: "Technical Sourcing Excellence",
    description:
      "We source high-quality diagnostic and engineering products from leading global brands to ensure reliability and performance.",
  },
  {
    title: "Local Support & Service",
    description:
      "Our technicians and engineers are based in Addis Ababa, providing immediate troubleshooting, installation, and spare parts supply.",
  },
  {
    title: "Diverse Engineering Capability",
    description:
      "By combining electrical, mechanical, and software expertise, we deliver fully integrated solutions for complex technical projects.",
  },
  {
    title: "Trusted Health Partnerships",
    description:
      "We work closely with medical facilities to deliver diagnostic systems like the Mindray DigiEye 330, supporting healthcare excellence.",
  },
] as const;

export const leadershipGroups = [] as const;

export const eventHighlights = [
  {
    title: "Mindray DigiEye 330 Installation",
    description: "Completed standard installation and calibration of the digital radiography system, enabling high-resolution imaging at a local clinic.",
  },
  {
    title: "IT Infrastructure Project",
    description: "Designed and deployed structured local networks and server setups to support workflow synchronization for an institutional client.",
  },
  {
    title: "Electromechanical Inspection",
    description: "Conducted safety audits and technical overhaul of electromechanical equipment for reliable daily operation.",
  },
] as const;

export const operationSchedules = [
  {
    id: 1,
    activity: "Technical Field Services & Installations",
    area: "Engineering & Healthcare",
    schedule: ["Monday – Saturday", "8:00 AM – 6:00 PM (Local Time)"],
  },
  {
    id: 2,
    activity: "IT Consulting & Remote Support",
    area: "IT Services",
    schedule: ["Monday – Friday", "8:00 AM – 6:00 PM (Local Time)"],
  },
  {
    id: 3,
    activity: "Location Visits & Partner Meetings",
    area: "Corporate Strategy",
    schedule: ["Monday – Friday", "By appointment (Local Time)"],
  },
] as const;

export const projectProfiles = [
  {
    id: "healthcare-imaging",
    title: "Mindray DigiEye 330 System Setup",
    subtitle: "Diagnostic Radiography Support",
    description: "Successful delivery, physical suspension setup, and calibration of the Mindray DigiEye 330 Digital X-Ray system for high-resolution imaging.",
    href: "/projects/okote/",
    image: "/assets/gallery/gallery-placeholder-1.jpg",
  },
  {
    id: "it-infrastructure",
    title: "Corporate Network and Power Systems Build",
    subtitle: "Electromechanical and IT Integration",
    description: "Integrated structured office wiring, backup generators, and server setups to support uptime and day-to-day operations.",
    href: "/projects/aleltu/",
    image: "/assets/gallery/gallery-placeholder-4.jpg",
  },
] as const;

export const investorHighlights = [
  {
    title: "Strategic Asset Quality",
    description: "Partnerships backed by state-of-the-art medical products, qualified engineers, and growing market demand in Ethiopia.",
  },
  {
    title: "Diverse Operating Capabilities",
    description: "A well-rounded business engine generating revenue across IT services, industrial engineering, and medical diagnostic sales.",
  },
  {
    title: "Strong Ethical Foundations",
    description: "Commitment to absolute transparency, compliance, local training, and building long-term value.",
  },
] as const;

export const testimonials = [
  {
    quote: "Firansibekan demonstrated professionalism and reliability throughout the process. Their team was responsive, technically capable, and committed to delivering a solution that met our needs.",
    name: "Client Representative",
    role: "Healthcare Institution",
    rating: 5,
  },
  {
    quote: "We appreciated Firansibekan's professional approach, technical support, and commitment to completing the work successfully.",
    name: "Client Representative",
    role: "Partner Organization",
    rating: 5,
  },
] as const;

export const chatbotConfig = {
  welcomeMessage: "Hi there! Welcome to Firansibekan Trade & Investment. How can we help you today?",
  quickReplies: [
    {
      text: "Health & Hospitals",
      response: "Great! Our Health & Hospitals department provides diagnostic systems like the Mindray DigiEye 330 Digital X-Ray System. Would you like to learn more?",
    },
    {
      text: "IT & IT Consulting",
      response: "Perfect! Our IT & IT Consulting team helps build practical, dependable technology systems. How can we assist?",
    },
    {
      text: "Electromechanical Works",
      response: "Excellent! Our Electromechanical Works department supports reliable, day-to-day operations. What do you need help with?",
    },
    {
      text: "Medical Imaging",
      response: "Wonderful! We offer Mindray DigiEye 330 Digital X-Ray Systems for high-resolution imaging. Want more details?",
    },
  ],
} as const;
