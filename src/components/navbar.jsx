import { useEffect, useRef } from "react";
import '../components/styles/navbar.css'
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
        //     };
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
                <a href="#">Home</a>
                <a href="#shop">Shop</a>
                <a href="#about">About Us</a>
            </div>
            <div className="navbar-nav-nav">
                <div className="navbar-search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <input type="text" className="input-search" placeholder="Search" />
                </div>
                <a href="#cart">
                    <i className="fa-solid fa-bag-shopping" />
                </a>
                <a href="#profile">
                    <i className="fa-solid fa-user" />
                </a>
            </div>
        </nav>
     {/* Header */}
        <header ref={headerRef}>
            <div className="header-description">
                <h1 className="header-title">Make Your Home a Greener Place</h1>
                <p className="header-paragraph">
                    Discover the beauty and benefits of ornamental plants to brighten your
                    space and refresh your home.
                </p>
                <button className="cta-button">
                    Shop now <i className="fa-solid fa-arrow-up" />
                </button>
            </div>
        </header>
    </>
    );
}



export default Navbar;

