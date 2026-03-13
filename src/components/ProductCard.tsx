"use client";

import Image from 'next/image';
import Link from 'next/link';
import { memo, useState } from 'react';
import { Product } from '../types/product';
import { useCart } from '../hooks/useCart';

interface Props {
  product: Product;
}

function ProductCardComponent({ product }: Props) {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="relative mb-4">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.title}
            width={604}
            height={604}
            className="object-cover w-full"
          />
          {product.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
      <h2 className="text-lg font-semibold mb-2">
        <Link href={`/product/${product.id}`}>{product.title}</Link>
      </h2>
      <p className="text-sm text-gray-600 flex-grow">{product.title}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-3 py-1"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export const ProductCard = memo(ProductCardComponent);