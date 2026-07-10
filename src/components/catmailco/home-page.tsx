import { FaqSection } from '@/components/catmailco/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/catmailco/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/catmailco/localized';
import { siteFacts } from '@/data/catmailco/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Box,
  CalendarClock,
  Cat,
  Download,
  Gamepad2,
  MoonStar,
  PackageCheck,
  RadioTower,
  ShieldCheck,
  Stamp,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const quickRouteGroups = [
  {
    title: 'Start here',
    icon: BookOpen,
    body: 'Learn the loop or decide whether to buy.',
    links: [
      ['Beginner', '/guides/beginner-guide'],
      ['Walkthrough', '/walkthrough'],
      ['Demo', '/demo'],
      ['Review', '/review'],
    ],
  },
  {
    title: 'Postal work',
    icon: PackageCheck,
    body: 'Keep every package readable and moving.',
    links: [
      ['Sorting', '/guides/package-sorting'],
      ['Stamps', '/guides/stamps-and-labels'],
      ['Night shift', '/guides/night-shift'],
      ['Tips', '/tips'],
    ],
  },
  {
    title: 'Play together',
    icon: UsersRound,
    body: 'Plan roles, handoffs, and platforms.',
    links: [
      ['Co-op', '/co-op'],
      ['Platforms', '/platforms'],
      ['Steam Deck', '/steam-deck'],
      ['Discord', '/discord'],
    ],
  },
  {
    title: 'Get the game',
    icon: Gamepad2,
    body: 'Use current official store information.',
    links: [
      ['Release & price', '/release-date'],
      ['Download', '/download'],
      ['Steam', siteFacts.officialSteamUrl],
      ['Safety', '/download'],
    ],
  },
] as const;

const beginnerJourney = [
  {
    title: 'Open a clean lane',
    href: '/guides/beginner-guide',
    body: 'Separate incoming, in-progress, complete, exception, and outgoing mail.',
  },
  {
    title: 'Read before stamping',
    href: '/guides/stamps-and-labels',
    body: 'Confirm destination, weight, postage, and handling before decoration.',
  },
  {
    title: 'Build destination zones',
    href: '/guides/package-sorting',
    body: 'Face labels outward and give every route a hard boundary.',
  },
  {
    title: 'Inspect by moonlight',
    href: '/guides/night-shift',
    body: 'Resolve unusual parcels from one visible exception shelf.',
  },
  {
    title: 'Reset for the boat',
    href: '/tips',
    body: 'Audit the floor, work surfaces, shelves, exceptions, and outgoing load.',
  },
] as const;

const coreModules = [
  {
    title: 'Packages, Stamps, And Storage',
    icon: Box,
    body: 'Make parcel state visible before you optimize walking or decorate the room.',
    links: [
      ['Beginner', '/guides/beginner-guide'],
      ['Package sorting', '/guides/package-sorting'],
      ['Stamps and labels', '/guides/stamps-and-labels'],
      ['10 tips', '/tips'],
    ],
  },
  {
    title: 'Moonlight And Story Progression',
    icon: MoonStar,
    body: 'Keep hidden-property parcels accessible and clear the mysterious backlog without losing daily flow.',
    links: [
      ['Night shift', '/guides/night-shift'],
      ['Walkthrough', '/walkthrough'],
      ['Beginner route', '/guides/beginner-guide'],
      ['All guides', '/guides'],
    ],
  },
  {
    title: 'Solo, Co-op, And Steam Deck',
    icon: UsersRound,
    body: 'Use role ownership in multiplayer and test controls, prompts, and readability on handheld hardware.',
    links: [
      ['Co-op roles', '/co-op'],
      ['Steam Deck', '/steam-deck'],
      ['Demo', '/demo'],
      ['Official links', '/discord'],
    ],
  },
  {
    title: 'Release, Platforms, And Safety',
    icon: ShieldCheck,
    body: 'Windows on Steam is confirmed. Console and mobile ports need official store evidence.',
    links: [
      ['Release and price', '/release-date'],
      ['Platforms', '/platforms'],
      ['Safe download', '/download'],
      ['Should you buy?', '/review'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Cat Mail Co. release trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/RupCdoMTOZ4?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=RupCdoMTOZ4',
  thumbnailUrl: 'https://i.ytimg.com/vi/RupCdoMTOZ4/hqdefault.jpg',
};

export function CatMailCoHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/catmailco-logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
        applicationCategory: 'Game',
        genre: ['Indie', 'Simulation', 'Cozy', 'Management'],
        gamePlatform: ['Windows', 'Steam'],
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialWebsiteUrl,
          siteFacts.officialSteamUrl,
          siteFacts.officialDiscordUrl,
          siteFacts.officialTwitterUrl,
          siteFacts.officialYouTubeUrl,
          siteFacts.officialBlueSkyUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        uploadDate: '2026-07-02',
      },
    ],
  };

  return (
    <div className="bg-[#23182A] text-[#FFF8E7]">
      <JsonLd data={jsonLd} />
      <section className="border-[#6B536F] border-b bg-[radial-gradient(circle_at_10%_10%,rgba(255,136,172,0.18),transparent_36%),radial-gradient(circle_at_92%_18%,rgba(122,214,204,0.18),transparent_34%)]">
        <Container className="px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.76fr)]">
            <div className="min-w-0">
              <Badge className="bg-[#FFB35C] text-[#24131F]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#D7C8D8] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#FFB35C] px-4 py-3 text-[#24131F] hover:bg-[#7AD6CC]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#FF88AC] bg-transparent px-4 py-3 text-[#FFF8E7] hover:bg-[#FF88AC] hover:text-[#24131F]"
                >
                  <LocaleLink href="/walkthrough">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks
                className="mt-5"
                links={[
                  ['Steam', siteFacts.officialSteamUrl],
                  ['Beginner', '/guides/beginner-guide'],
                  ['Co-op', '/co-op'],
                  ['Moonlight', '/guides/night-shift'],
                  ['Platforms', '/platforms'],
                  ['Download', '/download'],
                ]}
              />
              <p className="mt-4 text-sm leading-6 text-[#D7C8D8]">
                {content.scopeNote}
              </p>
            </div>

            <div className="min-w-0 overflow-hidden rounded-xl border border-[#6B536F] bg-[#33233B] shadow-2xl shadow-black/30">
              <div className="relative aspect-video bg-black">
                <Image
                  src={homeTrailer.thumbnailUrl}
                  alt={homeTrailer.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={homeTrailer.embedUrl}
                  title={homeTrailer.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-[#6B536F] border-t px-4 py-3 text-sm text-[#D7C8D8]">
                <span>Release trailer and postal loop preview</span>
                <a
                  href={homeTrailer.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#7AD6CC] underline underline-offset-4"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickRouteGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-xl border border-[#6B536F] bg-[#33233B] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[#FFB35C] text-[#24131F]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-bold">
                          {group.title}
                        </h2>
                        <p className="text-xs text-[#D7C8D8]">{group.body}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.links.map(([label, href]) =>
                        href.startsWith('http') ? (
                          <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border border-[#6B536F] bg-[#23182A] px-2.5 py-1.5 text-sm transition hover:border-[#7AD6CC] hover:text-[#7AD6CC]"
                          >
                            {label}
                          </a>
                        ) : (
                          <LocaleLink
                            key={href}
                            href={href}
                            className="rounded-md border border-[#6B536F] bg-[#23182A] px-2.5 py-1.5 text-sm transition hover:border-[#7AD6CC] hover:text-[#7AD6CC]"
                          >
                            {label}
                          </LocaleLink>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-xl border border-[#6B536F] bg-[#33233B] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <RadioTower className="mt-1 size-5 shrink-0 text-[#7AD6CC]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFB35C]">
                    {content.siteShapeEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.siteShapeTitle}
                  </h2>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-[#D7C8D8]">
                    {content.siteShapeBody}
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-5">
              {beginnerJourney.map((item, index) => (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-[#6B536F] bg-[#33233B] p-4 transition hover:border-[#7AD6CC] hover:bg-[#402C48]"
                >
                  <span className="inline-flex size-7 items-center justify-center rounded-md bg-[#FF88AC] text-sm font-bold text-[#24131F]">
                    {index + 1}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#D7C8D8]">
                    {item.body}
                  </p>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
              {coreModules.map((module) => {
                const Icon = module.icon;
                return (
                  <div
                    key={module.title}
                    className="rounded-xl border border-[#6B536F] bg-[#33233B] p-5"
                  >
                    <div className="flex gap-3">
                      <Icon className="mt-1 size-5 shrink-0 text-[#7AD6CC]" />
                      <div>
                        <h2 className="font-display text-2xl font-bold">
                          {module.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[#D7C8D8]">
                          {module.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <LocaleLink
                          key={href}
                          href={href}
                          className="rounded-md border border-[#6B536F] bg-[#23182A] px-3 py-2 text-sm transition hover:border-[#FFB35C] hover:text-[#FFB35C]"
                        >
                          {label}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-xl border border-[#6B536F] bg-[#33233B] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFB35C]">
                    {content.coreGuidesEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.coreGuidesTitle}
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#6B536F] bg-[#23182A] text-[#FFF8E7] hover:border-[#7AD6CC] hover:bg-[#402C48]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                  </LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-xl border border-[#6B536F] bg-[#23182A] transition hover:border-[#7AD6CC]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#7AD6CC] text-[#24131F]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#D7C8D8]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-xl border border-[#6B536F] bg-[#33233B] p-5">
                <div className="flex gap-3">
                  <Cat className="mt-1 size-5 shrink-0 text-[#FFB35C]" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl font-bold">
                      {content.currentFactsTitle}
                    </h2>
                    <div className="mt-4 grid gap-3">
                      {gameFacts.map((fact) => (
                        <div
                          key={fact.label}
                          className="rounded-lg border border-[#6B536F] bg-[#23182A] p-3"
                        >
                          <p className="text-sm font-semibold text-[#7AD6CC]">
                            {fact.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[#D7C8D8]">
                            {fact.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#6B536F] bg-[#33233B] p-5">
                <div className="flex gap-3">
                  <Stamp className="mt-1 size-5 shrink-0 text-[#FF88AC]" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-2xl font-bold">
                      {content.findPageTitle}
                    </h2>
                    <div className="mt-4 grid gap-2">
                      {content.coreRouteItems.map((item) =>
                        item.route === 'none' ? null : (
                          <LocaleLink
                            key={`${item.keyword}-${item.route}`}
                            href={item.route}
                            className="rounded-lg border border-[#6B536F] bg-[#23182A] p-3 text-sm transition hover:border-[#FFB35C]"
                          >
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <span className="font-semibold text-[#FFF8E7]">
                                {item.keyword}
                              </span>
                              <span className="text-[#FFB35C]">
                                {item.label}
                              </span>
                            </span>
                          </LocaleLink>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <FaqSection items={content.faq} />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale}>
            <div className="rounded-xl border border-[#6B536F] bg-[#33233B] p-4">
              <div className="flex items-center gap-2">
                <CalendarClock className="size-4 text-[#7AD6CC]" />
                <h2 className="font-display text-lg font-bold">
                  Launch snapshot
                </h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#D7C8D8]">
                Released July 9, 2026 on Windows via Steam. Console and mobile
                ports are not officially confirmed.
              </p>
              <Button
                asChild
                className="mt-4 w-full bg-[#FFB35C] text-[#24131F] hover:bg-[#7AD6CC]"
              >
                <a
                  href={siteFacts.officialSteamUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download className="size-4" />
                  Open Steam
                </a>
              </Button>
            </div>
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
