import './Buttom.css'
import {useNavigate } from 'react-router-dom';
function Button({
  children,
  type = 'button',
}) {
  const  navigate = useNavigate();
  const handleGaleria = () => {
    navigate("/galeria"); 
  };
  return (
    <button
      type={type}
      className='btn'
      onClick={handleGaleria}
    >
      {children}
    </button>
  );
};

export default Button;