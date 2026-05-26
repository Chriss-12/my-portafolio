import NavBarController from "../../controllers/nav_bar_controller";
import useMenuController from "../../controllers/sw_show_menu";
import { useTheme } from "../../controllers/useTheme";
import "../../styles/main_nav_bar.css";

const CV_URL =
  "https://script.google.com/macros/s/AKfycbx-RR36HC8AsgZEbw3oVyqqFMiJfFDsTnyMlvxe4BRplWFzdxRPh5dLfPGyhh7hTRw/exec";

const NAV_ITEMS = [
  { label: "Works", icon: "fa-briefcase", path: "/works", className: "nav-link--works" },
  { label: "CV", icon: "fa-file-pdf-o", href: CV_URL, className: "nav-link--cv" },
  {
    label: "GitHub",
    icon: "fa-github",
    href: "https://github.com/Chriss-12",
    className: "nav-link--github",
  },
  {
    label: "LinkedIn",
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/cristhian-rodrigo-alave-sanjines-60ab61286/",
    className: "nav-link--linkedin",
  },
  {
    label: "Facebook",
    icon: "fa-facebook",
    href: "https://www.facebook.com/profile.php?id=61579359024717",
    className: "nav-link--facebook",
  },
];

function NavLinks({ navigateNavBar }) {
  return NAV_ITEMS.map(({ label, icon, path, href, className }) => (
    <li key={label}>
      {path ? (
        <button
          type="button"
          className={`nav-link ${className}`}
          onClick={() => navigateNavBar(path)}
        >
          <i className={`fa ${icon}`} aria-hidden="true"></i>
          <span>{label}</span>
        </button>
      ) : (
        <a
          className={`nav-link ${className}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fa ${icon}`} aria-hidden="true"></i>
          <span>{label}</span>
        </a>
      )}
    </li>
  ));
}

function NavBar() {
  const { swLight, handleSwLight } = useTheme();
  const { open, toggleMenu } = useMenuController();
  const { navigateNavBar } = NavBarController();

  return (
    <nav className="main__nav-bar">
      <div
        className={`nav-bar__first-list ${
          swLight ? "nav-bar__first-list--light" : "nav-bar__first-list--dark"
        }`}
      >
        <button
          type="button"
          className="brand-pill"
          onClick={() => navigateNavBar("/")}
          aria-label="Ir al inicio"
        >
          <span className="brand-pill__mark">
            <i className="fa fa-code" aria-hidden="true"></i>
          </span>
          <span>Chriss Sanjines</span>
        </button>
        <ul className="nav-bar__first-list-item">
          <NavLinks navigateNavBar={navigateNavBar} />
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={handleSwLight}
            aria-label={swLight ? "Activar modo noche" : "Activar modo dia"}
          >
            <img
              src={!swLight ? "images/sun.svg" : "images/moon.svg"}
              alt=""
              className={!swLight ? "change-sw--light" : "change-sw--moon"}
            />
          </button>
          <button
            type="button"
            className="menu-bar"
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div
        className={`nav-bar__second-container ${
          swLight ? "nav-bar-white" : "nav-bar-black"
        }`}
        style={{ display: open ? "block" : "none" }}
      >
        <ul className="nav-bar__second-list">
          <NavLinks navigateNavBar={navigateNavBar} />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
