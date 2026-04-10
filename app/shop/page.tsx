import { products } from '@/data/store';
import { ProductCard } from '@/components/shop/product-card';
import { Input } from '@/components/ui/input';

export default function ShopPage() {
  return (
    <div className="container-shell py-10">
      <h1 className="text-4xl">Shop All</h1>
      <p className="mt-3 max-w-3xl text-zinc-300">Every live product in one place. Filter fast. Move clean. Grab what matters before it disappears.</p>
      <div className="my-6 grid gap-3 md:grid-cols-4">
        <Input placeholder="Search" />
        <Input placeholder="Category / Size / Color" />
        <Input placeholder="Price / Availability" />
        <Input placeholder="Sort: Featured, Newest, Price Low to High, Price High to Low, Best Selling" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((p)=><ProductCard key={p.slug} product={p} />)}</div>
    </div>
  );
}
