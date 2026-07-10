import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides, siteDescription } from './guides';
import { gameFacts, keywordMatrix } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeLinkCopy {
  title: string;
  body: string;
}

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  siteShapeEyebrow: string;
  siteShapeTitle: string;
  siteShapeBody: string;
  systemsEyebrow: string;
  systemsTitle: string;
  systemsBody: string;
  coreGuidesEyebrow: string;
  coreGuidesTitle: string;
  allGuidesButton: string;
  currentFactsTitle: string;
  findPageTitle: string;
  primaryLinks: {
    beginner: HomeLinkCopy;
    platforms: HomeLinkCopy;
    tips: HomeLinkCopy;
    coop: HomeLinkCopy;
    review: HomeLinkCopy;
  };
  secondaryLinks: {
    release: HomeLinkCopy;
    demo: HomeLinkCopy;
    steamDeck: HomeLinkCopy;
    sorting: HomeLinkCopy;
    moonlight: HomeLinkCopy;
    discord: HomeLinkCopy;
  };
  routeLabels: Record<string, string>;
  coreRouteItems: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  sectionsTitle: string;
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  relatedTitle: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const coreRouteItems = keywordMatrix
    .filter((item) => item.status === 'keep' || item.status === 'watch')
    .slice(0, 24)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Cat Mail Co. wiki and guide hub',
    metadataTitle: 'Cat Mail Co Wiki - Guides, Walkthrough and Co-op Tips',
    title: 'Cat Mail Co',
    intro:
      'A cozy post office guide hub for parcel sorting, stamps, moonlight, solo and four-player co-op, walkthroughs, Steam, platforms, and safe downloads.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Follow the walkthrough',
    scopeNote:
      'Updated for the July 9, 2026 Steam launch with current official store data and fresh full-game YouTube cross-checks.',
    siteShapeEyebrow: 'Launch-day coverage',
    siteShapeTitle: 'Every page answers a real postal or platform decision',
    siteShapeBody:
      'The launch set focuses on guide, walkthrough, co-op, tips, price, demo, Switch, PS5, Xbox, Steam Deck, and safe download intent. There is no fake codes page, tier list, APK, or unsupported database.',
    systemsEyebrow: 'The postal rhythm',
    systemsTitle:
      'Receive, inspect, weigh, stamp, label, sort, load, and read the night',
    systemsBody:
      'Incoming mail arrives by boat and must reach the right destination. Moonlight reveals hidden package properties, while new tools, abilities, and routes expand the post office.',
    coreGuidesEyebrow: 'Fresh guides',
    coreGuidesTitle: 'Choose the job currently blocking your mail flow',
    allGuidesButton: 'Browse all guides',
    currentFactsTitle: 'Current game snapshot',
    findPageTitle: 'Search intent to page map',
    primaryLinks: {
      beginner: {
        title: 'Beginner Guide',
        body: 'Create a clean receive-to-boat routine before the post office gets crowded.',
      },
      platforms: {
        title: 'Platforms',
        body: 'Windows and Steam are confirmed; console and mobile searches remain watch items.',
      },
      tips: {
        title: 'Tips and Tricks',
        body: 'Reduce walking, expose parcel state, protect labels, and close each shift cleanly.',
      },
      coop: {
        title: 'Co-op Guide',
        body: 'Use stable handoffs and practical roles for two, three, or four players.',
      },
      review: {
        title: 'Should You Buy?',
        body: 'Decide whether the relaxed physical sorting loop and co-op fit your group.',
      },
    },
    secondaryLinks: {
      release: {
        title: 'Release and Price',
        body: 'Out now on Steam since July 9, 2026; check the live store for regional pricing.',
      },
      demo: {
        title: 'Demo',
        body: 'Test parcel handling, controls, performance, co-op, and post-office layout.',
      },
      steamDeck: {
        title: 'Steam Deck',
        body: 'Observed running on Deck, but official verification and full controller support are unclear.',
      },
      sorting: {
        title: 'Package Sorting',
        body: 'Separate parcel state first and destination second so every box has a next action.',
      },
      moonlight: {
        title: 'Night Shift',
        body: 'Keep an exception shelf and inspect unusual parcels when moonlight reveals more.',
      },
      discord: {
        title: 'Official Links',
        body: 'Open Discord, Steam Community, X, YouTube, and Bluesky safely.',
      },
    },
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'Is Cat Mail Co. out now?',
        answer:
          'Yes. The current Steam release date is July 9, 2026, with Windows as the confirmed platform.',
      },
      {
        question: 'Can Cat Mail Co. be played with friends?',
        answer:
          'Yes. Steam and the official description confirm online co-op for up to four players, as well as solo play.',
      },
      {
        question: 'Is Cat Mail Co. on Switch, PS5, Xbox, or mobile?',
        answer:
          'No official console or mobile release was verified at the July 10 check. Avoid third-party APK pages.',
      },
      {
        question: 'Are there Cat Mail Co. codes or a tier list?',
        answer:
          'No verified redeem-code or rankable roster system supports those pages, so this site does not invent them.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'Cat Mail Co. guides',
    title: 'Cat Mail Co Guide Hub',
    intro:
      'Choose a focused guide for your first shift, package sorting, stamps and labels, moonlight, co-op, walkthrough, advanced tips, release and price, demo, platforms, Steam Deck, review, download, or official links.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which Cat Mail Co. guide should I read first?',
        answer:
          'Start with the beginner guide, then open package sorting and stamps. Use the night-shift guide when moonlight mechanics begin to matter.',
      },
      {
        question: 'Are these guides for the full game?',
        answer:
          'They use the July 2026 full-release Steam record and current full-game video cross-checks, with demo material only where it still explains the same loop.',
      },
      {
        question: 'Will more story and package data be added?',
        answer:
          'Only when current, verifiable data supports useful pages. The launch set avoids thin entity pages and unnecessary spoilers.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sectionsTitle: 'Sections',
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix:
      'selected for current visual context while the written guidance remains original.',
    officialTitle: 'Official game link',
    officialBody:
      'Use Steam and Maracas Studio channels for current purchase, patch, platform, demo, and community information.',
    officialLinkLabel: 'Open Cat Mail Co. on Steam',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      'Post Office': 'Post Office',
      'Night Shift': 'Night Shift',
      'Co-op': 'Co-op',
      Platform: 'Platform',
      Community: 'Community',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Status: 'Status',
    },
  };
}

export const routeLabels: Record<string, string> = {
  '/': 'Cat Mail Co. Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/package-sorting': 'Package Sorting',
  '/guides/stamps-and-labels': 'Stamps and Labels',
  '/guides/night-shift': 'Night Shift and Moonlight',
  '/co-op': 'Co-op Guide',
  '/walkthrough': 'Walkthrough',
  '/tips': 'Tips and Tricks',
  '/release-date': 'Release Date and Price',
  '/demo': 'Demo Guide',
  '/platforms': 'Platforms',
  '/steam-deck': 'Steam Deck',
  '/review': 'Review',
  '/download': 'Official Download',
  '/discord': 'Discord and Links',
  '/disclaimer': 'Disclaimer',
};
