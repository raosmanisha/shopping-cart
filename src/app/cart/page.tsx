"use client";

import { useCart } from '@/hooks/useCart';
import { CartItem as CartItemRow } from '@/components/CartItem';
import { CartItem as CartItemType } from '@/types/cart';

export default function CartPage() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item: CartItemType) => (
        <CartItemRow key={item.id} item={item} />
      ))}
      <div className="text-right mt-6">
        <span className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
