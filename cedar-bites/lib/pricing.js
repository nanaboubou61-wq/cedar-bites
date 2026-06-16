export const DELIVERY_FEE = 15;
export const FREE_DELIVERY_THRESHOLD = 125;

export function calculateItemTotal(item) {
  if (item.id === "zaatar-jar") {
    const bundleGroups = Math.floor(item.quantity / 4);
    const remainingJars = item.quantity % 4;

    return bundleGroups * 125 + remainingJars * 33;
  }

  return item.price * item.quantity;
}

export function calculateSubtotal(items) {
  return items.reduce((total, item) => {
    return total + calculateItemTotal(item);
  }, 0);
}

export function calculateDelivery(subtotal) {
  return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
}

export function calculateTotal(items) {
  const subtotal = calculateSubtotal(items);
  const delivery = calculateDelivery(subtotal);

  return {
    subtotal,
    delivery,
    total: subtotal + delivery,
  };
}
