import { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
}
