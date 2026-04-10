import { products } from '@/data/store';
import { ProductCard } from '@/components/shop/product-card';

export default function WishlistPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">Wishlist</h1><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map((p)=><ProductCard key={p.slug} product={p} />)}</div></div>;
}
