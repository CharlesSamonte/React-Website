import "./About.css";
import { aboutUsText } from "../../constants";

const About = () => {
    return (
        <section className="about-section" id="about-section">
            <div className="about-text-container">
                <h1>About Us</h1>
                <h2 className="sub-name gold-text">{aboutUsText.header}</h2>
                <p>{aboutUsText.text}</p>
                <button className="gold-btn">OUR SERVICES</button>
            </div>
            <div className="about-image-container">
                <img src="src/assets/about-image.jpg" alt="About AutoCradle" />
            </div>
        </section>
    )
}

export default About;