import "./OurServices.css"
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { servicesHighlight } from "../../constants";
import { NavLink } from "react-router-dom";

const OurServices = () => {
    const { ref, isVisible } = useInViewAnimation();

    return (
        <section ref={ref} id="our-services-section"
            className={`fade-up animate ${isVisible ? 'visible' : ''}`}
        >
            <div className="section-title-container">
                <h1>Our Services</h1>
                <a href="/services" id="view-all-services" className="a-link">View All Services</a>
            </div>
            <div className="services-container">
                {
                    servicesHighlight.map((service, index) => {
                        const delay = 0.35 + Math.log(index + 1) * 0.20;

                        return (
                            <div key={index} className={`card-wrapper slide-left delay-animate ${isVisible ? "visible" : ""}`}
                                style={{ "--delay": `${delay}s` } as React.CSSProperties}
                            >
                                <NavLink  to="/services">
                                    <div className={`service-card card`}>
                                        <div className="img-container">
                                            <img loading="lazy" src={service.imgPath} alt="Auto Body Repair">
                                            </img>
                                        </div>
                                        <h3>{service.title}</h3>
                                        <p>{service.subTitle}</p>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </section >
    );
}

export default OurServices;