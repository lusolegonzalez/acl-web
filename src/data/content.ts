export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
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

export const navLinks: NavLink[] = [
  { href: '#que-hacemos', label: 'Qué hacemos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#marca', label: 'Marca' }
];

export const whatWeDo = [
  'Software a medida para procesos críticos y operaciones reales.',
  'Integraciones entre sistemas para un flujo de datos estable.',
  'Automatización de tareas repetitivas para ganar tiempo y control.',
  'MVPs y productos digitales con foco en validar valor rápido.',
  'Optimización de plataformas existentes para mejorar rendimiento y mantenibilidad.'
];

export const services: Service[] = [
  {
    title: 'Desarrollo de software a medida',
    description: 'Construimos soluciones específicas para tu operación, sin plantillas genéricas.'
  },
  {
    title: 'Integración de sistemas',
    description: 'Conectamos herramientas y plataformas para centralizar datos y reducir fricción.'
  },
  {
    title: 'Automatización de procesos',
    description: 'Eliminamos tareas manuales y errores recurrentes con flujos automatizados.'
  },
  {
    title: 'Desarrollo de MVPs y productos digitales',
    description: 'Diseñamos versiones iniciales sólidas para validar hipótesis con usuarios reales.'
  },
  {
    title: 'Optimización de sistemas existentes',
    description: 'Mejoramos arquitectura, rendimiento y legibilidad para escalar sin deuda excesiva.'
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
  { label: 'lusolegonzalez@gmail.com', href: 'mailto:lusolegonzalez@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lusolegonzalez', external: true }
];
