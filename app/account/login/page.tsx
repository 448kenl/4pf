import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  return <div className="container-shell py-16"><div className="mx-auto max-w-md editorial-card p-8"><h1 className="text-3xl">Login</h1><div className="mt-5 space-y-3"><Input placeholder="Email" /><Input type="password" placeholder="Password" /><Button className="w-full">Sign In</Button></div><p className="mt-4 text-sm text-zinc-400">No account? <Link href="/account/signup" className="underline">Sign up</Link></p></div></div>;
}
