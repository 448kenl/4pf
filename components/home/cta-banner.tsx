import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaBanner({ headline, body, href, cta }: { headline: string; body: string; href: string; cta: string }) {
  return (
    <section className="editorial-card my-14 p-8 md:p-12">
      <h2 className="text-3xl">{headline}</h2>
      <p className="mt-3 max-w-2xl text-zinc-300">{body}</p>
      <Button className="mt-6"><Link href={href}>{cta}</Link></Button>
    </section>
  );
}
