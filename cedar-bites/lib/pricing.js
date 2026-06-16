export const DELIVERY_FEE = 15;
export const FREE_DELIVERY_THRESHOLD = 120;

export function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateDelivery(subtotal) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}

export function calculateTotal(items) {
  const subtotal = calculateSubtotal(items);
  const delivery = calculateDelivery(subtotal);
  return {
    subtotal,
    delivery,
    total: subtotal + delivery,
    freeDelivery: subtotal >= FREE_DELIVERY_THRESHOLD,
  };
}

export function formatAED(amount) {
  return `AED ${Number(amount).toFixed(0)}`;
}
