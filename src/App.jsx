import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Tab2 from './pages/Tab2/Tab2'
import Tab3 from './pages/Tab3/Tab3'
import Dashboard from './pages/Dashboard/Dashboard'
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
