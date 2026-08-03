import './Home.css';
import Button from '../../components/Button/Button';

export default function Home() {
  return (
    <div className="home-page">
      <h1 className='title'>Social Numéricco</h1>
      <p className='subtitle'>La red social de los empleados. Un espacio dedicado a la colaboración.</p>
      <Button
        variant="primary"
        onClick={null}
      >
        Iniciar sesión
      </Button>
    </div>
  );
}
