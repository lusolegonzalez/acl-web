import type { ReactNode } from 'react';
import {
  contact,
  navLinks,
  problems,
  process,
  projects,
  sectors,
  services,
  socialLinks,
  values,
  type NavLink,
  type Project,
  type SocialLink
} from './data/content';

const logo = '/logo-azul-code-lab.png';

/* ---------- Íconos (trazo, heredan currentColor) ---------- */
const paths: Record<string, ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  link: <path d="M9 7H7a5 5 0 0 0 0 10h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />,
  gear: (
    <>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  panel: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 20h10M8 9h3M8 13h8" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />,
  code: <path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />,
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2a9.8 9.8 0 0 0-8.4 14.9L2 22l5.3-1.4A9.8 9.8 0 1 0 12 2Zm5.6 13.9c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.5-4-4.7-4.2-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z"
    />
  )
};

const Icon = ({ name, size = 22 }: { name: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {paths[name]}
  </svg>
);

const Brand = ({ className = '' }: { className?: string }) => (
  <a href="#inicio" className={`brand ${className}`.trim()} aria-label="Azul Code Lab — Inicio">
    <img src={logo} alt="" className="brand-logo" width={36} height={36} />
    <span className="brand-name">Azul Code Lab</span>
  </a>
);

const WhatsAppButton = ({ variant = 'primary', label }: { variant?: string; label: string }) => (
  <a className={`btn btn-${variant}`} href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
    <Icon name="whatsapp" size={19} />
    {label}
  </a>
);

type SectionHeadProps = { eyebrow: string; title: string; intro?: string };
const SectionHead = ({ eyebrow, title, intro }: SectionHeadProps) => (
  <div className="sec-head">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {intro ? <p className="sec-intro">{intro}</p> : null}
  </div>
);

const App = () => {
  return (
    <div className="page">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      {/* ---------- Header ---------- */}
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <nav className="nav-links" aria-label="Navegación principal">
            {navLinks.map((link: NavLink) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary btn-sm" href="#contacto">
              Hablemos
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        {/* ---------- Hero ---------- */}
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-accent">Estudio de software · Azul, Buenos Aires</p>
              <h1>
                Software a medida para que tu empresa <span className="accent">trabaje mejor</span>.
              </h1>
              <p className="hero-lead">
                Creamos sistemas de gestión, integraciones y automatizaciones pensadas para tu operación. Nada de humo:
                soluciones concretas que tu equipo usa todos los días.
              </p>
              <div className="hero-actions">
                <WhatsAppButton variant="primary" label="Hablemos por WhatsApp" />
                <a className="btn btn-ghost" href="#servicios">
                  Ver qué hacemos
                </a>
              </div>
              <ul className="chips" aria-label="Sectores con los que trabajamos">
                {sectors.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="hero-panel" aria-hidden="true">
              <img src={logo} alt="" className="hero-panel-logo" width={72} height={72} />
              <p className="hero-panel-name">Azul Code Lab</p>
              <p className="hero-panel-meta">Desarrollo de software · Azul, Pcia. de Buenos Aires</p>
              <ul className="hero-panel-rows">
                <li>
                  <Icon name="check" size={18} />
                  <span>Sistemas hechos a tu medida</span>
                </li>
                <li>
                  <Icon name="check" size={18} />
                  <span>Integraciones que conectan todo</span>
                </li>
                <li>
                  <Icon name="check" size={18} />
                  <span>Procesos automatizados</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ---------- Qué hacemos ---------- */}
        <section className="band" id="servicios">
          <div className="container">
            <SectionHead
              eyebrow="Qué hacemos"
              title="Tecnología útil, aplicada a tu negocio."
              intro="Desarrollamos software pensado para resolver problemas reales de la operación, no para sumar complejidad."
            />
            <div className="cards">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <span className="card-ico">
                    <Icon name={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Problemas ---------- */}
        <section className="band band-soft" id="problemas">
          <div className="container">
            <SectionHead
              eyebrow="Problemas que resolvemos"
              title="Si algo de esto te suena, podemos ayudarte."
              intro="Los motivos por los que las empresas nos llaman suelen ser bastante parecidos."
            />
            <ul className="problems">
              {problems.map((p, i) => (
                <li className={`problem ${i === problems.length - 1 ? 'problem-full' : ''}`.trim()} key={p.title}>
                  <span className="problem-dot">
                    <Icon name="arrow" size={16} />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Cómo trabajamos ---------- */}
        <section className="band" id="proceso">
          <div className="container">
            <SectionHead
              eyebrow="Cómo trabajamos"
              title="Un proceso simple y claro, de principio a fin."
              intro="Sin vueltas ni tecnicismos. Vas a saber en todo momento qué estamos haciendo y por qué."
            />
            <ol className="steps">
              {process.map((step, i) => (
                <li className="step" key={step.title}>
                  <span className="step-num">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Proyectos ---------- */}
        <section className="band band-soft" id="proyectos">
          <div className="container">
            <SectionHead
              eyebrow="Proyectos"
              title="Software que ya está operando."
              intro="Algunos de los sistemas que construimos y hoy se usan todos los días."
            />
            <div className="projects">
              {projects.map((project: Project) => (
                <article className="project" key={project.name}>
                  <div className="project-media">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  </div>
                  <div className="project-body">
                    <p className="project-label">{project.label}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Nosotros ---------- */}
        <section className="band band-dark" id="nosotros">
          <div className="container nosotros-grid">
            <div>
              <p className="eyebrow eyebrow-on-dark">Sobre Azul Code Lab</p>
              <h2>Un estudio cercano, con criterio técnico.</h2>
              <p className="nosotros-body">
                Somos un estudio de desarrollo de software de Azul, Buenos Aires. Trabajamos de cerca con cada cliente y
                nos gusta la tecnología bien usada: la que mejora procesos, ahorra tiempo y se nota en el día a día.
              </p>
            </div>
            <div className="values">
              {values.map((v) => (
                <div className="value" key={v.title}>
                  <span className="value-ico">
                    <Icon name={v.icon} size={20} />
                  </span>
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA final ---------- */}
        <section className="cta" id="contacto">
          <div className="container">
            <div className="cta-box">
              <h2>¿Tenés un proceso que te está costando tiempo?</h2>
              <p>Contanos qué necesitás y vemos juntos cómo resolverlo. Una primera charla no cuesta nada.</p>
              <div className="cta-actions">
                <WhatsAppButton variant="light" label="Escribinos por WhatsApp" />
              </div>
              <p className="cta-mail">
                O escribinos a{' '}
                <a href={contact.emailHref}>{contact.email}</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Brand />
            <p className="footer-text">
              Software claro, útil y hecho para operar sin fricción. {contact.location}.
            </p>
          </div>
          <div className="footer-links">
            <p className="footer-links-title">Contacto</p>
            {socialLinks.map((link: SocialLink) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="container footer-copy">© {new Date().getFullYear()} Azul Code Lab · Estudio de Software</div>
      </footer>
    </div>
  );
};

export default App;
