import "./OurServices.css"

const OurServices = () => {
    return (
        <section id="our-services-section">
            <div className="section-title-container">
                <h1>Our Services</h1>
                <a href="" id="view-all-services">View All Services</a>
            </div>
            <div className="services-container">
                <div className="service-card">
                    <div className="img-container">
                        <img src="/src/assets/services/auto-body-repair.png" alt="Auto Body Repair">
                        </img>
                    </div>
                    <h3>Automotive Services</h3>
                    <p>Expert collision repair and paint services to restore your vehicle to its original condition.</p>
                </div>
                <div className="service-card">
                    <div className="img-container">
                        <img src="/src/assets/services/engine-repair.png" alt="Engine Repair"></img>
                    </div>
                    <h3>Engine Repair</h3>
                    <p>Professional engine diagnostics and repair services to keep your vehicle running smoothly.</p>
                </div>
                <div className="service-card">
                    <div className="img-container">
                        <img src="/src/assets/services/4x4-setup.png" alt="4x4setup"></img>
                    </div>
                    <h3>4x4 Setup and Overloading Setup</h3>
                    <p>Tailored fabrication solutions to meet your unique vehicle needs and specifications.</p>
                </div>
            </div>
        </section>
    );
}

export default OurServices;