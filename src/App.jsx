import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Tab1 from './pages/Tab1/Tab1'
import Tab2 from './pages/Tab2/Tab2'
import Tab3 from './pages/Tab3/Tab3'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <Router>
      <NavBar />

      <div className="tab-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
