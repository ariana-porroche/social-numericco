import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from '../Button/Button';
import './NavBar.css';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <Link to="/" onClick={() => setIsMenuOpen(false)}>LOGO</Link>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-tabs">
          <NavLink to="/tab1" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
            Tab 1
          </NavLink>
          <NavLink to="/tab2" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
            Tab 2
          </NavLink>
          <NavLink to="/tab3" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsMenuOpen(false)}>
            Tab 3
          </NavLink>
        </div>
        <div className="navbar-actions">
          <Button variant="primary" onClick={() => setIsMenuOpen(false)}>CONTACT</Button>
        </div>
      </div>
    </nav>
  );
}
