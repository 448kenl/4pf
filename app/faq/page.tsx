import * as Accordion from '@radix-ui/react-accordion';

const faq = [
  ['shipping', 'Orders ship fast with tracking by email.'],
  ['returns', 'Returns accepted on eligible items within policy window.'],
  ['sizing', 'True to size with slightly boxy profile.'],
  ['restocks', 'Most drops do not restock widely.'],
  ['order tracking', 'Use your shipping email link or contact support.'],
  ['payment methods', 'Major cards, wallet pay options, and shop pay mock.'],
  ['drop policy', 'Limited units and controlled releases.']
];

export default function FaqPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">FAQ</h1><Accordion.Root type="single" collapsible className="mt-8 space-y-3">{faq.map(([q,a])=><Accordion.Item key={q} value={q} className="editorial-card p-4"><Accordion.Trigger className="w-full text-left capitalize">{q}</Accordion.Trigger><Accordion.Content className="mt-2 text-zinc-300">{a}</Accordion.Content></Accordion.Item>)}</Accordion.Root></div>;
}
