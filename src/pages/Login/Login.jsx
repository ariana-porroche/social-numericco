import { useState } from 'react';
import './Login.css';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import Card from '../../components/Card/Card';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // API call
    console.log({ username, password });
  };

  return (
    <div className="login-page">
      <Card 
        title="Iniciar sesión" 
        subtitle="Ingresa tus credenciales para continuar"
        className="login-card"
      >
        <TextInput
          label="Nombre de usuario"
          id="username"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          label="Contraseña"
          type="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="primary" onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Card>
    </div>
  );
}
