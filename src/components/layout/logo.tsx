'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Cat Mail Co. logo"
      title="Cat Mail Co."
      className={cn(
        'relative inline-flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'bg-[#FFF1D2] shadow-[0_0_24px_rgba(255,179,92,0.2)]',
        className
      )}
    >
      <Image
        src="/catmailco-logo.svg"
        alt=""
        fill
        sizes="36px"
        className="object-cover"
      />
    </span>
  );
}
