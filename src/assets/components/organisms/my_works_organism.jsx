import { PROJECTS } from "../../../data/projects";
import WorkMolecule from "../molecules/work_molecule";
import "../../styles/work_molecule.css";

function MyWorksOrganism() {
  return (
    <main className="works-page">
      <section className="works-intro-card" aria-labelledby="works-title">
        <p className="works-intro-card__eyebrow">Mi portafolio</p>
        <h1 id="works-title">Proyectos y experimentos</h1>
        <p>
          Algunas ideas que he convertido en productos, herramientas y prácticas
          mientras sigo aprendiendo.
        </p>
      </section>

      <section className="works-list" aria-label="Lista de proyectos">
        <div className="works-list__heading">
          <h2>Trabajo reciente</h2>
          <span>{PROJECTS.length} proyectos</span>
        </div>

        {PROJECTS.map((project, index) => (
          <WorkMolecule key={project.title} {...project} index={index + 1} />
        ))}
      </section>

      <p className="works-page__closing">Más proyectos muy pronto.</p>
    </main>
  );
}

export default MyWorksOrganism;
