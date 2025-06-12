import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>PetFinder</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/galeria">Galeria</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;