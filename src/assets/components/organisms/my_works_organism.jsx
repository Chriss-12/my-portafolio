import { useMemo, useState } from "react";
import WorkMolecule from "../molecules/work_molecule";
import "../../styles/work_molecule.css";

const CATEGORIES = [
  { label: "Web", icon: "fa-globe" },
  { label: "Mobil", icon: "fa-mobile" },
  { label: "Machine Learning", icon: "fa-line-chart" },
  { label: "Pentesting", icon: "fa-shield" },
  { label: "Todas", icon: "fa-th-large" },
];

const PROJECTS = [
  {
    title: "Budget Flow",
    category: "Web",
    date: "2026-04-12",
    description: "Panel financiero para planificar presupuestos y visualizar objetivos.",
    technologies: ["React", "Laravel", "Charts"],
    icon: "fa-line-chart",
    accent: "emerald",
  },
  {
    title: "Portfolio Studio",
    category: "Web",
    date: "2025-09-18",
    description: "Experiencia web personal centrada en identidad visual y rendimiento.",
    technologies: ["React", "Vite", "CSS"],
    icon: "fa-code",
    accent: "teal",
  },
  {
    title: "Focus Mobile",
    category: "Mobil",
    date: "2026-01-08",
    description: "Aplicacion movil de rutinas con progreso y recordatorios diarios.",
    technologies: ["Flutter", "Firebase", "UI/UX"],
    icon: "fa-mobile",
    accent: "blue",
  },
  {
    title: "Vision Classifier",
    category: "Machine Learning",
    date: "2025-12-22",
    description: "Clasificador experimental con flujo de entrenamiento y metricas.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    icon: "fa-line-chart",
    accent: "lime",
  },
  {
    title: "Surface Audit",
    category: "Pentesting",
    date: "2025-07-14",
    description: "Reporte de exposicion y analisis defensivo para aplicaciones web.",
    technologies: ["OWASP", "Linux", "Burp Suite"],
    icon: "fa-shield",
    accent: "slate",
  },
];

function MyWorksOrganism() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("date-desc");

  const visibleProjects = useMemo(() => {
    if (!selectedCategory) {
      return [];
    }

    const projects = selectedCategory === "Todas"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

    return [...projects].sort((firstProject, secondProject) => {
      if (sortBy === "name") {
        return firstProject.title.localeCompare(secondProject.title, "es");
      }

      const direction = sortBy === "date-desc" ? -1 : 1;
      return firstProject.date.localeCompare(secondProject.date) * direction;
    });
  }, [selectedCategory, sortBy]);

  return (
    <main className="works-page">
      <section className="works-heading">
        <p className="works-heading__eyebrow">PORTAFOLIO / PROYECTOS</p>
        <h1>Trabajo que combina producto, datos y seguridad.</h1>
        <p>
          Elige una disciplina para explorar proyectos y ordenarlos por nombre o fecha.
        </p>
      </section>

      <section className="works-filters" aria-label="Filtros de proyectos">
        <div className="category-picker">
          {CATEGORIES.map(({ label, icon }) => (
            <button
              type="button"
              key={label}
              className={`category-pill ${
                selectedCategory === label ? "category-pill--active" : ""
              }`}
              onClick={() => setSelectedCategory(label)}
              aria-pressed={selectedCategory === label}
            >
              <i className={`fa ${icon}`} aria-hidden="true"></i>
              <span>{label}</span>
            </button>
          ))}
        </div>

        <label className="sort-control">
          <span>Ordenar por</span>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option value="date-desc">Fecha: recientes</option>
            <option value="date-asc">Fecha: antiguos</option>
            <option value="name">Nombre: A - Z</option>
          </select>
        </label>
      </section>

      {!selectedCategory ? (
        <section className="works-empty">
          <i className="fa fa-hand-pointer-o" aria-hidden="true"></i>
          <h2>Selecciona una categoria</h2>
          <p>Las tarjetas apareceran cuando elijas un tipo de proyecto.</p>
        </section>
      ) : (
        <section className="works-results" aria-live="polite">
          <div className="works-results__header">
            <p>
              <span>{visibleProjects.length}</span> proyectos en {selectedCategory}
            </p>
          </div>
          <div className="works-grid">
            {visibleProjects.map((project) => (
              <WorkMolecule key={project.title} {...project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default MyWorksOrganism;
