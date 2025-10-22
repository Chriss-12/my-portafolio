import MyPortafolioController from "../../controllers/my_portafolio_controller";
import "../../styles/main_page.css";
function ExtraInformationOrganisms() {
  const myPortafolioController = MyPortafolioController();

  const { handleClickSurvey, navigate } = myPortafolioController;
  return (
    <div className="extra_information__container">
      <div className="extra_information">
        <div className="about_me">
          <p className="text--name">Cristhian Sanjines</p>
          <p className="text--important">System Engineer</p>
          <p className="text--extra">Full Stack Developer</p>
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
          I'm a freelancer and a full stack developer. I'm from Bolivia, and I
          enjoy learning new skills and enhance others ones that I have. I am
          planning and solve some different trouble in reality life using code.
          Currently, I am living of my own product which is important to me.
        </p>
      </div>
      <button
        type="button"
        className="my__portafolio"
        onClick={() => navigate("/works")}
      >
        My Portafolio
      </button>

      {/* Bio */}
      <div className="extra_information__work">
        <p className="main__title">Bio</p>
        <div className="biograpy">
          <p>2001</p>
          <p>Born in La Paz, Bolivia</p>

          <p>2022 - 2024</p>
          <p>Profesors' Suport</p>

          <p>2024</p>
          <p>Finished my Career at UMSA</p>

          <p>2025</p>
          <p>Working as Freelancer</p>
        </div>
      </div>

      {/* I love */}
      <div className="extra_information__work">
        <p className="main__title">I &#9825;</p>
        <p className="extra_information__statement">
          Listening to Music, Playing, Photography, Deep Learning
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
          © 2025 Chriss Sanjines. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
export default ExtraInformationOrganisms;
