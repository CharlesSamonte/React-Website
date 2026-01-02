import "./Navbar.css";

const Navbar = () => {
    return (
        <nav id="navbar">
            <img src="/src/assets/logo.png" alt="Logo" />
            <div className="nav-links">
                <a>HOME</a>
                <a>ABOUT US</a>
                <a>SERVICES</a>
                <a>CONTACT</a>
            </div>
            <div className="call-to-action-container">
                <p>(306) 952-1981</p>
            </div>
        </nav>
    );
}

export default Navbar;