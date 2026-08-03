import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import './EmployeesList.css';

export default function EmployeesList() {
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
    fetchEmployees();
  }, []);

  return (
    <div className="employees-list-page">
      <Card title="Listado de empleados" className="employees-list-card">
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
  );
}
