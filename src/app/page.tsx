import { ProductList } from '../components/ProductList';
import { fetchProducts } from '../services/productService';

export default async function HomePage() {
  const response = await fetchProducts();

  return (
    <div className='main'>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ProductList initialProducts={response.products} />
    </div>
  );
}
