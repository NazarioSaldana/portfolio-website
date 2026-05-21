import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects' 
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App