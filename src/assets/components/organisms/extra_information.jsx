import { QuickLinks } from "../../../data/links";
import MyPortafolioController from "../../controllers/my_portafolio_controller";
import { useLanguage } from "../../controllers/useLanguage";
import "../../styles/main_page.css";

function ExtraInformationOrganisms() {
  const { handleClickSurvey, navigate } = MyPortafolioController();
  const { copy } = useLanguage();
  const { home } = copy;

  return (
    <div className="extra_information__container">
      <div className="extra_information__content">
        <section id="about" className="extra_information__work" aria-labelledby="about-title">
          <h2 className="main__title" id="about-title">{home.aboutTitle}</h2>
          <p className="extra_information__statement">{home.about}</p>
        </section>

        <section id="bio" className="extra_information__work" aria-labelledby="bio-title">
          <h2 className="main__title" id="bio-title">{home.bioTitle}</h2>
          <ol className="biography">
            {home.bio.map(({ date, title, detail }) => {
              const [role, place] = title.split(" · ");

              return (
                <li key={date + title}>
                  <span className="biography__date">{date}</span>
                  <div className="biography__entry">
                    <h3>{role}{place && <span className="biography__place">{place}</span>}</h3>
                    <p>{detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="bio-actions">
            <button type="button" className="my__portafolio" onClick={() => navigate("/works")}>
              <i className="fa fa-briefcase" aria-hidden="true" /><span>{home.portfolio}</span>
            </button>
            <a href={QuickLinks.drive.cv} target="_blank" rel="noopener noreferrer" className="my__portafolio">
              <i className="fa fa-file-pdf-o" aria-hidden="true" /><span>{home.cv}</span>
            </a>
          </div>
        </section>

        <section id="interests" className="extra_information__work" aria-labelledby="interests-title">
          <h2 className="main__title" id="interests-title">{home.interestsTitle}</h2>
          <p className="extra_information__statement">{home.interests}</p>
        </section>

        <section id="web" className="extra_information__work" aria-labelledby="web-title">
          <h2 className="main__title" id="web-title">{home.webTitle}</h2>
          <div className="love__things">
            <a className="love__things__item" href="https://github.com/Chriss-12" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true" /><span>GitHub · @Chriss-12</span>
            </a>
            <a className="love__things__item" href="https://www.linkedin.com/in/cristhian-rodrigo-alave-sanjines-60ab61286/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true" /><span>LinkedIn · Cristhian Alave</span>
            </a>
            <a className="love__things__item" href="https://www.facebook.com/profile.php?id=61579359024717" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true" /><span>Facebook · Chriss Sanjines</span>
            </a>
            <a className="love__things__item" href="https://www.instagram.com/cristhian.alave/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true" /><span>Instagram · @cristhian.alave</span>
            </a>
          </div>
          <div className="youtube__container">
            <iframe className="youtube__videos" src="https://www.youtube.com/embed/HeDDjL4HjsY?si=p9Nlj8QalSvf2NU0" title="YouTube video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <p>{home.video}</p>
          </div>
        </section>

        <section id="contact" className="extra_information__work" aria-labelledby="contact-title">
          <h2 className="main__title" id="contact-title">{home.contactTitle}</h2>
          <p className="extra_information__statement">{home.contact}</p>
          <div className="extra_information__work__button">
            <button type="button" className="my__portafolio" onClick={handleClickSurvey}>
              <i className="fa fa-envelope-o" aria-hidden="true" /><span>{home.email}</span>
            </button>
          </div>
        </section>

        <footer><p className="footer-text">© 2026 Chriss Sanjines. {home.rights}</p></footer>
      </div>
    </div>
  );
}

export default ExtraInformationOrganisms;
