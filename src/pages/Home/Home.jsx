import { useNavigate } from 'react-router-dom';
import './Home.css';
import Button from '../../components/Button/Button';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className='title'>Social Numéricco</h1>
      <p className='subtitle'>La red social de los empleados. Un espacio dedicado a la colaboración.</p>
      <Button
        variant="primary"
        onClick={() => navigate('/login')}
      >
        Iniciar sesión
      </Button>
    </div>
  );
}
