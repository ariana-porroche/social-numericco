import { useState, useEffect } from 'react';
import { UserPlus, UserMinus } from 'lucide-react';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import './EmployeesList.css';

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);

  const [friends, setFriends] = useState(() => {
    try {
      const stored = localStorage.getItem('friends');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  useEffect(() => {
    setLoadingEmployees(true);

    fetch('https://dummyjson.com/users?limit=0')
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
  }, []);

  const toggleFriend = (id) => {
    setFriends(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const columns = [
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
    },
    {
      header: 'Acciones',
      render: (emp) => {
        const isFriend = friends.includes(emp.id);
        return (
          <Button
            variant={isFriend ? "danger" : "secondary"}
            icon={isFriend ? <UserMinus size={18} /> : <UserPlus size={18} />}
            onClick={() => toggleFriend(emp.id)}
          >
            {isFriend ? 'Eliminar amigo' : 'Añadir amigo'}
          </Button>
        );
      }
    }
  ];

  return (
    <div className="employees-list-page">
      <Card title="Listado de empleados" className="employees-list-card">
        <Table
          columns={columns}
          data={employees}
          pageSize={5}
          loading={loadingEmployees}
        />
      </Card>
    </div>
  );
}
