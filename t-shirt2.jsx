import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 699 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Headphones", price: 99 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-3 mb-2 shadow-sm flex justify-between"
        >
          <span>{product.name} - ₹{product.price}</span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;