import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Logo" />
        <a href="#logo">All Green Valley</a>
      </div>

      <div className="navbar-nav">
        <Link to="/">Beranda</Link>
        <Link to="/shop">Tanaman</Link>
        <Link to="/about">Tentang Kami</Link>
      </div>

      <div className="navbar-nav-nav">
        <div className="navbar-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <a href="#cart">
          <i className="fa-solid fa-bag-shopping"></i>
        </a>
        <a href="#profile">
          <i className="fa-solid fa-user"></i>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
