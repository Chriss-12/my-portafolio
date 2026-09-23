import { useState } from "react";
import { PROJECTS } from "../../../data/projects";
import WorkMolecule from "../molecules/work_molecule";
import { useLanguage } from "../../controllers/useLanguage";
import { projectTranslations } from "../../../data/translations";
import "../../styles/work_molecule.css";

const categories = [...new Set(PROJECTS.map((project) => project.category))];

const normalizeText = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");

function MyWorksOrganism() {
  const { language, copy } = useLanguage();
  const { works } = copy;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const query = normalizeText(search.trim());

  const visibleProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      !selectedCategory || project.category === selectedCategory;
    const translated = language === "en" ? projectTranslations[project.title] : null;
    const searchableText = normalizeText(
      [
        project.title,
        project.kind,
        project.category,
        project.description,
        translated?.kind ?? "",
        translated?.description ?? "",
        copy.categories[project.category] ?? "",
        ...project.technologies,
      ].join(" "),
    );

    return matchesCategory && (!query || searchableText.includes(query));
  }).sort((first, second) => second.date.localeCompare(first.date));

  return (
    <main className="works-page">
      <section className="works-intro-card" aria-labelledby="works-title">
        <p className="works-intro-card__eyebrow">{works.eyebrow}</p>
        <h1 id="works-title">{works.title}</h1>
        <p>{works.description}</p>
      </section>

      <section className="works-controls" aria-label={works.controls}>
        <label className="works-controls__field" htmlFor="works-search">
          <span>{works.search}</span>
          <div className="works-controls__input-wrap">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              id="works-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={works.searchPlaceholder}
            />
          </div>
        </label>

        <label className="works-controls__field" htmlFor="works-category">
          <span>{works.category}</span>
          <select
            id="works-category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="">{works.allCategories}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {copy.categories[category] ?? category}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="works-list" aria-label={works.list}>
        <div className="works-list__heading">
          <h2>{works.recent}</h2>
          <span role="status" aria-live="polite">
            {visibleProjects.length} {visibleProjects.length === 1 ? works.project : works.projects}
          </span>
        </div>

        {visibleProjects.length > 0 ? (
          visibleProjects.map((project, index) => (
            <WorkMolecule key={project.title} {...project} index={index + 1} />
          ))
        ) : (
          <div className="works-list__empty">
            <p>{works.empty}</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("");
              }}
            >
              {works.reset}
            </button>
          </div>
        )}
      </section>

      <p className="works-page__closing">{works.closing}</p>
    </main>
  );
}

export default MyWorksOrganism;
