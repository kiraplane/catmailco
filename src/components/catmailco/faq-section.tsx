import type { GuideFaq } from '@/data/catmailco/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#6B536F] bg-[#33233B] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#FFF8E7]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#6B536F] bg-[#23182A] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#FFF8E7] transition group-open:text-[#FFB35C]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#D7C8D8]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
