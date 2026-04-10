import { products } from '@/data/store';
import { formatPrice } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const cart = products.slice(0,2);
  const subtotal = cart.reduce((s,p)=>s+p.price,0);
  return <div className="container-shell py-10"><h1 className="text-5xl">Cart</h1><div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]"><div className="space-y-4">{cart.map(p=><div className="editorial-card p-4 flex justify-between" key={p.slug}><span>{p.title}</span><span>{formatPrice(p.price)}</span></div>)}<div className="editorial-card p-4"><p className="text-sm">Upsell & Cross-sell suggestions</p><p className="text-zinc-400">Add Recorded Motion Cap to complete the look.</p></div></div><aside className="editorial-card p-5 space-y-4"><p>Subtotal: {formatPrice(subtotal)}</p><p className="text-sm text-zinc-400">Shipping threshold progress: {Math.round(Math.min(100, subtotal/150*100))}%</p><Input placeholder="Promo code" /><Button className="w-full">Apply</Button><Button variant="outline" className="w-full">Checkout (Mock)</Button></aside></div></div>;
}
