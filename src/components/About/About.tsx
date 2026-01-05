import "./About.css";
import { aboutUsText } from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const About = () => {
    const { ref, isVisible } = useInViewAnimation();

    return (
        <section
            ref={ref}
            className={`about-section`}
            id="about-section">
            <div className="about-text-container">
                <h1 className={`animate fade-up ${isVisible ? "visible" : ""}`}>About Us</h1>
                <h2 className={`sub-name gold-text animate fade-up ${isVisible ? "visible" : ""}`}>
                    {aboutUsText.header}
                </h2>
                <p className={`animate fade-up ${isVisible ? "visible" : ""}`}>
                    {aboutUsText.text}
                </p>
                <button className={`gold-btn animate fade-up ${isVisible ? "visible" : ""}`}>OUR SERVICES</button>
            </div>
            <div className={`about-image-container delay-animate delay-1 slide-left ${isVisible ? "visible" : ""}`}>
                <img src="src/assets/about-image.jpg" alt="About AutoCradle" />
            </div>
        </section >
    )
}

export default About;