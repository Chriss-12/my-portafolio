import MyPortafolioController from "../../controllers/my_portafolio_controller";
import "../../styles/main_page.css";
function ExtraInformationOrganisms() {
  const myPortafolioController = MyPortafolioController();
  const CV_URL =
  "https://script.google.com/macros/s/AKfycbx-RR36HC8AsgZEbw3oVyqqFMiJfFDsTnyMlvxe4BRplWFzdxRPh5dLfPGyhh7hTRw/exec";

  const { handleClickSurvey, navigate } = myPortafolioController;
  return (
    <div className="extra_information__container">
      <div className="extra_information">
        <div className="about_me">
          <p className="text--name">Cristhian Rodrigo</p>
          <p className="text--name">Alave Sanjines</p>
          <p className="text--important">Ingeniero de Sistemas</p>
          <p className="text--extra">Full Stack Developer | Data Scientist | Pentesting</p>
          <p className="text--extra">React | Flutter | PenPot | UI/UX</p>
        </div>
        <img
          className="picture__profile"
          src="images/profile.png"
          alt="Foto de Perfil"
        />
      </div>
      <div className="extra_information__work">
        <p className="main__title">Work</p>
        <p className="extra_information__statement">
          Soy freelancer y desarrollador Full Stack. Soy de Bolivia y
          disfruto aprendiendo nuevas habilidades y perfeccionando las que ya tengo.
          Estoy planificando y resolviendo diversos problemas de la vida real mediante la programación y diferentes herramientas que he estado aprendiendo a lo largo de mi camino.
          Actualmente, vivo de mi propio producto, que es muy importante para mí.
        </p>
      </div>
      <button
        type="button"
        className="my__portafolio"
        onClick={() => navigate("/works")}
      >
        Ver Portafolio
      </button>

      {/* Bio */}
      <div className="extra_information__work">
        <p className="main__title">Bio</p>
        <div className="biograpy">
          <p>2001</p>
          <p>Nacido en La Paz, Bolivia</p>

          <p>2022 - 2024</p>
          <p>Auxiliar de Docencia</p>

          <p>2024</p>
          <p>Finalizacion de la carrera de Informatica</p>

          <p>2025</p>
          <p>Trabajando como Freelancer</p>
        </div>

        {/* Para el PDF */}
        <div className="extra_information">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="my__portafolio"
          >
            <i className="fa fa-file-pdf-o"></i>
            <span>Ver CV</span>
          </a>
        </div>
      </div>

      {/* I love */}
      <div className="extra_information__work">
        <p className="main__title">I &#9825;</p>
        <p className="extra_information__statement">
          Programacion Web y mobil, Machine Learning, Pentesting.
        </p>
      </div>

      {/* On the Web */}
      <div className="extra_information__work">
        <p className="main__title">On the Web</p>
        <div className="love__things">
          <a className="love__things__item" href="https://github.com/Chriss-12">
            <i className="fa fa-github"></i>
            <p>@Chriss-12</p>
          </a>
          <a
            className="love__things__item"
            href="https://www.linkedin.com/in/cristhian-rodrigo-alave-sanjines-60ab61286/"
          >
            <i className="fa fa-linkedin"></i>
            <p>@cristhian-sanjines</p>
          </a>
          <a
            className="love__things__item"
            href="https://www.facebook.com/profile.php?id=61579359024717"
          >
            <i className="fa fa-facebook"></i>
            <p>@chriss_sanjines</p>
          </a>
          <a
            className="love__things__item"
            href="https://www.instagram.com/cristhian.alave/"
          >
            <i className="fa fa-instagram"></i>
            <p>@cristhian.alave</p>
          </a>
        </div>
        <div className="youtube__container">
          <iframe
            className="youtube__videos"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HeDDjL4HjsY?si=p9Nlj8QalSvf2NU0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>Teaching some Topics</p>
          <p>Growing up in YouTube</p>
        </div>
      </div>

      {/* Message */}
      <div className="extra_information__work">
        <p className="main__title">Send me a message</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          Send me any message if you want to tell me something. I will be happy
          to read you.
          <br />
          <div className="extra_information__work__button">
            <button
              type="button"
              className="my__portafolio"
              onClick={handleClickSurvey}
            >
              <i className="fa fa-envelope-o"></i>
              <p>Send Message To Email</p>
            </button>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer>
        <p className="footer-text">
          © 2026 Chriss Sanjines. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
export default ExtraInformationOrganisms;
