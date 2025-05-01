import Navbar from 'react-bootstrap/Navbar'
import './App.css'
import AppRoutes from './Routes.tsx'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3 px-3">
        <Link to="/" className="navbar-brand fw-bold text-muted text-decoration-none">
          Duck
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Item>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AppRoutes />
    </div>
  )
}
export default App
