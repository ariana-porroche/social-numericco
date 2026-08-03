import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import TextInput from '../../components/TextInput/TextInput';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-grid">
        <Card title="Perfil del usuario" className="dashboard-card">
          {user ? (
            <div className="profile-info">
              {user.image && (
                <img src={user.image} alt="Perfil" className="profile-image" />
              )}
              <div className="profile-details" style={{ gap: '0px' }}>
                <TextInput label="Nombre" value={`${user.firstName} ${user.lastName}`} readOnly />
                <TextInput label="Email" value={user.email || 'No especificado'} readOnly />
                <TextInput label="Teléfono" value={user.phone || 'No especificado'} readOnly />
                <TextInput label="Edad" value={user.age ? `${user.age} años` : 'No especificada'} readOnly />
              </div>
            </div>
          ) : (
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Cargando datos del perfil...</p>
          )}
        </Card>

        <Card title="Listado de empleados" className="dashboard-card">
        </Card>
      </div>
    </div>
  );
}
