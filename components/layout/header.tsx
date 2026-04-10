'use client';

import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { CartDrawer } from '@/components/shop/cart-drawer';

const links = [
  ['Shop', '/shop'], ['Archive', '/archive'], ['Lookbook', '/lookbook'], ['About', '/about'], ['Contact', '/contact']
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <button onClick={() => setMobile(!mobile)} className="md:hidden"><Menu /></button>
        <Link href="/" className="text-sm font-semibold tracking-[0.18em]">DNA ◯ DUMPERS NETWORK ARCHIVE</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-bone">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/search"><Search size={18} /></Link>
          <button onClick={() => setOpen(true)}><ShoppingBag size={18} /></button>
        </div>
      </div>
      {mobile && <div className="container-shell grid gap-3 border-t border-white/10 py-4 md:hidden">{links.map(([l,h])=><Link key={h} href={h} onClick={()=>setMobile(false)}>{l}</Link>)}</div>}
      <CartDrawer open={open} onOpenChange={setOpen} />
    </header>
  );
}
