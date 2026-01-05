import "./Shop.css";
import useInViewAnimation from "../../hooks/useInViewAnimation";
import { NavLink } from "react-router-dom";
import { shopItems } from "../../constants/shopItems";

const Shop = () => {
    const { ref, isVisible } = useInViewAnimation();
    const itemCount = 4;
    const featuredShopItems = [...shopItems].sort(() => 0.5 - Math.random()).slice(0, itemCount);

    return (
        <section ref={ref} id="shop-section">
            <div className={`animate fade-up ${isVisible ? "visible" : ""}`}>
                <div className="section-title-container">
                    <h1>Shop Inventory</h1>
                    <NavLink to="/shop" id="" className="a-link">View All Shop Items</NavLink>
                </div>
                <p>
                    Select items available in-store. Visit us to place an order.
                </p>
                <div className="shop-grid">
                    {
                        featuredShopItems.map((item, index) => {
                            const delay = 0.35 + Math.log(index + 1) * 0.20;
                            return (
                                <NavLink key={index} to={`/shop/${item.id}`}>
                                    <div className={`card-wrapper delay-animate slide-left ${isVisible ? "visible" : ""}`}
                                        style={{ "--delay": `${delay}s` } as React.CSSProperties}>
                                        <div className={`shop-card card`}>
                                            <div className="shop-info">
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Shop;