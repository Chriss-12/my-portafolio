import { useNavigate } from "react-router-dom";

function NavBarController() {
  const navigateNavBar = useNavigate();

  return { navigateNavBar };
}

export default NavBarController;
