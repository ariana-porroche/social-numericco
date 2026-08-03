import Card from '../../components/Card/Card';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-grid">
        <Card title="Perfil del usuario" className="dashboard-card">
          {/* <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Aquí se mostrarán los datos del perfil del usuario.</p> */}
        </Card>

        <Card title="Listado de empleados" className="dashboard-card">
          {/* <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Aquí se mostrará el listado completo de los empleados.</p> */}
        </Card>
      </div>
    </div>
  );
}
