export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Problem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  label: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const contact = {
  whatsapp: '+54 9 11 3205-0333',
  whatsappHref:
    'https://wa.me/5491132050333?text=Hola%20Azul%20Code%20Lab%2C%20quiero%20hacer%20una%20consulta.',
  email: 'azulcodelab@gmail.com',
  emailHref: 'mailto:azulcodelab@gmail.com',
  location: 'Azul, Buenos Aires, Argentina'
};

export const sectors = ['Pymes', 'Distribución', 'Logística', 'Industria', 'Comercio', 'Agro'];

export const navLinks: NavLink[] = [
  { href: '#servicios', label: 'Qué hacemos' },
  { href: '#problemas', label: 'Problemas' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#nosotros', label: 'Nosotros' }
];

/* Íconos: clave que mapea a un set de SVG definido en App.tsx */
export const services: (Service & { icon: string })[] = [
  {
    icon: 'grid',
    title: 'Sistemas de gestión a medida',
    description:
      'Un sistema hecho para cómo trabaja tu empresa, no al revés. Stock, ventas, clientes, producción: lo que tu negocio realmente necesita.'
  },
  {
    icon: 'link',
    title: 'Integraciones entre sistemas',
    description:
      'Conectamos las herramientas que ya usás para que la información fluya sola y dejes de cargar lo mismo dos veces.'
  },
  {
    icon: 'gear',
    title: 'Automatización de procesos',
    description:
      'Tareas repetitivas que hoy hacés a mano, resueltas por software: reportes, avisos, cálculos y cargas automáticas.'
  },
  {
    icon: 'panel',
    title: 'Herramientas internas',
    description:
      'Paneles, tableros y pequeñas apps internas para que tu equipo tenga todo en un solo lugar y decida con mejor información.'
  }
];

export const problems: Problem[] = [
  {
    title: 'Planillas que ya no alcanzan',
    description: 'El Excel creció tanto que se rompe, se duplica y nadie sabe cuál es la versión buena.'
  },
  {
    title: 'Sistemas que no se hablan',
    description: 'Cargás la misma información en dos o tres lugares porque las herramientas no están conectadas.'
  },
  {
    title: 'Procesos manuales repetitivos',
    description: 'Horas por semana en tareas que podrían resolverse solas con el software adecuado.'
  },
  {
    title: 'Información dispersa',
    description: 'Datos repartidos entre mails, planillas y papeles, sin un lugar único donde consultarlos.'
  },
  {
    title: 'Herramientas que no se adaptan a tu negocio',
    description:
      'Pagás un software genérico que te obliga a trabajar como él quiere, en lugar de acompañar cómo trabaja tu empresa.'
  }
];

export const process: ProcessStep[] = [
  {
    title: 'Entendemos el problema',
    description: 'Escuchamos cómo trabajás hoy y dónde se traba la operación. Sin tecnicismos.'
  },
  {
    title: 'Diseñamos la solución',
    description: 'Proponemos algo concreto y a tu medida, con alcance y tiempos definidos desde el arranque.'
  },
  {
    title: 'Desarrollamos',
    description: 'Construimos el software con buenas prácticas y te mostramos avances reales en el camino.'
  },
  {
    title: 'Acompañamos la implementación',
    description: 'Te ayudamos a ponerlo en marcha y quedamos cerca para lo que necesites después.'
  }
];

export const values: { title: string; description: string; icon: string }[] = [
  {
    icon: 'chat',
    title: 'Cercanía',
    description: 'Atención personalizada y trato directo, sin intermediarios.'
  },
  {
    icon: 'code',
    title: 'Criterio técnico',
    description: 'Decisiones pensadas para que la solución dure y crezca con vos.'
  },
  {
    icon: 'check',
    title: 'Soluciones reales',
    description: 'Software que se usa y resuelve, pensado para empresas de verdad.'
  }
];

export const projects: Project[] = [
  {
    name: 'Bralt QR',
    description:
      'Sistema de trazabilidad por QR para gestión de productos, operación interna y seguimiento en tiempo real.',
    label: 'Gestión operativa · QR',
    image: '/productos.png',
    imageAlt: 'Panel de Bralt QR para gestión de productos y trazabilidad'
  },
  {
    name: 'Control de Acceso de Visitantes',
    description:
      'Invitación por link, autogestión del visitante y validación DNI/QR con auditoría. Base preparada para nuevas integraciones.',
    label: 'Control de acceso · Web App',
    image: '/controlAcceso.png',
    imageAlt: 'Interfaz de control de acceso con lectura de QR y código de barras'
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/azulcodelab', external: true },
  { label: 'azulcodelab@gmail.com', href: 'mailto:azulcodelab@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lusolegonzalez', external: true }
];
