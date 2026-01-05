import "./Contact.css";
import { contactInfo } from "../constants/";
import fbIcon from "/src/assets/icons/facebook-logo.svg";
import igIcon from "/src/assets/icons/instagram-logo.svg";
import useInViewAnimation from "../hooks/useInViewAnimation";

const ContactPage = () => {
  const { ref, isVisible } = useInViewAnimation();
  return (
    <section id={`contact-page`} className={`animate fade-up ${isVisible && "visible"}`}>
      <header ref={ref} className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with AutoCradle Auto Shop for expert automotive services,
          upgrades, and repairs. Request a free quote today.
        </p>
      </header>
      <div className="contact-grid">
        <div className={`contact-info delay-animate fade-up ${isVisible && "visible"}`}>
          <h2>Get In Touch</h2>

          <p><strong>Phone:</strong> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p><strong>Address:</strong> {contactInfo.address}</p>
          <p><strong>Shop Hours:</strong> {contactInfo.shopHours}</p>

          <p className="text-sub">Follow us on social media:</p>
          <div className="socials-list">
            <a href={contactInfo.socials.fbLink}>
              <img loading="lazy" className="img-icon" src={fbIcon}></img>
            </a>
            <a href="">
              <img loading="lazy" className="img-icon" src={igIcon}></img>
            </a>
          </div>

          <div className="cta-box">
            <h3>Need a Quote?</h3>
            <p>
              <a href={`tel:${contactInfo.phone}`} >
                Call us
              </a> or send a message and we’ll get back to you quickly.
            </p>
            <button className="gold-btn">Get a Free Quote</button>

          </div>
        </div>

        {/* CONTACT FORM */}
        <form className={`contact-form delay-animate fade-up ${isVisible && "visible"}`}
        >
          <h2>Send Us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="How can we help you?" rows={5} required />

          <button type="submit" className="gold-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          title="AutoCradle Location"
          src="https://www.google.com/maps?q=119%20Jonathon%20Ave%20unit%20602%20Saskatoon%20SK&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
