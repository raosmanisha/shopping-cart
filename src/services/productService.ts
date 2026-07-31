import { Product } from '../types/product';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchProducts(): Promise<ProductsResponse> {
  const res = await fetch('https://dummyjson.com/products', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
  const response = await fetchProducts();
  const product = response.products.find((p) => p.id === id);
  if (!product) throw new Error('Product not found');
  return product;
}
