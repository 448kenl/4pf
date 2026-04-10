import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
  return <div className="container-shell py-10"><h1 className="text-5xl">Contact</h1><form className="mt-8 grid gap-4 max-w-2xl"><Input placeholder="Name" /><Input placeholder="Email" /><Input placeholder="Order Number" /><Input placeholder="Topic: Order Support, Shipping Question, Returns, Sizing Help, Collaboration, Press, Other" /><textarea className="min-h-40 rounded-2xl border border-white/20 bg-black/40 p-4" placeholder="Message" /><Button>Send Message</Button></form></div>;
}
