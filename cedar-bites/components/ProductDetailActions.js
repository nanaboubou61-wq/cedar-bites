"use client";

import { useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import QuantitySelector from "@/components/QuantitySelector";

export default function ProductDetailActions({ productId }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <QuantitySelector value={quantity} onChange={setQuantity} />
      <AddToCartButton productId={productId} quantity={quantity} label="Add to cart" />
    </div>
  );
}
