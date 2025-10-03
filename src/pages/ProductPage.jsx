import React, { useState , useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // important to import the plugin

import { FaShoppingCart } from "react-icons/fa"; // Cart icon

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
  { sno: 69, name: '2¼ fancy', unit: "3 pieces", price: 800 },
  { sno: 70, name: '4" Fancy', unit: "1 Box", price: 800 },
  { sno: 71, name: '3½ Fancy double ball', unit: "1 Box", price: 1100 },
  { sno: 72, name: "25 Shot Crackling Long", unit: "1 Box", price: 450 },
  { sno: 73, name: "25 Shot", unit: "1 Box", price: 900 },
  { sno: 74, name: "30 Shot", unit: "1 Box", price: 1000 },
  { sno: 75, name: "60 Shot", unit: "1 Box", price: 2000 },
  { sno: 76, name: "120 Shot", unit: "1 Box", price: 4000 },
  { sno: 77, name: "Gun", unit: "1 Box", price: 450 },
  { sno: 78, name: "Tim Tim", unit: "1 Box", price: 550 },
  { sno: 79, name: "Cricket ball & bat", unit: "1 Piece", price: 600 }
];

const shopNumber = "916374549935";

const ProductPage = () => {
  const [cart, setCart] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [animations, setAnimations] = useState([]); // flying dots

const handleIncrease = (product, e) => {
  setCart((prev) => ({
    ...prev,
    [product.sno]: (prev[product.sno] || 0) + 1,
  }));

  // create flying animation
  const rect = e.target.getBoundingClientRect();
  const cartBtn = document.querySelector(".floating-cart-btn").getBoundingClientRect();

  const flyId = Date.now();
  setAnimations((prev) => [
    ...prev,
    {
      id: flyId,
      x: rect.left,
      y: rect.top,
      targetX: cartBtn.left + cartBtn.width / 2,
      targetY: cartBtn.top + cartBtn.height / 2,
    },
  ]);

  setTimeout(() => {
    setAnimations((prev) => prev.filter((a) => a.id !== flyId));
  }, 1000);
};

  const handleDecrease = (product) => {
    setCart((prev) => {
      if (!prev[product.sno]) return prev;
      const updated = { ...prev, [product.sno]: prev[product.sno] - 1 };
      if (updated[product.sno] <= 0) delete updated[product.sno];
      return updated;
    });
  };

  const handleReset = () => setCart({});
const totalOriginalPrice = products.reduce(
  (sum, item) => sum + (cart[item.sno] || 0) * item.price,
  0
);

const total = products.reduce(
  (sum, item) => sum + (cart[item.sno] || 0) * Math.floor(item.price / 2),
  0
);


  const selectedProducts = products.filter((p) => cart[p.sno]);
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

const confirmOrder = () => {
  if (selectedProducts.length === 0) return;

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.setTextColor(0, 102, 204);
  doc.text("Order Details (Offer Applied)", 10, 15);

  const tableData = selectedProducts.map((p, i) => {
    const qty = cart[p.sno] || 1;
    const originalTotal = p.price * qty;
    const offerPrice = Math.floor(p.price / 2);
    const offerTotal = offerPrice * qty;
    return [i + 1, `${p.name} (${p.unit})`, qty, `Rs.${originalTotal}`, `Rs.${offerTotal}`];
  });

  let totalOfferAmount = selectedProducts.reduce((sum, p) => {
    const qty = cart[p.sno] || 1;
    const offerPrice = Math.floor(p.price / 2);
    return sum + offerPrice * qty;
  }, 0);

  autoTable(doc, {
    head: [["S.No", "Item Name", "Qty", "Price", "Offer Price"]],
    body: tableData,
    startY: 25,
  });

  doc.setFontSize(13);
  doc.text(`Total Amount (After Offer): Rs.${totalOfferAmount}`, 10, doc.lastAutoTable.finalY + 10);

  // ✅ Instead of doc.save(), use Blob for mobile compatibility
  const pdfBlob = doc.output("blob");
  const url = URL.createObjectURL(pdfBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "OrderDetails.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // WhatsApp sharing
  let message = "Order Details (Offer Applied):\n\n";
  selectedProducts.forEach((p, i) => {
    const qty = cart[p.sno] || 1;
    const originalTotal = p.price * qty;
    const offerPrice = Math.floor(p.price / 2);
    const offerTotal = offerPrice * qty;
    message += `${i + 1}. ${p.name} (${p.unit}) x ${qty} = ₹${originalTotal} → Offer ₹${offerTotal}\n`;
  });
  message += `\nTotal Amount (After Offer): ₹${totalOfferAmount}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${shopNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");

  setShowPopup(false);
};


useEffect(() => {
  if (showPopup) {
    document.body.style.overflow = "hidden"; // disable scroll
  } else {
    document.body.style.overflow = ""; // enable scroll back
  }
}, [showPopup]);



  return (
    <div className="container">
      <h2 className="product-head">Product Price List</h2>

      {/* Product Table */}
      <div className="table-responsive">
        <table className="product-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name of Product</th>
              <th>Unit</th>
              <th>Price (₹)</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.sno}>
                <td>{p.sno}</td>
                <td>{p.name}</td>
                <td>{p.unit}</td>
                <td>
                    <span className="original-price">₹{p.price}</span> /{" "}
                    <span className="offer-price">₹{Math.floor(p.price / 2)}</span>
                </td>
                <td>
                  <div className="qty-box">
                    <button
                      className="qty-btn"
                      onClick={() => handleDecrease(p)}
                      disabled={!cart[p.sno]}
                    >
                      -
                    </button>
                    <span className="count-badge">{cart[p.sno] || 0}</span>
                    <button
                      className="qty-btn"
                      onClick={(e) => handleIncrease(p, e)}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

      {/* Flying Animation Dots */}
     {animations.map((a) => (
        <div
            key={a.id}
            className="flying-item"
            style={{
            left: a.x,
            top: a.y,
            transform: `translate(${a.targetX - a.x}px, ${a.targetY - a.y}px)`,
            }}
        />
    ))}

      {/* Floating Cart Button */}
      <button className="floating-cart-btn" onClick={() => setShowPopup(true)} >
        <FaShoppingCart size={22} />
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3  style={{ display: selectedProducts.length === 0 ? "none" : "block" }}>Confirm Your Order</h3>
            {selectedProducts.length ? (
              <table className="preview-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProducts.map((p) => (
                    <tr key={p.sno}>
                      <td>{p.name}</td>
                      <td>{p.unit}</td>
                      <td>{cart[p.sno]}</td>
                      <td>₹{Math.floor(p.price / 2)}</td>
                        <td>₹{Math.floor(p.price / 2) * cart[p.sno]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{height:"100px", textAlign:"center", padding:"20px 0 0"}}>No products selected</p>
            )}
            <div className="price-summary" style={{ display: selectedProducts.length === 0 ? "none" : "block" }}>
                <p><span>Total Amount:</span><span>₹{totalOriginalPrice}</span></p>
                                <p><span>Payable Amount:</span><span>₹{totalOriginalPrice / 2}</span></p>

                <p><span>Discounted Amount:</span><span>₹{totalOriginalPrice / 2}</span></p>
            </div>
            <div className="popup-actions">
              <button className="cancel-btn" onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button className= {`confirm-btn ${selectedProducts.length === 0 ? "disable-cls" : ""}`}  onClick={confirmOrder}>
                Confirm Order & Send WhatsApp
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
