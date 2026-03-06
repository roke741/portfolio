export interface SeoMetadata {
  title: string;
  description: string;
  siteName: string;
  canonical: string;
  keywords: string[];
  author: string;
  locale: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  headingLine1: string;
  headingLine2: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  dashboardImage: string;
  dashboardImageAlt: string;
  videoSrc: string;
}

export interface SkillCard {
  title: string;
  content: string;
  icon: string;
}

export interface ProjectItem {
  image?: string;
  title: string;
  description: string;
  githubUrl?: string;
}

export interface ContactContent {
  title: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export interface JourneyItem {
  period: string;
  title: string;
  organization: string;
  summary: string;
  tags: string[];
}

export interface JourneyContent {
  title: string;
  experienceTitle: string;
  educationTitle: string;
  experience: JourneyItem[];
  education: JourneyItem[];
}

export interface FooterContent {
  name: string;
  roles: string[];
  email: string;
  socialLinks: { label: string; href: string; icon: string }[];
  signature: string;
  copyright: string;
}

export const seo: SeoMetadata = {
  title: 'Jhordie Roque | Desarrollador Full Stack',
  description:
    'Portafolio de Jhordie Roque. Desarrollo aplicaciones web y APIs escalables con foco en experiencia de usuario, rendimiento y valor de negocio.',
  siteName: 'Portafolio Jhordie Roque',
  canonical: 'https://jhordie.me',
  keywords: ['Portafolio', 'Desarrollador Full Stack', 'Frontend', 'Backend', 'Laravel', 'NextJS', 'Astro', 'NuxtJS', 'Spring Boot'],
  author: 'Jhordie Roque',
  locale: 'es_PE'
};

export const header = {
  brand: 'Jhordie',
  navItems: [
    { label: 'Inicio', href: '#presentation' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Trayectoria', href: '#journey' },
    { label: 'Contacto', href: '#contact' }
  ] satisfies NavItem[]
};

export const hero: HeroContent = {
  headingLine1: 'Hola, soy Jhordie',
  headingLine2: 'Desarrollador Full Stack',
  subtitle:
    'Orientado a resultados. Diseño y construyo productos web completos — desde la interfaz hasta la API — con foco en rendimiento, escalabilidad y código que otros puedan mantener.',
  ctaPrimary: { label: 'Ver proyectos', href: '#projects' },
  // TODO: reemplaza '#' con la URL real de tu CV (Google Drive, Notion, PDF, etc.)
  ctaSecondary: { label: 'Descargar CV', href: '#' },
  dashboardImage: '/assets/img-principal.png',
  dashboardImageAlt: 'Dashboard preview del portafolio',
  videoSrc: '/assets/space_nebula_loop_animation.mp4'
};

export const sectionTitles = {
  skills: 'Habilidades',
  projects: 'Proyectos',
  journey: 'Trayectoria',
  contact: 'Contacto'
};

export const journey: JourneyContent = {
  title: 'Trayectoria',
  experienceTitle: 'Experiencia',
  educationTitle: 'Formación',
  experience: [
    {
      period: '2024 — Actualidad',
      title: 'Desarrollador Full Stack',
      organization: 'Compuusa',
      // SUGERENCIA: agrega tecnologías clave (ej. 'NextJS · Laravel · PostgreSQL') y menciona impacto medible si lo tienes.
      summary:
        'Diseño e implementación de un ERP, incluyendo interfaces de usuario, APIs y automatizaciones para optimizar procesos administrativos y comerciales.',
      tags: ['NextJS', 'Laravel', 'PostgreSQL', 'Docker', 'Java']
    },
    {
      period: '2023 — 2024',
      title: 'Desarrollo de productos académicos',
      organization: 'B4nvest',
      summary:
        'Desarrollo de un sistema de suscripciones y plataforma educativa con visualizaciones de datos financieros avanzadas y dashboards interactivos.',
      tags: ['NuxtJs', 'TypeScript', 'Laravel', 'MySQL']
    },
    {
      period: '2022 — 2023',
      title: 'Desarrollador Freelance',
      organization: 'Freelance',
      summary:
        'Ejecución de proyectos web end-to-end para clientes independientes: arquitectura, desarrollo, integraciones y entrega. Trabajo con stacks variados según la necesidad de cada producto.',
      tags: ['NextJS', 'Tailwind CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Python', 'Java']
    }
  ],
  education: [
    {
      period: 'Base académica',
      title: 'Ingeniería de Sistemas e Informática',
      organization: 'Universidad Tecnológica del Perú',
      summary:
        'Formación académica en ingeniería de sistemas e informática con énfasis en desarrollo de software, arquitectura de sistemas y fundamentos teóricos.',  
      tags: ['Ingeniería de Sistemas', 'Desarrollo de Software', 'Arquitectura de Sistemas']
    },
    {
      period: 'Formación continua',
      title: 'Especialización en desarrollo web',
      organization: 'Certus',
      summary:
        'Aprendizaje continuo mediante construcción de productos reales, arquitectura de software y aplicación de buenas prácticas de UX/UI.',
      tags: ['Frontend', 'Backend', 'DevOps']
    },
    {
      period: 'Base académica',
      title: 'Computación e Informática',
      organization: 'Honorio Delgado Espinoza',
      summary:
        'Fortalecimiento de lógica de programación, estructuras de datos y diseño de soluciones para problemas reales.',
      tags: ['Estructuras de Datos', 'Algoritmos', 'Arquitectura']
    }
  ]
};

export const skillColumns: SkillCard[][] = [
  [
    { title: 'Lenguajes', content: 'PHP · Python · Typescript · Javascript · Java · SQL', icon: '⟨/⟩' },
    { title: 'Bases de datos', content: 'PostgreSQL · MySQL · MongoDB', icon: '◉' },
    { title: 'DevOps', content: 'Linux · Docker · VPS · GitHub Actions', icon: '⚙' }
  ],
  [
    { title: 'Herramientas', content: 'VS Code · IntelliJ · Cursor · Git · GitHub · Postman · Figma · LLM', icon: '◈' },
    { title: 'Frameworks', content: 'Laravel · React · NextJS · Astro · Spring Boot · NuxtJS', icon: '△' }
  ]
];

export const projects: ProjectItem[] = [
  {
    title: 'Facturación Electrónica',
    description:
      'Sistema para emisión y validación de comprobantes electrónicos, orientado a cumplimiento SUNAT, trazabilidad y reducción de trabajo manual.',
    githubUrl: 'https://github.com/roke741/laravel-sire-sunat'
  },
  {
    title: 'Guías Electrónicas',
    description:
      'Módulo para gestión de guías de remisión electrónicas con control de despacho, validación documental y flujo administrativo centralizado.',
    githubUrl: 'https://github.com/roke741/guias-sunat'
  },
  {
    title: 'My Cash',
    description: 'Aplicación móvil de finanzas personales para registro de gastos, control de presupuestos y seguimiento de metas de ahorro.',
    githubUrl: 'https://github.com/roke741/my-cash'
  },
  {
    title: 'Clone Egg',
    description: 'Réplica funcional de plataforma educativa centrada en flujo real de usuario, navegación clara y consistencia visual.',
    githubUrl: 'https://github.com/roke741/clone-egg'
  },
  {
    image: '/assets/peruzon.png',
    title: 'Peruzon',
    description: 'Sistema de facturación e inventario con gestión de productos, ventas y stock para operación comercial diaria.',
    githubUrl: 'https://github.com/roke741/Peruzon'
  },
  {
    image: '/assets/bot_r.png',
    title: 'BOT_R (Script)',
    description: 'Script de automatización con Python para extracción y consulta de información pública mediante técnicas de web scraping.',
    githubUrl: 'https://github.com/roke741/BOT_R'
  },
  {
    image: '/assets/Sneakers.png',
    title: 'Sneakers',
    description: 'E-commerce orientado a venta de zapatillas por temporada, con catálogo dinámico y foco en experiencia de usuario.',
    githubUrl: 'https://github.com/jorgeayaladev/Sneakers'
  },
  {
    image: '/assets/Factugo.png',
    title: 'FactuGo',
    description: 'Sistema de ventas y facturación desarrollado en Java y MySQL para gestión comercial de punta a punta.',
    githubUrl: 'https://github.com/roke741/FACTUGO'
  },
  {
    image: '/assets/Telco.png',
    title: 'Telco Telefonia',
    description:
      'Plataforma web para servicios de telefonía desarrollada con Angular y Spring Boot, integrada con bases de datos relacionales y NoSQL.'
  }
];

export const contact: ContactContent = {
  title: 'Contacto',
  nameLabel: 'Nombre completo',
  emailLabel: 'Correo electrónico',
  messageLabel: 'Mensaje',
  messagePlaceholder: 'Cuéntame brevemente sobre tu proyecto o necesidad',
  submitLabel: 'Enviar'
};

export const footer: FooterContent = {
  name: 'Jhordie Roque',
  roles: ['Desarrollador Full Stack'],
  email: 'jordieroque741@gmail.com',
  socialLinks: [
    { label: 'Facebook', href: '#', icon: 'bi-facebook' },
    { label: 'GitHub', href: 'https://github.com/roke741', icon: 'bi-github' },
    { label: 'LinkedIn', href: '#', icon: 'bi-linkedin' },
    { label: 'Discord', href: '#', icon: 'bi-discord' },
    { label: 'Twitter', href: '#', icon: 'bi-twitter' },
    { label: 'Instagram', href: '#', icon: 'bi-instagram' }
  ],
  signature: 'Diseñado y desarrollado por Jhordie Roque',
  copyright: '© Jhordie Roque 2026. Todos los derechos reservados.'
};
