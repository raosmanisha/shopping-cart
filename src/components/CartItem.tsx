"use client";

import Image from 'next/image';
import { memo, useCallback } from 'react';
import { CartItem as CartItemType } from '../types/cart';
import { useCart } from '../hooks/useCart';

interface Props {
  item: CartItemType;
}

function CartItemComponent({ item }: Props) {
  const { removeFromCart, updateItemQuantity } = useCart();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const qty = parseInt(e.target.value, 10);
      if (!isNaN(qty) && qty > 0) {
        updateItemQuantity(item.id, qty);
      }
    },
    [item.id, updateItemQuantity]
  );

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      {item.thumbnail ? (
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={80}
          height={80}
          className="object-cover"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-100 rounded" aria-hidden="true" />
      )}
      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <input
        type="number"
        min={1}
        value={item.quantity}
        onChange={onChange}
        className="w-16 border rounded p-1 text-center"
      />
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 hover:underline"
      >
        X
      </button>
    </div>
  );
}

export const CartItem = memo(CartItemComponent);