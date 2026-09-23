import { useRef } from "react";
import { useTheme } from "../../controllers/useTheme";
import { useLanguage } from "../../controllers/useLanguage";
import "../../styles/general.css";
import "../../styles/main_page.css";
function PresentationMolecule() {
  const { swLight, palette, setPalette } = useTheme();
  const { copy } = useLanguage();
  const { home } = copy;
  const portraitRef = useRef(null);
  const paletteDialogRef = useRef(null);
  const tapsRef = useRef({ count: 0, lastTap: 0 });

  const handlePortraitClick = () => {
    const now = Date.now();
    const count = now - tapsRef.current.lastTap < 800 ? tapsRef.current.count + 1 : 1;
    tapsRef.current = { count, lastTap: now };

    if (count === 3) {
      tapsRef.current.count = 0;
      paletteDialogRef.current?.showModal();
    }
  };

  const choosePalette = (choice) => {
    setPalette(choice);
    paletteDialogRef.current?.close();
  };

  return (
    <div className="presentation__container">
      <div className="presentation__container-person">
        <img src="/images/person.png" alt={copy.presentation.illustration} />
        <a href="https://es.vecteezy.com/png-gratis/3d">3d PNGs by Vecteezy</a>
      </div>
      <section className="extra_information presentation__profile" aria-label="Cristhian Rodrigo Alave Sanjines">
        <div className="about_me">
          <p className="about_me__location">
            <i className="fa fa-map-marker" aria-hidden="true" /> {home.location}
          </p>
          <h1>Cristhian Rodrigo<br />Alave Sanjines</h1>
          <p className="text--important">{home.role}</p>
          <p className="text--extra">{home.focus}</p>
        </div>
        <button
          ref={portraitRef}
          type="button"
          className="picture__profile-trigger"
          onClick={handlePortraitClick}
          aria-label={copy.palette.open}
        >
          <img className="picture__profile" src="/images/profile.png" alt="" />
        </button>
      </section>
      <dialog
        ref={paletteDialogRef}
        className="palette-dialog"
        aria-labelledby="palette-dialog-title"
        onClose={() => portraitRef.current?.focus()}
      >
        <div className="palette-dialog__header">
          <div>
            <h2 id="palette-dialog-title">{copy.palette.title}</h2>
            <p className="palette-dialog__description">{copy.palette.description}</p>
          </div>
          <button
            type="button"
            className="palette-dialog__close"
            onClick={() => paletteDialogRef.current?.close()}
            aria-label={copy.palette.close}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
        <div className="palette-dialog__options">
          <button type="button" className="palette-dialog__option" aria-pressed={palette === "original"} onClick={() => choosePalette("original")}>
            <span className="palette-dialog__sample palette-dialog__sample--superman" aria-hidden="true">
              <span className="palette-dialog__sample-nav" />
              <span className="palette-dialog__sample-card">
                <span className="palette-dialog__sample-avatar" />
                <span className="palette-dialog__sample-lines"><i /><i /></span>
              </span>
              <span className="palette-dialog__sample-footer"><i /><i /></span>
            </span>
            <span className="palette-dialog__option-label">{copy.palette.original}<span className="palette-dialog__selection" aria-hidden="true" /></span>
          </button>
          <button type="button" className="palette-dialog__option" aria-pressed={palette === "lantern"} onClick={() => choosePalette("lantern")}>
            <span className="palette-dialog__sample palette-dialog__sample--lantern" aria-hidden="true">
              <span className="palette-dialog__sample-nav" />
              <span className="palette-dialog__sample-card">
                <span className="palette-dialog__sample-avatar" />
                <span className="palette-dialog__sample-lines"><i /><i /></span>
              </span>
              <span className="palette-dialog__sample-footer"><i /><i /></span>
            </span>
            <span className="palette-dialog__option-label">{copy.palette.lantern}<span className="palette-dialog__selection" aria-hidden="true" /></span>
          </button>
        </div>
        <p className="palette-dialog__note">{copy.palette.note}</p>
      </dialog>
      <section
        className={`presentation-card presentation-card--full ${
          swLight ? "presentation-card--light" : "presentation-card--dark"
        }`}
      >
        <p className="presentation-card__eyebrow">{copy.presentation.eyebrow}</p>
        <h2>{copy.presentation.headline}</h2>
        <p className="presentation-card__description">{copy.presentation.description}</p>
      </section>
    </div>
  );
}

export default PresentationMolecule;
