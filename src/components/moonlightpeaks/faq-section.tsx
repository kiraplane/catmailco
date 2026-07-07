import type { GuideFaq } from '@/data/moonlightpeaks/types';
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
        'rounded-lg border border-[#4B315F] bg-[#1D102A] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F4EAFE]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#4B315F] bg-[#120719] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F4EAFE] transition group-open:text-[#C77DFF]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
