import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <p className="text-sm tracking-wide">DUMPERS NETWORK ARCHIVE — RARE GOODS FOR THE ONES WHO MOVE DIFFERENT</p>
        <div className="grid gap-2 text-sm text-zinc-300">
          <Link href="/faq">FAQ</Link><Link href="/account/login">Account</Link><Link href="/cart">Cart</Link>
        </div>
      </div>
    </footer>
  );
}
