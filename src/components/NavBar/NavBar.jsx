import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Social Numéricco</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-tabs">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </NavLink>
        </div>
        <div className="navbar-actions">
          <Button variant="primary" onClick={handleLogout}>Cerrar sesión</Button>
        </div>
      </div>
    </nav>
  );
}
