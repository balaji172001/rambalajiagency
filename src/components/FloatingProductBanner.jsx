import { Link } from "react-router-dom";

export default function FloatingProductBanner() {
  return (
    <div className="floating-product-banner">
      <Link to="/products" className="floating-btn">
        🛍️ View Product List
      </Link>
    </div>
  );
}
