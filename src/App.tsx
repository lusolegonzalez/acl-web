import SpearMark from './components/SpearMark';
import { navLinks, projects, services } from './data/content';

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
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
          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <section className="hero" id="inicio">
            <div className="hero-content">
              <p className="eyebrow">Ingeniería de producto para operación real</p>
              <h1>Software serio para equipos que no pueden perder tiempo</h1>
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

          <section className="section" id="que-hacemos">
            <h2>Qué hacemos</h2>
            <p>
              Transformamos necesidades de negocio en productos digitales utilizables. Cada etapa
              tiene un responsable, un criterio de calidad y una fecha de entrega.
            </p>
          </section>

          <section className="section" id="servicios">
            <h2>Servicios</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article className="card" key={service}>
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="proyectos">
            <h2>Proyectos destacados</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.name}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                  <a href="#" onClick={(event) => event.preventDefault()}>
                    {project.linkText}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="nosotros">
            <h2>Sobre la marca</h2>
            <p>
              Azul Code Lab combina visión técnica con disciplina de entrega. Entramos en proyectos
              donde hace falta criterio y ejecución: menos discurso, más software funcionando.
            </p>
          </section>

          <section className="section cta" id="contacto">
            <h2>¿Necesitás resolver algo crítico en semanas y no en meses?</h2>
            <p>
              Contanos el contexto y te proponemos un plan de trabajo realista, con alcance y
              prioridades definidas.
            </p>
            <a className="btn btn-primary" href="mailto:hola@azulcodelab.com">
              Escribir a hola@azulcodelab.com
            </a>
          </section>
        </main>

        <footer className="site-footer">
          <p className="footer-brand">AZUL CODE LAB</p>
          <p>Arquitectura clara, implementación prolija y foco total en impacto operativo.</p>
          <div className="footer-links">
            <a href="#" onClick={(event) => event.preventDefault()}>
              LinkedIn
            </a>
            <a href="mailto:hola@azulcodelab.com">Email</a>
            <a href="#" onClick={(event) => event.preventDefault()}>
              GitHub
            </a>
          </div>
          <p className="footer-copy">© {year} Azul Code Lab</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
