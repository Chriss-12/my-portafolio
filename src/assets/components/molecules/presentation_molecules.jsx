import { useTheme } from "../../controllers/useTheme";
import "../../styles/general.css";
function PresentationMolecule() {
  const { swLight } = useTheme();
  return (
    <div className="presentation__container">
      <div className="presentation__container-person">
        <img src="images/person.png" alt="Imagen de persona" />
        <a href="https://es.vecteezy.com/png-gratis/3d">3d PNGs by Vecteezy</a>
      </div>
      <div
        className={`presentation-card ${
          swLight ? "presentation-card--light" : "presentation-card--dark"
        }`}
      >
        <p>Hola! Soy un desarrollador Indie web y de aplicaciones mobiles.</p>
        <br />
        <p>En un placer verte aqui!</p>
      </div>
    </div>
  );
}

export default PresentationMolecule;
