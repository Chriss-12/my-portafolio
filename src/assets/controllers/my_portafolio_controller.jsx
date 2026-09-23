import { useNavigate } from "react-router-dom";
import { useLanguage } from "./useLanguage";

function MyPortafolioController() {
  /* To show portafolio part */
  const navigate = useNavigate();
  const { language } = useLanguage();

  /* To send an email */
  const email = "chrisstercero@gmail.com";
  const subject = language === "es" ? "Hola, Cristhian" : "Hello, Cristhian";
  const body = language === "es" ? "Quisiera conversar sobre..." : "I'd like to talk about...";

  const handleClickSurvey = () => {
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(body);

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      window.location.href = `mailto:${email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subjectEncoded}&body=${bodyEncoded}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return {
    handleClickSurvey,
    navigate,
  };
}

export default MyPortafolioController;
