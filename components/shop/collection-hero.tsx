export function CollectionHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="editorial-card mb-10 p-8">
      <p className="text-xs tracking-[0.25em] text-bone">COLLECTION</p>
      <h1 className="mt-3 text-4xl font-semibold">{title}</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">{intro}</p>
    </section>
  );
}
