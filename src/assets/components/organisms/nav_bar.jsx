import { useEffect, useRef } from "react";
import NavBarController from "../../controllers/nav_bar_controller";
import useMenuController from "../../controllers/sw_show_menu";
import { useTheme } from "../../controllers/useTheme";
import { QuickLinks } from "../../../data/links";
import { useLanguage } from "../../controllers/useLanguage";
import "../../styles/main_nav_bar.css";


const CV_URL = QuickLinks.drive.cv;

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

function NavLinks({ navigateNavBar, closeMenu, copy }) {
  return NAV_ITEMS.map(({ label, icon, path, href, className }) => (
    <li key={label}>
      {path ? (
        <button
          type="button"
          className={`nav-link ${className}`}
          onClick={() => {
            navigateNavBar(path);
            closeMenu();
          }}
        >
          <i className={`fa ${icon}`} aria-hidden="true" style={{ paddingTop: "5px" }}></i>
          <span>{label === "Works" ? copy.nav.works : label}</span>
        </button>
      ) : (
        <a
          className={`nav-link ${className}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          <i className={`fa ${icon}`} aria-hidden="true" style={{ paddingTop: "5px" }}></i>
          <span>{label}</span>
        </a>
      )}
    </li>
  ));
}

function NavBar() {
  const { swLight, handleSwLight } = useTheme();
  const { language, changeLanguage, copy } = useLanguage();
  const { open, toggleMenu, closeMenu } = useMenuController();
  const {
    open: floatingOpen,
    toggleMenu: toggleFloatingMenu,
    closeMenu: closeFloatingMenu,
  } = useMenuController();
  const { navigateNavBar } = NavBarController();
  const navRef = useRef(null);

  useEffect(() => {
    if (!open && !floatingOpen) {
      return undefined;
    }

    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        closeMenu();
        closeFloatingMenu();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [open, floatingOpen, closeMenu, closeFloatingMenu]);

  const closeMenus = () => {
    closeMenu();
    closeFloatingMenu();
  };

  const handleTopMenu = () => {
    closeFloatingMenu();
    toggleMenu();
  };

  const handleFloatingMenu = () => {
    closeMenu();
    toggleFloatingMenu();
  };

  return (
    <nav className="main__nav-bar" ref={navRef}>
      <div
        className={`nav-bar__first-list ${
          swLight ? "nav-bar__first-list--light" : "nav-bar__first-list--dark"
        }`}
      >
        <button
          type="button"
          className="brand-pill"
          onClick={() => {
            navigateNavBar("/");
            closeMenus();
          }}
          aria-label={copy.nav.home}
        >
          <span className="brand-pill__mark">
            <i className="fa fa-code" aria-hidden="true"></i>
          </span>
          <span className="brand-pill__name">Chriss <span className="brand-pill__surname">Sanjines</span></span>
        </button>
        <ul className="nav-bar__first-list-item">
          <NavLinks navigateNavBar={navigateNavBar} closeMenu={closeMenus} copy={copy} />
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={() => changeLanguage(language === "es" ? "en" : "es")}
            aria-label={copy.nav.languageSwitch}
            title={copy.nav.languageSwitch}
          >
            {language === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            className={`theme-toggle ${swLight ? "theme-toggle--light" : "theme-toggle--dark"}`}
            onClick={handleSwLight}
            aria-label={swLight ? copy.nav.dark : copy.nav.light}
          >
            <img
              src={swLight ? "/images/sun.svg" : "/images/moon.svg"}
              alt=""
            />
          </button>
          <button
            type="button"
            className="menu-bar"
            onClick={handleTopMenu}
            aria-label={copy.nav.openMenu}
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
          <NavLinks navigateNavBar={navigateNavBar} closeMenu={closeMenus} copy={copy} />
        </ul>
      </div>
      <div
        className={`floating-nav__menu ${swLight ? "nav-bar-white" : "nav-bar-black"} ${
          floatingOpen ? "floating-nav__menu--open" : ""
        }`}
      >
        <p className="floating-nav__label">{copy.nav.navigation}</p>
        <ul className="nav-bar__second-list">
          <NavLinks navigateNavBar={navigateNavBar} closeMenu={closeMenus} copy={copy} />
        </ul>
      </div>
      <button
        type="button"
        className={`floating-nav__button ${floatingOpen ? "floating-nav__button--open" : ""}`}
        onClick={handleFloatingMenu}
        aria-label={floatingOpen ? copy.nav.quickClose : copy.nav.quickOpen}
        aria-expanded={floatingOpen}
      >
        <i className={`fa ${floatingOpen ? "fa-times" : "fa-th-large"}`} aria-hidden="true"></i>
      </button>
    </nav>
  );
}

export default NavBar;
