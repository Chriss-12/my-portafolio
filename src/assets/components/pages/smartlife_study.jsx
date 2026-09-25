import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import NavBar from "../organisms/nav_bar";
import { useLanguage } from "../../controllers/useLanguage";
import { smartLifeStudy } from "../../../data/translations";
import { PROJECTS } from "../../../data/projects";
import "../../styles/smartlife_study.css";

const repositoryUrl = PROJECTS.find((project) => project.title === "SmartLife")?.url;

function SmartLifeStudy() {
  const { language } = useLanguage();
  const copy = smartLifeStudy[language];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <main className="smartlife-study">
        <Link to="/works" className="smartlife-study__back">
          <i className="fa fa-arrow-left" aria-hidden="true" /> {copy.back}
        </Link>

        <header className="smartlife-study__hero">
          <p className="smartlife-study__eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="smartlife-study__intro">{copy.intro}</p>
          <div className="smartlife-study__index" aria-hidden="true">
            <span>01 / 03</span>
            <span className="smartlife-study__index-line" />
            <span>SmartLife</span>
          </div>
        </header>

        <section className="smartlife-study__overview" aria-labelledby="study-overview">
          <h2 id="study-overview">{copy.overviewLabel}</h2>
          <p>{copy.overview}</p>
        </section>

        <section className="smartlife-study__stages" aria-labelledby="study-stages">
          <div className="smartlife-study__section-head">
            <h2 id="study-stages">{copy.stagesLabel}</h2>
            <span>01 — 03</span>
          </div>
          {copy.stages.map((stage) => (
            <article className="smartlife-study__stage" key={stage.number}>
              <span className="smartlife-study__stage-number" aria-hidden="true">{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </section>

        <section className="smartlife-study__method" aria-labelledby="study-method">
          <h2 id="study-method">{copy.methodLabel}</h2>
          <p>{copy.method}</p>
        </section>

        <section className="smartlife-study__source" aria-labelledby="study-source">
          <div>
            <h2 id="study-source">{copy.sourceLabel}</h2>
            <p>{copy.source}</p>
          </div>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            {copy.repository} <i className="fa fa-external-link" aria-hidden="true" />
          </a>
        </section>
      </main>
    </>
  );
}

export default SmartLifeStudy;
