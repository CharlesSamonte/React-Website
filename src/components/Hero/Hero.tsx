import "./Hero.css";
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-text">
                <h2 className="welcome">Welcome to</h2>
                <h1 className="name">AutoCradle</h1>
                <h1 className="sub-name gold-text">Auto Shop in Saskatoon</h1>
                <p className="sub-caption">Automotive Shop and Car Detailing</p>
                <button className="hero-button" onClick={() => {
                    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth",  });
                }}>LEARN MORE</button>
            </div>
        </section>
    );
}

export default Hero;