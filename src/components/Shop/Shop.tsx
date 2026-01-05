import "./Shop.css";

const Shop = () => {
    return (
        <section id="shop-section">
            <div className="section-title-container">
                <h1>Shop Inventory</h1>
                <a href="" id="" className="a-link">View Inventory</a>
            </div>
            <p>
                Select items available in-store. Visit us to place an order.
            </p>
            <div className="shop-grid">
                <div className="shop-card">
                    <img src="/src/assets/shop/lift-kit.jpg" alt="4x4 Lift Kit" />
                    <div className="shop-info">
                        <h3>4x4 Lift Kits</h3>
                        <p>Suspension upgrades built for performance and durability.</p>
                        <span className="in-store-only">Available In-Store</span>
                    </div>
                </div>

                <div className="shop-card">
                    <img src="/src/assets/shop/offroad-bumper.jpg" alt="Off-Road Bumper" />
                    <div className="shop-info">
                        <h3>Off-Road Bumpers</h3>
                        <p>Heavy-duty protection engineered for extreme terrain.</p>
                        <span className="in-store-only">Available In-Store</span>
                    </div>
                </div>

                <div className="shop-card">
                    <img src="/src/assets/shop/wheels.jpg" alt="Wheels and Tires" />
                    <div className="shop-info">
                        <h3>Wheels & Tires</h3>
                        <p>Premium wheels and tires tailored for your build.</p>
                        <span className="in-store-only">Available In-Store</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop;