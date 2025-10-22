import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./assets/components/pages/main_page";
import { MyPortafolio } from "./assets/components/pages/my_portafolio";

function App() {
  return (
    <Router basename="/my-portafolio">
      {/* Enlaces de navegación */}
      {/* <nav>
        <Link to="/my-portafolio">Ir a mi portafolio</Link>
      </nav> */}

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/works/" element={<MyPortafolio />} />
      </Routes>
    </Router>
  );
}

export default App;
