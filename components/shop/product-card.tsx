import Link from 'next/link';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group editorial-card overflow-hidden">
      <div className="aspect-[4/5] bg-zinc-800" style={{ backgroundImage: `url(${product.images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-accent">{product.badge}</p>
            <h3 className="text-sm font-medium"><Link href={`/products/${product.slug}`}>{product.title}</Link></h3>
          </div>
          <p className="text-sm">{formatPrice(product.price)}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Quick View</Button>
          <Button className="flex-1">Quick Add</Button>
        </div>
      </div>
    </article>
  );
}
