import { archiveEntries } from '@/data/store';
import { ArchiveCard } from '@/components/archive/archive-card';

export default function ArchivePage() {
  return (
    <div className="container-shell py-10">
      <p className="text-xs tracking-[0.2em] text-bone">RELEASE HISTORY</p>
      <h1 className="mt-3 text-5xl">The Archive</h1>
      <p className="mt-4 max-w-3xl text-zinc-300">A living record of earlier drops, sold-out pieces, and product eras that helped shape the network. This is where the history stays visible.</p>
      <p className="mt-4 max-w-3xl text-zinc-400">Not every release is meant to stay active. Some pieces are built to sell through, disappear, and gain value through memory. The Archive preserves that trail.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{archiveEntries.map((e)=><ArchiveCard key={e.slug} entry={e} />)}</div>
    </div>
  );
}
