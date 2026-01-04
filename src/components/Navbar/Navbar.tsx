import { useState, useEffect } from "react";
import "./Navbar.css";
import PhoneIcon from "/src/assets/icons/phone.svg";
import { contactInfo } from "../../constants/";

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
                <a href="#">HOME</a>
                <a>ABOUT US</a>
                <a>SERVICES</a>
                <a>CONTACT</a>
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
                <a href="#">HOME</a>
                <a href="#about-section">ABOUT US</a>
                <a>SERVICES</a>
                <a>CONTACT</a>
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