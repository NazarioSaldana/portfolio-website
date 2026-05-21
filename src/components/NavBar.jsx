import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-pill">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        {/* This links to a file in your public folder */}
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default NavBar