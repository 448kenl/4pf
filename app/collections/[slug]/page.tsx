import { notFound } from 'next/navigation';
import { collections, products } from '@/data/store';
import { CollectionHero } from '@/components/shop/collection-hero';
import { ProductCard } from '@/components/shop/product-card';

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return notFound();
  const collectionProducts = products.filter((p) => p.collection === params.slug || p.category.toLowerCase() === params.slug.replace('-', ' '));
  return (
    <div className="container-shell py-10">
      <CollectionHero title={collection.title} intro={collection.intro} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{collectionProducts.map((p)=><ProductCard key={p.slug} product={p} />)}</div>
    </div>
  );
}
