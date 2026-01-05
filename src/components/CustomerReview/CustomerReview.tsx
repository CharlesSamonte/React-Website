import "./CustomerReview.css";
import { useState, useEffect } from "react";
import { testimonials } from "../../constants";
import useInViewAnimation from "../../hooks/useInViewAnimation";

const CustomerReview = () => {
    const { ref, isVisible } = useInViewAnimation();
    const [index, setIndex] = useState(0);
    const { name, text, image, rating } = testimonials[index];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={ref} className={`testimonial-section `}>
            <hr className={`animate fade-up ${isVisible ? "visible" : ""}`}></hr>
            <h2 className={`testimonial-title gold-text animate fade-up ${isVisible ? "visible" : ""}`}>WHAT OUR CUSTOMERS SAY</h2>
            <div className={`testimonial-content animate fade-up ${isVisible ? "visible" : ""}`}>
                <div className="testimonial-text">
                    <span className="quote-mark">“</span>
                    <p className="testimonial-quote">{text}</p>
                    <div className="testimonial-footer">
                        <span className="author">{name}</span>
                        <div className="stars">{"★".repeat(rating)}</div>
                    </div>
                </div>
                <div className="testimonial-image">
                    <img  loading="lazy" src={image} alt="Customer vehicle" />
                </div>
            </div>
            <div className={`testimonial-dots animate fade-up ${isVisible ? "visible" : ""}`}>
                <hr></hr>
                {
                    testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === index ? "active" : ""}`}
                            onClick={() => setIndex(idx)}
                        ></span>
                    ))
                }
                <hr></hr>
            </div>
        </section>

    )
}

export default CustomerReview;