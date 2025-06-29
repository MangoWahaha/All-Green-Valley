import { useEffect, useRef } from "react";
import '../components/styles/navbar.css'
import { Link } from 'react-router-dom';
import Header from "./home/header";
//navbar & header combined

const Navbar = () => {
    const navbarRef = useRef(null);
    const headerRef = useRef(null);
    //null is for make it empty first
    useEffect (() => {
        const navbar = navbarRef.current;
        const SectionOne = headerRef.current;

        const SectionOneOptions = {
            rootMargin: "-200px 0px 0px 0px"
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
        //c
    }, SectionOneOptions);
        if (SectionOne) {
            SectionOneObserver.observe(SectionOne);
        }
        // return () => {
        //     if (SectionOne) {
        //         SectionOneObserver.unobserve(SectionOne);
        //     }
        // };
    }, []);

    return (
        <>
        {/* Navbar */}
        <nav className="navbar" ref={navbarRef}>
            <div className="navbar-brand">
                <img src="/src/assets/Logo.png" alt="Logo" />
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
                <Link to="/login">
                    <i className="fa-solid fa-user" />
                </Link>
            </div>
        </nav>
     {/* Header */}
      <Header ref={headerRef}/>
    </>
    );
}



export default Navbar;

