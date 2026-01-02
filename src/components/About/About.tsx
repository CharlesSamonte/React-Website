import "./About.css";
const About = () => {
    return (
        <section className="about-section">
            <div className="about-text-container">
                <h1>About Us</h1>
                <h2 className="sub-name gold-text">Built for the road. Trusted in Saskatoon.</h2>
                <p>AutoCradle Auto Shop specializes in professional auto body repair, 4x4 upgrades and custom fabrication for vehicles that work had and go further. Based in Saskatoon, we combine skilled craftsmanship, modern tools, and real off-road experience to deliver durable, high-quality results.</p>
            </div>
            <div className="about-image-container">
                <img src="src/assets/about-image.jpg" alt="About AutoCradle" />
            </div>
        </section>
    )
}

export default About;