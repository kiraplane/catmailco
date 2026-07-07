import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-07-07';

export const siteFacts = {
  siteName: 'Moonlight Peaks',
  domain: 'https://www.moonlightpeaks.org',
  canonicalHost: 'www.moonlightpeaks.org',
  gameName: 'Moonlight Peaks',
  creator: 'Little Chicken',
  publisher: 'XSEED Games / Marvelous Europe',
  officialWebsiteUrl: 'https://www.moonlightpeaks.com/',
  officialSteamUrl:
    'https://store.steampowered.com/app/2209900/Moonlight_Peaks/',
  officialNintendoUrl:
    'https://www.nintendo.com/us/store/products/moonlight-peaks-nintendo-switch-2-edition-switch-2/',
  officialGooglePlayUrl:
    'https://play.google.com/store/apps/details?id=com.xseed.moonlightpeaks',
  officialDiscordUrl: 'https://discord.com/invite/heWNF8A8Aw',
  officialYouTubeUrl: 'https://www.youtube.com/@XSEEDgames',
  supportEmail: 'hello@moonlightpeaks.org',
  officialCoverImage: 'https://i.ytimg.com/vi/Z_rxfOWb54I/hq720.jpg',
  officialHeroImage: 'https://i.ytimg.com/vi/Z_rxfOWb54I/hq720.jpg',
  officialScreenshot: 'https://i.ytimg.com/vi/Z_rxfOWb54I/hq720.jpg',
  genre: 'Supernatural life simulation and farming sim',
  releaseSnapshot:
    'Steam lists Moonlight Peaks as released on Jul 6, 2026, while the official site and Nintendo listings frame the console launch around Jul 7, 2026.',
  platformSnapshot:
    'Official sources point players to Steam for Windows and macOS, Nintendo Switch, Nintendo Switch 2, and Google Play Games / Android. The Steam page also exposes Steam Deck-adjacent demand through PC controls and system requirements.',
  positioning:
    'A player-first Moonlight Peaks guide hub for launch setup, platforms, beginner route, romance, gifts, farming, spells, Nokturna, demo carry-over questions, and safe cheats/download guidance.',
} as const;

export const siteDescription =
  'Moonlight Peaks wiki for guides, database, tools, romance, gifts, farming, magic, platforms, demo, Steam Deck, Switch, and safe cheats.';

export const gameFacts: GameFact[] = [
  {
    label: 'Game identity',
    value:
      "Moonlight Peaks is a cozy-gothic supernatural life sim where Dracula's child builds a farm, learns spells, grows enchanted crops, and befriends or romances the town.",
  },
  {
    label: 'Launch status',
    value:
      'Steam shows a Jul 6, 2026 release, while the official site, Nintendo pages, and regional coverage use Jul 7, 2026 for the broad launch window.',
  },
  {
    label: 'Confirmed platforms',
    value:
      'Steam on Windows and macOS, Nintendo Switch, Nintendo Switch 2, and Google Play Games / Android are the main official platform paths to check first.',
  },
  {
    label: 'Main guide clusters',
    value:
      'Beginner route, release/demo, platform picker, Switch, Steam Deck, romance/dateables, gifts, farming, magic, fishing, Nokturna, cheats safety, and Discord links.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Official Moonlight Peaks website',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for launch timing, official platform links, demo availability, core systems, seven families, Discord, and visual direction.',
  },
  {
    type: 'official',
    label: 'Steam store page',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for release date, developer, publishers, Windows/macOS requirements, Steam achievements, supported languages, price snapshot, demo button, and system descriptions.',
  },
  {
    type: 'official',
    label: 'Nintendo store page',
    url: siteFacts.officialNintendoUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for Switch 2 route confidence and platform-specific search demand.',
  },
  {
    type: 'wiki',
    label: 'Official wiki.gg community wiki',
    url: 'https://moonlightpeaks.wiki.gg/',
    checkedAt,
    confidence: 'medium',
    note: 'Used only as a data/source lead for flowers, character, and system pages; public copy stays original and decision-first.',
  },
  {
    type: 'wiki',
    label: 'MoonlightPeaksWiki.com competitor',
    url: 'https://moonlightpeakswiki.com/',
    checkedAt,
    confidence: 'medium',
    note: 'Benchmarked for launch hub breadth: release, demo, platforms, characters, romance, locations, activities, items, tools, FAQ, and localization.',
  },
  {
    type: 'wiki',
    label: 'MoonlightPeaksWiki.com tools and database routes',
    url: 'https://moonlightpeakswiki.com/tools',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a competitor feature lead for Platform Picker, romance/gift helpers, Item Tracker, Farming Profit Planner, characters, families, locations, and item indexes.',
  },
  {
    type: 'youtube',
    label: 'XSEED Moonlight Peaks supernatural gameplay trailer',
    url: 'https://www.youtube.com/watch?v=Z_rxfOWb54I',
    checkedAt,
    confidence: 'high',
    note: 'Selected as homepage trust video and broad gameplay visual source.',
  },
  {
    type: 'youtube',
    label: 'Wish I Knew beginner tips',
    url: 'https://www.youtube.com/watch?v=lDM6sgYTbqk',
    checkedAt,
    confidence: 'medium',
    note: 'Launch-day YouTube result used as a cross-check for beginner and first-week player questions.',
  },
  {
    type: 'youtube',
    label: 'Wish I Knew dateables overview',
    url: 'https://www.youtube.com/watch?v=YFb9capELQw',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a relationship-intent video source lead for dateables and romance pages.',
  },
  {
    type: 'community',
    label: 'Reddit first-20-days thread',
    url: 'https://www.reddit.com/r/cozygames/comments/1tc0nyk/i_played_the_first_20_days_of_moonlight_peaks/',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a community cross-check for first-week pain points: storage flow, energy, quests, controller comfort, collecting, and customization.',
  },
  {
    type: 'manual_review',
    label: 'OpenClaw keyword API attempt',
    url: 'https://shipmanager-dun.vercel.app/api/keywords',
    checkedAt,
    confidence: 'watch',
    note: 'Queried for "moonlight peaks" and no existing keyword records were returned, so the matrix uses Google suggest, normal search, official pages, YouTube, Steam, Reddit, and competitor benchmarking.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'moonlight peaks',
    intent: 'Head term and game identity.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns the head term, Steam and official site are active, and the user requires this keyword.',
    notes:
      'Homepage should behave as a compact wiki hub, not a marketing splash page.',
  },
  {
    keyword: 'moonlight peaks wiki',
    intent: 'Find a structured guide hub and reference map.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'User requirement; Google suggest returns wiki variants; wiki.gg and moonlightpeakswiki.com appear in results.',
    notes: 'Use homepage plus hubs for the highest-value routes.',
  },
  {
    keyword: 'moonlight peaks guides',
    intent: 'Browse player help after launch.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence:
      'User requirement plus Google suggest for guide/walkthrough/gift guide.',
    notes: 'Guide hub links every article and important platform page.',
  },
  {
    keyword: 'moonlight peaks release date',
    intent: 'Confirm launch timing and current availability.',
    route: '/release-date',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns release-date variants; Steam and official site have current dates.',
    notes:
      'Separate page because launch timing differs slightly by platform/source.',
  },
  {
    keyword: 'moonlight peaks demo',
    intent:
      'Find demo platforms, length, save carry-over, and whether it is worth trying.',
    route: '/demo',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns demo length, Switch demo, carry over, review, walkthrough, update, and save.',
    notes: 'Answer carry-over safely without overpromising.',
  },
  {
    keyword: 'moonlight peaks platforms',
    intent:
      'Choose between Steam, Mac, Steam Deck, Switch, Switch 2, and Android.',
    route: '/platforms',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Official site exposes Steam, Nintendo Switch 2, Nintendo Switch, and Google Play links.',
    notes:
      'Main platform picker page owns Android and missing PS5/Xbox questions.',
  },
  {
    keyword: 'moonlight peaks switch',
    intent: 'Switch and Switch 2 release/price/physical copy questions.',
    route: '/switch',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns Switch, Switch 2, release date, price, physical copy, Switch 1, and Switch 2 price.',
    notes: 'Keep original Switch and Switch 2 notes together.',
  },
  {
    keyword: 'moonlight peaks steam deck',
    intent: 'Check handheld PC play, controls, demo, and settings.',
    route: '/steam-deck',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns Steam Deck and demo Steam Deck; Steam provides PC specs and controller tags.',
    notes: 'Do not claim Verified unless Steam shows it.',
  },
  {
    keyword: 'moonlight peaks romance options',
    intent:
      'Find romanceable characters, dateables, families, marriage, and route planning.',
    route: '/romance',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns romance options, romanceable characters, candidates, guide, wiki, and love interests; Steam says two dozen romanceable characters.',
    notes: 'Use relationship planning, not an unverified gift table dump.',
  },
  {
    keyword: 'moonlight peaks characters',
    intent: 'Find residents, dateable characters, family groups, and profiles.',
    route: '/characters',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns characters, characters wiki, dateable characters, and male characters.',
    notes:
      'Current public data supports a resident/family overview, not a complete database.',
  },
  {
    keyword: 'moonlight peaks database',
    intent:
      'Browse structured launch data for characters, families, locations, and item indexes.',
    route: '/database',
    priority: 'P0',
    status: 'keep',
    evidence:
      'moonlightpeakswiki.com exposes characters, families, locations, items, and tools hubs; wiki.gg and Fandom expose page-title data for database seeding.',
    notes:
      'Use source-aware database rows with confidence labels instead of copying competitor prose or images.',
  },
  {
    keyword: 'moonlight peaks character database',
    intent:
      'Filter residents by species, family, romance status, birthday, image availability, and source confidence.',
    route: '/database/characters',
    priority: 'P0',
    status: 'keep',
    evidence:
      'wiki.gg character infoboxes include pronouns, birthdays, species, town links, occupations, families, and portrait filenames for many residents.',
    notes:
      'Keep exact gifts and route mechanics marked TBC until stable live-game data exists.',
  },
  {
    keyword: 'moonlight peaks families',
    intent:
      'Understand the supernatural family structure and which residents belong together.',
    route: '/database/families',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official sources mention seven families; wiki.gg/Fandom and competitor pages expose Ambrosia, Logan, Webb, Hosu, Khazan, Henderson, and Dracula groupings.',
    notes:
      'Useful internal link bridge between romance, characters, and locations.',
  },
  {
    keyword: 'moonlight peaks locations',
    intent:
      'Find town areas, shops, the farm, landmarks, mines, and family places.',
    route: '/database/locations',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Competitor locations page and wiki.gg titles list town, farm, cottage, shops, graveyard, mansion, lake, forest, mines, and landmarks.',
    notes:
      'Mark datamined or lightly described landmarks separately from official locations.',
  },
  {
    keyword: 'moonlight peaks item tracker',
    intent:
      'Track crops, flowers, tools, animals, resources, recipes, and collection rows.',
    route: '/tools/item-tracker',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Competitor tool inventory includes an item tracker; wiki.gg and Fandom expose large item/category page sets.',
    notes:
      'Local-only checklist is safer than publishing unverified price or gift tables.',
  },
  {
    keyword: 'moonlight peaks tools',
    intent:
      'Use interactive helpers for platform decisions, romance planning, item tracking, and farming math.',
    route: '/tools',
    priority: 'P1',
    status: 'keep',
    evidence:
      'moonlightpeakswiki.com/tools lists Platform Picker, Romance Gift Finder, Match Quiz, Romance Planner, Item Tracker, Farming Profit Planner, and Submit Data.',
    notes:
      'Build fewer but more reliable tools first: picker, romance tracker, item tracker, and manual farming calculator.',
  },
  {
    keyword: 'moonlight peaks platform picker',
    intent:
      'Choose Steam, Steam Deck, Switch, Switch 2, or Android based on play style and safety.',
    route: '/tools/platform-picker',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Competitor tool exists and official platform spread creates real decision demand.',
    notes:
      'Keep current store checks on platform pages; tool is recommendation logic.',
  },
  {
    keyword: 'moonlight peaks romance tracker',
    intent:
      'Shortlist romance candidates and keep private notes for gifts, schedules, and heart events.',
    route: '/tools/romance-tracker',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Competitor has romance helper tools and character pages; Steam says the game has two dozen romanceable characters.',
    notes:
      'Use localStorage for notes and keep unverified gifts out of hard-coded claims.',
  },
  {
    keyword: 'moonlight peaks farming calculator',
    intent:
      'Compare crop profit scenarios with player-entered seed cost, sell value, days, harvests, and extra cost.',
    route: '/tools/farming-profit-calculator',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Competitor Farming Profit Planner exists; exact crop economics still need live-game verification.',
    notes:
      'Manual calculator captures the tool intent without publishing guessed crop tables.',
  },
  {
    keyword: 'moonlight peaks gift guide',
    intent: 'Choose what to give residents and how to track liked gifts.',
    route: '/gifts',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Google suggest returns gift guide; launch guides highlight handmade presents and daily gift tracking.',
    notes: 'Publish a safe gift strategy page until exact likes are verified.',
  },
  {
    keyword: 'moonlight peaks farming',
    intent:
      'Learn night farming, crops, livestock, storage, early money, and farm upgrades.',
    route: '/farming',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official site and Steam both emphasize mystical crops, enchanted crops, magical livestock, tools, and farm development.',
    notes:
      'High-value cozy-sim intent even when exact crop prices are still moving.',
  },
  {
    keyword: 'moonlight peaks magic',
    intent: 'Understand spells, potions, shapeshifting, and resource chores.',
    route: '/magic',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official site highlights spell learning, potion brewing, Alter Ego Elixir, and shapeshifting.',
    notes: 'Use as a systems hub for spells and potions.',
  },
  {
    keyword: 'moonlight peaks fishing',
    intent: 'Find fishing rod, fishing basics, and early activity advice.',
    route: '/guides/fishing-guide',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Google suggest returns fishing and fishing rod; Steam lists fishing as an activity.',
    notes: 'Guide article can expand after fish tables are verified.',
  },
  {
    keyword: 'moonlight peaks nokturna',
    intent:
      'Learn the in-game card activity and where it fits in daily planning.',
    route: '/nokturna',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Steam says players can collect cards for the town game Nokturna and play residents.',
    notes: 'Create a current mechanics/status page, not a fake card database.',
  },
  {
    keyword: 'moonlight peaks walkthrough',
    intent:
      'First week route, quest direction, daily loop, and what to do when stuck.',
    route: '/walkthrough',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Google suggest returns walkthrough and demo walkthrough; YouTube has launch-week gameplay and beginner videos.',
    notes: 'Make it spoiler-light and quest-direction-focused.',
  },
  {
    keyword: 'moonlight peaks cheats',
    intent:
      'Find console commands, trainers, mods, and money/energy shortcuts.',
    route: '/cheats',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Search results include GameWatcher cheats and trainer pages; not official redeem-code demand.',
    notes:
      'Publish a safe status page: no fake official codes, no modified-client instructions, clear risk warnings.',
  },
  {
    keyword: 'moonlight peaks download',
    intent: 'Find safe official download paths and avoid mirrors.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Download intent appears naturally around launch and demo availability.',
    notes: 'Point to Steam/Nintendo/Google Play only.',
  },
  {
    keyword: 'moonlight peaks discord',
    intent: 'Find official community and support links.',
    route: '/discord',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official site has a Discord link and Steam exposes official links.',
    notes: 'Keep invite safety guidance compact.',
  },
  {
    keyword: 'moonlight peaks price',
    intent: 'Compare Steam price, launch discount, and Switch price terms.',
    route: '/release-date',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Google suggest returns price, Steam price, Switch price, and Switch 2 price.',
    notes: 'Fold into release page to avoid thin price-only pages.',
  },
  {
    keyword: 'moonlight peaks system requirements',
    intent: 'Check PC/Mac requirements and buy confidence.',
    route: '/steam-deck',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Google suggest returns system requirements; Steam lists Windows and macOS specs.',
    notes:
      'Steam Deck page can own settings and requirements until a dedicated specs page is needed.',
  },
  {
    keyword: 'moonlight peaks ps5',
    intent: 'Check PlayStation availability.',
    route: '/platforms',
    priority: 'P2',
    status: 'watch',
    evidence:
      'Google suggest returns PS5 and PS5 release date, but official sources checked do not list PS5.',
    notes: 'Answer inside platform FAQ; do not create a PS5 page yet.',
  },
  {
    keyword: 'moonlight peaks xbox',
    intent: 'Check Xbox availability.',
    route: '/platforms',
    priority: 'P2',
    status: 'watch',
    evidence:
      'Google suggest returns Xbox and Xbox release date, but official sources checked do not list Xbox.',
    notes: 'Answer inside platform FAQ; do not create an Xbox page yet.',
  },
  {
    keyword: 'moonlight peaks codes',
    intent: 'Redeem codes or promo codes.',
    route: '/cheats',
    priority: 'P2',
    status: 'ignore',
    evidence:
      'No official redeem-code system found in Steam, official site, or platform listings.',
    notes:
      'Do not publish fake codes. Mention there are no verified official codes on the cheats/status page.',
  },
];
