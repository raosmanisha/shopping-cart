"use client";

import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/CartItem';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, total } = useCart();
  const router=useRouter();
   useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

  }, []);

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
