import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar';

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    checkAuth();
    window.addEventListener('authChange', checkAuth);
    return () => window.removeEventListener('authChange', checkAuth);
  }, []);

  return (
    <>
      {isLoggedIn && <NavBar />}
      <div className="home-page">
        <h1 className='title'>Social Numéricco</h1>
        <p className='subtitle'>La red social de los empleados. Un espacio dedicado a la colaboración.</p>
        {!isLoggedIn ? (
          <Button
            variant="primary"
            onClick={() => navigate('/login')}
          >
            Iniciar sesión
          </Button>
        ) : (
          <div className='buttons-container'>
            <Button
              variant="primary"
              onClick={() => navigate('/perfil')}
            >
              Ver mi perfil
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/empleados')}
            >
              Ver todos los empleados
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
