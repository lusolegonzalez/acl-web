export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string;
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
  { href: '#nosotros', label: 'Marca' },
  { href: '#contacto', label: 'Contacto' }
];

export const services = [
  'Desarrollo de software a medida',
  'Integración de sistemas',
  'Automatización de procesos',
  'Desarrollo de MVPs y productos digitales',
  'Optimización de sistemas existentes'
];

export const projects: Project[] = [
  {
    name: 'Bralt Products',
    description:
      'Plataforma para gestión y trazabilidad de productos a partir de códigos QR, con panel de administración y métricas operativas.',
    stack: 'Web app + panel interno + integración API',
    image: '/productos.png',
    imageAlt: 'Panel de Bralt Products con gestión de productos y códigos QR'
  },
  {
    name: 'Control de Acceso QR',
    description:
      'Control de acceso para ingresos mediante lector de QR y código de barras.',
    stack: 'Web app + app híbrida',
    image: '/controlAcceso.png',
    imageAlt: 'Interfaz del sistema de control de acceso por QR y código de barras'
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/azulcodelab', external: true },
  { label: 'WhatsApp', href: 'https://wa.me/541132050333', external: true },
  { label: 'Email', href: 'mailto:lusolegonzalez@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lusolegonzalez', external: true }
];
