
import "./Footer.css";
import { navLinks, contactInfo } from "../../constants";
import fbIcon from "/src/assets/icons/facebook-logo.svg";
import igIcon from "/src/assets/icons/instagram-logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-img-container">
                        <img src="/src/assets/logo.png" alt="AutoCradle Logo" />
                    </div>
                    <p>
                        Built for the road. Trusted in Saskatoon.
                        Professional auto body repair, 4x4 upgrades, and custom fabrication.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    {
                        navLinks.map((nav, index) => {
                            return <a key={index} href={nav.href}>{nav.label}</a>
                        })
                    }
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.address}</p>

                </div>
                <div className="footer-contact">
                    <h4>Follow Us</h4>
                    <div className="socials-list">
                        <a className="social-icon-container" href={contactInfo.socials.fbLink}>
                            <img src={fbIcon}></img>
                        </a>
                        <a href="social-icon-container">
                            <img src={igIcon}></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} AutoCradle Auto Shop. All Rights Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer;