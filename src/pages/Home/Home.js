import Button from "../../components/Buttom/Buttom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bem-vindo ao PetFinder</h2>
      <p>Conectamos você a pets incriveis que estão procurando um novo lar!</p>
      <Button>Explora Galeria</Button>

    </div>
  );
};

export default Home;