import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchProductById } from '../../../services/productService';

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const product = await fetchProductById(id).catch(() => null);
  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={604}
        height={604}
        className="object-cover"
      />
      <p>{product.description}</p>
      <span className="font-bold text-xl">
        ${product.price.toFixed(2)}
      </span>
      <AddToCartButton product={product} />
    </div>
  );
}

// AddToCartButton is a client component
import AddToCartButton from '../../../components/AddToCartButton';
