import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import TextInput from '../../components/TextInput/TextInput';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import InfoField from '../../components/InfoField/InfoField';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  const fetchEmployees = () => {
    setLoadingEmployees(true);
    fetch(`https://dummyjson.com/users?limit=0`)
      .then(res => res.json())
      .then(data => {
        if (data && data.users) {
          const storedUser = localStorage.getItem('user');
          const currentUser = storedUser ? JSON.parse(storedUser) : null;
          const others = currentUser
            ? data.users.filter(u => u.id !== currentUser.id)
            : data.users;

          setEmployees(others);
        }
      })
      .catch(err => console.error('Error fetching users:', err))
      .finally(() => setLoadingEmployees(false));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    fetchEmployees();
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

        <Card title="Listado de empleados" className="dashboard-card">
          <Table
            columns={[
              {
                header: 'Avatar',
                render: (emp) => <img src={emp.image} alt={emp.firstName} className="table-avatar" />
              },
              {
                header: 'Nombre',
                render: (emp) => `${emp.firstName} ${emp.lastName}`
              },
              {
                header: 'Email',
                accessor: 'email'
              }
            ]}
            data={employees}
            pageSize={5}
            loading={loadingEmployees}
          />
        </Card>
      </div>
    </div>
  );
}
