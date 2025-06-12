import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>MiniStore</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/cadastrar">Cadastrar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;