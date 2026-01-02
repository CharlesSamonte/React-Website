import "./Hero.css";
const Hero = () => {
    return (
        <section id="hero-section">
            <div className="hero-text">
                <h2 className="welcome">Welcome to</h2>
                <h1 className="name">AutoCradle</h1>
                <h1 className="sub-name gold-text">AutoShop in Saskatoon</h1>
                <p className="sub-caption">Automotive Shop and Car Detailing</p>
            </div>
        </section>
    );
}

export default Hero;