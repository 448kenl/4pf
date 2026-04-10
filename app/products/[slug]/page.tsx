import { notFound } from 'next/navigation';
import * as Tabs from '@radix-ui/react-tabs';
import { products, reviews } from '@/data/store';
import { formatPrice } from '@/lib/utils';
import { ProductCard } from '@/components/shop/product-card';
import { Button } from '@/components/ui/button';

const scarcity = ['Low stock — moving fast', 'Last units remaining', 'This item will not be widely restocked', 'Part of a limited release'];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  return (
    <div className="container-shell py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">{product.images.map((img,i)=><div key={i} className="aspect-square rounded-2xl border border-white/10 bg-zinc-800" style={{backgroundImage:`url(${img})`, backgroundSize:'cover'}} />)}</div>
        <div>
          <p className="text-xs text-accent">{scarcity[product.stock % 4]}</p>
          <h1 className="mt-2 text-4xl">{product.title}</h1>
          <p className="mt-3 text-zinc-300">Heavy structure, strong print placement, and a fit designed to hold shape through repeat wear.</p>
          <p className="mt-4 text-2xl">{formatPrice(product.price)} <span className="text-base text-zinc-500 line-through">{formatPrice(product.comparePrice)}</span></p>
          <div className="mt-6 flex gap-3"><Button>Add To Cart</Button><Button variant="outline">Buy It Now</Button></div>
          <Tabs.Root defaultValue="description" className="mt-8">
            <Tabs.List className="flex gap-3 text-sm"><Tabs.Trigger value="description">Description</Tabs.Trigger><Tabs.Trigger value="materials">Materials</Tabs.Trigger><Tabs.Trigger value="fit">Fit</Tabs.Trigger><Tabs.Trigger value="shipping">Shipping</Tabs.Trigger></Tabs.List>
            <Tabs.Content value="description" className="mt-4 text-zinc-300">Designed for everyday rotation with a stronger visual identity than standard basics. Built on premium material with a feel that lands between street utility and archive collectible.</Tabs.Content>
            <Tabs.Content value="materials" className="mt-4 text-zinc-300">Premium cotton blend / structured finish / built for repeat wear</Tabs.Content>
            <Tabs.Content value="fit" className="mt-4 text-zinc-300">True to size with a clean, slightly boxy profile. Size up for a looser fit.</Tabs.Content>
            <Tabs.Content value="shipping" className="mt-4 text-zinc-300">Orders process fast. Tracking sent by email. Returns accepted on eligible items within the stated policy window.</Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      <section className="my-12"><h2 className="mb-4 text-2xl">Related Products</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((p)=><ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="my-12"><h2 className="mb-4 text-2xl">Reviews</h2><div className="grid gap-4 md:grid-cols-3">{reviews.map((r)=><article key={r.name} className="editorial-card p-4">{r.quote}</article>)}</div></section>
    </div>
  );
}
