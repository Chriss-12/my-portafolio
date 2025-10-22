import NavBarController from "../../controllers/nav_bar_controller";
import useMenuController from "../../controllers/sw_show_menu";
import { useTheme } from "../../controllers/useTheme";
import "../../styles/main_nav_bar.css";
function NavBar() {
  const { swLight, handleSwLight } = useTheme();
  const { open, toggleMenu } = useMenuController();
  const { navigateNavBar } = NavBarController();
  return (
    <nav className="main__nav-bar" style={{ zIndex: "100" }}>
      <div
        className={`nav-bar__first-list ${
          swLight ? "nav-bar__first-list--light" : "nav-bar__first-list--dark"
        }`}
      >
        <p>
          <a
            style={{ fontWeight: "bold", color: "#3A5A40" }}
            onClick={() => navigateNavBar("/")}
          >
            Chriss Sanjines
          </a>
        </p>
        <ul className="nav-bar__first-list-item">
          <li>
            <a onClick={() => navigateNavBar("/works")}>Works</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gyyxnKaK_xnskFYLe1VKweJHxB3vp7e7/view"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li>
            <a href="https://github.com/Chriss-12" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristhian-rodrigo-alave-sanjines-60ab61286/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61579359024717"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
        <div className="nav-bar__first-list-item">
          <button type="button" onClick={handleSwLight}>
            <img
              src={!swLight ? "images/sun.svg" : "images/moon.svg"}
              alt="Light Mood"
              className={!swLight ? "change-sw--light" : "change-sw--moon"}
            />
          </button>
          <button className="menu-bar" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
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
          <li>
            <a onClick={() => navigateNavBar("/works")}>Works</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1gyyxnKaK_xnskFYLe1VKweJHxB3vp7e7/view"
              target="_blank"
            >
              CV
            </a>
          </li>
          <li>
            <a href="https://github.com/Chriss-12" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cristhian-rodrigo-alave-sanjines-60ab61286/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61579359024717"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
