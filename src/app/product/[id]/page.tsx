import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchProductById } from '../../../services/productService';

interface Props {
  params: { id: string };
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams=await params
  const id = parseInt(resolvedParams.id, 10);
  console.log("id...........",id);
  const product = await fetchProductById(id).catch(() => null);
  if (!product) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <Image
        src={product.images[0]}
        alt={product.title}
        width={604}
        height={604}
        className="object-cover"
      />
      <p>{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
      <span className="font-bold text-xl">
        ${product.price.toFixed(2)}
      </span>
      <AddToCartButton product={product} />
      </div>
    </div>
  );
}

// AddToCartButton is a client component
import AddToCartButton from '../../../components/AddToCartButton';
