
import { ProductList } from '../components/ProductList';

export default function HomePage() {
  return (
    <div className='main'>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ProductList />
    </div>
  );
}
