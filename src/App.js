import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from "./pages/Home/Home"
import Galeria from './pages/Galeria/Galeria';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
      </Routes>
    </div>
  );
}

export default App;
