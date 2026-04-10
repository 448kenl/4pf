import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterBlock() {
  return (
    <section className="editorial-card my-14 p-8 md:p-12">
      <p className="text-xs tracking-[0.2em] text-accent">JOIN THE NETWORK</p>
      <h2 className="mt-2 text-3xl">Get In Before The Public Does.</h2>
      <p className="mt-3 max-w-2xl text-zinc-300">Join the list for early access, restock alerts, archive openings, and members-only drop news.</p>
      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <Input placeholder="Email address" />
        <Input placeholder="SMS number" />
        <Button>Join The Network</Button>
      </div>
    </section>
  );
}
