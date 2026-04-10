import Link from 'next/link';
import { products, archiveEntries, lookbookFrames, reviews } from '@/data/store';
import { ProductCard } from '@/components/shop/product-card';
import { ArchiveCard } from '@/components/archive/archive-card';
import { EditorialGrid } from '@/components/lookbook/editorial-grid';
import { CtaBanner } from '@/components/home/cta-banner';
import { NewsletterBlock } from '@/components/home/newsletter-block';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="container-shell py-8">
      <section className="editorial-card overflow-hidden p-8 md:p-14">
        <p className="text-xs tracking-[0.2em] text-bone">RARE GOODS / LIMITED RELEASES / CULTURE ARCHIVED</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold md:text-6xl">Built For The Ones Who Move Different.</h1>
        <p className="mt-5 max-w-2xl text-zinc-300">DUMPERS NETWORK ARCHIVE delivers limited streetwear, archive-inspired staples, and collectible drops for those building pressure, presence, and legacy.</p>
        <div className="mt-8 flex gap-3"><Button><Link href="/collections/new-drop">Shop New Drop</Link></Button><Button variant="outline"><Link href="/archive">Explore Archive</Link></Button></div>
        <p className="mt-4 text-xs text-zinc-400">Small runs. No lazy restocks. No dead product.</p>
      </section>

      <CtaBanner headline="The Latest Drop Is Live." body="A focused run of statement pieces engineered for impact: heavy graphics, premium structure, and a sharp archive attitude. Once it is gone, it moves to history." href="/collections/new-drop" cta="CURRENT RELEASE" />

      <section className="my-14"><h2 className="mb-6 text-2xl">New Arrivals</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0,4).map((p)=><ProductCard key={p.slug} product={p} />)}</div></section>
      <section className="my-14"><h2 className="mb-6 text-2xl">Best Sellers</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.filter(p=>p.bestSelling).map((p)=><ProductCard key={p.slug} product={p} />)}</div></section>

      <section className="my-14">
        <p className="text-xs tracking-[0.2em] text-bone">PAST / PRESENT / COLLECTIBLE</p>
        <h2 className="mt-3 text-4xl">Every Drop Leaves A Record.</h2>
        <p className="mt-3 max-w-3xl text-zinc-300">The Archive holds sold-out pieces, release notes, visual history, and the product trail behind the brand. Some pieces return. Most do not.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">{archiveEntries.map((e)=><ArchiveCard key={e.slug} entry={e} />)}</div>
      </section>

      <CtaBanner headline="Not Just Product. Positioning." body="DUMPERS NETWORK ARCHIVE is built around scarcity, identity, and motion. The goal is not to flood the market. The goal is to release pieces with weight, hold attention, and give the right people something worth keeping." href="/about" cta="Read Manifesto" />

      <section className="my-14"><h2 className="mb-5 text-3xl">From The Network</h2><EditorialGrid images={lookbookFrames.slice(0,6)} /></section>
      <section className="my-14"><h2 className="text-3xl">Seen In Rotation</h2><div className="mt-5 grid gap-4 md:grid-cols-3">{reviews.map((r)=><blockquote key={r.name} className="editorial-card p-5 text-sm">“{r.quote}”<footer className="mt-3 text-zinc-400">— {r.name}</footer></blockquote>)}</div></section>
      <NewsletterBlock />
    </div>
  );
}
