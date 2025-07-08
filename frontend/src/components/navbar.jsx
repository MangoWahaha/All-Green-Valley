import { useEffect, useRef } from "react";
import '../components/styles/navbar.css'
import { Link, useLocation } from 'react-router-dom';
import Header from "./home/header"
import Headerpage from './shop/headershop';
import logo from '../assets/Logo.png';
//navbar & header combined

const Navbar = () => {
    const navbarRef = useRef(null);
    const headerRef = useRef(null);
    const locations = useLocation();
    //null is for make it empty first

    useEffect (() => {
        const navbar = navbarRef.current;
        const SectionOne = headerRef.current;   

        const SectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px",
            "/": "-200px 0px 0px 0px",
            "/shop": "-100px 0px 0px 0px",
        };

        const SectionOneObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry) => {
            console.log(entry.target);
            if(!entry.isIntersecting) {
                navbar.classList.add("navbar-scrolldown");
            } else {
                navbar.classList.remove("navbar-scrolldown");
            }
        });
        
    }, SectionOneOptions);
        if (SectionOne) {
            SectionOneObserver.observe(SectionOne);
        };

        return () => {
            if (SectionOne) {
                SectionOneObserver.unobserve(SectionOne);
            }
        };
    }, [locations.pathname]);

    const navbarsrunning = () => {
        if (locations.pathname === "/") {
            return <Header ref={headerRef}/>;
        } 
        if (locations.pathname === "/shop") {
            const colornavbar = document.querySelector('.navbar-scrolldown');
            if (colornavbar) {
                colornavbar.classList.add('whitening')
            }
            return <Headerpage ref={headerRef}/>;
        }
        return null;
    };


    return (
        <>
        {/* Navbar */}
        <nav className="navbar" ref={navbarRef}>
            <div className="navbar-brand">
                <img src={logo} alt="Logo" />
                <a href="#logo">All Green Valley</a>
            </div>
            <div className="navbar-nav">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className="navbar-nav-nav">
                <div className="navbar-search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <input type="text" className="input-search" placeholder="Search" />
                </div>
                <Link to="/cart">
                    <i className="fa-solid fa-bag-shopping" />
                </Link>
                <Link to="/auth">
                    <i className="fa-solid fa-user" />
                </Link>
            </div>
        </nav>
     {/* Header */}
      {navbarsrunning()}
    </>
    );
}

export default Navbar;
