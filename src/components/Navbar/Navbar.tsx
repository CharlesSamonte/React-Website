import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import PhoneIcon from "/src/assets/icons/phone.svg";
import { navLinks, contactInfo } from "../../constants/";

function NavLinks() {
    const [isActive, setIsActive] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);


    const changeActiveNav = (activeIndex: number) => {
        setActiveIndex(activeIndex);
        setIsActive(activeIndex);
    }

    return (
        <>
            {
                navLinks.map((nav, index) => {
                    if (nav.type == "scroll") {
                        return <a key={index} href={nav.to}
                            className={`nav-link ${isActive == index ? "active" : ""}`}
                            onClick={() => { changeActiveNav(index) }}
                        >
                            {nav.label}
                        </a>
                    }
                    return <NavLink
                        key={index}
                        to={nav.to}
                        className={({ isActive }) =>
                            `nav-link ${isActive && activeIndex === null ? "active" : ""
                            }`}
                    >
                        {nav.label}
                    </NavLink>
                })
            }
        </>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav id="navbar" className={`${scrolled ? "shrink" : ""}`}>
            <img className="logo" src="/src/assets/logo.png" alt="Logo" />
            <div className="nav-links">
                <NavLinks />
            </div>
            <div className="call-to-action-container">
                <a href={`tel:${contactInfo.phone}`} aria-label="Call AutoCradle at 306 952 1981">
                    <p id="nav-phone">
                        <img src={PhoneIcon} alt="Phone Icon" className="icon" />
                        {contactInfo.phone}
                    </p>
                </a>
                <button className="nav-btn gold-btn">GET A QUOTE</button>
            </div>
            <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {
                    <NavLinks />
                }
                <a href={`tel:${contactInfo.phone}`} aria-label="Call AutoCradle at 306 952 1981">
                    <p id="nav-phone">
                        <img src={PhoneIcon} alt="Phone Icon" className="icon" />
                        {contactInfo.phone}
                    </p>
                </a>
                <button className="nav-btn gold-btn">GET A QUOTE</button>
            </div>
        </nav>
    );
}

export default Navbar;