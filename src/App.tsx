import type { ReactNode } from 'react';
import SpearMark from './components/SpearMark';
import {
  navLinks,
  projects,
  services,
  socialLinks,
  type NavLink,
  type Project,
  type SocialLink
} from './data/content';

type SectionBlockProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const SectionBlock = ({ id, title, children, className = '' }: SectionBlockProps) => (
  <section className={`section ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{title}</h2>
    {children}
  </section>
);

type NavItemsProps = {
  links: NavLink[];
};

const NavItems = ({ links }: NavItemsProps) => (
  <ul className="nav-links">
    {links.map((link) => (
      <li key={link.href}>
        <a href={link.href}>{link.label}</a>
      </li>
    ))}
  </ul>
);

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="card project-card">
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <p className="project-stack">{project.stack}</p>
    {project.href ? (
      <a href={project.href} target="_blank" rel="noreferrer">
        {project.linkText}
      </a>
    ) : (
      <span className="text-link-disabled" aria-disabled="true">
        {project.linkText}
      </span>
    )}
  </article>
);

type FooterLinkProps = {
  link: SocialLink;
};

const FooterLink = ({ link }: FooterLinkProps) => (
  <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
    {link.label}
  </a>
);

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>
      <div className="ambient-glow ambient-glow-left" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-right" aria-hidden="true" />

      <div className="app">
        <header className="site-header">
          <a href="#inicio" className="brand">
            <SpearMark className="brand-mark" decorative />
            <span className="brand-text">
              <strong>AZUL</strong>
              <small>CODE LAB</small>
            </span>
          </a>
          <nav aria-label="Navegación principal">
            <NavItems links={navLinks} />
          </nav>
        </header>

        <main id="contenido-principal">
          <section className="hero" id="inicio" aria-labelledby="hero-title">
            <div className="hero-content">
              <p className="eyebrow">Ingeniería de producto para operación real</p>
              <h1 id="hero-title">Software serio para equipos que no pueden perder tiempo</h1>
              <p className="hero-subtitle">
                Diseñamos, construimos y mantenemos sistemas a medida con foco en ejecución.
                Decisiones claras, entregables concretos y cero promesas vacías.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Coordinar una llamada
                </a>
                <a className="btn btn-ghost" href="#proyectos">
                  Ver casos
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-emblem-frame">
                <div className="spear-aura" />
                <SpearMark />
              </div>
            </div>
          </section>

          <SectionBlock id="que-hacemos" title="Qué hacemos">
            <p>
              Transformamos necesidades de negocio en productos digitales utilizables. Cada etapa
              tiene un responsable, un criterio de calidad y una fecha de entrega.
            </p>
          </SectionBlock>

          <SectionBlock id="servicios" title="Servicios">
            <div className="services-grid">
              {services.map((service) => (
                <article className="card" key={service}>
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="proyectos" title="Proyectos destacados">
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </SectionBlock>

          <SectionBlock id="nosotros" title="Sobre la marca">
            <p>
              Azul Code Lab combina visión técnica con disciplina de entrega. Entramos en proyectos
              donde hace falta criterio y ejecución: menos discurso, más software funcionando.
            </p>
          </SectionBlock>

          <SectionBlock id="contacto" title="¿Necesitás resolver algo crítico en semanas y no en meses?" className="cta">
            <p>
              Contanos el contexto y te proponemos un plan de trabajo realista, con alcance y
              prioridades definidas.
            </p>
            <a className="btn btn-primary" href="mailto:hola@azulcodelab.com">
              Escribir a hola@azulcodelab.com
            </a>
          </SectionBlock>
        </main>

        <footer className="site-footer">
          <p className="footer-brand">AZUL CODE LAB</p>
          <p>Arquitectura clara, implementación prolija y foco total en impacto operativo.</p>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <FooterLink key={link.label} link={link} />
            ))}
          </div>
          <p className="footer-copy">© {year} Azul Code Lab</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
