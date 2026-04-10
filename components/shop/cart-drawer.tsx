'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/store';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const items = products.slice(0, 2);
  const subtotal = items.reduce((sum, p) => sum + p.price, 0);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70" />
        <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-zinc-950 p-6">
          <div className="mb-6 flex items-center justify-between"><Dialog.Title>Cart</Dialog.Title><Dialog.Close><X /></Dialog.Close></div>
          <div className="space-y-4">{items.map((p)=><div key={p.slug} className="flex justify-between text-sm"><span>{p.title}</span><span>{formatPrice(p.price)}</span></div>)}</div>
          <p className="mt-6 text-xs text-zinc-400">Free shipping progress: {Math.min(100, Math.round((subtotal / 150) * 100))}%</p>
          <div className="mt-6 space-y-2"><Button className="w-full">Checkout (Mock)</Button><Button variant="outline" className="w-full"><Link href="/cart">View Cart</Link></Button></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
