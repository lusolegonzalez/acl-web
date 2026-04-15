import type { ReactNode } from 'react';
import {
  navLinks,
  projects,
  services,
  socialLinks,
  whatWeDo,
  type NavLink,
  type Project,
  type SocialLink,
  type Service
} from './data/content';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = '' }: SectionProps) => (
  <section className={`section ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
    <div className="section-head">
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
    {children}
  </section>
);

const NavItems = ({ links }: { links: NavLink[] }) => (
  <ul className="nav-links">
    {links.map((link) => (
      <li key={link.href}>
        <a href={link.href}>{link.label}</a>
      </li>
    ))}
  </ul>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card service-card">
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </article>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="project-card">
    <div className="project-media">
      <img src={project.image} alt={project.imageAlt} loading="lazy" />
    </div>
    <div className="project-content">
      <p className="project-label">{project.label}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span className="project-link-placeholder">Enlace de caso disponible próximamente</span>
    </div>
  </article>
);

const FooterLink = ({ link }: { link: SocialLink }) => (
  <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
    {link.label}
  </a>
);

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Ir al inicio">
            <img className="brand-logo" src="/LogoAzulCodeLab.png" alt="Logo Azul Code Lab" />
            <span className="brand-copy">
              <strong>Azul Code Lab</strong>
              <small>Software con dirección</small>
            </span>
          </a>

          <nav aria-label="Navegación principal" className="site-nav">
            <NavItems links={navLinks} />
          </nav>
        </div>
      </header>

      <main id="contenido-principal">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Azul Code Lab</p>
              <h1 id="hero-title">Construimos software que resuelve problemas reales</h1>
              <p>
                Diseñamos y desarrollamos soluciones tecnológicas que funcionan en el mundo real. Sin humo. Sin
                vueltas.
              </p>
              <a className="btn btn-primary" href="#contacto">
                Hablemos
              </a>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-visual-frame">
                <img src="/LogoAzulCodeLab.png" alt="" className="hero-logo" loading="lazy" />
                <p>
                  Foco, ejecución y dirección técnica
                </p>
              </div>
            </div>
          </div>

          <div className="container trust-row" aria-label="Señales de confianza">
            <p>Entregas con alcance claro</p>
            <p>Comunicación técnica directa</p>
            <p>Software útil para el trabajo diario</p>
          </div>
        </section>

        <Section id="que-hacemos" title="Qué hacemos">
          <p className="section-intro">
            Trabajamos sobre problemas concretos de operación y negocio. Priorizamos impacto real antes que complejidad
            innecesaria.
          </p>
          <ul className="list-grid">
            {whatWeDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="servicios" title="Servicios">
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Section>

        <Section id="proyectos" title="Proyectos">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section id="nosotros" title="Sobre la marca">
          <p className="section-intro">
            Desarrollamos soluciones con foco en ejecución, claridad técnica y utilidad real. Nos interesa que el
            software funcione donde importa: en el trabajo diario.
          </p>
        </Section>

        <Section id="contacto" title="¿Tenés un problema que nadie te está resolviendo?" className="cta-section">
          <p className="section-intro">Si querés, revisamos tu contexto y proponemos un camino concreto para avanzar.</p>
          <a className="btn btn-primary" href="mailto:lusolegonzalez@gmail.com">
            Contactar
          </a>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">Azul Code Lab</p>
          <p className="footer-text">Software claro, útil y hecho para operar sin fricción.</p>
          <div className="footer-links">
            {socialLinks.map((link) => (
              <FooterLink key={link.label} link={link} />
            ))}
          </div>
          <p className="footer-copy">© {year} Azul Code Lab</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
