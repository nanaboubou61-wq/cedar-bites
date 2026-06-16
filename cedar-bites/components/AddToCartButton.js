"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function AddToCartButton({ productId, quantity = 1, label = "Add to cart", className = "btn-primary" }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart(productId, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button onClick={handleClick} className={className} type="button">
      {added ? "Added ✓" : label}
    </button>
  );
}
