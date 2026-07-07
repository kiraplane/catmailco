import { checkedAt, siteDescription, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;

const videos = {
  officialGameplay: {
    id: 'Z_rxfOWb54I',
    title: 'Moonlight Peaks - Supernatural Gameplay Trailer',
    channel: 'XSEEDgames',
    url: 'https://www.youtube.com/watch?v=Z_rxfOWb54I',
    thumbnailUrl: videoCover('Z_rxfOWb54I'),
    publishedAt: '2026-06',
    checkedAt,
  },
  releaseDate: {
    id: 'WVq7t_GwGvE',
    title: 'Moonlight Peaks - Official Release Date Trailer',
    channel: 'GameTrailers',
    url: 'https://www.youtube.com/watch?v=WVq7t_GwGvE',
    thumbnailUrl: videoCover('WVq7t_GwGvE'),
    publishedAt: '2026-06',
    checkedAt,
  },
  beginnerTips: {
    id: 'lDM6sgYTbqk',
    title: '50 Beginner Tips & Tricks for Moonlight Peaks',
    channel: 'Wish I Knew',
    url: 'https://www.youtube.com/watch?v=lDM6sgYTbqk',
    thumbnailUrl: videoCover('lDM6sgYTbqk'),
    publishedAt: '2026-07-07',
    checkedAt,
  },
  beforePlaying: {
    id: 'aTwYn_nx4gQ',
    title: 'Everything You Need To Know Before Playing Moonlight Peaks',
    channel: 'Cozy game creator',
    url: 'https://www.youtube.com/watch?v=aTwYn_nx4gQ',
    thumbnailUrl: videoCover('aTwYn_nx4gQ'),
    publishedAt: '2026-07-05',
    checkedAt,
  },
  dateables: {
    id: 'YFb9capELQw',
    title: 'Meet the Dateables in Moonlight Peaks',
    channel: 'Wish I Knew',
    url: 'https://www.youtube.com/watch?v=YFb9capELQw',
    thumbnailUrl: videoCover('YFb9capELQw'),
    publishedAt: '2026-06',
    checkedAt,
  },
  demo: {
    id: 'F6KL5N5AfYY',
    title: "Let's Try Moonlight Peaks",
    channel: 'Cozy demo playthrough',
    url: 'https://www.youtube.com/watch?v=F6KL5N5AfYY',
    thumbnailUrl: videoCover('F6KL5N5AfYY'),
    publishedAt: '2026-06',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export { siteDescription };

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Moonlight Peaks Beginner Guide',
    seoTitle: 'Moonlight Peaks Beginner Guide - First Week Tips',
    seoDescription:
      'Start Moonlight Peaks with a first-week route for platforms, demo habits, night farming, gifts, spells, storage, quests, and Nokturna.',
    summary:
      'Your first save should solve direction before optimization: learn the night loop, spend energy on unlocks, talk to residents daily, and treat the demo as practice.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.beginnerTips.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Moonlight Peaks beginner guide',
      'Moonlight Peaks tips',
      'Moonlight Peaks first week guide',
    ],
    sourceNotes:
      'Built from official site/Steam mechanics, launch-day Google suggest, early reviews, Reddit first-days questions, and current YouTube beginner results.',
    video: videos.beginnerTips,
    tags: ['Beginner', 'First week', 'Night loop'],
    relatedRoutes: ['/demo', '/platforms', '/farming', '/magic', '/romance'],
    body: [
      {
        heading: 'Start by choosing the right version',
        paragraphs: [
          'Moonlight Peaks launched into a confusing window: Steam lists Jul 6, 2026, while the official site and Nintendo pages frame the broader launch around Jul 7, 2026. Before you plan a save, confirm which version you are actually playing. Steam is the clearest path for Windows and macOS, Nintendo covers Switch and Switch 2, and Google Play Games / Android has its own store path.',
          'If you are still undecided, try the demo only as a feel test. Use it to check controls, character creation, the tone of the writing, and whether night-based farming clicks for you. Do not make a perfect long-term plan from a demo save unless your platform explicitly confirms carry-over for the build you installed.',
        ],
        bullets: [
          'Use Steam for PC and Mac requirements, achievements, and discount checks.',
          'Use the platform picker if you are choosing between Switch, Switch 2, Steam Deck, and Android.',
          'Use the demo to learn controls, not to hoard items for a final save.',
        ],
      },
      {
        heading: 'Spend the first nights on unlocks, not perfection',
        paragraphs: [
          'Moonlight Peaks looks cozy, but the early loop still asks you to budget stamina, time, storage, and quest attention. The best first-week habit is to clear enough space to function, plant and water what the game teaches, talk to residents you pass, and follow quest prompts that introduce systems. You will get more value from unlocking a spell, tool, area, or resident routine than from squeezing one more random crop into a messy night.',
          'Community early-play questions point to a common friction point: storage and daily energy feel tight. That does not mean you should stop collecting. It means you should sell low-commitment forage when you need gold now, keep wood and stone for upgrades, and avoid spending the entire night reorganizing your inventory while quest triggers wait elsewhere.',
        ],
      },
      {
        heading: 'Talk, gift, and play socially every day',
        paragraphs: [
          'Relationships are a major pillar, not a late-game side mode. Steam says the town includes two dozen romanceable characters and seven families, and the game tracks social actions such as talking, gifting, and activities. Even before exact gift charts stabilize, your best route is simple: speak to people daily, test handmade gifts carefully, and write down results instead of trusting random lists.',
          'Do not rush a romance choice before you know the family context. Moonlight Peaks is built around supernatural factions, heart events, marriage, and the idea of making an eternal life with one partner. Use the characters and romance pages first, then move into gifts once you know whose route you are actually following.',
        ],
      },
      {
        heading: 'Let magic shorten chores',
        paragraphs: [
          'The official site highlights spells, potions, and shapeshifting as practical farm tools. That is the part new players should watch for: magic is not only flavor, it is how the game starts bending farm chores around a vampire schedule. When a quest teaches a spell pattern or form change, practice it until it saves time instead of sitting unused in a menu.',
          'Nokturna, fishing, flower arranging, embroidery, foraging, and collecting can all pull you away from the farm. That is fine. Moonlight Peaks is not asking for a spreadsheet-perfect first season. It is asking you to build a rhythm where daily chores, one social target, and one unlock path all move a little each night.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Moonlight Peaks?',
        answer:
          'Confirm your platform, follow the early quests that unlock core systems, clear enough farm space to work, and talk to residents daily before chasing perfect crop profit.',
      },
      {
        question: 'Does Moonlight Peaks have combat?',
        answer:
          'Current official and preview positioning emphasizes farming, magic, relationships, crafting, collecting, and story rather than combat.',
      },
      {
        question: 'Should I use a controller?',
        answer:
          'A controller is a good first choice for cozy sim movement and radial menus, but PC players should still test mouse input because spell patterns may feel comfortable there.',
      },
    ],
  },
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Moonlight Peaks Release Date, Price, and Launch Status',
    seoTitle: 'Moonlight Peaks Release Date - Steam, Switch, Android Price',
    seoDescription:
      'Check Moonlight Peaks release date, launch status, demo, price notes, Steam launch discount, Switch and Switch 2 availability, and Android status.',
    summary:
      'The safest launch answer is platform-specific: Steam shows Jul 6, while official/Nintendo launch messaging points to Jul 7 for the wider release.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: videos.releaseDate.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks release date',
      'Moonlight Peaks price',
      'Moonlight Peaks launch trailer',
    ],
    sourceNotes:
      'Cross-checked against official site, Steam store, Nintendo listing, Google Play result, and launch trailer search results on July 7, 2026.',
    video: videos.releaseDate,
    tags: ['Release date', 'Price', 'Launch'],
    relatedRoutes: [
      '/platforms',
      '/demo',
      '/switch',
      '/steam-deck',
      '/download',
    ],
    body: [
      {
        heading: 'Use platform-specific dates',
        paragraphs: [
          'Moonlight Peaks has two dates players will see in search. Steam lists the PC release as Jul 6, 2026. The official website and Nintendo store messaging use Jul 7, 2026 for the broader launch. That is not unusual near a global release window, but it does mean a single date can be misleading if you are trying to buy on a specific platform.',
          'For launch-day planning, check the storefront you will use rather than a cached article. Steam is best for Windows and macOS purchase status, Nintendo is best for Switch and Switch 2 availability, and Google Play is best for Android / Google Play Games. If a store still says pre-register or pre-order, trust the store status over a guide page.',
        ],
      },
      {
        heading: 'Price and discount checks',
        paragraphs: [
          'Steam showed a launch discount and a Digital Deluxe bundle during the launch window. Nintendo and Google Play pricing can vary by region, tax, and edition, so treat price searches as a cue to open the official store rather than a number to memorize from a guide.',
          'If you are choosing between standard and deluxe, make the decision by extras, not fear of missing progression. The core game is the farming and relationship sim; soundtrack and art-book style extras are nice, but they should not be required for a normal first save.',
        ],
        bullets: [
          'Check Steam for PC discount timing and bundle contents.',
          'Check Nintendo for Switch and Switch 2 regional pricing.',
          'Avoid grey-market key pages until official store availability is clear.',
        ],
      },
      {
        heading: 'What launch pages should you read next',
        paragraphs: [
          'If you already bought the game, move to the beginner guide and first-week walkthrough. If you are still choosing where to play, use the platforms page first. If you are trying the demo, read the demo page before investing hours into a save that may not be meant for carry-over.',
          'Players searching for PS5 or Xbox should check the platforms page FAQ. At the time checked, official sources focused on Steam, Nintendo Switch, Nintendo Switch 2, and Google Play / Android rather than PlayStation or Xbox.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Moonlight Peaks out now?',
        answer:
          'As of July 7, 2026, Steam lists Moonlight Peaks as released and official console/mobile launch messaging is active around the July 7 launch window.',
      },
      {
        question: 'Why do some pages say July 6 and others July 7?',
        answer:
          'Steam lists Jul 6, 2026, while the official site and Nintendo pages use Jul 7, 2026. Use the storefront date for your platform.',
      },
      {
        question: 'Does the demo still matter after launch?',
        answer:
          'Yes. The demo is still useful for checking controls, tone, and performance before you buy, especially on PC and Switch.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Moonlight Peaks Platforms Guide',
    seoTitle:
      'Moonlight Peaks Platforms - Steam, Mac, Switch, Switch 2, Android',
    seoDescription:
      'Choose the best Moonlight Peaks platform: Steam, Mac, Steam Deck, Nintendo Switch, Switch 2, Google Play Games, Android, PS5, and Xbox status.',
    summary:
      'Pick by comfort: Steam for settings and Mac/PC flexibility, Switch for couch play, Switch 2 for newer hardware, and Android/Google Play for mobile-store access.',
    category: 'Platform',
    difficulty: 'Beginner',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks platforms',
      'Moonlight Peaks Switch Steam Android',
      'Moonlight Peaks PS5 Xbox',
    ],
    sourceNotes:
      'Based on official site platform links, Steam platform data, Nintendo store listing, Google Play result, and Google suggest platform variants.',
    tags: ['Platforms', 'Switch', 'Steam'],
    relatedRoutes: ['/release-date', '/switch', '/steam-deck', '/download'],
    body: [
      {
        heading: 'Confirmed platform paths',
        paragraphs: [
          'The official site points players toward Steam, Nintendo Switch 2, Nintendo Switch, and Google Play. Steam itself lists Windows and macOS requirements, which makes Steam the most transparent option if you care about specs, language support, achievements, or cloud saves.',
          'Switch and Switch 2 are the natural picks if you want Moonlight Peaks on a couch or handheld console. Android / Google Play Games is worth checking if you prefer that storefront, but do not replace it with APK mirrors. For a paid cozy sim, the safest download path is always the official storefront.',
        ],
        bullets: [
          'Best for PC control and settings: Steam.',
          'Best for classic console handheld play: Nintendo Switch.',
          'Best for newer Nintendo hardware: Switch 2.',
          'Best for Android store access: Google Play.',
        ],
      },
      {
        heading: 'Steam Deck and Mac are separate decisions',
        paragraphs: [
          'Steam Deck search demand is real, but you should not assume Verified status unless Steam displays it for your region and build. Use Steam Deck as a settings and control question: can you read text comfortably, do radial menus feel good, and does battery life matter more than graphics quality?',
          'Mac players have clearer official support through Steam requirements. The minimum macOS line points to Apple Silicon, so older Intel Mac owners should be careful. If you have both a Mac and a Switch, the deciding factor is usually whether you value save management and settings more than handheld simplicity.',
        ],
      },
      {
        heading: 'PS5 and Xbox status',
        paragraphs: [
          'Google suggest includes PS5 and Xbox release-date queries, but the official sources checked for this launch page did not list PlayStation or Xbox as active launch platforms. That makes PS5 and Xbox watch terms, not routes that deserve separate pages yet.',
          'If those versions are announced later, this page should be updated first, then split into separate PlayStation or Xbox pages only when official store pages exist.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Moonlight Peaks on PS5?',
        answer:
          'Official launch sources checked for this site did not list PS5. Treat PS5 as a watch term until an official store page appears.',
      },
      {
        question: 'Is Moonlight Peaks on Xbox?',
        answer:
          'Official launch sources checked did not list Xbox. Use Steam, Nintendo, or Google Play links for current official availability.',
      },
      {
        question: 'Which platform should I buy first?',
        answer:
          'Choose Steam if you value settings and PC/Mac flexibility; choose Switch or Switch 2 if handheld console comfort matters most.',
      },
    ],
  },
  {
    slug: 'demo',
    path: '/demo',
    title: 'Moonlight Peaks Demo Guide',
    seoTitle:
      'Moonlight Peaks Demo - Length, Save Carry Over, Steam and Switch',
    seoDescription:
      'Use the Moonlight Peaks demo to test controls, character creation, farming, spellcasting, and platform performance without overplanning save carry-over.',
    summary:
      'Treat the demo as a buying and comfort test: learn controls, check performance, sample the loop, then start the full game clean when ready.',
    category: 'Platform',
    difficulty: 'Beginner',
    coverImageUrl: videos.demo.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Moonlight Peaks demo',
      'Moonlight Peaks demo length',
      'Moonlight Peaks demo save carry over',
    ],
    sourceNotes:
      'Google suggest shows demo length, carry-over, save, Switch, and review intent. Official site says the demo is available on Steam and Nintendo Switch.',
    video: videos.demo,
    tags: ['Demo', 'Steam', 'Switch'],
    relatedRoutes: ['/release-date', '/platforms', '/guides/beginner-guide'],
    body: [
      {
        heading: 'What the demo is best for',
        paragraphs: [
          'The demo is most useful before you commit to a platform. Test whether the night schedule feels relaxed or tight, whether the camera and menus work for you, and whether the gothic-cozy tone is charming enough to carry a long save. That is a better use of demo time than trying to min-max a farm that may not be your permanent file.',
          'Use the first session to sample character creation, clearing the farm, early watering, social introductions, and movement around town. If a feature is missing or shallow in the demo, check whether the full release expands it before judging the entire game.',
        ],
      },
      {
        heading: 'Save carry-over caution',
        paragraphs: [
          'Search demand around demo carry-over is strong, but launch builds can differ by platform. The safest advice is to treat demo progress as temporary unless the exact storefront page or in-game message for your build says otherwise. That keeps you from spending hours grinding a file that was meant to teach controls.',
          'If you still want to play deeply, keep notes instead of hoarding. Write down which controls felt good, which residents interested you, and which chores felt slow. Those notes carry over even when a demo save does not.',
        ],
      },
      {
        heading: 'What to check before buying',
        paragraphs: [
          'PC players should check performance, text readability, controller versus keyboard comfort, and whether spell drawing feels natural. Switch players should check handheld readability and whether the console version feels smooth enough for repeated daily play.',
          'When the demo ends, do not immediately search for cheats or save editors. If the loop felt slow, the full release may open up spells, forms, upgrades, and wider town routes that the demo only hints at.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the Moonlight Peaks demo?',
        answer:
          'The official site points to demo availability on Steam and Nintendo Switch. Use those official storefronts instead of mirrors.',
      },
      {
        question: 'Does demo progress carry over?',
        answer:
          'Do not assume carry-over unless your exact platform build says it does. Treat the demo as a test save by default.',
      },
      {
        question: 'Should I play the demo if I already plan to buy?',
        answer:
          'Yes if you are unsure about controls, performance, or platform choice. Otherwise, the full game is the better place to start a serious save.',
      },
    ],
  },
  {
    slug: 'switch-guide',
    path: '/switch',
    title: 'Moonlight Peaks Switch and Switch 2 Guide',
    seoTitle: 'Moonlight Peaks Switch Guide - Switch 2, Price, Demo, Physical',
    seoDescription:
      'Check Moonlight Peaks on Nintendo Switch and Switch 2: release date, price checks, demo, handheld play, physical copy searches, and buying advice.',
    summary:
      'Switch is for comfort; Switch 2 is for newer hardware. Check the Nintendo page for price and edition, then decide by how you like playing cozy sims.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks Switch',
      'Moonlight Peaks Switch 2',
      'Moonlight Peaks Switch physical copy',
    ],
    sourceNotes:
      'Google suggest shows Switch, Switch 2, price, release date, physical copy, Switch 1, and Switch 2 price intent.',
    tags: ['Switch', 'Switch 2', 'Nintendo'],
    relatedRoutes: ['/platforms', '/release-date', '/demo', '/download'],
    body: [
      {
        heading: 'Switch and Switch 2 search demand is separate',
        paragraphs: [
          'Players search both Moonlight Peaks Switch and Moonlight Peaks Switch 2 because Nintendo now has two active hardware paths. The original Switch question is usually about access and handheld comfort. The Switch 2 question is about newer hardware, edition naming, and whether the game is a better fit there.',
          'Use the Nintendo store page for the most current price, edition, language, and release status. Third-party lists can help you discover the game, but the store page should decide whether you buy today.',
        ],
      },
      {
        heading: 'Handheld play strengths',
        paragraphs: [
          'Moonlight Peaks is naturally suited to handheld sessions: one night of farming, a social check-in, a gift, a quest trigger, or a Nokturna match can fit into a short play window. If you already play farming sims away from a desk, Switch may be the most comfortable version.',
          'The tradeoff is control and settings flexibility. Steam gives you easier access to graphics options and patch notes; Switch gives you a simpler console experience. Pick the one you will actually play every night.',
        ],
      },
      {
        heading: 'Physical copy and price questions',
        paragraphs: [
          'Google suggest includes physical copy searches, but physical availability can vary sharply by region and retailer. Treat this as a store-check task, not a promise. If a physical edition matters to you, check Nintendo, publisher news, and trusted retailers before buying digital.',
          'For price, check both Switch and Switch 2 listings in your region. Do not rely on a screenshot from launch week because discounts, regional taxes, and editions can change quickly.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Moonlight Peaks on Nintendo Switch?',
        answer:
          'Yes, official launch materials list Nintendo Switch and Nintendo Switch 2 as platform paths.',
      },
      {
        question: 'Is Switch 2 required?',
        answer:
          'No. Official materials also list Nintendo Switch. Switch 2 is a separate edition/path for newer hardware.',
      },
      {
        question: 'Is there a physical copy?',
        answer:
          'Physical-copy searches exist, but availability depends on region and retailer. Check official Nintendo and publisher channels before assuming one exists.',
      },
    ],
  },
  {
    slug: 'steam-deck',
    path: '/steam-deck',
    title: 'Moonlight Peaks Steam Deck and PC Settings Guide',
    seoTitle: 'Moonlight Peaks Steam Deck - Settings, Demo, PC and Mac Specs',
    seoDescription:
      'Plan Moonlight Peaks on Steam Deck, PC, and Mac with controls, demo checks, Steam requirements, text readability, battery, and safe settings advice.',
    summary:
      'Steam Deck demand is real, but the right answer is practical: test the demo, check readability, and do not claim Verified unless Steam does.',
    category: 'Platform',
    difficulty: 'Intermediate',
    coverImageUrl: videos.beforePlaying.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Moonlight Peaks Steam Deck',
      'Moonlight Peaks system requirements',
      'Moonlight Peaks demo Steam Deck',
    ],
    sourceNotes:
      'Based on Steam PC/Mac requirements, controller-friendly game design, Google suggest Steam Deck demand, and early PC comfort questions.',
    video: videos.beforePlaying,
    tags: ['Steam Deck', 'PC', 'Mac'],
    relatedRoutes: ['/platforms', '/demo', '/release-date', '/download'],
    body: [
      {
        heading: 'Do not confuse playable with Verified',
        paragraphs: [
          'Moonlight Peaks has Steam Deck search demand, but you should not treat any guide as a Verified badge. Only Steam can show current compatibility status. Until that is explicit for your region and build, think in practical checks: can you read dialogue comfortably, can you use radial menus without strain, and does the game hold a stable frame rate for long farming sessions?',
          'The demo is the safest test. If it runs well and the text is comfortable, the full game is a reasonable bet. If the demo feels cramped, you may prefer desktop Steam or Switch.',
        ],
      },
      {
        heading: 'PC and Mac requirements',
        paragraphs: [
          'Steam lists Windows 10 64-bit minimum requirements with modest GPU expectations and 8 GB storage. It also lists macOS support with Apple Silicon requirements. That means Mac players should check their chip and OS version before buying, especially on older machines.',
          'If you are on a lower-end PC, reduce visual extras first and keep the game readable. Cozy sims are about repeated comfort; a slightly lower graphics preset is better than a pretty farm that stutters every night.',
        ],
      },
      {
        heading: 'Control setup checklist',
        paragraphs: [
          'Start with controller layout if you are on Steam Deck. Move, camera, tool wheel, shapeshifting, inventory, and spell inputs should all be comfortable before you commit to a long save. If spell patterns feel awkward on sticks, test mouse controls on desktop too.',
          'Battery life matters more than peak visuals for a game you may play in short daily sessions. Cap frame rate if needed, dim screen brightness slightly, and avoid forcing high settings just because the opening area looks fine.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Moonlight Peaks Steam Deck Verified?',
        answer:
          'Check Steam directly. This guide does not claim Verified status unless Steam displays it.',
      },
      {
        question: 'Does Moonlight Peaks support Mac?',
        answer:
          'Steam lists macOS requirements, including Apple Silicon minimums. Check your Mac chip and OS before buying.',
      },
      {
        question: 'Should I buy on Steam Deck or Switch?',
        answer:
          'Choose Steam Deck for PC settings and Steam ecosystem flexibility; choose Switch for simpler console handheld play.',
      },
    ],
  },
  {
    slug: 'romance-guide',
    path: '/romance',
    title: 'Moonlight Peaks Romance Guide',
    seoTitle: 'Moonlight Peaks Romance Options - Dateables, Families, Gifts',
    seoDescription:
      'Plan Moonlight Peaks romance routes with dateable characters, seven families, gift habits, heart events, marriage, and when to choose one partner.',
    summary:
      'Romance is a long route, not a first-night decision: meet the families, test gifts, track heart events, and choose when you actually know the town.',
    category: 'Relationships',
    difficulty: 'Beginner',
    coverImageUrl: videos.dateables.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Moonlight Peaks romance options',
      'Moonlight Peaks dateable characters',
      'Moonlight Peaks romance guide',
    ],
    sourceNotes:
      'Based on Steam two-dozen romanceable character wording, official seven-families framing, and current dateables YouTube results.',
    video: videos.dateables,
    tags: ['Romance', 'Dateables', 'Families'],
    relatedRoutes: ['/characters', '/gifts', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Meet families before choosing a route',
        paragraphs: [
          'Steam says Moonlight Peaks includes two dozen romanceable characters, and the official site frames the town around seven families. That means the best romance plan is not to choose from a screenshot. Spend the first nights learning family tensions, shop routines, and who shows up in quests.',
          'Your first partner choice should come after you have seen personality, schedule, and gift feedback. Cozy sims reward repeated attention, so the character who is easiest to find and genuinely interesting to you is usually a better early route than a name from a list.',
        ],
      },
      {
        heading: 'Use gifts as research',
        paragraphs: [
          'Gift-giving is one of the fastest relationship tools, but exact favorite lists can be unstable during launch week. Treat gifts as research. Give one item, note the reaction, and avoid burning rare materials until you know the result. Handmade gifts and activity rewards are often safer relationship investments than random expensive items.',
          'Moonlight Peaks appears to track whether you have spoken, gifted, or played with a resident recently. Use that tracking as your daily social checklist: speak first, gift second, then decide whether a Nokturna match or quest progress fits the night.',
        ],
      },
      {
        heading: 'Do not rush marriage logic',
        paragraphs: [
          'Early guides and previews discuss dating, marriage, and supernatural long-term relationship choices, but the full route details need live-game verification. Until then, assume romance is meant to unfold through heart events and family context rather than a single gift threshold.',
          'If you want to sample multiple routes, keep your save organized. Avoid making a permanent decision until the game clearly signals commitment. If you care about roleplay, choose based on whose family story you want tied to your farm, not only on appearance.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many romance options are in Moonlight Peaks?',
        answer:
          'Steam describes two dozen romanceable characters. Exact route details should be verified in the live game before treating any list as complete.',
      },
      {
        question: 'Can I romance several characters?',
        answer:
          'You can meet and build relationships broadly, but commitment rules should be checked in your current build before making permanent choices.',
      },
      {
        question: 'Should I use a gift chart on day one?',
        answer:
          'Use charts carefully. Track reactions yourself until gift data is verified, especially for rare or crafted items.',
      },
    ],
  },
  {
    slug: 'characters-guide',
    path: '/characters',
    title: 'Moonlight Peaks Characters and Families Guide',
    seoTitle: 'Moonlight Peaks Characters - Dateables, Families, Residents',
    seoDescription:
      'Understand Moonlight Peaks characters by family, resident role, romance potential, shop routine, quest relevance, and what to verify before using a database.',
    summary:
      'Characters matter by role first: family story, romance route, shop access, quest trigger, gift target, and Nokturna opponent.',
    category: 'Relationships',
    difficulty: 'Beginner',
    coverImageUrl: videos.dateables.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Moonlight Peaks characters',
      'Moonlight Peaks dateable characters',
      'Moonlight Peaks seven families',
    ],
    sourceNotes:
      'Uses official seven-families framing, Steam romance wording, wiki/search leads, and dateables video results without copying a full database.',
    video: videos.dateables,
    tags: ['Characters', 'Families', 'Residents'],
    relatedRoutes: ['/romance', '/gifts', '/nokturna'],
    body: [
      {
        heading: 'Read residents by what they unlock',
        paragraphs: [
          'Moonlight Peaks has enough residents that a plain list is less useful than a role map. Ask what a character changes for your save: are they tied to a family crest, a shop, a romance route, a quest trigger, a gift loop, a crafting system, or a Nokturna match?',
          'That role-first approach keeps you from getting stuck in launch-week database noise. A name can be interesting, but a route matters when it tells you where to go tonight and what to bring.',
        ],
      },
      {
        heading: 'The seven families are the real structure',
        paragraphs: [
          'The official site describes seven families with supernatural inclinations, alongside normal residents. Use families as your mental map. Werewolves, witches, mermaids, vampires, and other groups are not just labels; they shape social conflicts, quest tone, and romance flavor.',
          'When you meet someone new, write down their family, where you found them, whether they have a shop or schedule clue, and which gifts they react to. That will become more useful than memorizing every name before you know the town.',
        ],
      },
      {
        heading: 'How to use character pages safely',
        paragraphs: [
          'A launch character page should not pretend to know every favorite gift, event requirement, or marriage detail before those routes are confirmed. Use character resources to identify residents and likely interests, then verify exact numbers in your save.',
          'If a guide lists a character as dateable, check whether that status is from Steam/official material, live-game menus, or a creator video. Current search results contain both official facts and early speculation, so confidence matters.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Moonlight Peaks have a full character database?',
        answer:
          'Wiki and community pages are developing, but launch data should be treated as evolving until schedules, gifts, and events are verified.',
      },
      {
        question: 'What are the seven families?',
        answer:
          'Official materials confirm seven families with supernatural inclinations. Use the live game and trusted wiki updates for exact family membership.',
      },
      {
        question: 'Are all characters romanceable?',
        answer:
          'No. Steam says there are two dozen romanceable characters, which implies many residents have non-romance roles too.',
      },
    ],
  },
  {
    slug: 'gift-guide',
    path: '/gifts',
    title: 'Moonlight Peaks Gift Guide',
    seoTitle:
      'Moonlight Peaks Gift Guide - Favorite Gifts and Handmade Presents',
    seoDescription:
      'Use a safe Moonlight Peaks gift strategy for romance, daily tracking, handmade presents, rare items, Nokturna, and launch-week favorite gift verification.',
    summary:
      'Until exact favorite tables are stable, gifts should be handled like experiments: talk first, test cheap items, record reactions, and save rare materials.',
    category: 'Relationships',
    difficulty: 'Beginner',
    coverImageUrl: videos.beforePlaying.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Moonlight Peaks gift guide',
      'Moonlight Peaks gifts',
      'Moonlight Peaks favorite gifts',
    ],
    sourceNotes:
      'Google suggest confirms gift-guide demand; early launch guides mention handmade presents and daily social tracking.',
    tags: ['Gifts', 'Romance', 'Tracking'],
    relatedRoutes: ['/romance', '/characters', '/farming'],
    body: [
      {
        heading: 'Talk before gifting',
        paragraphs: [
          'The first rule of Moonlight Peaks gifting is not item choice. It is routine. Talk to the resident first, check whether you already gifted that day, and only then spend an item. This keeps your relationship work steady even when you do not have a perfect favorite-gift chart.',
          'If the game records recent gifts or daily social actions, use that menu as your relationship ledger. It is more reliable than memory, especially once you are tracking several dateables and family members at the same time.',
        ],
      },
      {
        heading: 'Test cheap, save rare',
        paragraphs: [
          'During launch week, exact gift data can be incomplete or copied from old demo notes. Use cheap flowers, common forage, or easy crafted items to test reactions. Save rare crops, quest items, expensive materials, and decorative crafts until you know they are safe to give away.',
          'Handmade presents appear especially relevant to Moonlight Peaks because the game emphasizes crafting, flower arranging, and embroidery. That does not mean every handmade item is universally loved. Treat handmade gifts as promising, not guaranteed.',
        ],
      },
      {
        heading: 'Build a personal gift table',
        paragraphs: [
          'Create a simple note with four columns: resident, item, reaction, and date. After a few nights, you will have a more useful guide than a copied launch list because it reflects your build and your route choices.',
          'When a trusted favorite-gift table becomes stable, compare it against your notes instead of replacing them blindly. If a resident reaction changed after a patch, your own recent observation may be the better answer.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best gift in Moonlight Peaks?',
        answer:
          'There is no safe universal answer yet. Talk daily, test cheap gifts, and save rare items until favorite data is verified.',
      },
      {
        question: 'Are handmade gifts important?',
        answer:
          'Yes, early guides and game systems point to handmade presents as relationship tools, but each resident preference still needs verification.',
      },
      {
        question: 'Should I gift every resident?',
        answer:
          'Early on, focus on the residents tied to your quests, shops, or romance interests. Broad gifting can wait until your farm economy is stable.',
      },
    ],
  },
  {
    slug: 'farming-guide',
    path: '/farming',
    title: 'Moonlight Peaks Farming Guide',
    seoTitle:
      'Moonlight Peaks Farming Guide - Crops, Livestock, Storage, Money',
    seoDescription:
      'Learn Moonlight Peaks farming basics: night loop, enchanted crops, magical livestock, storage friction, early money, tools, and when to use spells.',
    summary:
      'Farm by moonlight with a simple priority order: unlock chores, protect energy, sell low-risk forage, keep upgrade materials, and let magic reduce repetition.',
    category: 'Farming',
    difficulty: 'Beginner',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks crops',
      'Moonlight Peaks farming guide',
      'Moonlight Peaks how to plant crops',
    ],
    sourceNotes:
      'Uses official site/Steam farming descriptions, Google suggest crop intent, and first-week community questions about storage and energy.',
    tags: ['Farming', 'Crops', 'Storage'],
    relatedRoutes: ['/magic', '/gifts', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Night farming changes your pacing',
        paragraphs: [
          'Moonlight Peaks makes the vampire schedule part of the fantasy. Growing, nurturing, and exploring happen under moonlight, with the coffin acting as the daily reset point. That means the first farming skill is pacing: do the chores that move progression, then stop before you turn a cozy night into frantic busywork.',
          'Clear enough land to plant comfortably, not the entire farm. The early game gives better returns from unlocking tools, learning spell use, and meeting residents than from exhausting your stamina on a huge field you cannot water efficiently.',
        ],
      },
      {
        heading: 'Use forage and crops differently',
        paragraphs: [
          'Forage can solve early cash pressure because many pickups do not cost much energy. Crops solve longer-term routine and recipe needs. Do not treat every item as museum-grade until the game tells you it is rare; sell low-commitment extras when gold blocks progress.',
          'Wood and stone deserve more caution. Early upgrades, crafting, and farm development usually lean on basic materials. If you sell them too freely, you may buy a short-term convenience and delay a permanent unlock.',
        ],
      },
      {
        heading: 'Let magic become farm infrastructure',
        paragraphs: [
          'The official site makes spells and shapeshifting sound practical, not cosmetic. As soon as a spell helps watering, gathering, or movement, treat it like an upgrade path. Practice the input until it saves time every night.',
          'Magical livestock and enchanted crops are the identity of the farm. Do not rush into every animal or crop type at once. Add one system, learn its daily cost, then expand once you know how it fits with romance, quests, and exploration.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I plant first?',
        answer:
          'Plant what the early quests and shop access support. Avoid overexpanding before you have reliable watering, storage, and energy routines.',
      },
      {
        question: 'Should I sell flowers and shells?',
        answer:
          'Selling common forage can help early gold, but keep notes if a resident or quest starts asking for a specific item.',
      },
      {
        question: 'Is farming the only way to progress?',
        answer:
          'No. Moonlight Peaks also uses relationships, quests, spells, fishing, crafting, collecting, and Nokturna to move your save forward.',
      },
    ],
  },
  {
    slug: 'magic-guide',
    path: '/magic',
    title: 'Moonlight Peaks Magic, Spells, and Potions Guide',
    seoTitle: 'Moonlight Peaks Magic Guide - Spells, Potions, Shapeshifting',
    seoDescription:
      'Use Moonlight Peaks magic wisely: spell patterns, potion effects, Alter Ego Elixir, shapeshifting, farm chores, movement, and early unlock priorities.',
    summary:
      'Magic is practical infrastructure: spells reduce chores, potions change options, and shapeshifting can turn travel and farm work into less of a stamina tax.',
    category: 'Systems',
    difficulty: 'Intermediate',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks spells',
      'Moonlight Peaks potions',
      'Moonlight Peaks shapeshifting',
    ],
    sourceNotes:
      'Official site highlights learning spells, brewing potions, Alter Ego Elixir, and shapeshifting into bats or other forms.',
    tags: ['Magic', 'Spells', 'Potions'],
    relatedRoutes: ['/farming', '/walkthrough', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Spells should save time',
        paragraphs: [
          'Moonlight Peaks presents spellcasting as a farm and resource tool. That means a spell is worth learning when it changes your daily route: watering faster, gathering more comfortably, reaching places sooner, or reducing the cost of repeated chores.',
          'When the game introduces a spell pattern, practice it immediately. A spell you forget to use is not an upgrade. Build it into the same muscle memory as watering, harvesting, talking, and checking the quest log.',
        ],
      },
      {
        heading: 'Potions are option unlocks',
        paragraphs: [
          'The official site names the Alter Ego Elixir as an example potion for changing appearance. That is a good clue for how potions should be read: some are economy tools, some are customization tools, and some may open convenience or progression routes.',
          'Before crafting in bulk, check whether the potion solves a current problem. A one-off appearance potion does not need the same material planning as a potion that improves daily farming or exploration.',
        ],
      },
      {
        heading: 'Shapeshifting is movement tech',
        paragraphs: [
          'Vampires shapeshifting into bats is the obvious fantasy, but Moonlight Peaks hints at more forms. Treat each form as a route tool. Does it move faster, use less energy, reach a new area, or perform a chore differently?',
          'If you feel the day is too short, do not only ask for a time setting. Ask whether your current form, spell use, and route order are wasting minutes. The best magic setup is the one that lets you end the night with one quest, one social action, and one farm chore finished.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do spells work in Moonlight Peaks?',
        answer:
          'Spells are introduced through town and witchcraft systems, then used to help with farmwork, gathering, and other routines.',
      },
      {
        question: 'What does the Alter Ego Elixir do?',
        answer:
          'Official site text names it as a potion that lets you change your appearance.',
      },
      {
        question: 'Is shapeshifting only cosmetic?',
        answer:
          'No. Official wording frames shapeshifting as a way to explore town and improve convenience, so forms should be treated as practical tools.',
      },
    ],
  },
  {
    slug: 'nokturna-guide',
    path: '/nokturna',
    title: 'Moonlight Peaks Nokturna Guide',
    seoTitle: 'Moonlight Peaks Nokturna Guide - Cards, Residents, Matches',
    seoDescription:
      'Learn what Nokturna is in Moonlight Peaks, how to approach the collectible card game, why residents matter, and what not to assume before card data is verified.',
    summary:
      'Nokturna is the town card activity: collect cards, play residents, and use matches as social progress, but avoid fake card lists until live data is stable.',
    category: 'Systems',
    difficulty: 'Beginner',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks Nokturna',
      'Moonlight Peaks card game',
      'Moonlight Peaks cards',
    ],
    sourceNotes:
      'Steam says players can collect cards for the town game Nokturna and play against residents. Current search demand is early and data-thin.',
    tags: ['Nokturna', 'Cards', 'Residents'],
    relatedRoutes: ['/characters', '/romance', '/guides/beginner-guide'],
    body: [
      {
        heading: 'What Nokturna is',
        paragraphs: [
          'Nokturna is the collectible card activity inside Moonlight Peaks. Steam describes it as the town favorite: you collect cards and play against other residents. That makes it both a side game and a social system, because your opponents are part of the same town network you are befriending.',
          'At launch, the useful guide is not a fake complete card database. It is a habit guide: learn where cards come from, note who plays, track rewards, and watch whether matches affect friendship or quests.',
        ],
      },
      {
        heading: 'How to approach early matches',
        paragraphs: [
          'When a resident can play Nokturna, treat the match like a social action. Talk first, check whether you have a gift plan, then play if the night still has enough time. Do not let the card game consume every evening before your farm and quests have a routine.',
          'Keep a card note with source, card name, effect, and opponent. If the game later adds a collection page or official card order, your notes will still help you see what you are missing.',
        ],
      },
      {
        heading: 'When a full card list is safe',
        paragraphs: [
          'A full Nokturna list becomes useful only when card names, effects, rarity, and acquisition routes are verified in the live game. Before that, broad advice is safer: collect naturally, play different residents, and do not sell or discard unique-looking cards unless the game clearly allows recovery.',
          'If you are here from a "Moonlight Peaks cards" search, use this page first, then check the characters and romance pages. The residents you care about may matter as much as the card you just found.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Nokturna a real card game in Moonlight Peaks?',
        answer:
          'Yes. Steam describes Nokturna as the town card game where players collect cards and play residents.',
      },
      {
        question: 'Does Nokturna affect romance?',
        answer:
          'It may interact with resident routines, but exact relationship effects should be verified in the live game before treating matches as romance optimization.',
      },
      {
        question: 'Where is the full card list?',
        answer:
          'A complete card list should wait for verified live-game data. This launch guide focuses on safe habits and tracking.',
      },
    ],
  },
  {
    slug: 'walkthrough-guide',
    path: '/walkthrough',
    title: 'Moonlight Peaks Walkthrough',
    seoTitle: 'Moonlight Peaks Walkthrough - First Week and Quest Direction',
    seoDescription:
      'Use a spoiler-light Moonlight Peaks walkthrough for first week routing, quest log checks, farming, gifts, spells, storage, Nokturna, and stuck moments.',
    summary:
      'A good walkthrough keeps you moving without spoiling the town: clear the farm, follow quest triggers, practice magic, meet residents, and build one reliable nightly route.',
    category: 'Walkthrough',
    difficulty: 'Beginner',
    coverImageUrl: videos.beforePlaying.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Moonlight Peaks walkthrough',
      'Moonlight Peaks demo walkthrough',
      'Moonlight Peaks first week walkthrough',
    ],
    sourceNotes:
      'Built from Google suggest walkthrough demand, launch-week YouTube results, official systems, and early community questions about direction.',
    video: videos.beforePlaying,
    tags: ['Walkthrough', 'First week', 'Quests'],
    relatedRoutes: ['/guides/beginner-guide', '/farming', '/magic', '/gifts'],
    body: [
      {
        heading: 'Night one: learn the farm and menus',
        paragraphs: [
          'The first night should be simple. Clear only the space you need, plant what the game introduces, learn where storage and selling live, and open the map and quest log before wandering too far. Moonlight Peaks has a defined story direction, so the quest log is not optional flavor.',
          'Do not spend the whole night optimizing layout. Your farm will change once spells, animals, crafting, and more crops unlock. A neat temporary farm is better than a beautiful plan that drains every resource before you meet the town.',
        ],
      },
      {
        heading: 'First week: one unlock per night',
        paragraphs: [
          'A clean first-week route chooses one main unlock each night. One night can focus on a quest trigger, one on gathering upgrade materials, one on meeting residents, one on learning a spell, and one on checking side activities such as fishing or Nokturna.',
          'This keeps your save balanced. If you only farm, relationships lag. If you only socialize, upgrades lag. If you only explore, the farm stops producing the money and materials that make later nights easier.',
        ],
      },
      {
        heading: 'When you feel stuck',
        paragraphs: [
          'If nothing is happening, check the quest log, bulletin board or job board, map, and resident locations. Some life sims require entering an area at the right time to trigger an event; Moonlight Peaks early impressions point to similar directional play.',
          'Also check whether you ignored a new form, spell, tool, or NPC. The blocker is often not a missing item list; it is a system the game already introduced and you have not folded into your routine.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this walkthrough spoiler-free?',
        answer:
          'It is spoiler-light. It focuses on route habits and early systems rather than late story reveals.',
      },
      {
        question: 'What should I do if the quest log is empty?',
        answer:
          'Revisit key areas, talk to residents tied to recent events, check town boards, and make sure you practiced any newly unlocked spell or form.',
      },
      {
        question: 'Should I rush romance in the first week?',
        answer:
          'No. Talk and gift steadily, but do not lock onto one route before learning family context and schedules.',
      },
    ],
  },
  {
    slug: 'fishing-guide',
    path: '/guides/fishing-guide',
    title: 'Moonlight Peaks Fishing Guide',
    seoTitle: 'Moonlight Peaks Fishing Guide - Rod, Early Spots, Energy',
    seoDescription:
      'Start Moonlight Peaks fishing safely with rod checks, early activity timing, energy budgeting, collection notes, selling choices, and when to wait for better data.',
    summary:
      'Fishing is a side activity until the game asks for it: get the rod, test spots, track catches, and stop before it steals your entire night.',
    category: 'Systems',
    difficulty: 'Beginner',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Moonlight Peaks fishing',
      'Moonlight Peaks fishing rod',
      'Moonlight Peaks fish guide',
    ],
    sourceNotes:
      'Google suggest confirms fishing and fishing rod demand; Steam lists fishing as one of the activities beyond the farm.',
    tags: ['Fishing', 'Collection', 'Energy'],
    relatedRoutes: ['/farming', '/walkthrough', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Find the rod before chasing fish lists',
        paragraphs: [
          'The first fishing question is not the best fish. It is whether you have the rod, where the game introduces fishing, and how much time the activity costs. Follow the quest or shop route that unlocks the rod before trusting any list that assumes you already have it.',
          'Once you can fish, test one or two spots and record what you catch. Launch-week fish tables can change or miss time/weather conditions, so your own location notes matter.',
        ],
      },
      {
        heading: 'Budget fishing like a chore',
        paragraphs: [
          'Fishing can quietly eat a whole night. Set a limit: a few casts for collection data, a quest fish, or a money check. If the result is not clearly better than farming, foraging, or relationship progress, leave deeper fishing for a dedicated night.',
          'Keep the first copy of a new fish until you know whether the museum, cooking, gifting, or quests need it. Sell duplicates only when storage and money pressure are more important.',
        ],
      },
      {
        heading: 'What to track',
        paragraphs: [
          'Use a simple note: fish name, spot, time, season, weather if visible, and whether it sold well or triggered a quest. That is enough to build a reliable personal fish table without pretending the full database is solved on day one.',
          'If a later wiki table appears, compare it to your notes. Missing entries may mean different platform builds, seasonal timing, or a patch rather than a bad guide.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where do I get the fishing rod?',
        answer:
          'Follow the early quest/shop direction for fishing unlocks. Do not chase fish lists until the rod is actually available in your save.',
      },
      {
        question: 'Should I sell fish early?',
        answer:
          'Keep first catches until you know collection and quest needs. Sell duplicates when gold or storage pressure matters.',
      },
      {
        question: 'Is fishing required?',
        answer:
          'Steam lists fishing as an activity, but exact main-story requirements should be verified as you progress.',
      },
    ],
  },
  {
    slug: 'cheats',
    path: '/cheats',
    title: 'Moonlight Peaks Cheats, Console Commands, and Trainer Safety',
    seoTitle:
      'Moonlight Peaks Cheats - Console Commands, Trainers, Mods, Codes',
    seoDescription:
      'Check Moonlight Peaks cheats safely: no fake redeem codes, no official console command claims, trainer/mod risks, save safety, and better in-game alternatives.',
    summary:
      'Cheat searches exist, but official sources do not show redeem codes. Treat trainers and mods as risky PC-only changes, and protect your save first.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Moonlight Peaks cheats',
      'Moonlight Peaks console commands',
      'Moonlight Peaks trainer',
      'Moonlight Peaks codes',
    ],
    sourceNotes:
      'Search results show cheat/trainer demand, but official sources checked do not expose a redeem-code system or official console-command list.',
    tags: ['Cheats', 'Safety', 'Codes'],
    relatedRoutes: ['/download', '/steam-deck', '/guides/beginner-guide'],
    body: [
      {
        heading: 'There are no verified official codes',
        paragraphs: [
          'Moonlight Peaks is not showing the kind of official redeem-code loop you see in Roblox or mobile gacha games. If a page claims active Moonlight Peaks codes, check whether it points to an official announcement. If it does not, assume it is using code demand as clickbait.',
          'This site will not invent codes. If the developer or publisher later adds official promo codes, the safest place to verify them will be Steam news, official social channels, Discord announcements, or in-game messaging.',
        ],
      },
      {
        heading: 'Trainers and mods are risk choices',
        paragraphs: [
          'PC trainer pages and cheat-mod posts may appear quickly after launch. They can change energy, time, money, growth rates, or movement, but they are not the same as official features. They can also break saves, trigger antivirus warnings, or stop working after a patch.',
          'If you experiment anyway, back up your save, check the game version, and understand that support teams may not help with modded files. Console and mobile players should be especially cautious because unofficial files often mean unsafe downloads.',
        ],
      },
      {
        heading: 'Use in-game alternatives first',
        paragraphs: [
          'If you want cheats because nights feel short, look for in-game time, spell, form, and upgrade solutions first. Moonlight Peaks includes magic and progression systems designed to make chores easier. Solving the pressure inside the game is safer than editing the save from outside it.',
          'If you want money, improve the farm route, forage route, and gift priorities before using a trainer. The early game is meant to feel limited; many cozy sims open up once tools, animals, spells, and story systems are online.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there Moonlight Peaks codes?',
        answer:
          'No verified official redeem codes were found in official sources checked for this launch site.',
      },
      {
        question: 'Are console commands official?',
        answer:
          'No official console-command list was verified. Treat command or trainer pages as third-party PC material, not official support.',
      },
      {
        question: 'Can I use mods safely?',
        answer:
          'Mods always carry risk. Back up saves, match versions, and avoid files from unknown mirrors.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Moonlight Peaks Download Guide',
    seoTitle: 'Moonlight Peaks Download - Steam, Switch, Android, Safe Links',
    seoDescription:
      'Download Moonlight Peaks safely through Steam, Nintendo Switch, Switch 2, Google Play, and official links while avoiding APK mirrors, cracks, and fake clients.',
    summary:
      'Use official storefronts only: Steam for PC/Mac, Nintendo for Switch and Switch 2, and Google Play for Android / Google Play Games.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks download',
      'Moonlight Peaks Android download',
      'Moonlight Peaks APK',
    ],
    sourceNotes:
      'Based on official store links and safety handling for APK/mirror queries.',
    tags: ['Download', 'Steam', 'Android'],
    relatedRoutes: ['/platforms', '/release-date', '/cheats', '/discord'],
    body: [
      {
        heading: 'Official download paths',
        paragraphs: [
          'Moonlight Peaks should be downloaded from official storefronts. Use Steam for Windows and macOS, Nintendo for Switch and Switch 2, and Google Play for Android / Google Play Games. If you are not sure which link is current, start from the official Moonlight Peaks website.',
          'Avoid pages that wrap the download behind ads, installers, surveys, or APK mirrors. A paid cozy sim should not require a random downloader to install.',
        ],
        bullets: [
          'PC and Mac: Steam.',
          'Switch and Switch 2: Nintendo store.',
          'Android / Google Play Games: Google Play listing.',
          'Community and support: official site or Discord.',
        ],
      },
      {
        heading: 'Why APK mirrors are not worth it',
        paragraphs: [
          'APK mirrors can be outdated, modified, region-mismatched, or bundled with unsafe files. They also make patching and support harder. If Moonlight Peaks is available in your region on Google Play, use Google Play.',
          'If it is not available in your region, do not replace that with a random APK. Check official posts, wait for regional rollout, or choose Steam/Nintendo if those are available to you.',
        ],
      },
      {
        heading: 'After installing',
        paragraphs: [
          'Before starting a serious save, check language, controller settings, cloud save behavior, and display readability. PC players should also check system requirements and Steam Deck comfort. Console players should check whether the demo and full game are separate tiles or entries.',
          'If you hit a launch bug, use the Discord page to collect good support details instead of reinstalling from an unsafe mirror.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I download Moonlight Peaks for free?',
        answer:
          'Use the official demo where available. The full game should be purchased or installed through official storefronts.',
      },
      {
        question: 'Is an APK safe?',
        answer:
          'Use Google Play. Random APK mirrors are not recommended and can be unsafe or outdated.',
      },
      {
        question: 'Where should PC players download it?',
        answer:
          'Steam is the official PC/Mac storefront path checked for this site.',
      },
    ],
  },
  {
    slug: 'discord',
    path: '/discord',
    title: 'Moonlight Peaks Discord and Official Links Guide',
    seoTitle: 'Moonlight Peaks Discord - Official Links, Support, Updates',
    seoDescription:
      'Find Moonlight Peaks official links safely: Discord, Steam, Nintendo, Google Play, official site, support questions, bug reports, and scam invite checks.',
    summary:
      'Use the official site and Steam links first, then join Discord for community questions with platform, version, and save details ready.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: videos.officialGameplay.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Moonlight Peaks Discord',
      'Moonlight Peaks official links',
      'Moonlight Peaks support',
    ],
    sourceNotes:
      'Official site exposes a Discord link; Steam also exposes official community links.',
    tags: ['Discord', 'Official', 'Support'],
    relatedRoutes: ['/download', '/platforms', '/cheats'],
    body: [
      {
        heading: 'Start from official links',
        paragraphs: [
          'The safest way to join the Moonlight Peaks Discord is through the official website or Steam store links. Discord invite spam is common around new games, so do not trust a random short link just because it uses the game name.',
          'If an invite asks you to download files, connect a wallet, or claim codes outside the game, leave. Official cozy-sim communities do not need those steps for normal support.',
        ],
      },
      {
        heading: 'Ask better support questions',
        paragraphs: [
          'When reporting a bug or asking for help, include platform, version, storefront, controller type, language, and what quest or day you are on. A clear question gets a useful answer faster than "it is broken."',
          'For performance issues, include PC/Mac specs or Switch/Switch 2 model context. For save issues, say whether you came from a demo, cloud save, or fresh full-game file.',
        ],
      },
      {
        heading: 'Use Discord without spoiling yourself',
        paragraphs: [
          'Launch communities move quickly. If you are still early in the story, avoid channels that discuss family crests, late romance scenes, or full card lists. Use beginner, technical, or spoiler-free channels first if the server has them.',
          'If you discover a gift or Nokturna result, share it with context: platform, patch, resident, and exact item. That helps the community build reliable data instead of repeating half-tested guesses.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where is the official Moonlight Peaks Discord?',
        answer:
          'Use the Discord link from the official Moonlight Peaks website or Steam official links rather than random invite pages.',
      },
      {
        question: 'Can Discord help with bugs?',
        answer:
          'It can help route questions, but include platform, version, save context, and reproduction steps so people can help.',
      },
      {
        question: 'Are Discord codes real?',
        answer:
          'No official redeem-code system was verified. Treat code claims with caution unless posted by official channels.',
      },
    ],
  },
];

export const featuredGuides = guides.filter((guide) =>
  [
    'beginner-guide',
    'platforms',
    'romance-guide',
    'farming-guide',
    'magic-guide',
    'nokturna-guide',
  ].includes(guide.slug)
);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
