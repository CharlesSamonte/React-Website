import "./Services.css";

const services = [
    {
        category: "Automotive Services",
        items: [
            { name: "Oil & Filter Change", price: "Starting at $89" },
            { name: "Brake Service & Repair", price: "Starting at $199" },
            { name: "Tire Change & Balancing", price: "Starting at $99" },
            { name: "Battery Replacement", price: "Starting at $149" },
            { name: "Engine Diagnostics", price: "Starting at $120" },
            { name: "Cooling System Service", price: "Starting at $189" },
        ],
    },
    {
        category: "4x4 & Off-Road",
        items: [
            { name: "Lift Kit Installation", price: "Starting at $1,200" },
            { name: "Suspension Upgrades", price: "Starting at $750" },
            { name: "Winch Installation", price: "Starting at $450" },
            { name: "Off-Road Bumpers", price: "Starting at $1,100" },
            { name: "Rock Sliders & Skid Plates", price: "Starting at $800" },
        ],
    },
    {
        category: "Custom Fabrication",
        items: [
            { name: "Custom Bumpers", price: "Quote Required" },
            { name: "Roof Racks", price: "Quote Required" },
            { name: "Exhaust Fabrication", price: "Starting at $600" },
            { name: "Welding & Metal Work", price: "Hourly Rates" },
        ],
    },
    {
        category: "Detailing & Protection",
        items: [
            { name: "Interior Detailing", price: "Starting at $180" },
            { name: "Exterior Detailing", price: "Starting at $220" },
            { name: "Ceramic Coating", price: "Starting at $899" },
            { name: "Rust Proofing", price: "Starting at $199" },
        ],
    },
];


const ServicesPage = () => {
    return (
        <section id="services-section" className="services-section">
            <header className="services-header">
                <h2>Our Services</h2>
                <p>
                    Professional automotive services built for reliability, performance,
                    and durability.
                </p>
            </header>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-category">
                        <h3>{service.category}</h3>
                        <ul>
                            <ul>
                                {service.items.map((item, idx) => (
                                    <li key={idx} className="service-item">
                                        <span className="service-name">{item.name}</span>
                                        <span className="service-price">{item.price}</span>
                                    </li>
                                ))}
                            </ul>

                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesPage;
