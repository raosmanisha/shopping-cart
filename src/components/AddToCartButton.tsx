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
      className="px-4 py-2 text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading  focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
    >
      Add to cart
    </button>
  );
}
