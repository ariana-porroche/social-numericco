import { useState } from 'react';
import './Login.css';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // API call
    console.log({ username, password });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesión</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>

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
      </div>
    </div>
  );
}
