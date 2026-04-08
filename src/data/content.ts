export type NavLink = {
  href: string;
  label: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string;
  linkText: string;
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
    name: 'Bralt QR',
    description:
      'Plataforma para gestión y trazabilidad de códigos QR con panel de administración y métricas operativas.',
    stack: 'Web app + panel interno + integración API',
    linkText: 'Próximamente'
  },
  {
    name: 'Proyecto futuro (editable)',
    description:
      'Espacio preparado para documentar un caso real con objetivo, solución implementada y resultados medibles.',
    stack: 'Caso de negocio + solución a medida',
    linkText: 'Agregar enlace'
  }
];

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true },
  { label: 'Email', href: 'mailto:hola@azulcodelab.com' },
  { label: 'GitHub', href: 'https://github.com', external: true }
];
