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
  greeting: string;
  name: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SkillCard {
  title: string;
  content: string;
}

export interface ProjectItem {
  image: string;
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

export interface FooterContent {
  name: string;
  roles: string[];
  email: string;
  socialLinks: { label: string; href: string; icon: string }[];
  signature: string;
  copyright: string;
}

export const seo: SeoMetadata = {
  title: 'Jhordie Roque | Portafolio',
  description:
    'Portafolio de Jhordie Roque, desarrollador Full Stack enfocado en frontend, backend y soluciones web modernas.',
  siteName: 'Portafolio Jhordie Roque',
  canonical: 'https://example.com',
  keywords: ['Portafolio', 'Frontend', 'Backend', 'Full Stack', 'Angular', 'Astro'],
  author: 'Jhordie Roque',
  locale: 'es_PE'
};

export const header = {
  brand: 'Jhordie',
  navItems: [
    { label: 'Presentation', href: '#presentation' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ] satisfies NavItem[]
};

export const hero: HeroContent = {
  greeting: 'Hola mi nombre es',
  name: 'Jhordie Roque',
  summary:
    'Soy un desarrollador junior apasionado por la tecnología y la programación. Me encanta aprender nuevas habilidades y crear soluciones innovadoras. Estoy entusiasmado por continuar mi crecimiento en el campo y utilizar mis conocimientos para resolver problemas complejos. Como desarrollador, siempre estoy buscando nuevos desafíos y oportunidades para aprender y mejorar.',
  ctaLabel: 'Descargar CV',
  ctaHref: '#',
  imageSrc: '/assets/img-principal.png',
  imageAlt: 'Ilustración principal del portafolio'
};

export const sectionTitles = {
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact'
};

export const skillColumns: SkillCard[][] = [
  [
    { title: 'Languajes', content: 'Python JavaScript NodeJs Java PHP HTML CSS' },
    { title: 'Databases', content: 'MySQL PostgreSQL MongoDB' },
    { title: 'DevOps', content: 'Linux Docker Kubernetes Jenkins' }
  ],
  [
    {
      title: 'Tools',
      content:
        'VSCode IntelliJ PyCharm NetBeans Git GitHub Figma Adobe XD Adobe Photoshop Adobe Illustrator Postman'
    },
    {
      title: 'Frameworks',
      content: 'Bootstrap 5 JQuery Angular 15 React Spring Boot 3 Scrapy'
    }
  ]
];

export const skillsImage = {
  src: '/assets/img-skills.png',
  alt: 'Tecnologías y habilidades'
};

export const projects: ProjectItem[] = [
  {
    image: '/assets/TiendaEcommerce-bootstrap5.png',
    title: 'Tienda Ecommerce Bootstrap 5',
    description: 'Pagina Maquete Ecommerce, realizada con Bootstrap 5.',
    githubUrl: 'https://github.com/roke741/ecommerce-bootstrap5'
  },
  {
    image: '/assets/peruzon.png',
    title: 'Peruzon',
    description: 'Sistema de facturacion e inventario, realizado con: Bootstrap5, Js, PHP, JQuery y MySQL.',
    githubUrl: 'https://github.com/roke741/Peruzon'
  },
  {
    image: '/assets/bot_r.png',
    title: 'BOT_R (Script)',
    description: 'Buscar informacion como nombres y dni, realizado con Python3 y librerias de web scraping',
    githubUrl: 'https://github.com/roke741/BOT_R'
  },
  {
    image: '/assets/Sneakers.png',
    title: 'Sneakers',
    description: 'E-commerce relacionado a la venta de zapatillas por temporada.',
    githubUrl: 'https://github.com/jorgeayaladev/Sneakers'
  },
  {
    image: '/assets/Factugo.png',
    title: 'FactuGo',
    description: 'Sistema de ventas y facturacion, desarrollado con Java y MySQL.',
    githubUrl: 'https://github.com/roke741/FACTUGO'
  },
  {
    image: '/assets/Telco.png',
    title: 'Telco Telefonia',
    description:
      'Pagina web de servicio de telefonia, desarrollado con Angular 15, Spring Boot, MySQL, PostgreSQL, MongoDB'
  }
];

export const contact: ContactContent = {
  title: 'Contact',
  nameLabel: 'Nombres',
  emailLabel: 'Correo',
  messageLabel: 'Mensaje',
  messagePlaceholder: 'Ingresa tu mensaje',
  submitLabel: 'Enviar'
};

export const footer: FooterContent = {
  name: 'Jhordie Roque',
  roles: ['Frontend Developer', 'Backend Developer', 'FullStack Developer'],
  email: 'jordieroque741@gmail.com',
  socialLinks: [
    { label: 'Facebook', href: '#', icon: 'bi-facebook' },
    { label: 'GitHub', href: 'https://github.com/roke741', icon: 'bi-github' },
    { label: 'LinkedIn', href: '#', icon: 'bi-linkedin' },
    { label: 'Discord', href: '#', icon: 'bi-discord' },
    { label: 'Twitter', href: '#', icon: 'bi-twitter' },
    { label: 'Instagram', href: '#', icon: 'bi-instagram' }
  ],
  signature: 'Design ♥️ by Jhordie Roque',
  copyright: 'Copyright ©️ Jhordie Roque 2023. All Rights Reserved'
};
