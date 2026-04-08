export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string;
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
      'Plataforma para gestión y trazabilidad productos apartir de códigos QR con panel de administración y métricas operativas.',
    stack: 'Web app + panel interno + integración API'
  },
  {
    name: 'Control de Acceso QR',
    description:
      'Control de acceso para ingresos mediante lector de QR y código de barras.',
    stack: 'Web app + app híbrida'
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/azulcodelab', external: true },
  { label: 'Email', href: 'mailto:lusolegonzalez@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lusolegonzalez', external: true }
];
