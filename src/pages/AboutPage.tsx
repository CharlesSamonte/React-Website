import "./AboutPage.css";
import { useNavigate } from "react-router-dom";
import useInViewAnimation from "../hooks/useInViewAnimation";

const AboutPage = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section ref={ref} className="about-page">
      {/* HERO */}
      <div className={`about-hero animate fade-up ${isVisible && "visible"}`}>
        <h1 className={`animate fade-up ${isVisible && "visible"}`}>About AutoCradle</h1>
        <p className={`subtitle delay-animate delay-1 fade-up ${isVisible && "visible"}`}>Built for the road. Trusted in Saskatoon.</p>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <div className={`about-block delay-animate delay-3 fade-up ${isVisible && "visible"}`}>
          <h2>Who We Are</h2>
          <p>
            AutoCradle Auto Shop was founded with a simple mission: to deliver
            reliable, high-quality automotive services for vehicles that work
            hard and go further. Based in Saskatoon, we specialize in
            professional auto repair, 4x4 upgrades, and custom fabrication for
            drivers who demand durability, performance, and craftsmanship they
            can trust.
          </p>
        </div>

        <div className={`about-block delay-animate delay-4 fade-up ${isVisible && "visible"}`}>
          <h2>Experience You Can Count On</h2>
          <p>
            Our team brings hands-on experience across automotive repair,
            suspension systems, armor installations, and off-road
            modifications. We understand the unique challenges posed by
            Saskatchewan roads, weather, and terrain — and we build solutions
            designed to withstand them.
          </p>
        </div>

        <div className={`about-block animate fade-up ${isVisible && "visible"}`}>
          <h2>More Than a Shop</h2>
          <p>
            AutoCradle is proud to be a locally owned and operated shop serving
            the Saskatoon community. Our customers are tradespeople, families,
            and outdoor enthusiasts who rely on their vehicles every day. We
            focus on honest communication, transparent recommendations, and
            workmanship we stand behind.
          </p>
        </div>

          <div className={`about-cta animate fade-up ${isVisible && "visible"}`}>
            <h3>Let’s Build Something Reliable</h3>
            <p>
              Whether you need professional repairs or a custom build, AutoCradle
              Auto Shop is ready to help.
            </p>
            <button className="gold-btn"
              onClick={() => navigate("/contactus")}>
              Contact Us
            </button>
          </div>
        </div>
    </section>
  );
};

export default AboutPage;
