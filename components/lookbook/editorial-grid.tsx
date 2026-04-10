export function EditorialGrid({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, i) => (
        <div key={i} className="aspect-[4/5] rounded-2xl border border-white/10 bg-zinc-800" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      ))}
    </div>
  );
}
