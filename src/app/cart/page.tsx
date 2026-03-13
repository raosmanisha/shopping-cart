"use client";

import { useCart } from '@/hooks/useCart';
import { CartItem as CartItemType } from '@/types/cart';
import { CartItem } from '@/components/CartItem';

export default function CartPage() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4">
      {items.map((item: CartItem) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="text-right mt-6">
        <span className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
