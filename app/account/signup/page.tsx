import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SignupPage() {
  return <div className="container-shell py-16"><div className="mx-auto max-w-md editorial-card p-8"><h1 className="text-3xl">Signup</h1><div className="mt-5 space-y-3"><Input placeholder="Name" /><Input placeholder="Email" /><Input type="password" placeholder="Password" /><Button className="w-full">Create Account</Button></div></div></div>;
}
