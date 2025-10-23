import { getProductBySlug } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
