import { calculateTotal, formatAED, FREE_DELIVERY_THRESHOLD } from "@/lib/pricing";

export default function CartSummary({ items, showCheckoutButton = false }) {
  const { subtotal, delivery, total, freeDelivery } = calculateTotal(items);
  const remaining = Math.max(FREE_DELIVERY_THRESHOLD - subtotal, 0);

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold text-bark">Order summary</h2>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-bark/65">Subtotal</span>
          <span className="font-semibold">{formatAED(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-bark/65">Dubai delivery</span>
          <span className="font-semibold">{delivery === 0 ? "Free" : formatAED(delivery)}</span>
        </div>
        <div className="border-t border-bark/10 pt-3 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{formatAED(total)}</span>
        </div>
      </div>
      <div className="mt-5 rounded-2xl bg-cedar/10 p-4 text-sm leading-6 text-cedar">
        {freeDelivery
          ? "You have free Dubai delivery."
          : `Add ${formatAED(remaining)} more to unlock free Dubai delivery.`}
      </div>
      {showCheckoutButton && subtotal > 0 ? (
        <a href="/checkout" className="btn-primary mt-5 w-full">
          Continue to checkout
        </a>
      ) : null}
    </div>
  );
}
