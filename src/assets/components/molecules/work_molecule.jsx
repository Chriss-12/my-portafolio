import "../../styles/work_molecule.css";
import { useLanguage } from "../../controllers/useLanguage";
import { projectTranslations } from "../../../data/translations";

const yearFormatter = new Intl.DateTimeFormat("es-BO", {
  year: "numeric",
});

function WorkMolecule({
  url,
  title,
  date,
  description,
  technologies,
  accent,
  image,
  index,
}) {
  const { language, copy } = useLanguage();
  const translated = language === "en" ? projectTranslations[title] : null;
  const projectDate = new Date(`${date}T00:00:00`);

  return (
    <article className={`project-card project-card--${accent}`}>
      <header className="project-card__header">
        <span className="project-card__number" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h3>{title}</h3>
        </div>
        <time dateTime={date}>{yearFormatter.format(projectDate)}</time>
      </header>

      <div className="project-card__preview">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>

      <p className="project-card__description">{translated?.description ?? description}</p>

      <footer className="project-card__footer">
        <ul aria-label={copy.works.technologies}>
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {copy.works.view}
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        ) : null}
      </footer>
    </article>
  );
}

export default WorkMolecule;
