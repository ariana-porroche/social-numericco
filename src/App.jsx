import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'
import EmployeesList from './pages/EmployeesList/EmployeesList'
import Login from './pages/Login/Login'
import NavBar from './components/NavBar/NavBar'

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="tab-container">
        <Outlet />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Navigate to="/perfil" replace />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/empleados" element={<EmployeesList />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
