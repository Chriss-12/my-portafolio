import "../../styles/work_molecule.css";

const yearFormatter = new Intl.DateTimeFormat("es-BO", {
  year: "numeric",
});

function WorkMolecule({
  url,
  title,
  kind,
  date,
  description,
  technologies,
  accent,
  index,
}) {
  const projectDate = new Date(`${date}T00:00:00`);

  return (
    <article className={`project-card project-card--${accent}`}>
      <header className="project-card__header">
        <span className="project-card__number" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <p className="project-card__kind">{kind}</p>
          <h3>{title}</h3>
        </div>
        <time dateTime={date}>{yearFormatter.format(projectDate)}</time>
      </header>

      <p className="project-card__description">{description}</p>

      <footer className="project-card__footer">
        <ul aria-label="Tecnologías utilizadas">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver proyecto
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        ) : (
          <span className="project-card__status">Caso en preparación</span>
        )}
      </footer>
    </article>
  );
}

export default WorkMolecule;
