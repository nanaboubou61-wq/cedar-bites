"use client";

import CartSummary from "@/components/CartSummary";
import { useCart } from "@/components/CartProvider";
import { formatAED } from "@/lib/pricing";

export default function CheckoutPage() {
  const { cart } = useCart();

  return (
    <section className="container-page py-16">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-cedar">Checkout</p>
        <h1 className="mt-3 text-5xl font-black text-bark">Delivery details</h1>
        <p className="mt-4 text-bark/70">Online payment will be connected after your payment gateway is approved.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <form className="card p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-bark">Full name<input className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark">Phone number<input className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark">Email<input type="email" className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark">Emirate<select className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar"><option>Dubai</option><option>Abu Dhabi</option><option>Sharjah</option><option>Ajman</option><option>Other</option></select></label>
            <label className="grid gap-2 text-sm font-semibold text-bark sm:col-span-2">Delivery address<textarea rows="4" className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
            <label className="grid gap-2 text-sm font-semibold text-bark sm:col-span-2">Notes<textarea rows="3" className="rounded-2xl border border-bark/15 bg-white px-4 py-3 font-normal outline-none focus:border-cedar" /></label>
          </div>

          <div className="mt-8 rounded-[2rem] bg-sand/35 p-6">
            <h2 className="text-xl font-black text-bark">Payment placeholder</h2>
            <p className="mt-3 leading-7 text-bark/70">
              Online payment coming soon. Apple Pay, Samsung Pay, and card payments will be added after payment gateway approval.
            </p>
          </div>
        </form>

        <div className="space-y-5">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-bark">Items</h2>
            <div className="mt-4 space-y-3">
              {cart.length === 0 ? <p className="text-sm text-bark/60">Your cart is empty.</p> : cart.map((item) => (
                <div key={item.id} className="flex justify-between gap-4 text-sm">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-semibold">{formatAED(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>
          <CartSummary items={cart} />
        </div>
      </div>
    </section>
  );
}
