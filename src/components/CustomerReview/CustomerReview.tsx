import "./CustomerReview.css";
const CustomerReview = () => {
    return (
        <section className="testimonial-section">
            <h2 className="testimonial-title">WHAT OUR CUSTOMERS SAY</h2>
            <div className="testimonial-content">
                <div className="testimonial-text">
                    <blockquote>
                        <span className="quote-mark">“</span>
                        <p>
                            My partner and I are very happy with the service we received! We
                            originally had our tires and rims installed at another new shop in
                            town, but they messed up the wiring, the alignment wasn’t done
                            properly, and the tires were rubbing.
                            <br /><br />
                            I brought our truck to this shop, explained the issue, and they
                            immediately knew how to fix it. Thanks to William who helped us
                            from start to finish — he and the team made sure we were completely
                            satisfied with the results, and we truly are! My partner is thrilled,
                            too. Everyone there was friendly and professional, and the lady at
                            the front desk was super nice.
                            <br /><br />
                            If you're looking for quality service and people who actually care,
                            I highly recommend this shop!
                        </p>

                        <div className="testimonial-footer">
                            <span className="author">Glorize A.</span>
                            <div className="stars">★★★★★</div>
                        </div>
                    </blockquote>
                </div>

                <div className="testimonial-image">
                    <img src={"../assets/review-truck.jpg"} alt="Customer vehicle" />
                </div>

            </div>

            <div className="testimonial-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>

    )
}

export default CustomerReview;