import { ArchiveEntry } from '@/lib/types';

export function ArchiveCard({ entry }: { entry: ArchiveEntry }) {
  return (
    <article className="editorial-card overflow-hidden">
      <div className="aspect-video bg-zinc-800" style={{ backgroundImage: `url(${entry.image})`, backgroundSize: 'cover' }} />
      <div className="p-5">
        <p className="text-xs text-accent">{entry.status}</p>
        <h3 className="mt-1 text-xl">{entry.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{entry.notes}</p>
      </div>
    </article>
  );
}
