import './Login.css';
import Button from '../../components/Button/Button';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesión</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
        
        <div className="input-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" placeholder="Nombre de usuario" />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" />
        </div>
        
        <Button variant="primary" onClick={null}>
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
}
