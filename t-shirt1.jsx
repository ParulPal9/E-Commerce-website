import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">🛒 E-Commerce Store</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cart} />
      </div>
    </div>
  );
};

export default App;