'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Gamepad2, Monitor, Smartphone, Tv } from 'lucide-react';
import { useMemo, useState } from 'react';

interface PlatformOption {
  id: string;
  label: string;
  strengths: readonly string[];
}

const questions = [
  {
    id: 'mode',
    label: 'Main play style',
    options: [
      { id: 'desk', label: 'Desk / laptop', scores: { steam: 3 } },
      {
        id: 'handheld',
        label: 'Handheld',
        scores: { 'steam-deck': 3, switch: 2 },
      },
      { id: 'tv', label: 'TV / couch', scores: { 'switch-2': 3, switch: 2 } },
      { id: 'mobile', label: 'Phone / mobile store', scores: { android: 4 } },
    ],
  },
  {
    id: 'priority',
    label: 'Biggest priority',
    options: [
      {
        id: 'updates',
        label: 'Fast patches',
        scores: { steam: 3, 'steam-deck': 2 },
      },
      {
        id: 'demo',
        label: 'Demo access',
        scores: { steam: 2, switch: 2, 'switch-2': 1 },
      },
      {
        id: 'portable',
        label: 'Portable sessions',
        scores: { 'steam-deck': 3, switch: 2, android: 1 },
      },
      {
        id: 'safe',
        label: 'Safest download path',
        scores: { steam: 2, switch: 2, 'switch-2': 2, android: 1 },
      },
    ],
  },
  {
    id: 'controls',
    label: 'Control preference',
    options: [
      { id: 'mouse', label: 'Mouse / keyboard', scores: { steam: 3 } },
      {
        id: 'controller',
        label: 'Controller',
        scores: { 'steam-deck': 2, switch: 2, 'switch-2': 2 },
      },
      { id: 'touch', label: 'Touch / mobile', scores: { android: 3 } },
    ],
  },
] as const;

const platformIcons = {
  steam: Monitor,
  'steam-deck': Gamepad2,
  switch: Gamepad2,
  'switch-2': Tv,
  android: Smartphone,
} as const;

export function PlatformPickerTool({
  platforms,
}: {
  platforms: readonly PlatformOption[];
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    mode: 'desk',
    priority: 'updates',
    controls: 'mouse',
  });

  const ranked = useMemo(() => {
    const scores: Record<string, number> = Object.fromEntries(
      platforms.map((platform) => [platform.id, 0])
    );

    for (const question of questions) {
      const selected = question.options.find(
        (option) => option.id === answers[question.id]
      );
      for (const [platformId, score] of Object.entries(
        selected?.scores ?? {}
      )) {
        scores[platformId] = (scores[platformId] ?? 0) + score;
      }
    }

    return [...platforms].sort(
      (a, b) => (scores[b.id] ?? 0) - (scores[a.id] ?? 0)
    );
  }, [answers, platforms]);

  const winner = ranked[0];
  const WinnerIcon = platformIcons[winner.id as keyof typeof platformIcons];

  return (
    <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-4">
        {questions.map((question) => (
          <fieldset
            key={question.id}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <legend className="font-display text-xl font-bold">
              {question.label}
            </legend>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {question.options.map((option) => {
                const active = answers[question.id] === option.id;
                return (
                  <Button
                    key={option.id}
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setAnswers((current) => ({
                        ...current,
                        [question.id]: option.id,
                      }))
                    }
                    className={`h-auto min-h-12 justify-start whitespace-normal rounded-md border px-3 py-3 text-left leading-5 ${
                      active
                        ? 'border-[#C77DFF] bg-[#C77DFF] text-[#14091E] hover:bg-[#C77DFF]'
                        : 'border-[#4B315F] bg-[#120719] text-[#DED2F6] hover:bg-[#2B1838]'
                    }`}
                  >
                    {active ? <Check className="size-4 shrink-0" /> : null}
                    {option.label}
                  </Button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <aside className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 lg:sticky lg:top-24">
        <Badge className="bg-[#5EE6D6] text-[#14091E]">Recommended</Badge>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex size-12 items-center justify-center rounded-md border border-[#C77DFF]/60 bg-[#120719] text-[#C77DFF]">
            <WinnerIcon className="size-6" />
          </span>
          <h2 className="font-display text-3xl font-black">{winner.label}</h2>
        </div>
        <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
          This recommendation uses confirmed platform paths and conservative
          launch assumptions. Recheck store pages for current price and
          compatibility before buying.
        </p>
        <div className="mt-4 grid gap-2">
          {winner.strengths.map((strength) => (
            <div
              key={strength}
              className="rounded-md border border-[#4B315F] bg-[#120719] px-3 py-2 text-sm text-[#DED2F6]"
            >
              {strength}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
