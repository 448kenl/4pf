const blocks = [
  ['Scarcity', 'Too much product kills meaning. Tight releases create gravity.'],
  ['Identity', 'Pieces should signal taste, intent, and affiliation without needing to explain themselves.'],
  ['Archive', 'Every release leaves a record. History matters. Memory matters. Product lineage matters.'],
  ['Community', 'The network is made of the people wearing it, reposting it, collecting it, and coming back for the next run.']
];

export default function AboutPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">About</h1><p className="mt-4 max-w-3xl text-zinc-300">DUMPERS NETWORK ARCHIVE is a streetwear platform built around scarcity, identity, and memorable product. Each release is treated like a recorded moment, not just another upload.</p><div className="mt-8 grid gap-4 md:grid-cols-2">{blocks.map(([t,b])=><section key={t} className="editorial-card p-6"><h2 className="text-2xl">{t}</h2><p className="mt-2 text-zinc-300">{b}</p></section>)}</div></div>;
}
