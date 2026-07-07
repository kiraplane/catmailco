'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Moonlight Peaks logo"
      title="Moonlight Peaks"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'border border-[#C77DFF]/60 bg-[#120719] shadow-[0_0_30px_rgba(199,125,255,0.24)]',
        className
      )}
    >
      <Image
        src="/android-chrome-192x192.png"
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </span>
  );
}
