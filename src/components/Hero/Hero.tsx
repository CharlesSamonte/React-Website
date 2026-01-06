import "./Hero.css";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const Hero = () => {
    const { ref, isVisible } = useInViewAnimation();
    return (
        <section id="hero-section">
            <div ref={ref} className="hero-text">
                <h3 className={`welcome animate fade-up ${isVisible && "visible"}`}>Welcome to</h3>
                <h1 className={`name delay-animate fade-up ${isVisible && "visible"}`}
                    style={{ "--delay": "0.35s" } as React.CSSProperties}>AutoCradle</h1>
                <h2 className={`sub-name gold-text delay-animate fade-up ${isVisible && "visible"}`}
                    style={{ "--delay": "0.55s" } as React.CSSProperties}>Auto Shop in Saskatoon</h2>
                <p className={`sub-caption delay-animate fade-up ${isVisible && "visible"}`}
                    style={{ "--delay": "0.70s" } as React.CSSProperties}>Automotive Shop and Car Detailing</p>
                <button className={`hero-button delay-animate fade-up ${isVisible && "visible"}`}
                    style={{ "--delay": "0.85s" } as React.CSSProperties}
                    onClick={() => {
                        document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth", });
                    }}>LEARN MORE</button>
            </div>
        </section>
    );
}

export default Hero;