import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import InfoField from '../../components/InfoField/InfoField';
import './UserProfile.css';

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="user-profile-page">
      <Card title="Mi perfil">
        {user ? (
          <div className="profile-info">
            {user.image && (
              <img src={user.image} alt="Perfil" className="profile-image" />
            )}
            <div className="profile-details" style={{ gap: '0px' }}>
              <InfoField label="Nombre" value={`${user.firstName} ${user.lastName}`} readOnly />
              <InfoField label="Email" value={user.email || 'No especificado'} readOnly />
              <InfoField label="Teléfono" value={user.phone || 'No especificado'} readOnly />
              <InfoField label="Edad" value={user.age ? `${user.age} años` : 'No especificada'} readOnly />
            </div>
          </div>
        ) : (
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Cargando datos del perfil...</p>
        )}
      </Card>
    </div>
  );
}
