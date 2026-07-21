import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-07-21';

export const siteFacts = {
  siteName: 'Cat Mail Co.',
  domain: 'https://www.catmailco.org',
  canonicalHost: 'www.catmailco.org',
  gameName: 'Cat Mail Co.',
  creator: 'Maracas Studio',
  publisher: 'Maracas Studio and Gamersky Games',
  officialWebsiteUrl: 'https://maracas-studio.com/',
  officialSteamUrl: 'https://store.steampowered.com/app/4380490/Cat_Mail_Co/',
  officialDemoUrl:
    'https://store.steampowered.com/app/4622530/Cat_Mail_Co_Demo/',
  officialDiscordUrl: 'https://discord.gg/qq6wnVMZTX',
  officialTwitterUrl: 'https://x.com/MaracasStudio',
  officialYouTubeUrl:
    'https://www.youtube.com/channel/UCk4JZ9emeFFx1_IOh-HF-Yw',
  officialBlueSkyUrl: 'https://bsky.app/profile/maracasstudio.bsky.social',
  supportEmail: 'hello@catmailco.org',
  officialCoverImage:
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/6e4907425b2795c1c7e35dd454d4970266178288/capsule_616x353.jpg',
  officialHeroImage:
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/9c206d8a7c8a6133230628b6326f4f08a683b40e/header.jpg',
  officialScreenshot:
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/ef21128321c5baaa093318f407969ac71382d6ab/ss_ef21128321c5baaa093318f407969ac71382d6ab.1920x1080.jpg',
  genre: 'Cozy first-person post office simulation',
  releaseSnapshot:
    'Cat Mail Co. released on Steam for Windows on July 9, 2026. Steam listed a $14.99 US base price and a time-limited launch discount when checked on July 10.',
  platformSnapshot:
    'Windows via Steam is the only confirmed full-game platform. No official Switch, PlayStation, Xbox, macOS, Linux, iOS, or Android store release was verified.',
  positioning:
    'A compact, decision-first Cat Mail Co. wiki for parcel sorting, stamps, moonlight mechanics, solo and four-player co-op, walkthroughs, platforms, demo status, and safe official links.',
} as const;

export const siteDescription =
  'Cat Mail Co. wiki with beginner guides for parcel sorting, stamps, moonlight, co-op, walkthroughs, Steam, demo, platforms, and safe downloads.';

export const gameFacts: GameFact[] = [
  {
    label: 'The postal loop',
    value:
      'Incoming mail arrives by boat. Players weigh, stamp, label, sort, store, hand over, and load parcels while rebuilding a neglected island post office.',
  },
  {
    label: 'No rush design',
    value:
      'Steam describes a stress-free loop without timers or penalties. Organization still matters because a wrong destination can send a parcel back damaged.',
  },
  {
    label: 'Moonlight layer',
    value:
      'Night changes how parcels can be read: moonlight reveals hidden properties that affect how unusual packages should be handled.',
  },
  {
    label: 'Solo or co-op',
    value:
      'The full game supports single-player and online co-op for up to four players. A useful team splits front counter, sorting, labels, and boat loading.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Official Patch Note #2',
    url: 'https://steamcommunity.com/games/4380490/announcements/detail/1838407329256712',
    checkedAt,
    confidence: 'high',
    note: 'Primary source for the July 16 save, parcel-pile, multiplayer, achievement, lobby and boat-storage fixes.',
  },
  {
    type: 'official',
    label: 'Cat Mail Co. Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary source for release date, price snapshot, Windows support, features, languages, requirements, game description, screenshots, and official community links.',
  },
  {
    type: 'official',
    label: 'Cat Mail Co. demo on Steam',
    url: siteFacts.officialDemoUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for demo availability, demo review snapshot, and the early package-handling loop.',
  },
  {
    type: 'official',
    label: 'Steam Community hub',
    url: 'https://steamcommunity.com/app/4380490',
    checkedAt,
    confidence: 'medium',
    note: 'Used for launch announcements and current controller or Steam Deck questions; community reports are treated as leads, not guarantees.',
  },
  {
    type: 'youtube',
    label: 'Full PC walkthrough by Zhain Gaming',
    url: 'https://www.youtube.com/watch?v=0l7rUR6p3Rg',
    checkedAt,
    confidence: 'medium',
    note: 'Current full-release visual cross-check for walkthrough order and post-office flow.',
  },
  {
    type: 'youtube',
    label: 'Advanced tips by Game Launch Central',
    url: 'https://www.youtube.com/watch?v=tLJtB6TMBy0',
    checkedAt,
    confidence: 'medium',
    note: 'Selected for workflow and stamp-system optimization topics. Advice is rewritten as original player-facing guidance rather than transcript reuse.',
  },
  {
    type: 'youtube',
    label: 'Steam Deck gameplay by Video Chums',
    url: 'https://www.youtube.com/watch?v=0cupOtp3Wik',
    checkedAt,
    confidence: 'medium',
    note: 'Visual evidence that the game can run on Steam Deck hardware; not proof of Valve verification or full controller support.',
  },
  {
    type: 'youtube',
    label: 'Release trailer',
    url: 'https://www.youtube.com/watch?v=abAd17fXbA0',
    checkedAt,
    confidence: 'high',
    note: 'Homepage trust video for the current release, art direction, package loop, and Cat Island setting.',
  },
  {
    type: 'competitor',
    label: 'GameFAQs game page',
    url: 'https://gamefaqs.gamespot.com/pc/665941-cat-mail-co',
    checkedAt,
    confidence: 'medium',
    note: 'Competitor inventory confirms platform and release intent but currently has no mature walkthrough library.',
  },
  {
    type: 'competitor',
    label: 'Gamepressure overview',
    url: 'https://www.gry-online.pl/gry/cat-mail-co/z67366',
    checkedAt,
    confidence: 'medium',
    note: 'Benchmarked for first-person gameplay, organization, parcel sending, night mechanics, and co-op topic breadth.',
  },
  {
    type: 'serper',
    label: 'Serper autocomplete and related searches',
    url: 'https://google.serper.dev/',
    checkedAt,
    confidence: 'medium',
    note: 'Returned Steam, price, demo, Switch, PS5, Xbox, cost, app, guide, walkthrough, and co-op candidates. No reliable codes or tier-list demand appeared.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'Cat Mail Co',
    intent: 'Find the game and a structured help hub.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement, Steam, current release coverage.',
    notes: 'Homepage owns the exact game entity and current status.',
  },
  {
    keyword: 'Cat Mail Co wiki',
    intent: 'Browse systems, guides, and reliable status pages.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement and wiki intent pattern.',
    notes: 'Use a hub-and-spoke launch set instead of an unsupported database.',
  },
  {
    keyword: 'Cat Mail Co guide',
    intent: 'Find practical gameplay help.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper autocomplete and YouTube guide results.',
    notes: 'Guide hub distributes all decision pages.',
  },
  {
    keyword: 'Cat Mail Co walkthrough',
    intent: 'Follow the story and post-office progression in order.',
    route: '/walkthrough',
    priority: 'P0',
    status: 'keep',
    evidence: 'Exact autocomplete plus current full-game YouTube walkthrough.',
    notes: 'Separate from beginner tips because it answers progression order.',
  },
  {
    keyword: 'Cat Mail Co co op',
    intent: 'Learn player count and divide jobs with friends.',
    route: '/co-op',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Autocomplete, Steam online co-op category, official four-player claim.',
    notes: 'Dedicated workflow page with solo/duo/squad job splits.',
  },
  {
    keyword: 'Cat Mail Co tips',
    intent: 'Improve sorting and stamp efficiency.',
    route: '/tips',
    priority: 'P0',
    status: 'keep',
    evidence: 'Fresh advanced-tips video and launch gameplay.',
    notes:
      'Current-version guide; avoid fixed claims that need game-file extraction.',
  },
  {
    keyword: 'Cat Mail Co beginner guide',
    intent: 'Understand the first workday and clean station setup.',
    route: '/guides/beginner-guide',
    priority: 'P0',
    status: 'keep',
    evidence: 'Natural launch intent plus current gameplay sources.',
    notes: 'Start-here route links sorting, stamps, night shift, and co-op.',
  },
  {
    keyword: 'Cat Mail Co price',
    intent: 'Check cost and release status.',
    route: '/release-date',
    priority: 'P0',
    status: 'keep',
    evidence: 'Autocomplete and live Steam price snapshot.',
    notes: 'Steam remains the source of truth for regional/current pricing.',
  },
  {
    keyword: 'Cat Mail Co demo',
    intent: 'Try the game before buying.',
    route: '/demo',
    priority: 'P0',
    status: 'keep',
    evidence: 'Autocomplete and live Steam demo app.',
    notes: 'Explain scope without promising save transfer.',
  },
  {
    keyword: 'Cat Mail Co Steam',
    intent: 'Find official PC purchase/download page.',
    route: '/download',
    priority: 'P0',
    status: 'keep',
    evidence: 'Autocomplete and official Steam launch.',
    notes: 'Safe-download route points only to official Steam pages.',
  },
  {
    keyword: 'Cat Mail Co Switch',
    intent: 'Check Nintendo Switch availability.',
    route: '/platforms',
    priority: 'P1',
    status: 'watch',
    evidence: 'Autocomplete/related searches; no official store page.',
    notes: 'Status answer only; do not claim a port or date.',
  },
  {
    keyword: 'Cat Mail Co PS5',
    intent: 'Check PlayStation availability.',
    route: '/platforms',
    priority: 'P1',
    status: 'watch',
    evidence: 'Related searches; no official PlayStation listing.',
    notes: 'Platforms page owns this watch intent.',
  },
  {
    keyword: 'Cat Mail Co Xbox',
    intent: 'Check Xbox availability.',
    route: '/platforms',
    priority: 'P1',
    status: 'watch',
    evidence: 'Related searches; no official Xbox listing.',
    notes: 'Platforms page owns this watch intent.',
  },
  {
    keyword: 'Cat Mail Co Steam Deck',
    intent: 'Check handheld playability and controls.',
    route: '/steam-deck',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Current Steam Deck gameplay video plus community controller questions.',
    notes: 'Separate observed playability from official verification.',
  },
  {
    keyword: 'Cat Mail Co app',
    intent: 'Look for a mobile app or download.',
    route: '/platforms',
    priority: 'P1',
    status: 'watch',
    evidence: 'Related search plus unsafe APK pages in results.',
    notes:
      'Answer that no official mobile version was verified and warn about APK mirrors.',
  },
  {
    keyword: 'Cat Mail Co codes',
    intent: 'Look for redeem codes.',
    route: 'none',
    priority: 'P3',
    status: 'ignore',
    evidence:
      'No autocomplete support and no official redemption system found.',
    notes: 'Do not publish a fake codes page.',
  },
  {
    keyword: 'Cat Mail Co tier list',
    intent: 'Rank characters or items.',
    route: 'none',
    priority: 'P3',
    status: 'ignore',
    evidence:
      'No search support and the game loop has no verified rankable roster system.',
    notes: 'Do not force a template tier page into this game.',
  },
  {
    keyword: 'Cat Mail Co APK / crack / trainer',
    intent: 'Unsafe or unauthorized download.',
    route: '/download',
    priority: 'P2',
    status: 'ignore',
    evidence: 'Unsafe APK and trainer pages appeared in current search.',
    notes:
      'Safe official-download warning only; no files or bypass instructions.',
  },
];
