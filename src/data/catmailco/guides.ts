import { siteDescription as descriptionFromSources } from './sources';
import type { Guide, GuideVideo } from './types';

const publishedAt = '2026-07-10';
const steamCover =
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/6e4907425b2795c1c7e35dd454d4970266178288/capsule_616x353.jpg';
const steamScreenshot =
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4380490/ef21128321c5baaa093318f407969ac71382d6ab/ss_ef21128321c5baaa093318f407969ac71382d6ab.1920x1080.jpg';

function youtubeVideo(
  id: string,
  title: string,
  channel: string,
  published?: string
): GuideVideo {
  return {
    id,
    title,
    channel,
    url: `https://www.youtube.com/watch?v=${id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    publishedAt: published,
    checkedAt: publishedAt,
  };
}

const videos = {
  walkthrough: youtubeVideo(
    '0l7rUR6p3Rg',
    'CAT MAIL CO Gameplay Walkthrough No Commentary PC',
    'Zhain Gaming',
    '2026-07-09'
  ),
  tips: youtubeVideo(
    'tLJtB6TMBy0',
    'Cat Mail Co. 10 Advanced Tips You NEED to Know',
    'Game Launch Central',
    '2026-07-09'
  ),
  review: youtubeVideo(
    '2jrBuHMFu4k',
    'Cat Mail Co Review: Is This Game Worth Your Attention?',
    'Max Dixon',
    '2026-06-29'
  ),
  deck: youtubeVideo(
    '0cupOtp3Wik',
    'Cat Mail Co. Gameplay - Steam Deck',
    'Video Chums',
    '2026-07-09'
  ),
  coop: youtubeVideo(
    'UYC7qzOOTJ4',
    'Cat Mail With Friends - Cat Mail Co. Demo',
    'Limbo 7k',
    '2026-06-29'
  ),
  sorting: youtubeVideo(
    '-C0fbJRbfUw',
    'Run Your Own CAT Post Office - Cat Mail Co. Gameplay',
    'FloppySims',
    '2026-06-25'
  ),
  organizing: youtubeVideo(
    'wQMOmLMClS8',
    'Organising the Messiest Cat Post Office',
    'The Cozy Gaming Club',
    '2026-06-19'
  ),
};

export const guides: Guide[] = [
  {
    slug: 'patch-3-storage-parcel-fixes',
    path: '/guides/patch-3-storage-parcel-fixes',
    title: 'Cat Mail Co Patch #3: Storage and Parcel Fixes',
    seoTitle: 'Cat Mail Co Patch #3 - Storage & Parcel Fixes',
    seoDescription:
      'See Cat Mail Co Patch #3 changes for storage tags, parcel piles, save slots, demo keys, lobby re-hosting and planned controller support.',
    summary:
      'Patch #3 improves storage labels and parcel flow, repairs several dock, customer-area and lobby bugs, and names controller support as the next quality-of-life focus.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: steamScreenshot,
    publishedAt: '2026-07-19',
    updatedAt: '2026-07-19',
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Cat Mail Co Patch 3',
      'Cat Mail Co storage tags parcel fix',
    ],
    sourceNotes:
      'Summarized from the official July 17 Steam Patch Note #3. Planned controller and input features are separated from changes already live.',
    tags: ['Patch notes', 'Storage', 'Parcels'],
    relatedRoutes: [
      '/guides/patch-2-save-multiplayer-fixes',
      '/co-op',
      '/walkthrough',
      '/tips',
    ],
    body: [
      {
        heading: 'Storage and pile changes now live',
        paragraphs: [
          'Patch #3 adds more storage tags, smoke feedback when clearing secondary piles, and slightly faster pile clearing during the final two levels. The newest save now appears at the top of the save-slot list.',
          'Keep the current sorting layout until you see the new labels, then rename or reposition only the storage zones that became ambiguous. The faster final pile stages should reduce late-shift congestion without changing the core destination-sorting rule.',
        ],
      },
      {
        heading: 'Parcel, dock and save fixes',
        paragraphs: [
          'The patch repairs old demo saves missing bright and dark keys, parcels stuck in the customer area, incorrect parcel scale in stacks, and parcels respawning around the dock after being dropped near some main-pile stages.',
          'Load the affected save before starting over. Check keys, one customer handoff, one dock drop and one pile transition so the old failure can be ruled out quickly.',
        ],
      },
      {
        heading: 'Lobby fix and what is still planned',
        paragraphs: [
          'Leaving and re-hosting should no longer break the lobby. Minor localization and lovers-effect issues were also fixed.',
          'Controller support, input rebinding, inverted mouse Y and toggle sprint are planned quality-of-life work, not live Patch #3 features. Keep platform pages worded as current-status pages until those controls ship.',
        ],
      },
    ],
    faq: [
      {
        question: 'What changed in Cat Mail Co Patch #3?',
        answer:
          'It adds storage tags and pile feedback, speeds late pile clearing, changes save ordering and fixes parcels, old demo keys and lobby re-hosting.',
      },
      {
        question: 'Does Patch #3 add controller support?',
        answer:
          'No. Controller support is listed as planned follow-up work, not a live Patch #3 feature.',
      },
      {
        question: 'Should I restart an old demo save?',
        answer:
          'Load it first. The patch specifically fixes missing bright and dark keys in old demo saves.',
      },
    ],
  },
  {
    slug: 'patch-2-save-multiplayer-fixes',
    path: '/guides/patch-2-save-multiplayer-fixes',
    title: 'Cat Mail Co Patch #2: Save and Multiplayer Fixes',
    seoTitle: 'Cat Mail Co Patch #2 - Save & Multiplayer Fixes',
    seoDescription:
      'Review Cat Mail Co Patch #2 fixes for saves, invited guests, achievements, lobbies, parcel piles, shift summaries and boat storage.',
    summary:
      'Patch #2 improves boat storage and late-pile pacing while fixing several save, invited-guest, lobby, achievement and shift-summary problems.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: steamScreenshot,
    publishedAt: '2026-07-17',
    updatedAt: '2026-07-17',
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Cat Mail Co Patch Note 2',
      'Cat Mail Co save fix multiplayer patch',
    ],
    sourceNotes:
      'Summarized from the official July 16 Steam Patch Note #2. No community-only workaround is presented as a confirmed fix.',
    tags: ['Patch notes', 'Save', 'Multiplayer'],
    relatedRoutes: ['/co-op', '/walkthrough', '/guides/achievements', '/tips'],
    body: [
      {
        heading: 'Changes to parcel flow and storage',
        paragraphs: [
          'Patch #2 adjusts and adds boat storage types, makes the main parcel pile empty faster during its last two levels, and reworks the lovers visual effect so it is easier to understand. A smoke effect now appears when the next stage of the main pile is revealed.',
          'These are workflow changes rather than a new postal system. Keep destination and processing zones intact, then adjust boat storage only if the new types make the old layout inefficient.',
        ],
      },
      {
        heading: 'Save and progression fixes',
        paragraphs: [
          'The patch fixes demo saves loading with an unexpectedly large main parcel pile, cases where the main pile stopped spawning parcels, and save-slot playtime failing to display correctly beyond 24 hours. It also fixes rare soft locks in the shift summary.',
          'After updating, load the existing save before starting over. If the save previously failed around a parcel pile or summary screen, keep a backup and verify the affected transition once before reorganizing the whole post office.',
        ],
      },
      {
        heading: 'Multiplayer and achievement fixes',
        paragraphs: [
          'Invited guests can now unlock the All cleaned up achievement correctly. The official note says an affected player can load the save where the condition occurred to trigger the unlock. The patch also fixes invited guests seeing an old postman who should no longer be present.',
          'Lobby cleanup is more reliable when a player leaves, and counters should no longer open unexpectedly when somebody disconnects during dusk or dawn. These fixes improve co-op state handling, but all players should still run the same current version before troubleshooting an invitation.',
        ],
        bullets: [
          'Update and restart Steam for every player.',
          'Load the affected save to retry All cleaned up.',
          'Recreate the lobby if a player disconnects during a transition.',
          'Keep the original save until the fixed transition succeeds.',
        ],
      },
    ],
    faq: [
      {
        question: 'Did Patch #2 fix Cat Mail Co multiplayer achievements?',
        answer:
          'It fixes All cleaned up for invited guests. Load the affected save after updating to retry the unlock.',
      },
      {
        question: 'Did Cat Mail Co fix saves with too many parcels?',
        answer:
          'Patch #2 fixes a demo-save issue that could load the main pile with a very large number of parcels.',
      },
      {
        question: 'Should I start a new save after Patch #2?',
        answer:
          'No. Test the existing save first and preserve a backup until the previously affected transition works.',
      },
    ],
  },
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Cat Mail Co Beginner Guide: Your First Post Office Routine',
    seoTitle: 'Cat Mail Co Beginner Guide',
    seoDescription:
      'Start Cat Mail Co. with a clean parcel flow: receive, inspect, weigh, stamp, label, sort, store, and load mail without losing track of jobs.',
    summary:
      'Build one visible route from the counter to storage and the boat, finish every parcel before starting another, and let accuracy create speed.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: videos.sorting.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'youtube_explainer',
    videoSearchQueries: [
      'Cat Mail Co beginner guide',
      'Cat Mail Co gameplay tips',
      'Cat Mail Co first day',
    ],
    sourceNotes:
      'Built from official Steam mechanics and current gameplay cross-checks. Exact unlock timing may change with patches.',
    video: videos.sorting,
    tags: ['Beginner', 'Sorting', 'Workflow'],
    relatedRoutes: [
      '/guides/package-sorting',
      '/guides/stamps-and-labels',
      '/guides/night-shift',
      '/co-op',
    ],
    body: [
      {
        heading: 'Make one parcel lane before chasing speed',
        paragraphs: [
          'The first useful decision is not where every shelf will live forever. It is whether a new parcel has one obvious path through the room. Give incoming mail a temporary landing zone, keep weighing and marking tools within a short turn, reserve finished storage by destination, and leave a clear route to the outgoing boat. A simple lane prevents the same box from crossing the room three times.',
          'Cat Mail Co. has no timer or penalty pressure, so use the opening shift to learn a clean order. A reliable loop is receive, read, weigh when required, add the necessary destination and handling marks, place the parcel in its destination zone, then load or hand it over at the correct stage. Finishing that loop on one box is safer than opening five half-complete jobs.',
        ],
        bullets: [
          'Incoming zone: parcels that have not been processed.',
          'Work zone: the one parcel currently being weighed and marked.',
          'Finished zones: separate destinations or outgoing groups.',
          'Exception zone: anything whose instruction is unclear or changes at night.',
        ],
      },
      {
        heading: 'Read the package before touching the tools',
        paragraphs: [
          'Most avoidable errors begin when a player reaches for a stamp before understanding the job. Pause at the label, identify the destination, look for weight or handling requirements, and decide whether the parcel is ready for daytime processing. If something looks incomplete, move it to the exception zone instead of guessing. The game rewards a calm postal rhythm more than frantic movement.',
          'Use the same physical reading order every time. For example: destination first, weight second, special handling third, then decorative choices. Consistency reduces the chance that a colorful sticker hides the information you still need. It also makes co-op easier because another player can see where the package is in the process without asking.',
        ],
      },
      {
        heading: 'Protect destination accuracy',
        paragraphs: [
          'The official description warns that mail sorted to the wrong destination can come back damaged. That makes destination accuracy the one rule worth protecting even in a low-pressure game. Keep destination storage visually separate, avoid stacking unrelated routes into one pile, and turn labels outward whenever possible. If the room becomes messy, stop receiving for a moment and restore the boundary between processed and unprocessed mail.',
          'Do not use memory as the only system. A parcel may be obvious when you first hold it and invisible after ten more boxes arrive. Physical placement is your checklist. The left shelf can be one route, the right shelf another, and a floor mat or empty table can hold exceptions. The exact layout is personal; the important part is that each area has one meaning.',
        ],
      },
      {
        heading: 'Treat night as an inspection phase',
        paragraphs: [
          'Moonlight is not just a color change. Official material describes nighttime as the moment when hidden truths about some parcels become visible. Keep uncertain or unusual mail accessible instead of burying it under routine boxes. When night arrives, inspect the exception zone first, apply any newly revealed handling logic, and only then close the remaining outgoing work.',
          'This creates a useful two-pass routine: complete obvious daytime jobs immediately and defer only genuine unknowns. Deferring everything produces a backlog; guessing at unknowns produces mistakes. The exception zone is the bridge between those extremes and becomes more valuable as the post office grows.',
        ],
      },
      {
        heading: 'End each shift ready for the next boat',
        paragraphs: [
          'Before considering a day finished, walk the room once without carrying anything. Check that no unprocessed parcel is mixed into finished storage, no marked parcel is left beside a tool, and no outgoing box is sitting in the incoming zone. Return tools to the same place and clear the main walking route. This short reset is more valuable than squeezing in one messy task.',
          'New destinations, tools, abilities, and story discoveries expand the operation over time. Add new storage only when an unlock creates a real new category. If every new object forces a complete redesign, the layout is too fragile. Preserve the basic receive-to-boat flow and extend it one destination at a time.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cat Mail Co. stressful for beginners?',
        answer:
          'The official feature list says there are no timers or penalties. Accuracy and organization still matter, but you can learn the loop at your own pace.',
      },
      {
        question: 'What should I do with a confusing parcel?',
        answer:
          'Keep it in a visible exception zone and inspect it again at night rather than guessing or mixing it with finished mail.',
      },
      {
        question: 'Should I redesign the whole post office immediately?',
        answer:
          'No. Start with one clear parcel lane, then add destination zones as the game unlocks real needs.',
      },
    ],
  },
  {
    slug: 'package-sorting',
    path: '/guides/package-sorting',
    title: 'Cat Mail Co Package Sorting Guide: Build a Mail Flow That Scales',
    seoTitle: 'Cat Mail Co Package Sorting Guide',
    seoDescription:
      'Sort Cat Mail Co. parcels with destination zones, a visible exception shelf, outward-facing labels, and a clean route from boat to counter.',
    summary:
      'Organize by parcel state first and destination second so every box has a visible next action.',
    category: 'Post Office',
    difficulty: 'Beginner',
    coverImageUrl: videos.organizing.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Cat Mail Co package sorting',
      'Cat Mail Co organize post office',
    ],
    sourceNotes:
      'Uses official package-loop facts and multiple gameplay videos as visual cross-checks.',
    video: videos.organizing,
    tags: ['Parcels', 'Storage', 'Destinations'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/stamps-and-labels',
      '/tips',
      '/walkthrough',
    ],
    body: [
      {
        heading: 'Sort by state before destination',
        paragraphs: [
          'A destination shelf cannot help if processed and unprocessed boxes share the same pile. The first layer of your layout should answer whether a parcel is new, in progress, complete, uncertain, or ready to leave. Only complete mail should move into destination storage. That one rule turns the room into a visual task board.',
          'When the boat arrives, unload into the incoming zone rather than scattering parcels directly beside their eventual shelves. Process one or a small batch through the same work station, then move completed boxes away. The gap between incoming and finished mail is what prevents an attractive pile from becoming an invisible checklist failure.',
        ],
      },
      {
        heading: 'Give every destination a hard boundary',
        paragraphs: [
          'Use shelves, tables, corners, or floor lanes as clear boundaries. A boundary should be readable from the center of the room and should not depend on remembering the last box you placed. Face destination labels outward and keep tall stacks from covering the labels behind them. Shorter, wider groups are often easier to audit than one dramatic tower.',
          'Leave expansion space beside busy destinations. Moving a single divider is easier than rebuilding the whole room when a new route unlocks. If one destination consistently dominates the floor, give it a larger zone instead of letting it leak into every neighboring area.',
        ],
      },
      {
        heading: 'Create an honest exception shelf',
        paragraphs: [
          'The exception shelf is not a failure pile. It is where parcels wait because information is missing, a hidden nighttime property may matter, or a co-op teammate needs to verify the job. Keep this zone small, visible, and close enough to inspect at night. If it grows, stop the normal flow and resolve it before taking more work.',
          'Never place an uncertain package on a destination shelf just to make the room look clean. That converts a visible question into a hidden error. A good system exposes uncertainty until it is solved.',
        ],
      },
      {
        heading: 'Batch only the safe steps',
        paragraphs: [
          'Batching can save walking, but only after the packages are clearly separated. It is safe to carry several completed parcels to the same destination zone or move a group from storage to the boat. It is risky to pre-stamp a mixed pile or rely on memory while labels are facing away. Batch movement, not unresolved decisions.',
          'In co-op, one player can stage incoming mail while another completes the work station. Use a strict handoff point between them. A parcel crossing that point should mean the same thing every time, such as read and ready to weigh or fully processed and ready to store.',
        ],
      },
      {
        heading: 'Run a closing audit from the floor up',
        paragraphs: [
          'At the end of a shift, scan the floor and tool surfaces before the shelves. Loose boxes are the easiest jobs to forget because they do not belong to any zone. Then check destination labels, the exception shelf, and the outgoing load. This order catches stranded parcels before you start admiring the clean stacks.',
          `Reset the incoming area to empty and return tools to their fixed homes. Tomorrow's first boat should arrive into a post office that already explains itself. That is the real measure of a scalable layout.`,
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Cat Mail Co. storage layout?',
        answer:
          'The best layout separates parcel state first, then destinations, while keeping a short route from incoming boat to work station and outgoing load.',
      },
      {
        question: 'Should I stack packages high?',
        answer:
          'Only when labels remain visible and the stack does not mix destinations. Wide, readable groups are usually easier to audit.',
      },
      {
        question: 'When should I stop and reorganize?',
        answer:
          'Reorganize when the exception zone grows, destinations overlap, or you cannot tell whether a visible parcel is processed.',
      },
    ],
  },
  {
    slug: 'stamps-and-labels',
    path: '/guides/stamps-and-labels',
    title: 'Cat Mail Co Stamps and Labels Guide: Mark Every Parcel Clearly',
    seoTitle: 'Cat Mail Co Stamps and Labels Guide',
    seoDescription:
      'Use destination, weight, fragile, heavy, and decorative marks in Cat Mail Co. without hiding the information your postal workflow needs.',
    summary:
      'Apply functional information in a repeatable order, then decorate around it without obscuring the parcel job.',
    category: 'Post Office',
    difficulty: 'Beginner',
    coverImageUrl: videos.tips.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'youtube_explainer',
    videoSearchQueries: [
      'Cat Mail Co stamps',
      'Cat Mail Co labels',
      'Cat Mail Co stamp system',
    ],
    sourceNotes:
      'Official Steam copy confirms weighing, postage, destination labels, fragile/heavy markings, and decorative stamps.',
    video: videos.tips,
    tags: ['Stamps', 'Labels', 'Weight'],
    relatedRoutes: [
      '/guides/package-sorting',
      '/tips',
      '/guides/night-shift',
      '/co-op',
    ],
    body: [
      {
        heading: 'Use one marking order on every box',
        paragraphs: [
          'A repeatable order is more useful than a clever memory trick. Read the destination, determine whether weighing is required, establish postage, add destination and handling marks, then decorate. Keeping decorative choices last protects the information that decides where and how a parcel moves.',
          'Place the most important functional marks where they remain visible in storage. If boxes are stacked with one face outward, reserve that face for destination and special handling. A beautiful stamp on the underside cannot help the next player audit a shelf.',
        ],
      },
      {
        heading: 'Separate postage from handling',
        paragraphs: [
          'Weight, postage, destination, fragile, and heavy are different decisions. Do not treat one mark as proof that the whole parcel is ready. Build a short mental checklist: correct route, correct postage, correct handling, then complete. If any item is unclear, the package stays in progress.',
          'This separation becomes especially important in co-op. One player may weigh while another stamps. The handoff needs a visible signal, such as a fixed work surface, rather than an assumption that a stamp-looking box is fully finished.',
        ],
      },
      {
        heading: 'Decorate without burying instructions',
        paragraphs: [
          'Cat Mail Co. deliberately gives players freedom to make parcels playful and personal. Use that freedom after the postal job is readable. Cluster decorative stamps away from destination and handling marks, avoid covering text, and keep at least one clean inspection face. This preserves creativity without turning storage into a guessing game.',
          'When playing with friends, agree on the functional zone of each face before everyone starts decorating. The agreement can be simple: top for destination, front for handling, remaining space for style. A shared convention prevents a teammate from accidentally hiding critical information.',
        ],
      },
      {
        heading: 'Recognize when a parcel is actually complete',
        paragraphs: [
          'A completed parcel has a known destination, any required postage and handling information, and no unresolved nighttime question. Move it out of the work zone immediately. Leaving finished boxes beside the tools makes them visually identical to unfinished work and invites duplicate stamping.',
          'If you are interrupted, put the box back into a clearly named in-progress position rather than setting it on the nearest shelf. The physical position should communicate whether another player can safely continue or whether the original handler must recheck it.',
        ],
      },
      {
        heading: 'Audit labels before loading the boat',
        paragraphs: [
          'The final audit is destination first, then special handling, then load group. Do not assume a parcel is correct because it came from a finished shelf; a misplaced box can contaminate the whole batch. Turn each label outward as it enters the load so the last scan is fast.',
          'When an error appears, return the package to the work zone and repair the process that allowed it. If labels are regularly hidden, change stacking. If destination marks are missing, change the handoff. The goal is not to blame the last player holding the box but to make the next error harder to create.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I decorate packages however I want?',
        answer:
          'Yes, the game encourages personal decoration. Keep destination, postage, and special handling information visible first.',
      },
      {
        question: 'What should go on the visible face?',
        answer:
          'Prioritize destination and fragile/heavy handling marks on the face that remains visible in storage.',
      },
      {
        question: 'How do co-op players avoid duplicate stamping?',
        answer:
          'Use a fixed handoff surface and move fully completed parcels away from tools immediately.',
      },
    ],
  },
  {
    slug: 'night-shift',
    path: '/guides/night-shift',
    title: 'Cat Mail Co Night Shift Guide: Moonlight and Hidden Parcels',
    seoTitle: 'Cat Mail Co Night Shift and Moonlight Guide',
    seoDescription:
      'Handle Cat Mail Co. moonlight mechanics with a daytime exception shelf, a night inspection pass, and a clean close-out routine.',
    summary:
      'Keep unusual packages visible during the day, inspect them under moonlight at night, and resolve revealed handling needs before loading.',
    category: 'Night Shift',
    difficulty: 'Intermediate',
    coverImageUrl: steamScreenshot,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Cat Mail Co night shift',
      'Cat Mail Co moonlight packages',
      'Cat Mail Co hidden parcel properties',
    ],
    sourceNotes:
      'Limited to official descriptions of moonlight revealing hidden truths; avoids inventing a full property database.',
    tags: ['Moonlight', 'Night', 'Mystery'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/package-sorting',
      '/walkthrough',
      '/tips',
    ],
    body: [
      {
        heading: 'Do not solve a night parcel during the day',
        paragraphs: [
          'The safest daytime response to an unclear parcel is to keep it visible and unresolved. Official descriptions establish that moonlight reveals hidden truths about some packages. That means guessing early can lock a parcel into the wrong workflow. Place unusual mail on a dedicated exception shelf with its readable face exposed.',
          'Continue processing ordinary jobs instead of letting one mystery stop the entire post office. The exception shelf separates deferral from neglect: the box is not lost, and the rest of the mail can keep moving.',
        ],
      },
      {
        heading: 'Start night with an inspection route',
        paragraphs: [
          'When the light changes, visit the exception shelf before rearranging storage or loading remaining mail. Inspect one parcel at a time and compare what moonlight reveals with the functional marks already applied. If new information changes destination or handling, return the parcel to the work station rather than trying to fix it inside a finished stack.',
          'Keep the inspection route short. Exception shelf, moonlit viewing position, work station, then correct destination is enough. A mystery package should not tour every corner of the building.',
        ],
      },
      {
        heading: 'Keep revealed information readable',
        paragraphs: [
          'Once a hidden property is understood, preserve that decision in the way the parcel is placed and marked. Do not bury it beneath decorative stickers or turn the relevant face toward the wall. If co-op teammates are active, call out the handoff and move the box through the same completed-mail boundary used during the day.',
          'Avoid building an unsupported universal chart from a few examples. The launch version may expand or patch its package behaviors. Use the in-game information visible on the current parcel and treat external lists as secondary until they are current and verifiable.',
        ],
      },
      {
        heading: 'Close the night without carrying confusion forward',
        paragraphs: [
          'The night is complete when every exception has either been resolved or deliberately left in one visible place for the next step. Do not mix unresolved mail into a destination group simply to empty the shelf. A small honest backlog is safer than a clean-looking room full of hidden mistakes.',
          'Finish with a floor scan, a destination scan, and an outgoing-load scan. Return tools, keep moonlight-sensitive parcels accessible, and preserve a clear incoming zone for the next boat. The next day should begin with known work, not archaeology.',
        ],
      },
    ],
    faq: [
      {
        question: 'What does moonlight do in Cat Mail Co.?',
        answer:
          'Official material says moonlight reveals hidden truths or properties about some packages, affecting how they should be handled.',
      },
      {
        question: 'Should I wait until night to process every parcel?',
        answer:
          'No. Complete clear daytime jobs and reserve the exception shelf for genuinely unusual or incomplete packages.',
      },
      {
        question: 'Is there a complete hidden-property database?',
        answer:
          'This site does not publish one without reliable current data. Use the live in-game parcel information and current walkthroughs.',
      },
    ],
  },
  {
    slug: 'co-op',
    path: '/co-op',
    title: 'Cat Mail Co Co-op Guide: Job Splits for 2, 3, or 4 Players',
    seoTitle: 'Cat Mail Co Co-op Guide',
    seoDescription:
      'Run Cat Mail Co. online co-op with practical two-, three-, and four-player roles for counter service, parcel processing, storage, and loading.',
    summary:
      'Use fixed handoff points and role ownership so extra cats reduce walking instead of creating duplicate work.',
    category: 'Co-op',
    difficulty: 'Intermediate',
    coverImageUrl: videos.coop.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Cat Mail Co co op',
      'Cat Mail Co multiplayer',
      'Cat Mail Co with friends',
    ],
    sourceNotes:
      'Official Steam categories confirm online co-op and official copy confirms up to four players. Role advice is an original workflow model.',
    video: videos.coop,
    tags: ['Co-op', 'Multiplayer', 'Roles'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/package-sorting',
      '/guides/stamps-and-labels',
      '/tips',
    ],
    body: [
      {
        heading: 'The handoff matters more than the role name',
        paragraphs: [
          'Cat Mail Co. supports online co-op for up to four players, but four moving players are not automatically four times faster. The station becomes efficient when a parcel changes ownership at a fixed place and that transfer has one meaning. A counter tray can mean newly accepted and ready to read; a finished table can mean fully marked and ready to sort.',
          'Avoid passing boxes directly between players unless the next action is obvious. Physical handoff points survive missed voice chat, distractions, and different play speeds. They also make it easy for anyone to step into a stalled job without restarting the whole inspection.',
        ],
      },
      {
        heading: 'Best two-player split',
        paragraphs: [
          'With two players, split front and back. The front cat handles customers, accepts or retrieves mail, reads the initial job, and stages parcels at the work handoff. The back cat weighs, applies functional marks, sorts completed packages, and prepares outgoing loads. Swap when one side becomes idle or when the night inspection needs both players.',
          'The front player should not fill every spare second by rearranging the back room. That destroys ownership and can move boxes the back player is tracking. Help by clearing the shared handoff, carrying a clearly finished batch, or asking which destination is overloaded.',
        ],
        bullets: [
          'Player 1: counter, customers, initial reading, incoming handoff.',
          'Player 2: weighing, stamps, destination storage, boat load.',
          'Shared: night inspection, closing audit, layout changes.',
        ],
      },
      {
        heading: 'Three players need a dedicated sorter',
        paragraphs: [
          'A third player is most useful between processing and storage. Keep one cat at the counter, one at the tools, and one on destination shelves plus loading. The sorter audits labels before placing anything, keeps the exception zone visible, and feeds the outgoing route. This reduces the distance the processing player walks.',
          'If arrivals slow down, the counter player can stage the next batch or help retrieve completed customer mail. If storage is quiet, the sorter can clean lanes and prepare the night inspection. Preserve the processing station as the stable center rather than sending every player to whichever pile looks largest.',
        ],
      },
      {
        heading: 'Four players work best as a pipeline',
        paragraphs: [
          'For four players, separate counter, inspection and weighing, stamps and labels, and sorting plus boat work. The exact tool split can change, but a parcel should move in one direction. Put an in-progress surface between the tool roles so a weighed box is never confused with a fully completed one.',
          'Use short callouts only for exceptions: unclear destination, night check, fragile or heavy handling, and a shelf that is full. Routine mail should not require voice confirmation because the physical pipeline already communicates its state.',
        ],
      },
      {
        heading: 'Reset together before the next cycle',
        paragraphs: [
          'At closing, assign one player to scan incoming and work surfaces, one to scan destination storage, one to check the exception shelf, and one to check the boat load. Then return tools and clear walking lanes together. This parallel audit is where a larger team creates its cleanest advantage.',
          'If the team repeatedly argues about where boxes belong, stop and simplify the layout. More signs, more shelves, and more callouts cannot rescue a pipeline whose handoff points have multiple meanings.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many players does Cat Mail Co. support?',
        answer:
          'Official Steam information says the game supports single-player and online co-op for up to four players.',
      },
      {
        question: 'What is the best duo setup?',
        answer:
          'Use a front/back split: one player owns customers and incoming mail while the other owns tools, finished sorting, and loading.',
      },
      {
        question: 'Can Cat Mail Co. be played solo?',
        answer:
          'Yes. Single-player is officially supported; use the same handoff zones as a personal visual checklist.',
      },
    ],
  },
  {
    slug: 'walkthrough',
    path: '/walkthrough',
    title: 'Cat Mail Co Walkthrough: A Spoiler-Light Progression Route',
    seoTitle: 'Cat Mail Co Walkthrough and Progression Guide',
    seoDescription:
      'Follow a spoiler-light Cat Mail Co. walkthrough from the first backlog through new tools, destinations, moonlight parcels, co-op flow, and closing audits.',
    summary:
      'Advance by stabilizing each postal loop before adding the next destination, tool, or story backlog rather than rushing every new task at once.',
    category: 'Start',
    difficulty: 'Intermediate',
    coverImageUrl: videos.walkthrough.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Cat Mail Co walkthrough',
      'Cat Mail Co full gameplay',
      'Cat Mail Co progression',
    ],
    sourceNotes:
      'Current full-release walkthrough selected for progression cross-check. Article stays spoiler-light and avoids unsupported exact chapter claims.',
    video: videos.walkthrough,
    tags: ['Walkthrough', 'Progression', 'Story'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/night-shift',
      '/tips',
      '/co-op',
    ],
    body: [
      {
        heading: 'Phase one: recover a usable floor',
        paragraphs: [
          'Your first progression goal is not to clear the entire mysterious backlog in one push. Recover a working lane through the post office, identify incoming and outgoing sides, and make space for one parcel at the tools. The backlog is both work and story, so process it in controlled groups that do not swallow the daily mail.',
          'Learn the complete lifecycle on ordinary parcels before expanding: receive, inspect, weigh when required, apply functional marks, sort, hand over or load, and reset. When you can glance at the room and identify every parcel state, the post office is ready for more complexity.',
        ],
      },
      {
        heading: 'Phase two: turn destinations into a map',
        paragraphs: [
          'As destinations unlock, give each one a stable home with labels facing outward. Do not let new routes erase the distinction between unfinished and completed work. Add a destination zone beside the existing flow, then observe how much space it actually needs before moving older zones.',
          'Use the boat schedule as a natural batch boundary. Prepare correct groups, audit them, and load from a readable staging area. If returned or damaged mail appears after a routing mistake, slow down and repair the destination boundary rather than compensating with more frantic movement.',
        ],
      },
      {
        heading: 'Phase three: make moonlight part of the routine',
        paragraphs: [
          'When nighttime mechanics matter, stop treating every unclear parcel as a daytime puzzle. Create an exception shelf and build a night inspection route. Moonlight should resolve selected questions without forcing the whole station to wait. Keep revealed information visible and return each parcel through the normal work boundary.',
          'The story is discovered through the backlog and the packages you handle. Read before acting and avoid skipping every clue in the name of efficiency. The ideal walkthrough preserves the calm rhythm while keeping the room understandable.',
        ],
      },
      {
        heading: 'Phase four: absorb tools and abilities one at a time',
        paragraphs: [
          'New tools and abilities should shorten an existing route or clarify a decision. Place a new tool where it reduces walking without blocking the work surface, then run a full cycle before redesigning around it. If the tool creates a second half-finished pile, the layout needs a clearer handoff.',
          'Avoid optimizing around a temporary visual trick from an old demo video. The game launched on July 9, 2026, and current patches may adjust details. Use the live interface as the final authority and treat videos as route illustrations.',
        ],
      },
      {
        heading: 'Phase five: clear story backlog without losing daily flow',
        paragraphs: [
          'Reserve a defined amount of space or one work block for backlog mail, then return to daily service. A backlog parcel should never sit in the incoming boat zone unless it is genuinely the next job. Separating story work from daily arrivals prevents progression from making the post office less functional.',
          'Before ending a session, record the next unresolved job physically: leave it alone on the exception shelf or at a dedicated backlog start point. Clear all unrelated work surfaces. The next session can then begin with one known action instead of a room-sized mystery.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this Cat Mail Co. walkthrough spoiler-free?',
        answer:
          'It is spoiler-light: it explains the progression rhythm and postal systems without listing story reveals or hidden package outcomes.',
      },
      {
        question: 'Should I clear the entire backlog immediately?',
        answer:
          'No. Stabilize daily mail first, then process backlog in controlled groups so it does not erase your working layout.',
      },
      {
        question: 'Where can I see a full gameplay route?',
        answer:
          'The embedded Zhain Gaming walkthrough is a current full-release visual cross-check. Use the live game for patch-current details.',
      },
    ],
  },
  {
    slug: 'tips',
    path: '/tips',
    title: 'Cat Mail Co Tips: 10 Ways to Run a Cleaner Post Office',
    seoTitle: 'Cat Mail Co Tips and Tricks',
    seoDescription:
      'Use 10 practical Cat Mail Co. tips for faster walking, safer labels, cleaner destination zones, night inspections, co-op handoffs, and boat loading.',
    summary:
      'Optimize the information flow before movement speed: visible labels, one-way handoffs, small batches, and an honest exception shelf solve most chaos.',
    category: 'Post Office',
    difficulty: 'Advanced',
    coverImageUrl: videos.tips.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Cat Mail Co tips',
      'Cat Mail Co advanced tips',
      'Cat Mail Co tricks',
    ],
    sourceNotes:
      'Current advanced-tips video selected for launch-version context. Recommendations are original workflow rules cross-checked against official mechanics.',
    video: videos.tips,
    tags: ['Tips', 'Efficiency', 'Advanced'],
    relatedRoutes: [
      '/guides/package-sorting',
      '/guides/stamps-and-labels',
      '/guides/night-shift',
      '/co-op',
    ],
    body: [
      {
        heading: '1-2: shorten the route and face labels outward',
        paragraphs: [
          'First, measure efficiency in turns and crossings rather than raw speed. Incoming mail, tools, finished storage, and the boat should form a mostly one-way route. If a parcel returns past the counter three times, move the relevant shelf or tool. Keep the center lane open so carrying a large box does not require weaving through decorative clutter.',
          'Second, make every stored label readable from the aisle. Turn destination and special handling marks outward and avoid stacks that hide the box behind them. A shelf you can audit in one glance saves more time than a compact pile that must be dismantled.',
        ],
      },
      {
        heading: '3-4: separate states and cap the active batch',
        paragraphs: [
          'Third, use different places for incoming, in-progress, complete, exception, and outgoing mail. Do not let destination zones accept a parcel until its functional work is complete. Physical state is a better checklist than memory.',
          'Fourth, cap the number of active boxes. One parcel per tool role is enough in solo play; a co-op pipeline can support a few more only when each handoff has a fixed surface. When unfinished mail spreads beyond the work zone, stop opening new jobs and finish the batch.',
        ],
      },
      {
        heading: '5-6: batch movement and preserve an exception shelf',
        paragraphs: [
          'Fifth, batch only completed movement. Carry several verified parcels to the same destination or load group, but do not pre-stamp a mixed pile from memory. The safe batch begins after the decision is complete.',
          'Sixth, protect a small exception shelf for confusing or moonlight-sensitive parcels. This zone should be visible, close to the night inspection route, and never used as overflow storage. If it fills, resolving it becomes the next priority.',
        ],
      },
      {
        heading: '7-8: standardize stamp order and co-op handoffs',
        paragraphs: [
          'Seventh, apply marks in the same order: destination, weight or postage, special handling, then decoration. Put functional marks on the face that stays visible in storage. The exact artistic placement is yours, but the information order should stay predictable.',
          'Eighth, make co-op handoffs physical. A tray, table edge, or shelf boundary should mean ready for the next role. Reserve voice chat for exceptions and layout changes. Routine parcels should move correctly even when nobody speaks.',
        ],
      },
      {
        heading: '9-10: inspect at night and reset before quitting',
        paragraphs: [
          'Ninth, begin night by inspecting the exception shelf. Resolve newly revealed properties through the normal work station and return completed boxes to visible destination zones. Do not let the moonlight phase become a second unstructured pile.',
          `Tenth, end with a no-carry audit: floor, work surfaces, destination shelves, exception shelf, then boat. Return tools and empty the incoming zone. A clean next start is the highest-value optimization because it prevents yesterday's uncertainty from becoming today's first mistake.`,
        ],
      },
    ],
    faq: [
      {
        question: 'What is the most important Cat Mail Co. tip?',
        answer:
          'Separate incoming, in-progress, complete, exception, and outgoing mail so every parcel has a visible state.',
      },
      {
        question: 'Is batching always faster?',
        answer:
          'Batch completed movement, not unresolved decisions. Mixed unfinished piles save steps but create expensive label errors.',
      },
      {
        question: 'How do I make co-op less chaotic?',
        answer:
          'Give each role ownership and use fixed handoff surfaces whose meaning never changes during the shift.',
      },
    ],
  },
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Cat Mail Co Release Date, Price, and Launch Status',
    seoTitle: 'Cat Mail Co Release Date and Price',
    seoDescription:
      'Cat Mail Co. released July 9, 2026 on Steam for Windows. Check its base price, launch discount, demo, developer, languages, and current platform status.',
    summary:
      'Cat Mail Co. is out now on Steam for Windows; use the live store for regional pricing and any time-limited discount.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: steamCover,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Cat Mail Co release date', 'Cat Mail Co price'],
    sourceNotes:
      'Steam appdetails checked July 10, 2026: released July 9, US base price $14.99, 15% time-limited discount at check time.',
    tags: ['Release', 'Price', 'Steam'],
    relatedRoutes: ['/download', '/demo', '/platforms', '/review'],
    body: [
      {
        heading: 'Cat Mail Co. is out now',
        paragraphs: [
          'Cat Mail Co. released on July 9, 2026. The official full game is available through Steam for Windows, with Maracas Studio as developer and Maracas Studio plus Gamersky Games listed as publishers. The launch version supports single-player and online co-op.',
          'Older trailers and cached pages may display July 6 because the release date changed before launch. For current status, trust the live Steam store and its July 9 release record rather than older announcement snippets.',
        ],
      },
      {
        heading: 'Price and launch discount',
        paragraphs: [
          'When checked on July 10, the US Steam store listed a $14.99 base price and a temporary 15 percent launch discount. Regional pricing, taxes, discount end times, and bundles can change, so this page does not present the discounted number as permanent.',
          'Open Steam while signed into your own account to see the correct currency and purchase terms. A third-party key shop or APK page is not an official price source.',
        ],
      },
      {
        heading: 'What the launch includes',
        paragraphs: [
          'Steam lists Windows support, English full audio, multiple interface and subtitle languages, online co-op, Steam achievements, Steam Cloud, and Family Sharing. Minimum requirements include Windows 10 or 11, 8 GB RAM, a GTX 950 or Radeon HD 7970-class graphics card, and 4 GB of storage.',
          'The Steam demo remains a useful try-before-buy route. Do not assume demo save transfer unless the current game or developer explicitly confirms it.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Cat Mail Co. release?',
        answer: 'The current Steam release date is July 9, 2026.',
      },
      {
        question: 'How much does Cat Mail Co. cost?',
        answer:
          'The US base price was $14.99 when checked July 10, 2026. Use Steam for current regional pricing and discounts.',
      },
      {
        question: 'Why do some pages say July 6?',
        answer:
          'The date changed before launch. Older trailers or cached store versions can retain the earlier date.',
      },
    ],
  },
  {
    slug: 'demo',
    path: '/demo',
    title: 'Cat Mail Co Demo Guide: What to Test Before Buying',
    seoTitle: 'Cat Mail Co Demo Download and Guide',
    seoDescription:
      'Download the official Cat Mail Co. demo on Steam and test parcel handling, post-office layout, moonlight, performance, controls, and online co-op.',
    summary:
      'Use the official Steam demo to test the postal rhythm, controls, readability, performance, and whether your group enjoys the handoff loop.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: videos.sorting.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Cat Mail Co demo', 'Cat Mail Co demo gameplay'],
    sourceNotes:
      'Official demo app 4622530 was live on Steam when checked July 10, 2026.',
    video: videos.sorting,
    tags: ['Demo', 'Steam', 'Try Before Buy'],
    relatedRoutes: ['/release-date', '/review', '/download', '/co-op'],
    body: [
      {
        heading: 'Download only the official Steam demo',
        paragraphs: [
          `The official demo is a separate free Steam app linked from the full game's store page. Use that route so updates, account ownership, and multiplayer services come from the expected platform. Avoid pages offering an Android APK, portable build, crack, or repacked demo.`,
          `The demo launched June 12, 2026 and was still available when checked after the full game's July 9 release. Availability can change, so the Steam button is the current answer.`,
        ],
      },
      {
        heading: 'Test the feel, not just the tutorial',
        paragraphs: [
          'Run enough parcels to learn whether reading labels, weighing, stamping, sorting, and loading feels satisfying to you. Rearrange a small part of the post office and see whether the first-person movement and object handling remain comfortable. If you plan to play solo, test how quickly you can recover after creating a messy pile.',
          'If co-op is the reason you are interested, invite the same number of friends you expect to play with and try a fixed role split. The important question is whether the group enjoys coordination, not whether four players can finish a short demo quickly.',
        ],
      },
      {
        heading: 'Check performance, controls, and readability',
        paragraphs: [
          'Confirm frame pacing, graphics comfort, text size, audio controls, and the input prompts you will actually use. Steam lists Windows as the supported platform and does not currently advertise full controller support in its category list. Steam Deck users should be ready to test a custom layout or keyboard-and-mouse fallback.',
          'Do not assume demo saves transfer into the full game unless the current build explicitly says so. Treat the demo as a buying and hardware check rather than a permanent progression start.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the Cat Mail Co. demo free?',
        answer: 'Yes. The official demo is a free separate app on Steam.',
      },
      {
        question: 'Does the demo support co-op?',
        answer:
          'Steam lists online co-op for the demo. Test it with the group size you expect to use.',
      },
      {
        question: 'Does demo progress transfer?',
        answer:
          'Do not assume transfer unless the current game or developer confirms it in the live interface or an official announcement.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Cat Mail Co Platforms: Switch, PS5, Xbox, Mac, and Mobile Status',
    seoTitle: 'Cat Mail Co Switch, PS5 and Xbox Status',
    seoDescription:
      'Cat Mail Co. is confirmed for Windows on Steam. Check the current status of Nintendo Switch, PS5, Xbox, macOS, Linux, iOS, Android, and Steam Deck.',
    summary:
      'Windows on Steam is confirmed; no official console, Mac, Linux, iOS, or Android release was verified at the July 10 check.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: steamCover,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Cat Mail Co Switch',
      'Cat Mail Co PS5',
      'Cat Mail Co Xbox',
      'Cat Mail Co mobile',
    ],
    sourceNotes:
      'Live Steam platform flags show Windows true, macOS and Linux false. No official console or mobile store listings found.',
    tags: ['Switch', 'PS5', 'Xbox'],
    relatedRoutes: ['/release-date', '/steam-deck', '/download', '/discord'],
    body: [
      {
        heading: 'Confirmed platform: Windows through Steam',
        paragraphs: [
          'The current full-game store listing supports Windows and requires a 64-bit version of Windows 10 or 11. Steam is the official purchase and update path. The listing does not mark macOS or Linux as supported platforms.',
          'Steam Deck hardware can run the Windows/Steam build in current gameplay footage, but that is different from an official Valve compatibility rating or full controller guarantee.',
        ],
      },
      {
        heading: 'Nintendo Switch, PS5, and Xbox',
        paragraphs: [
          'Searches for Switch, PS5, and Xbox are active, but no official platform store page or release date was verified for any of them. Do not treat a generic game database, release calendar, or retail placeholder as a port announcement.',
          'If a console version is announced, the safest confirmation will be a platform-holder store listing plus a Maracas Studio or Steam announcement. Until then, these are watch items rather than unavailable-forever claims.',
        ],
      },
      {
        heading: 'Mobile app and APK searches',
        paragraphs: [
          'No official iOS or Android version was verified. Search results already include third-party pages claiming a Cat Mail Co. APK, but those claims conflict with the official Windows-only store record. Do not install an APK, mobile port, or account tool from an unrelated download page.',
          'Follow the official Steam community, Maracas Studio social accounts, and this page for real platform changes. A real mobile launch should have an Apple App Store or Google Play publisher listing that matches the developer.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cat Mail Co. on Nintendo Switch?',
        answer:
          'No official Nintendo Switch release or store listing was verified as of July 10, 2026.',
      },
      {
        question: 'Is Cat Mail Co. on PS5 or Xbox?',
        answer:
          'No official PlayStation or Xbox release was verified. Windows on Steam is the confirmed platform.',
      },
      {
        question: 'Is there a Cat Mail Co. mobile app?',
        answer:
          'No official iOS or Android version was verified. Avoid third-party APK pages.',
      },
    ],
  },
  {
    slug: 'steam-deck',
    path: '/steam-deck',
    title: 'Cat Mail Co Steam Deck Guide: Playability, Controls, and Setup',
    seoTitle: 'Cat Mail Co Steam Deck Guide',
    seoDescription:
      'Cat Mail Co. can be observed running on Steam Deck, but official verification and full controller support are unclear. Use this setup and refund-window checklist.',
    summary:
      'Treat Steam Deck as playable-with-testing, not officially guaranteed: verify prompts, trackpad aiming, object handling, text, and co-op before committing.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: videos.deck.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'Cat Mail Co Steam Deck',
      'Cat Mail Co controller support',
    ],
    sourceNotes:
      'Current gameplay footage proves observed runtime only. Steam categories did not show full controller support; community posts raised prompt concerns.',
    video: videos.deck,
    tags: ['Steam Deck', 'Controls', 'Performance'],
    relatedRoutes: ['/demo', '/platforms', '/download', '/discord'],
    body: [
      {
        heading: 'Playable footage is not the same as verification',
        paragraphs: [
          'Current launch-day footage shows Cat Mail Co. running on Steam Deck hardware. However, the Steam store did not display a full controller-support category when checked, and current community discussion has mentioned keyboard prompts. This page therefore treats the game as testable on Deck, not as officially Verified.',
          'Use the official demo first when available. A successful boot is only the beginning; postal work depends on accurate object selection, readable labels, and comfortable carrying and stamping over a longer session.',
        ],
      },
      {
        heading: 'Test the controls that matter',
        paragraphs: [
          'Check movement, camera speed, object pickup and placement, stamp selection, fine label aiming, menus, and any text-entry prompt. A right trackpad configured as mouse can help with precise first-person interaction, while back buttons can reduce awkward combinations. Keep a keyboard-and-mouse template available if native prompts do not cover every action.',
          'Do not copy a complicated community layout before identifying the missing input. Add one binding at a time and label it clearly so co-op or night-shift actions do not become a memory test.',
        ],
      },
      {
        heading: 'Check readability and performance',
        paragraphs: [
          `Package labels are core gameplay information. Test text and mark readability at the Deck's native screen size before deciding that the frame rate alone is acceptable. Increase interface scale when the game provides it and reduce camera sensitivity if fine placement feels unstable.`,
          'Begin with conservative graphics settings, then raise quality after a full postal cycle. Watch frame pacing while the room contains more parcels and during online co-op, not only in the opening area.',
        ],
      },
      {
        heading: 'Keep the purchase decision reversible',
        paragraphs: [
          `Try the demo or test the full game early in Steam's normal refund window and avoid long configuration sessions before verifying the core loop. Confirm that cloud saves, online co-op, and suspend behavior work for your own setup.`,
          'Compatibility can improve after patches. Recheck the live Steam compatibility panel and community announcements rather than treating this launch snapshot as permanent.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cat Mail Co. Steam Deck Verified?',
        answer:
          'No official Verified status was confirmed in this July 10 check. Current footage shows observed playability, not a guarantee.',
      },
      {
        question: 'Does Cat Mail Co. have full controller support?',
        answer:
          'The Steam category list did not advertise full controller support when checked. Be ready to test custom Steam Input or keyboard-and-mouse controls.',
      },
      {
        question: 'What should I test first on Deck?',
        answer:
          'Test label readability, fine object placement, stamping, menus, prompts, and online co-op before spending time on graphics tuning.',
      },
    ],
  },
  {
    slug: 'review',
    path: '/review',
    title: 'Cat Mail Co Review Guide: Should You Buy It?',
    seoTitle: 'Cat Mail Co Review - Should You Buy?',
    seoDescription:
      'Decide whether Cat Mail Co. is worth buying based on its relaxed parcel loop, organization freedom, moonlight mystery, online co-op, launch reviews, and demo.',
    summary:
      'Buy for tactile, low-pressure organization and friendly co-op; wait if you need deep automation, confirmed console support, or polished controller-first play.',
    category: 'Start',
    difficulty: 'Status',
    coverImageUrl: videos.review.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Cat Mail Co review',
      'Cat Mail Co worth it',
      'Cat Mail Co gameplay review',
    ],
    sourceNotes:
      'Buyer framework cross-checks official features, a current review video, and the Steam launch snapshot. No numeric site score is assigned.',
    video: videos.review,
    tags: ['Review', 'Worth It', 'Buy'],
    relatedRoutes: ['/demo', '/release-date', '/co-op', '/platforms'],
    body: [
      {
        heading: 'Buy it for the rhythm, not a race',
        paragraphs: [
          'Cat Mail Co. is strongest for players who enjoy making a messy physical workspace understandable. The repeated actions are the appeal: receive, read, weigh, stamp, label, sort, retrieve, and load parcels while the post office gradually opens new destinations and tools. Official design language emphasizes no timers or penalties.',
          'If the satisfaction of facing labels outward and improving a shelf layout sounds like work rather than play, the charming cat setting may not be enough. Use the demo because the core loop reveals itself quickly.',
        ],
      },
      {
        heading: 'Co-op changes the value',
        paragraphs: [
          'Online co-op for up to four players turns the post office into a communication and handoff game. A duo can split front counter and back room; larger groups can create a full pipeline. It is a good fit for friends who enjoy low-stakes coordination and decorating a shared space.',
          'It is a weaker fit for groups looking for competitive pressure, strict scores, or constant action. The no-timer structure means players create their own efficiency goals.',
        ],
      },
      {
        heading: 'The mystery layer keeps routine from being flat',
        paragraphs: [
          'Nighttime moonlight reveals hidden truths about some packages, while the abandoned backlog carries the post office story. Those systems give a reason to inspect parcels rather than treating every box as identical cargo.',
          'Do not expect this guide to spoil those outcomes or promise the scale of a large management database. The game is a focused cozy simulation built around physical postal tasks and light mystery.',
        ],
      },
      {
        heading: 'Who should wait',
        paragraphs: [
          'Wait if you need an official Switch, PlayStation, Xbox, Mac, Linux, iOS, or Android version; Windows on Steam is the confirmed launch platform. Steam Deck players should also test the demo because current runtime footage does not equal full controller support or Valve verification.',
          'At the July 10 snapshot, Steam displayed a Very Positive aggregate from 328 reviews. That is an encouraging first-day signal, not a permanent verdict. Read recent reviews for patch-specific performance and co-op issues.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cat Mail Co. worth it solo?',
        answer:
          'Yes if you enjoy calm first-person organization and tactile parcel work. The demo is the best way to test that loop.',
      },
      {
        question: 'Is Cat Mail Co. better in co-op?',
        answer:
          'Co-op adds role coordination and shared layout decisions, but solo is officially supported and keeps the same core postal loop.',
      },
      {
        question: 'What was the launch review status?',
        answer:
          'Steam displayed a Very Positive aggregate from 328 reviews when checked July 10, 2026; the live store may change.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Cat Mail Co Download: Official Steam and Safe Install Guide',
    seoTitle: 'Cat Mail Co Download - Official Steam Link',
    seoDescription:
      'Download Cat Mail Co. safely from Steam for Windows, check minimum requirements, try the official demo, and avoid fake APK, crack, repack, or trainer pages.',
    summary:
      'Use only the official Steam full-game or demo pages; no official mobile APK or alternate PC installer was verified.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: steamCover,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'Cat Mail Co download',
      'Cat Mail Co Steam',
      'Cat Mail Co app',
    ],
    sourceNotes:
      'Unsafe APK and trainer pages were found in search, while official platform data lists Windows/Steam only.',
    tags: ['Download', 'Steam', 'Safety'],
    relatedRoutes: ['/release-date', '/demo', '/platforms', '/steam-deck'],
    body: [
      {
        heading: 'Use the official Steam pages',
        paragraphs: [
          'The full game is sold through its Steam App ID 4380490 page, and the official demo uses App ID 4622530. Those pages provide the current build, regional price, updates, Steam Cloud, online co-op services, and the publisher record.',
          'Confirm the URL is on store.steampowered.com before signing in or installing anything. Search ads and lookalike download buttons can route away from Steam even when they use official screenshots.',
        ],
      },
      {
        heading: 'Check the Windows requirements',
        paragraphs: [
          'Steam lists Windows 10 or 11, a 64-bit processor and operating system, 8 GB RAM, a GTX 950 or Radeon HD 7970-class GPU, and 4 GB of available storage as minimum requirements. The live store is the final source because patches may change storage needs.',
          'If your hardware is uncertain, install the free official demo first and test a full parcel cycle rather than relying on a third-party compatibility claim.',
        ],
      },
      {
        heading: 'Avoid APK, crack, repack, and trainer claims',
        paragraphs: [
          'No official Android or iOS version was verified. Pages offering a Cat Mail Co. APK are not supported by the official Windows-only platform record. Trainers and cracks can introduce malware, corrupt saves, break online co-op, or put account credentials at risk.',
          'Do not disable antivirus protection, add suspicious folders to exclusions, or provide a Steam login to a third-party installer. A platform port should have a matching official store listing and developer announcement before you trust it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Cat Mail Co.?',
        answer:
          'Use the official Cat Mail Co. full-game or demo page on Steam.',
      },
      {
        question: 'Is there an official Cat Mail Co. APK?',
        answer:
          'No official Android release or APK was verified. Avoid third-party APK pages.',
      },
      {
        question: 'How much storage does Cat Mail Co. need?',
        answer:
          'Steam listed 4 GB available storage in the minimum requirements when checked July 10, 2026.',
      },
    ],
  },
  {
    slug: 'discord',
    path: '/discord',
    title: 'Cat Mail Co Discord and Official Community Links',
    seoTitle: 'Cat Mail Co Discord and Official Links',
    seoDescription:
      'Find the official Cat Mail Co. Discord, Steam Community, Maracas Studio X, YouTube, Bluesky, and safe ways to verify support or update links.',
    summary:
      'Open community links from Steam or the developer profiles, and verify the destination before sharing account or support information.',
    category: 'Community',
    difficulty: 'Status',
    coverImageUrl: steamCover,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['Cat Mail Co Discord', 'Cat Mail Co official links'],
    sourceNotes:
      'Community URLs were read from the Steam/SteamDB social link surface and checked July 10, 2026.',
    tags: ['Discord', 'Community', 'Support'],
    relatedRoutes: ['/download', '/platforms', '/release-date', '/guides'],
    body: [
      {
        heading: 'Official community routes',
        paragraphs: [
          'The official Steam social surface links a Maracas Studio Discord, X account, YouTube channel, Bluesky profile, Instagram, and TikTok. Use the Steam page as a trusted starting point whenever an invitation expires or a social handle changes.',
          'Steam Community is the best public place to check announcements, patch discussions, controller questions, and support patterns without joining an external server.',
        ],
        bullets: [
          'Discord: discord.gg/qq6wnVMZTX',
          'Steam Community: steamcommunity.com/app/4380490',
          'X: x.com/MaracasStudio',
          'YouTube: Maracas Studio channel linked from Steam',
          'Bluesky: maracasstudio.bsky.social',
        ],
      },
      {
        heading: 'Verify links before signing in',
        paragraphs: [
          `A real community link should not ask for a Steam password inside an unrelated website. Use Steam's own sign-in pages, confirm the hostname, and avoid direct messages offering keys, APK files, trainers, or account verification tools.`,
          'For bug reports, share the game version, operating system, reproduction steps, and non-sensitive screenshots. Never post purchase receipts, email addresses, authentication codes, or account tokens in a public channel.',
        ],
      },
      {
        heading: 'Where to check different questions',
        paragraphs: [
          'Use Steam for purchase, price, platform, and patch status. Use Steam Community or Discord for current troubleshooting and co-op questions. Use developer social channels for announcements, trailers, and future platform news.',
          'This independent guide site can organize public information, but it cannot restore accounts, issue refunds, or confirm an unpublished console or mobile port.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Cat Mail Co. Discord?',
        answer:
          'The Steam social listing pointed to discord.gg/qq6wnVMZTX when checked July 10, 2026.',
      },
      {
        question: 'Where should I report a bug?',
        answer:
          'Start with Steam Community or the official Discord and include version, system, and clear reproduction steps.',
      },
      {
        question: 'Can this site provide official support?',
        answer:
          'No. Cat Mail Co. Guide is independent; official support must come from Maracas Studio or Steam.',
      },
    ],
  },
  {
    slug: 'parcel-types',
    path: '/parcel-types',
    title: 'Cat Mail Co Parcel Types and Handling Rules',
    seoTitle: 'Cat Mail Co Parcel Types - Labels, Weight and Handling',
    seoDescription:
      'Sort Cat Mail Co parcel types by destination, weight, postage, temperature, repair, light and night-shift handling requirements.',
    summary:
      'Read every label before acting, separate exception parcels from normal mail, and route each package through only the stations its properties require.',
    category: 'Post Office',
    difficulty: 'Beginner',
    coverImageUrl: videos.sorting.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'community_crosscheck',
    video: videos.sorting,
    videoSearchQueries: ['Cat Mail Co parcel types', 'Cat Mail Co sorting guide'],
    sourceNotes:
      'Parcel properties were organized from current gameplay videos and the special-room systems consistently documented by competing wikis.',
    tags: ['Parcels', 'Sorting', 'Labels'],
    relatedRoutes: ['/guides/package-sorting', '/special-rooms', '/boat-destinations', '/tips'],
    body: [
      {
        heading: 'Read properties before choosing a station',
        paragraphs: [
          'A parcel can combine destination, weight, postage, and a special handling property. Read the full label first; stamping a package before noticing cold, heat, darkness, light, or damage creates extra walking and makes mistakes harder to spot.',
          'Keep normal mail in the main lane and move every unclear or special parcel to one visible exception shelf. That protects the counter while you decide which room or tool it needs.',
        ],
      },
      {
        heading: 'Parcel decision table',
        paragraphs: [
          'Standard parcels move through inspect, weigh, postage, label, destination sort, storage, and boat loading. Temperature, repair, dark, light, night, or fragile properties add a detour before final storage.',
        ],
        bullets: [
          'Standard: complete weight, postage, label, and destination checks.',
          'Cold or heated: use the matching room before final sort.',
          'Damaged: repair first, then reread the label.',
          'Dark or light-sensitive: use the marked special room and avoid mixing shelves.',
          'Night package: keep it visible until the correct night process is available.',
        ],
      },
      {
        heading: 'Finish one parcel state at a time',
        paragraphs: [
          'Do not leave half-finished parcels across multiple tables. Complete one state, place it in a clearly named zone, then start the next job. In co-op, assign one player to exceptions so special mail does not disappear into the normal queue.',
        ],
      },
    ],
    faq: [
      { question: 'How do I identify a parcel type?', answer: 'Read destination, weight, postage, and every handling icon before stamping or storing it.' },
      { question: 'Where should unclear parcels go?', answer: 'Use one visible exception shelf until the label or required room is understood.' },
    ],
  },
  {
    slug: 'special-rooms',
    path: '/special-rooms',
    title: 'Cat Mail Co Special Rooms Guide',
    seoTitle: 'Cat Mail Co Special Rooms - Cold, Heated, Repair, Dark and Light',
    seoDescription:
      'Use Cat Mail Co cold, heated, repair, dark and light rooms with a clean exception route and co-op room ownership.',
    summary:
      'Special rooms are exception stations, not storage. Send only the parcels that show the matching property, complete the process, and return them to the normal outbound flow.',
    category: 'Post Office',
    difficulty: 'Intermediate',
    coverImageUrl: videos.organizing.thumbnailUrl,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'community_crosscheck',
    video: videos.organizing,
    videoSearchQueries: ['Cat Mail Co special rooms', 'Cat Mail Co cold heated repair room'],
    sourceNotes:
      'Room categories were cross-checked across current gameplay and exact-match competitor databases; exact timings remain update-sensitive.',
    tags: ['Rooms', 'Exceptions', 'Workflow'],
    relatedRoutes: ['/parcel-types', '/guides/night-shift', '/co-op', '/walkthrough'],
    body: [
      {
        heading: 'Match the icon, not the parcel color',
        paragraphs: [
          'Use the package label or handling icon to choose a room. Similar-looking parcels can require different treatment, and decorative colors are not a safe substitute for reading the job.',
        ],
        bullets: [
          'Cold room: temperature-sensitive cold parcels.',
          'Heated room: parcels that require warmth before sorting.',
          'Repair room: damaged or broken mail before final checks.',
          'Dark room: mail that must avoid normal light exposure.',
          'Light room: mail that needs the marked illuminated process.',
        ],
      },
      {
        heading: 'Build a one-way exception loop',
        paragraphs: [
          'Place the exception shelf near the path to the special rooms, not beside completed outgoing mail. Move a parcel from exception shelf to room, then back to the inspection point for one final label check before destination storage.',
          'In co-op, one player can own room processing while another keeps receiving and normal sorting moving. Announce when a parcel is complete so nobody repeats the treatment.',
        ],
      },
      {
        heading: 'Fix a room that appears not to work',
        paragraphs: [
          'Confirm the parcel has the matching property, the job is not already complete, and the room prompt is active. Put the parcel down, reread it, and retry from the correct interaction point before resetting the day.',
        ],
      },
    ],
    faq: [
      { question: 'Are special rooms storage?', answer: 'No. They process exception properties; finished parcels should return to normal destination storage.' },
      { question: 'Can one parcel need more than one room?', answer: 'Read every current handling property and complete each required state before outbound sorting.' },
    ],
  },
  {
    slug: 'boat-destinations',
    path: '/boat-destinations',
    title: 'Cat Mail Co Boat Destinations and Loading Guide',
    seoTitle: 'Cat Mail Co Boat Destinations - Sorting and Loading Route',
    seoDescription:
      'Sort Cat Mail Co parcels by boat destination, verify labels, stage outbound mail, and avoid loading the wrong route.',
    summary:
      'Destination sorting is the final accuracy check. Stage each route separately, audit the label, then load only the boat or outbound area that matches.',
    category: 'Post Office',
    difficulty: 'Beginner',
    coverImageUrl: steamScreenshot,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'user_intent_youtube',
    video: videos.walkthrough,
    videoSearchQueries: ['Cat Mail Co boat destinations', 'Cat Mail Co loading mail'],
    sourceNotes:
      'The route focuses on the destination workflow visible in current full-game walkthroughs; destination names should be read from the live label.',
    tags: ['Boat', 'Destinations', 'Loading'],
    relatedRoutes: ['/parcel-types', '/guides/package-sorting', '/walkthrough', '/co-op'],
    body: [
      {
        heading: 'Create a zone for every active destination',
        paragraphs: [
          'Before the outgoing rush, make one clearly separated staging area per current destination. Face labels outward and keep unfinished parcels away from those zones so a quick pickup never becomes a bad shipment.',
        ],
      },
      {
        heading: 'Run a three-point loading audit',
        paragraphs: [
          'At loading time, verify the destination on the parcel, the staging-zone label, and the current boat or outgoing-route marker. All three must agree. If one does not, return the package to inspection rather than guessing.',
        ],
        bullets: [
          'Parcel destination is readable.',
          'Postage and handling steps are complete.',
          'Staging zone matches the parcel.',
          'Boat or outbound marker matches the staging zone.',
        ],
      },
      {
        heading: 'Co-op loading roles',
        paragraphs: [
          'Use one loader and one auditor during busy departures. The loader moves only from a confirmed zone; the auditor keeps exceptions and late mail out of the lane. Swap roles after the boat leaves, not mid-load.',
        ],
      },
    ],
    faq: [
      { question: 'How do I avoid loading the wrong boat?', answer: 'Match parcel, staging-zone, and outbound destination labels before every load.' },
      { question: 'Should unfinished mail be staged by destination?', answer: 'No. Keep unfinished mail in a separate exception or work-in-progress area.' },
    ],
  },
  {
    slug: 'achievements',
    path: '/achievements',
    title: 'Cat Mail Co Achievements and Completion Checklist',
    seoTitle: 'Cat Mail Co Achievements - Completion Checklist and Save Tips',
    seoDescription:
      'Plan Cat Mail Co achievements with sorting, night-shift, co-op, stamp, boat and completion checks without risking your save.',
    summary:
      'Use a save-friendly checklist and record completed milestones after each shift. Exact achievement names can change, but the required play patterns are easy to prepare for.',
    category: 'Start',
    difficulty: 'Intermediate',
    coverImageUrl: steamCover,
    publishedAt,
    updatedAt: publishedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: ['Cat Mail Co achievements', 'Cat Mail Co 100 percent'],
    sourceNotes:
      'Achievement themes were cross-checked against current competitor coverage; the live Steam achievement list remains the source of truth for exact names and unlock state.',
    tags: ['Achievements', 'Completion', 'Checklist'],
    relatedRoutes: ['/walkthrough', '/tips', '/guides/night-shift', '/co-op'],
    body: [
      {
        heading: 'Prepare one clean completion save',
        paragraphs: [
          'Keep a main save where you finish normal parcel, special-room, night-shift, boat, stamp, and co-op patterns without abandoning jobs. After each session, compare Steam unlocks with what you completed before repeating a long route.',
        ],
      },
      {
        heading: 'Completion categories to track',
        paragraphs: [
          'Exact names belong to the current platform list, but most completion work fits a small set of systems. Mark the system and the session where you met it so delayed unlocks are easier to diagnose.',
        ],
        bullets: [
          'Core parcel processing and accuracy milestones',
          'Stamp, label, sorting, and destination milestones',
          'Special-room and night-package tasks',
          'Boat loading and shift-completion goals',
          'Co-op or multiplayer actions when explicitly required',
        ],
      },
      {
        heading: 'Fix a missing unlock safely',
        paragraphs: [
          'Finish the shift, return to the title screen, and let Steam sync before repeating the condition. If it still fails, record version and save context for the official community rather than editing the save or installing an achievement tool.',
        ],
      },
    ],
    faq: [
      { question: 'Where can I see exact achievement names?', answer: 'Use the current Steam achievement list for the exact names and unlock state.' },
      { question: 'What if an achievement does not unlock?', answer: 'Complete the shift, allow platform sync, then retry once and report the version/save context if it still fails.' },
    ],
  },
];

export const featuredGuides = guides.filter((guide) =>
  [
    'beginner-guide',
    'package-sorting',
    'night-shift',
    'co-op',
    'walkthrough',
    'tips',
  ].includes(guide.slug)
);

export const siteDescription = descriptionFromSources;

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
