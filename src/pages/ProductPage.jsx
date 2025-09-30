import React, { useState } from "react";

const products = [
  { sno: 1, name: "2' Kuruvi", unit: "1 Pkt.", price: 24 },
  { sno: 2, name: "3' Lakshmi", unit: "1 Pkt.", price: 34 },
  { sno: 3, name: '4" Lakshmi', unit: "1 Pkt.", price: 50 },
  { sno: 4, name: '4" Deluxe Lakshmi', unit: "1 Pkt.", price: 60 },
  { sno: 5, name: '4" Gold Lakshmi', unit: "1 Pkt.", price: 70 },
  { sno: 6, name: "24 Deluxe", unit: "1 Pkt.", price: 120 },
  { sno: 7, name: "28 Deluxe", unit: "1 Pkt.", price: 150 },
  { sno: 8, name: "100 Wala", unit: "1 Pkt.", price: 100 },
  { sno: 9, name: "200 Wala", unit: "1 Pkt.", price: 200 },
  { sno: 10, name: "1000 Wala", unit: "1 Pkt.", price: 600 },
  { sno: 11, name: "2000 Wala", unit: "1 Pkt.", price: 1200 },
  { sno: 12, name: "5000 Wala", unit: "1 Pkt.", price: 3000 },
  { sno: 13, name: "1000 Wala Half", unit: "1 Box.", price: 400 },
  { sno: 14, name: "2000 Wala Half", unit: "1 Box.", price: 800 },
  { sno: 15, name: "5000 Wala Half", unit: "1 Box.", price: 2000 },
  { sno: 16, name: "Red Bijili", unit: "1 Pkt.", price: 90 },
  { sno: 17, name: "Stripped Bijili", unit: "1 Pkt.", price: 100 },
  { sno: 18, name: "Ground Chakkar Big", unit: "1 Box", price: 100 },
  { sno: 19, name: "Ground Chakkar Special", unit: "1 Box", price: 150 },
  { sno: 20, name: "Flower Pots Small", unit: "1 Box", price: 120 },
  { sno: 21, name: "Flower Pots Big", unit: "1 Box", price: 160 },
  { sno: 22, name: "Flower Pots Special", unit: "1 Box", price: 220 },
  { sno: 23, name: "Flower Pots Ashoka", unit: "1 Box", price: 300 },
  { sno: 24, name: "Flower Pots Deluxe", unit: "1 Box", price: 700 },
  { sno: 25, name: "Colour Koti", unit: "1 Box", price: 500 },
  { sno: 26, name: "Tri Colour", unit: "1 Box", price: 700 },
  { sno: 27, name: "Twinkling Star", unit: "1 Box", price: 60 },
  { sno: 28, name: "1 ½ Twinkling Star", unit: "1 Box", price: 60 },
  { sno: 29, name: "4 Twinkling Star", unit: "1 Box", price: 150 },
  { sno: 30, name: "Bullet Bomb", unit: "1 Box", price: 70 },
  { sno: 31, name: "Hydro Bomb", unit: "1 Box", price: 170 },
  { sno: 32, name: "King of King Bomb", unit: "1 Box", price: 220 },
  { sno: 33, name: "Classic Bomb", unit: "1 Box", price: 270 },
  { sno: 34, name: "Self Stick Big", unit: "1 Box", price: 300 },
  { sno: 35, name: "Self Stick Small", unit: "1 Box", price: 180 },
  { sno: 36, name: "Chit Put", unit: "1 Box", price: 70 },
  { sno: 37, name: "Butterfly", unit: "1 Box", price: 150 },
  { sno: 38, name: "7 Shot", unit: "1 Box", price: 250 },
  { sno: 39, name: "Silver Shower", unit: "1 Box", price: 260 },
  { sno: 40, name: "Gold Shower", unit: "1 Box", price: 260 },
  { sno: 41, name: "Baby Rocket", unit: "1 Box", price: 90 },
  { sno: 42, name: "Thor", unit: "1 Box", price: 420 },
  { sno: 43, name: "Icone", unit: "1 Box", price: 600 },
  { sno: 44, name: "Smoke", unit: "1 Box", price: 380 },
  { sno: 45, name: "Chocolate", unit: "1 Box", price: 150 },
  { sno: 46, name: "10 Cm Electric Sparkler", unit: "1 Box", price: 54 },
  { sno: 47, name: "10 Cm Glittering Sparklers", unit: "1 Box", price: 60 },
  { sno: 48, name: "10 Cm Green Sparklers", unit: "1 Box", price: 64 },
  { sno: 49, name: "10 Cm Red Sparklers", unit: "1 Box", price: 70 },
  { sno: 50, name: "12 Cm Electric Sparkler", unit: "1 Box", price: 85 },
  { sno: 51, name: "12 Cm Glittering Sparklers", unit: "1 Box", price: 95 },
  { sno: 52, name: "12 Cm Green Sparklers", unit: "1 Box", price: 104 },
  { sno: 53, name: "12 Cm Red Sparklers", unit: "1 Box", price: 116 },
  { sno: 54, name: "15 Cm Electric Sparkler", unit: "1 Box", price: 136 },
  { sno: 55, name: "15 Cm Glittering Sparklers", unit: "1 Box", price: 148 },
  { sno: 56, name: "15 Cm Green Sparklers", unit: "1 Box", price: 158 },
  { sno: 57, name: "15 Cm Red Sparklers", unit: "1 Box", price: 160 },
  { sno: 58, name: "30 Cm Electric Sparkler", unit: "1 Box", price: 136 },
  { sno: 59, name: "30 Cm Glittering Sparklers", unit: "1 Box", price: 148 },
  { sno: 60, name: "30 Cm Green Sparklers", unit: "1 Box", price: 158 },
  { sno: 61, name: "30 Cm Red Sparklers", unit: "1 Box", price: 160 },
  { sno: 62, name: '1" Chotta Fancy', unit: "1 Box", price: 120 },
  { sno: 63, name: "Hollycapter", unit: "1 Box", price: 260 },
  { sno: 64, name: "Photo Plus", unit: "1 Box", price: 150 },
  { sno: 65, name: "Spinner", unit: "1 Box", price: 260 },
  { sno: 66, name: "Peacock", unit: "1 Box", price: 550 },
  { sno: 67, name: '2" Fancy', unit: "1 Box", price: 300 },
  { sno: 68, name: '3" Fancy', unit: "1 Box", price: 600 },
  { sno: 69, name: '2½" Fancy', unit: "1 Box", price: 800 },
  { sno: 70, name: '4" Fancy', unit: "1 Box", price: 800 },
  { sno: 71, name: '3½" Fancy', unit: "1 Box", price: 1100 },
  { sno: 72, name: "25 Shot Crackling Long", unit: "1 Box", price: 450 },
  { sno: 73, name: "25 Shot", unit: "1 Box", price: 900 },
  { sno: 74, name: "30 Shot", unit: "1 Box", price: 1000 },
  { sno: 75, name: "60 Shot", unit: "1 Box", price: 2000 },
  { sno: 76, name: "120 Shot", unit: "1 Box", price: 4000 },
];

const ProductPage = () => {
  // cart: { [sno]: count }
  const [cart, setCart] = useState({});

  const handleAdd = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.sno]: (prev[product.sno] || 0) + 1,
    }));
  };

  const handleReset = () => {
    setCart({});
  };

  const total = products.reduce(
    (sum, item) => sum + (cart[item.sno] || 0) * item.price,
    0
  );

  return (
    <div className="container">
      <h2 className="product-head">Product Price List</h2>
      <div className="table-responsive">
        <table className="product-table">
            <thead>
            <tr>
                <th>S.No.</th>
                <th>Name of the Product</th>
                <th>Unit</th>
                <th>Price (₹)</th>
                <th>Add</th>
                <th>Count</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, idx) => (
                <tr key={idx}>
                <td>{product.sno}</td>
                <td>{product.name}</td>
                <td>{product.unit}</td>
                <td>{product.price}</td>
                <td>
                    <button
                    className={`add-btn ${cart[product.sno] ? "added" : ""}`}
                    onClick={() => handleAdd(product)}
                    title="Add to total"
                    >
                    {cart[product.sno] ? "✓" : "+"}
                    </button>
                </td>
                <td>
                    {cart[product.sno] ? (
                    <span className="count-badge">{cart[product.sno]}</span>
                    ) : (
                    "-"
                    )}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
      <div className="amount-rest-box">
        <div className="total-amount-box">
            <span className="total-label">Total Amount:</span>
            <span className="total-value">₹{total}</span>
        </div>
            <button className="reset-btn" onClick={handleReset}>
            Reset
            </button>
        </div>
    </div>
  );
};

export default ProductPage;