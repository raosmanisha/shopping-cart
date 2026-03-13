"use client";

import { Product } from '../types/product';
import { useCart } from '../hooks/useCart';

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="px-4 py-2 bg-white text-white rounded hover:bg-blue-700"
    >
      Add to cart
    </button>
  );
}
