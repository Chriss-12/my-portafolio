import "../../styles/work_molecule.css";
import { useLanguage } from "../../controllers/useLanguage";
import { projectTranslations } from "../../../data/translations";
import ProjectGallery from "./project_gallery";
import { useTheme } from "../../controllers/useTheme";
import { Link } from "react-router-dom";

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
  gallery,
  highlights,
  previewType,
  caseStudyPath,
  index,
}) {
  const { language, copy } = useLanguage();
  const translated = language === "en" ? projectTranslations[title] : null;
  const year = date.slice(0, 4);
  const technologiesList = translated?.technologies ?? technologies;
  const details = highlights ? (translated?.highlights ?? highlights) : [];
  const { swLight, palette } = useTheme();

  const backgroundColorVar =
    palette === "lantern"
      ? swLight ? "#ccebd1" : "#225b33"
      : swLight ? "#b6d1ec" : "#213A62";

  return (
    <article className={`project-card project-card--${accent}`}>
      <header className="project-card__header">
        <span className="project-card__number" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h3>{title}</h3>
        </div>
        <time dateTime={date}>{date.length === 4 ? year : yearFormatter.format(new Date(`${date}T00:00:00`))}</time>
      </header>

      <div className={`project-card__preview${gallery ? " project-card__preview--gallery" : ""}${previewType === "analysis" ? " project-card__preview--analysis" : ""}`}>
        {gallery ? (
          <ProjectGallery slides={gallery} labels={translated?.gallery} copy={copy.works} />
        ) : previewType === "analysis" ? (
          <div className="project-analysis-preview" aria-label={copy.works.analysisPreviewLabel}>
            <span className="project-analysis-preview__eyebrow">SmartLife / {copy.works.academicCase}</span>
            <ol>
              {copy.works.analysisStages.map((stage) => <li key={stage}>{stage}</li>)}
            </ol>
            <span className="project-analysis-preview__footnote">{copy.works.analysisFootnote}</span>
          </div>
        ) : (
          <img src={image} alt="" loading="lazy" decoding="async" />
        )}
      </div>

      <p className="project-card__description">{translated?.description ?? description}</p>

      <footer className="project-card__footer">
        <ul className="project-card__details">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>

        <ul className="project-card__details">
          {technologiesList.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {caseStudyPath ? (
            <Link className="project-card__study-link" to={caseStudyPath}>
              {copy.works.exploreAnalysis}
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </Link>
          ) : null}
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: backgroundColorVar, padding: "5px 10px", borderRadius: "10px", width: "70%", textAlign: "center", display: "block" }}>
              {caseStudyPath ? copy.works.repository : copy.works.view}
              <i className="fa fa-arrow-right" aria-hidden="true" style={{ marginLeft: "5px" }}></i>
            </a>
          ) : null}
        </div>
      </footer>
    </article>
  );
}

export default WorkMolecule;
