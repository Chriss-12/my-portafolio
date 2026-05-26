import "../../styles/work_molecule.css";

const dateFormatter = new Intl.DateTimeFormat("es-BO", {
  month: "short",
  year: "numeric",
});

function WorkMolecule({
  url,
  title,
  category,
  date,
  description,
  technologies,
  icon,
  accent,
}) {
  return (
    <article className={`work-card work-card--${accent}`}>
      <div className="work-card__visual">
        <div className="work-card__icon">
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </div>
        <p className="work-card__category">{category}</p>
        <time dateTime={date}>{dateFormatter.format(new Date(`${date}T00:00:00`))}</time>
      </div>

      <div className="work-card__body">
        <h2>{title}</h2>
        <p className="work-card__description">{description}</p>
        <ul className="work-card__technologies" aria-label="Tecnologias">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      {url ? (
        <a className="work-card__action" href={url} target="_blank" rel="noopener noreferrer">
          Ver proyecto
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </a>
      ) : (
        <span className="work-card__action work-card__action--pending">Caso en preparacion</span>
      )}
    </article>
  );
}

export default WorkMolecule;
