import React from "react";

const ProductList = ({ products }) => (
  <div className="product-list">
    <h2>Products</h2>
    <ul>
      {products.map((product, idx) => (
        <li key={idx} className="product-item">
          <span className="product-name">{product.name}</span>
          <span className="product-price">₹{product.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;