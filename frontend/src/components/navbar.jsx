import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NavBar() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  };

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

        <Link to="#cart">
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>

        <i
          className="fa-solid fa-user"
          onClick={handleUserClick}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </nav>
  );
}

export default NavBar;
