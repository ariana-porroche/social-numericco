import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import TextInput from '../../components/TextInput/TextInput';
import './Dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let currentUser = null;
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      setUser(currentUser);
    }

    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        if (data && data.users) {
          const others = currentUser
            ? data.users.filter(u => u.id !== currentUser.id)
            : data.users;
          setEmployees(others);
        }
      })
      .catch(err => console.error('Error fetching users:', err))
      .finally(() => setLoadingEmployees(false));
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
          {loadingEmployees ? (
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', marginTop: '20px' }}>Cargando empleados...</p>
          ) : (
            <div className="table-container">
              <table className="employees-table">
                <thead>
                  <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp.id}>
                      <td>
                        <img src={emp.image} alt={emp.firstName} className="table-avatar" />
                      </td>
                      <td>{emp.firstName} {emp.lastName}</td>
                      <td>{emp.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
