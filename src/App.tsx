import SpearMark from './components/SpearMark';
import { navLinks, projects, services } from './data/content';

const App = () => {
  const year = new Date().getFullYear();

  return (
    <div className="app">
      <header className="site-header">
        <a href="#inicio" className="brand">
          <span className="brand-icon" aria-hidden="true">
            ▲
          </span>
          <span>Azul Code Lab</span>
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
            <p className="eyebrow">Azul Code Lab</p>
            <h1>Construimos software que resuelve problemas reales</h1>
            <p className="hero-subtitle">
              Diseñamos y desarrollamos soluciones tecnológicas que funcionan en el mundo real.
              Sin humo. Sin vueltas.
            </p>
            <a className="btn btn-primary" href="#contacto">
              Hablemos
            </a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <SpearMark />
          </div>
        </section>

        <section className="section" id="que-hacemos">
          <h2>Qué hacemos</h2>
          <p>
            No vendemos software genérico. Analizamos el problema, diseñamos una solución clara y
            construimos herramientas que funcionen en la operación diaria.
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
            Desarrollamos soluciones con foco en ejecución, claridad técnica y utilidad real. Nos
            interesa que el software funcione donde importa: en el trabajo diario.
          </p>
        </section>

        <section className="section cta" id="contacto">
          <h2>¿Tenés un problema que nadie te está resolviendo?</h2>
          <a className="btn btn-primary" href="mailto:hola@azulcodelab.com">
            Contactar
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-brand">Azul Code Lab</p>
        <p>Software útil, claro y listo para operar.</p>
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
  );
};

export default App;
