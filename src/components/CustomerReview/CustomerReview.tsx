import "./CustomerReview.css";
import { useState, useEffect } from "react";
import { testimonials } from "../../constants";

const CustomerReview = () => {
    const [index, setIndex] = useState(0);
    const { name, text, image, rating } = testimonials[index];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonial-section">
            <hr></hr>
            <h2 className="testimonial-title gold-text">WHAT OUR CUSTOMERS SAY</h2>
            <div className="testimonial-content">
                <div className="testimonial-text">
                    <span className="quote-mark">“</span>
                    <p className="testimonial-quote">{text}</p>
                    <div className="testimonial-footer">
                        <span className="author">{name}</span>
                        <div className="stars">{"★".repeat(rating)}</div>
                    </div>
                </div>
                <div className="testimonial-image">
                    <img src={image} alt="Customer vehicle" />
                </div>
            </div>
            <div className="testimonial-dots">
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