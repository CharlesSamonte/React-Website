import { useState, useEffect } from "react";
import { shopItems } from "../constants/shopItems";
import { useParams } from "react-router-dom";
import useInViewAnimation from "../hooks/useInViewAnimation";

const categories = [
    "All",
    "Suspension",
    "Armor",
    "Wheels & Tires",
    "Lighting",
    "Accessories",
];

type Product = {
    id: string;
    name: string;
    category: string;
    description: string;
    price?: string;
    available: boolean;
};

const ProductInfo = (selectedProduct: Product) => {
    return (
        <div className="product-detail">
            <h3>{selectedProduct.name}</h3>
            <p className="category">{selectedProduct.category}</p>
            <p className="description">{selectedProduct.description}</p>

            {selectedProduct.price && (
                <p className="price">{selectedProduct.price}</p>
            )}
            <div className="shop-card-content">
                {selectedProduct.available ? (
                    <span className="status available">Available In-Store</span>
                ) : (
                    <span className="status unavailable">Currently Unavailable</span>
                )}
            </div>
        </div>
    )
}

const ShopPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { ref, isVisible } = useInViewAnimation();

    const { productID } = useParams();
    useEffect(() => {
        if (!productID) return;

        const product = shopItems.find(
            item => item.id === productID
        );

        if (product) {
            setSelectedProduct(product);
        }
    }, [productID]);


    const filteredItems =
        activeCategory === "All"
            ? shopItems
            : shopItems.filter((item) => item.category === activeCategory);

    return (
        <section className={`shop-page animate fade-up ${isVisible && "visible"}`}>
            <header ref={ref} className="page-title">
                <h1>Shop Inventory</h1>
                <p>All items are available <span>in-store only</span>. Visit us for pricing and availability.</p>
            </header>

            <div className="shop-layout">
                {/* Sidebar */}
                <aside className={`shop-sidebar delay-animate fade-up ${isVisible && "visible"}`}>
                    <h2>Categories</h2>
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
                <div className="shop-main">
                    {/* HEADER ABOVE GRID */}
                    {
                        selectedProduct ?
                            <div className="shop-header">
                                <h2>
                                    <a onClick={() => setSelectedProduct(null)}>
                                        ◀ Back to products
                                    </a>
                                </h2>
                            </div>
                            :
                            <div className={`shop-header delay-animate slide-left ${isVisible && "visible"}`} >
                                <h2>Showing {activeCategory}</h2>
                            </div>
                    }
                    {/* PRODUCT GRID */}
                    <div className="shop-grid">
                        {
                            !selectedProduct &&
                            filteredItems.map((item, index) => {
                                const delay = 0.35 + Math.log(index + 1) * 0.20;
                                return (
                                    <div
                                        className={`delay-animate slide-left ${isVisible && "visible"}`}
                                        style={{ "--delay": `${delay}s` } as React.CSSProperties}
                                    >
                                        <div
                                            key={item.id}
                                            className={`shop-card card ${item.available ? "" : "unavailable"}`}
                                            onClick={() => setSelectedProduct(item)}
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
                                    </div>)
                            })
                        }
                    </div>
                    {selectedProduct && (
                        <div className="product-detail-container animate slide-left visible">
                            <ProductInfo {...selectedProduct}></ProductInfo>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShopPage;
