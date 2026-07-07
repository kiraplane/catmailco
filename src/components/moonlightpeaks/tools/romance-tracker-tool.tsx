'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { RomanceStatus } from '@/data/moonlightpeaks/database';
import { Check, Heart, RotateCcw, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export interface RomanceTrackerCharacter {
  slug: string;
  name: string;
  species: string;
  family: string;
  occupation?: string;
  romanceStatus: RomanceStatus;
  summary: string;
}

interface RomanceState {
  shortlist: string[];
  notes: Record<string, string>;
}

const storageKey = 'moonlightpeaks-romance-tracker-v1';

const romanceLabels: Record<RomanceStatus, string> = {
  romanceable: 'Romanceable',
  'not-romanceable': 'Resident',
  tbc: 'TBC',
};

export function RomanceTrackerTool({
  characters,
}: {
  characters: RomanceTrackerCharacter[];
}) {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('All');
  const [state, setState] = useState<RomanceState>({
    shortlist: [],
    notes: {},
  });

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (raw) {
      setState(JSON.parse(raw) as RomanceState);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  const families = useMemo(
    () => [
      'All',
      ...Array.from(new Set(characters.map((item) => item.family))).sort(),
    ],
    [characters]
  );

  const filtered = useMemo(() => {
    return characters.filter((character) => {
      const matchesFamily = family === 'All' || character.family === family;
      const haystack =
        `${character.name} ${character.species} ${character.family} ${character.occupation ?? ''}`.toLowerCase();
      return matchesFamily && haystack.includes(query.toLowerCase());
    });
  }, [characters, family, query]);

  function toggleShortlist(slug: string) {
    setState((current) => ({
      ...current,
      shortlist: current.shortlist.includes(slug)
        ? current.shortlist.filter((item) => item !== slug)
        : [...current.shortlist, slug],
    }));
  }

  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px_120px]">
          <label className="relative block">
            <Search className="absolute top-3 left-3 size-4 text-[#C77DFF]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, family, species, job"
              className="h-11 w-full rounded-md border border-[#4B315F] bg-[#120719] pr-3 pl-10 text-sm text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
            />
          </label>
          <select
            value={family}
            onChange={(event) => setFamily(event.target.value)}
            className="h-11 rounded-md border border-[#4B315F] bg-[#120719] px-3 text-sm text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
          >
            {families.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <Button
            type="button"
            variant="outline"
            onClick={() => setState({ shortlist: [], notes: {} })}
            className="h-11 border-[#4B315F] bg-[#120719] text-[#DED2F6] hover:bg-[#2B1838]"
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>
        <p className="mt-3 text-sm text-[#DED2F6]">
          {state.shortlist.length} shortlisted locally. Notes stay in this
          browser only.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {filtered.map((character) => {
          const shortlisted = state.shortlist.includes(character.slug);
          return (
            <article
              key={character.slug}
              className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#C77DFF] text-[#14091E]">
                  {romanceLabels[character.romanceStatus]}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#5EE6D6]/50 bg-[#5EE6D6]/12 text-[#BDF8F0]"
                >
                  {character.family}
                </Badge>
              </div>
              <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    {character.name}
                  </h2>
                  <p className="mt-1 text-sm text-[#DED2F6]">
                    {character.species}
                    {character.occupation ? ` · ${character.occupation}` : ''}
                  </p>
                </div>
                <Button
                  type="button"
                  size="sm"
                  onClick={() => toggleShortlist(character.slug)}
                  className={
                    shortlisted
                      ? 'bg-[#5EE6D6] text-[#14091E] hover:bg-[#5EE6D6]'
                      : 'bg-[#C77DFF] text-[#14091E] hover:bg-[#FFB86B]'
                  }
                >
                  {shortlisted ? (
                    <Check className="size-4" />
                  ) : (
                    <Heart className="size-4" />
                  )}
                  {shortlisted ? 'Saved' : 'Save'}
                </Button>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
                {character.summary}
              </p>
              <textarea
                value={state.notes[character.slug] ?? ''}
                onChange={(event) =>
                  setState((current) => ({
                    ...current,
                    notes: {
                      ...current.notes,
                      [character.slug]: event.target.value,
                    },
                  }))
                }
                placeholder="Private note: gift tests, schedule clues, heart events..."
                className="mt-4 min-h-24 w-full resize-y rounded-md border border-[#4B315F] bg-[#120719] p-3 text-sm leading-6 text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
