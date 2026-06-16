"use client";

import Link from "next/link";
import CartSummary from "@/components/CartSummary";
import { useCart } from "@/components/CartProvider";
import { formatAED } from "@/lib/pricing";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  return (
    <section className="container-page py-16">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Cart</p>
        <h1 className="mt-3 text-5xl font-black text-bark">Your order</h1>
      </div>

      {cart.length === 0 ? (
        <div className="card p-10 text-center">
          <h2 className="text-3xl font-black text-bark">Your cart is empty</h2>
          <p className="mt-4 text-bark/65">Add a jar or bundle to start your Cedar Bites order.</p>
          <Link href="/shop" className="btn-primary mt-8">Go to shop</Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="card flex flex-col gap-5 p-5 sm:flex-row sm:items-center">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-sand/40 p-3">
                  <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-bark">{item.name}</h2>
                  <p className="mt-1 text-sm text-bark/60">{formatAED(item.price)} each</p>
                  <button onClick={() => removeItem(item.id)} className="mt-3 text-sm font-semibold text-red-700" type="button">
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="rounded-full border border-bark/15 bg-white px-4 py-2" type="button">−</button>
                  <span className="min-w-8 text-center font-bold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="rounded-full border border-bark/15 bg-white px-4 py-2" type="button">+</button>
                </div>
                <p className="text-lg font-black text-bark">{formatAED(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
          <CartSummary items={cart} showCheckoutButton />
        </div>
      )}
    </section>
  );
}
