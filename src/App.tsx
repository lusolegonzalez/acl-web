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

/* Isotipo Azul Code — la «A» / punta de lanza / flecha. */
const Mark = ({ size = 32, strokeWidth = 8 }: { size?: number; strokeWidth?: number }) => (
  <svg
    className="mark"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M15 90 L50 6 L85 90"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="miter"
      strokeMiterlimit={8}
      strokeLinecap="square"
    />
    <path d="M31 60 L69 60" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
  </svg>
);

const Wordmark = () => (
  <span className="wordmark">
    <span className="wm-azul">AZUL</span>
    <span className="wm-code">CODE</span>
  </span>
);

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, eyebrow, title, children, className = '' }: SectionProps) => (
  <section className={`section ${className}`.trim()} id={id} aria-labelledby={`${id}-title`}>
    <div className="container">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </div>
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

const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
  <article className="service-card">
    <span className="service-num">{String(index + 1).padStart(2, '0')}</span>
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
    </div>
  </article>
);

const FooterLink = ({ link }: { link: SocialLink }) => (
  <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
    {link.label}
  </a>
);

const App = () => {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Azul Code — Inicio">
            <span className="brand-mark">
              <Mark size={30} />
            </span>
            <Wordmark />
          </a>

          <nav aria-label="Navegación principal" className="site-nav">
            <NavItems links={navLinks} />
            <a className="nav-cta" href="#contacto">
              Hablemos
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido-principal">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <span className="hero-watermark" aria-hidden="true">
            <Mark size={520} strokeWidth={6} />
          </span>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Estudio de software · Azul, Bs. As.</p>
              <h1 id="hero-title">Construimos software que resuelve problemas reales.</h1>
              <p className="hero-lead">
                Diseñamos y desarrollamos soluciones tecnológicas que funcionan en el mundo real. Sin humo, sin vueltas.
              </p>
              <div className="hero-actions">
                <a className="btn btn-light" href="#contacto">
                  Hablemos
                </a>
                <a className="btn btn-ghost" href="#proyectos">
                  Ver proyectos
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-panel">
                <span className="hero-panel-mark">
                  <Mark size={74} />
                </span>
                <Wordmark />
                <p className="hero-panel-meta">
                  {'{ desarrollo · agro · pymes }'}
                  <br />
                  Foco · Ejecución · Dirección técnica
                </p>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="trust-row" aria-label="Señales de confianza">
              <p>Entregas con alcance claro</p>
              <p>Comunicación técnica directa</p>
              <p>Software útil para el día a día</p>
            </div>
          </div>
        </section>

        <Section id="que-hacemos" eyebrow="01 — Qué hacemos" title="Impacto real antes que complejidad innecesaria.">
          <p className="section-intro">
            Trabajamos sobre problemas concretos de operación y negocio. Priorizamos lo que mueve la aguja y dejamos
            afuera lo que sobra.
          </p>
          <ul className="list-grid">
            {whatWeDo.map((item) => (
              <li key={item}>
                <span className="list-bullet">
                  <Mark size={18} strokeWidth={10} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="servicios" eyebrow="02 — Servicios" title="Lo que podemos construir con vos." className="section-sand">
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
            <article className="service-card service-card-dark">
              <span className="service-card-mark">
                <Mark size={26} />
              </span>
              <div>
                <h3>¿No está en la lista?</h3>
                <a className="service-card-link" href="#contacto">
                  Contanos tu caso →
                </a>
              </div>
            </article>
          </div>
        </Section>

        <Section id="proyectos" eyebrow="03 — Proyectos" title="Software que ya está operando." className="section-dark">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <section className="section section-marca" id="marca" aria-labelledby="marca-title">
          <div className="container marca-grid">
            <div>
              <p className="eyebrow">04 — Sobre la marca</p>
              <h2 id="marca-title">Del interior, con dirección técnica.</h2>
              <p className="section-intro">
                Nacimos en Azul, ciudad cervantina y tierra del Quijote. De ahí tomamos la punta de lanza de nuestra
                marca: foco, precisión y rumbo.
              </p>
              <p className="section-intro">
                Desarrollamos soluciones con foco en ejecución, claridad técnica y utilidad real. Nos interesa que el
                software funcione donde importa: en el trabajo diario de cada PyME.
              </p>
            </div>
            <div className="marca-visual" aria-hidden="true">
              <span className="marca-visual-bg">
                <Mark size={256} strokeWidth={7} />
              </span>
              <span className="marca-visual-mark">
                <Mark size={110} />
              </span>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contacto" aria-labelledby="cta-title">
          <div className="container cta-inner">
            <span className="cta-mark" aria-hidden="true">
              <Mark size={42} />
            </span>
            <h2 id="cta-title">¿Tenés un problema que nadie te está resolviendo?</h2>
            <p>Revisamos tu contexto y proponemos un camino concreto para avanzar. Sin compromiso.</p>
            <a className="btn btn-on-azul" href="mailto:lusolegonzalez@gmail.com">
              Contactar
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand-col">
            <a href="#inicio" className="brand" aria-label="Azul Code — Inicio">
              <span className="brand-mark">
                <Mark size={30} />
              </span>
              <Wordmark />
            </a>
            <p className="footer-text">
              Software claro, útil y hecho para operar sin fricción. Azul, Buenos Aires, Argentina.
            </p>
          </div>
          <div className="footer-links-col">
            <p className="footer-links-title">Contacto</p>
            <div className="footer-links">
              {socialLinks.map((link) => (
                <FooterLink key={link.label} link={link} />
              ))}
            </div>
          </div>
        </div>
        <div className="container footer-copy">© 2026 Azul Code · Estudio de Software</div>
      </footer>
    </div>
  );
};

export default App;
