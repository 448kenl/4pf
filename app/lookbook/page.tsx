import { lookbookFrames } from '@/data/store';
import { EditorialGrid } from '@/components/lookbook/editorial-grid';

export default function LookbookPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">Lookbook</h1><p className="mt-3 max-w-3xl text-zinc-300">Campaign frames, fit references, and visual direction from the brand universe. Built to show how the pieces move in real context.</p><p className="mt-2 text-zinc-400">Less catalog. More mood, proportion, and placement.</p><div className="mt-8"><EditorialGrid images={lookbookFrames} /></div></div>;
}
