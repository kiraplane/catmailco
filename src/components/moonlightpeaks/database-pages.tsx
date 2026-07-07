import Container from '@/components/layout/container';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/moonlightpeaks/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  type CharacterEntry,
  type DatabaseCategory,
  type FamilyEntry,
  type ItemEntry,
  type LocationEntry,
  characters,
  databaseCategoryMeta,
  databaseCrawlAudits,
  databaseSources,
  families,
  getDatabaseCounts,
  getRomanceLabel,
  getVerificationLabel,
  items,
  locations,
} from '@/data/moonlightpeaks/database';
import { siteFacts } from '@/data/moonlightpeaks/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  Boxes,
  Database,
  ExternalLink,
  Filter,
  Heart,
  Map,
  ShieldCheck,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

const categoryIcons = {
  characters: UsersRound,
  families: Heart,
  locations: Map,
  items: Boxes,
} satisfies Record<DatabaseCategory, typeof Database>;

const statusClass = {
  official: 'border-[#5EE6D6]/60 bg-[#5EE6D6]/16 text-[#BDF8F0]',
  confirmed: 'border-[#5EE6D6]/60 bg-[#5EE6D6]/16 text-[#BDF8F0]',
  reported: 'border-[#FFB86B]/60 bg-[#FFB86B]/14 text-[#FFE0C0]',
  'wiki-data': 'border-[#C77DFF]/60 bg-[#C77DFF]/14 text-[#F4EAFE]',
  datamined: 'border-[#FF7FA3]/60 bg-[#FF7FA3]/14 text-[#FFD1DD]',
  unverified: 'border-white/25 bg-white/8 text-[#DED2F6]',
};

function statusBadge(status: keyof typeof statusClass) {
  return (
    <Badge variant="outline" className={statusClass[status]}>
      {getVerificationLabel(status)}
    </Badge>
  );
}

function SectionShell({
  children,
  currentPath,
  intro,
  locale,
  title,
}: {
  children: ReactNode;
  currentPath: string;
  intro: string;
  locale?: Locale;
  title: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description: intro,
    url: `${siteFacts.domain}${currentPath}`,
    isPartOf: {
      '@type': 'WebSite',
      name: siteFacts.siteName,
      url: siteFacts.domain,
    },
  };

  return (
    <div className="bg-[#120719] py-10 text-[#F4EAFE]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-6">
            <header className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 md:p-7">
              <Badge className="bg-[#5EE6D6] text-[#14091E]">
                Structured wiki data
              </Badge>
              <h1 className="mt-4 font-display text-4xl font-black leading-tight md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#DED2F6] md:text-lg">
                {intro}
              </p>
              <div className="mt-5">
                <MobileWikiNav currentPath={currentPath} locale={locale} />
              </div>
            </header>

            {children}
          </main>

          <WikiRouteSidebar currentPath={currentPath} locale={locale}>
            <SourcePanel />
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}

function SourcePanel() {
  return (
    <aside className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-1 size-5 shrink-0 text-[#5EE6D6]" />
        <div>
          <h2 className="font-display text-lg font-bold">Source policy</h2>
          <p className="mt-2 text-sm leading-6 text-[#DED2F6]">
            Data rows cite public sources and keep unverified values marked.
            Images are tracked as source availability, not copied assets.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function DatabaseLandingPage({ locale }: { locale?: Locale }) {
  const counts = getDatabaseCounts();
  const categories = Object.values(databaseCategoryMeta);

  return (
    <SectionShell
      currentPath="/database"
      locale={locale}
      title="Moonlight Peaks Database"
      intro="A structured launch database for characters, families, locations, and item indexes gathered from public wiki pages, competitor hubs, and official sources."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => {
          const Icon = categoryIcons[category.category];
          return (
            <LocaleLink
              key={category.category}
              href={category.route}
              className="group rounded-lg border border-[#4B315F] bg-[#1D102A] p-5 transition hover:border-[#C77DFF] hover:bg-[#251334]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 gap-3">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[#C77DFF]/50 bg-[#120719] text-[#C77DFF]">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-2xl font-bold">
                      {category.shortTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#DED2F6]">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="mt-2 size-5 shrink-0 text-[#C77DFF] transition group-hover:translate-x-1" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-[#C77DFF] text-[#14091E]">
                  {counts[category.category]} rows
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                >
                  Updated Jul 7, 2026
                </Badge>
              </div>
            </LocaleLink>
          );
        })}
      </section>

      <section className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex items-center gap-3">
          <Database className="size-5 text-[#5EE6D6]" />
          <h2 className="font-display text-2xl font-bold">
            Competitor and source inventory
          </h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {databaseSources.map((source) => (
            <a
              key={source.url}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#4B315F] bg-[#120719] p-3 text-sm leading-6 text-[#DED2F6] transition hover:border-[#C77DFF] hover:text-[#F4EAFE]"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="min-w-0 break-words">{source.label}</span>
                <ExternalLink className="size-4 shrink-0 text-[#C77DFF]" />
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-[#5EE6D6]">
                {source.kind}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex items-center gap-3">
          <Filter className="size-5 text-[#5EE6D6]" />
          <h2 className="font-display text-2xl font-bold">
            Crawl audit snapshot
          </h2>
        </div>
        <div className="mt-4 grid gap-3">
          {databaseCrawlAudits.map((audit) => (
            <a
              key={audit.source}
              href={audit.url}
              target="_blank"
              rel="noreferrer"
              className="block min-w-0 rounded-md border border-[#4B315F] bg-[#120719] p-4 transition hover:border-[#C77DFF]"
            >
              <span className="flex flex-wrap items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="block break-words font-semibold text-[#F4EAFE]">
                    {audit.source}
                  </span>
                  <span className="mt-1 block break-words text-sm text-[#DED2F6]">
                    {audit.totals} · checked {audit.checkedAt}
                  </span>
                </span>
                <ExternalLink className="size-4 shrink-0 text-[#C77DFF]" />
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {audit.usefulBuckets.map((bucket) => (
                  <Badge
                    key={bucket}
                    variant="outline"
                    className="h-auto max-w-full whitespace-normal break-words border-[#4B315F] bg-[#1D102A] text-left leading-5 text-[#DED2F6]"
                  >
                    {bucket}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-[#DED2F6]">
                {audit.appliedAs}
              </p>
            </a>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}

export function DatabaseCategoryPage({
  category,
  locale,
}: {
  category: DatabaseCategory;
  locale?: Locale;
}) {
  const meta = databaseCategoryMeta[category];

  return (
    <SectionShell
      currentPath={meta.route}
      locale={locale}
      title={meta.title}
      intro={meta.description}
    >
      <section className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5EE6D6]">
              Classification note
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[#DED2F6]">
              {meta.sourceNote}
            </p>
          </div>
          <Badge className="bg-[#C77DFF] text-[#14091E]">
            {getDatabaseCounts()[category]} rows
          </Badge>
        </div>
      </section>

      {category === 'characters' ? (
        <CharacterGrid entries={characters} />
      ) : null}
      {category === 'families' ? <FamilyGrid entries={families} /> : null}
      {category === 'locations' ? <LocationGrid entries={locations} /> : null}
      {category === 'items' ? <ItemGrid entries={items} /> : null}
    </SectionShell>
  );
}

function CharacterGrid({ entries }: { entries: CharacterEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => (
        <article
          key={entry.slug}
          className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
        >
          <div className="flex flex-wrap gap-2">
            {statusBadge(entry.verification)}
            <Badge
              variant="outline"
              className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
            >
              {getRomanceLabel(entry.romanceStatus)}
            </Badge>
            {entry.imageStatus !== 'none' ? (
              <Badge
                variant="outline"
                className="border-[#FFB86B]/50 bg-[#FFB86B]/12 text-[#FFE0C0]"
              >
                Image listed
              </Badge>
            ) : null}
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold">{entry.name}</h2>
          <div className="mt-3 grid gap-2 text-sm text-[#DED2F6] sm:grid-cols-2">
            <Fact label="Species" value={entry.species} />
            <Fact label="Family" value={entry.family} />
            <Fact label="Pronouns" value={entry.pronouns} />
            <Fact label="Birthday" value={entry.birthday} />
            <Fact label="Lives in" value={entry.livesIn} />
            <Fact label="Occupation" value={entry.occupation} />
          </div>
          <p className="mt-4 text-sm leading-7 text-[#DED2F6]">
            {entry.summary}
          </p>
          <SourceLinks urls={entry.sourcePages} />
        </article>
      ))}
    </section>
  );
}

function FamilyGrid({ entries }: { entries: FamilyEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => (
        <article
          key={entry.slug}
          className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
        >
          <div className="flex flex-wrap gap-2">
            {statusBadge(entry.verification)}
            <Badge className="bg-[#5EE6D6] text-[#14091E]">
              {entry.inclination}
            </Badge>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold">{entry.name}</h2>
          <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
            {entry.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.knownMembers.map((member) => (
              <Badge
                key={member}
                variant="outline"
                className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
              >
                {member}
              </Badge>
            ))}
          </div>
          <SourceLinks urls={entry.sourcePages} />
        </article>
      ))}
    </section>
  );
}

function LocationGrid({ entries }: { entries: LocationEntry[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {entries.map((entry) => (
        <article
          key={entry.slug}
          className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
        >
          <div className="flex flex-wrap gap-2">
            {statusBadge(entry.verification)}
            <Badge className="bg-[#C77DFF] text-[#14091E]">{entry.kind}</Badge>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold">{entry.name}</h2>
          <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
            {entry.summary}
          </p>
          {entry.relatedCharacters.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.relatedCharacters.map((character) => (
                <Badge
                  key={character}
                  variant="outline"
                  className="border-[#4B315F] bg-[#120719] text-[#DED2F6]"
                >
                  {character}
                </Badge>
              ))}
            </div>
          ) : null}
          <SourceLinks urls={entry.sourcePages} />
        </article>
      ))}
    </section>
  );
}

function ItemGrid({ entries }: { entries: ItemEntry[] }) {
  const trackerGroups = Array.from(
    new Set(entries.map((entry) => entry.trackerGroup))
  );

  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex items-center gap-3">
          <Filter className="size-5 text-[#5EE6D6]" />
          <div>
            <h2 className="font-display text-2xl font-bold">Tracker groups</h2>
            <p className="mt-1 text-sm leading-6 text-[#DED2F6]">
              Use these groups in the item tracker before exact price, recipe,
              and gift tables are safe to publish.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {trackerGroups.map((group) => (
            <Badge key={group} className="bg-[#C77DFF] text-[#14091E]">
              {group}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={entry.slug}
            className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5"
          >
            <div className="flex flex-wrap gap-2">
              {statusBadge(entry.verification)}
              <Badge className="bg-[#5EE6D6] text-[#14091E]">
                {entry.trackerGroup}
              </Badge>
            </div>
            <h2 className="mt-3 font-display text-xl font-bold">
              {entry.name}
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#C77DFF]">
              {entry.category}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#DED2F6]">
              {entry.summary}
            </p>
            <SourceLinks urls={entry.sourcePages.slice(0, 1)} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-md border border-[#4B315F] bg-[#120719] px-3 py-2">
      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C77DFF]">
        {label}
      </span>
      <span className="mt-1 block break-words">{value}</span>
    </div>
  );
}

function SourceLinks({ urls }: { urls: string[] }) {
  if (urls.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {urls.slice(0, 3).map((url, index) => (
        <Button
          key={url}
          asChild
          size="sm"
          variant="outline"
          className="h-auto min-w-0 whitespace-normal border-[#4B315F] bg-[#120719] text-left text-[#DED2F6] hover:bg-[#2B1838]"
        >
          <a href={url} target="_blank" rel="noreferrer">
            Source {index + 1}
            <ExternalLink className="size-3 shrink-0" />
          </a>
        </Button>
      ))}
    </div>
  );
}
