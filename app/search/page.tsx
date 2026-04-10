import { products, collections, archiveEntries } from '@/data/store';
import { ProductCard } from '@/components/shop/product-card';
import { Input } from '@/components/ui/input';

export default function SearchPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">Search</h1><div className="mt-5"><Input placeholder="Search products, collections, archive entries" /></div><h2 className="mt-10 mb-4 text-2xl">Products</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map((p)=><ProductCard key={p.slug} product={p} />)}</div><h2 className="mt-10 text-2xl">Collections</h2><ul className="mt-4 list-disc pl-6 text-zinc-300">{collections.map(c=><li key={c.slug}>{c.title}</li>)}</ul><h2 className="mt-10 text-2xl">Archive Entries</h2><ul className="mt-4 list-disc pl-6 text-zinc-300">{archiveEntries.map(e=><li key={e.slug}>{e.title}</li>)}</ul></div>;
}
