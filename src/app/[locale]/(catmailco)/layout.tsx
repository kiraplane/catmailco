import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function CatMailCoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">{children}</main>
      <AdsterraNativeBanner className="border-[#6B536F] border-t bg-[#23182A]" />
      <Footer />
    </div>
  );
}
