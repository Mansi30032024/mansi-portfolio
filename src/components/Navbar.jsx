import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Mansi 👩‍💻</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}