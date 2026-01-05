import { useState } from "react";
import "./Shop.css";
import { Footer } from "../components";

const categories = [
    "All",
    "Suspension",
    "Armor",
    "Wheels & Tires",
    "Lighting",
    "Accessories",
];

const shopItems = [
    { id: 1, name: "4x4 Lift Kit", category: "Suspension", available: true },
    { id: 2, name: "Leveling Kit", category: "Suspension", available: true },
    { id: 3, name: "Heavy-Duty Shocks", category: "Suspension", available: false },

    { id: 4, name: "Steel Off-Road Bumper", category: "Armor", available: false },
    { id: 5, name: "Front Skid Plate", category: "Armor", available: true },
    { id: 6, name: "Rock Sliders", category: "Armor", available: true },

    { id: 7, name: "All-Terrain Tires", category: "Wheels & Tires", available: true },
    { id: 8, name: "Mud-Terrain Tires", category: "Wheels & Tires", available: false },
    { id: 9, name: "Beadlock Wheels", category: "Wheels & Tires", available: true },

    { id: 10, name: "LED Light Bar", category: "Lighting", available: true },
    { id: 11, name: "Pod Lights", category: "Lighting", available: true },
    { id: 12, name: "Auxiliary Fog Lights", category: "Lighting", available: false },

    { id: 13, name: "Roof Rack System", category: "Accessories", available: true },
    { id: 14, name: "Winch (12,000 lb)", category: "Accessories", available: false },
    { id: 15, name: "Recovery Gear Kit", category: "Accessories", available: true },
];


const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? shopItems
            : shopItems.filter((item) => item.category === activeCategory);

    return (
        <>
            <section className="shop-page">
                <header className="shop-header">
                    <h1>Shop Inventory</h1>
                    <p>All items are available <span>in-store only</span>. Visit us for pricing and availability.</p>
                </header>

                <div className="shop-layout">
                    {/* Sidebar */}
                    <aside className="shop-sidebar">
                        <h3>Categories</h3>
                        <ul>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={activeCategory === cat ? "active" : ""}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Inventory */}
                    <div className="shop-grid">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className={`shop-card ${item.available ? "" : "unavailable"}`}
                            >
                                <div className="shop-card-content">
                                    <h3>{item.name}</h3>
                                    <span className="category">{item.category}</span>

                                    {item.available ? (
                                        <span className="status available">Available In-Store</span>
                                    ) : (
                                        <span className="status unavailable">Currently Unavailable</span>
                                    )}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ShopPage;
