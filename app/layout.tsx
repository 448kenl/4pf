import type { Metadata } from 'next';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/announcement-bar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'DUMPERS NETWORK ARCHIVE | Limited Streetwear, Archive Drops, Rare Goods',
  description:
    'Shop limited streetwear, collectible archive pieces, and culture-driven releases from DUMPERS NETWORK ARCHIVE. Join the network for early access and drop alerts.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
