# Moonlight Peaks Wiki PRD and Implementation Plan

检查日期：2026-07-07  
目标域名：https://www.moonlightpeaks.org  
站点名称：Moonlight Peaks

## 1. 需求摘要

把当前模板改造成只服务 `Moonlight Peaks` 的英文攻略站，覆盖 `moonlight peaks`、`moonlight peaks wiki`、`moonlight peaks guides` 以及 launch-week 长尾需求。官方来源包括 Steam、官网、Nintendo、Google Play；参考成熟项目 `kingshotguide` 的 guide + YouTube 结合方式，但文章必须是原创玩家决策攻略，不做视频转写。

外部发布需求：

- GitHub 仓库名：`moonlightpeaks`
- Cloudflare Worker 项目名：`moonlightpeaks`
- 域名：`www.moonlightpeaks.org`
- GA 媒体资源：等待本地凭据/授权确认后创建

## 2. 调研结论

`Moonlight Peaks` 已处于 2026-07-07 launch window。Steam 显示 released Jul 6, 2026；官网与 Nintendo 页面使用 July 7, 2026 的更宽发布表述。官方平台方向包括 Steam Windows/macOS、Nintendo Switch、Nintendo Switch 2、Google Play Games / Android。官网确认 demo only available on Steam and Nintendo Switch。

核心玩法与页面方向：

- supernatural life sim / farming sim
- vampire night-farming loop
- mystical crops, magical livestock, spells, potions, shapeshifting
- seven families, two dozen romanceable characters
- gifts, handmade presents, relationship tracking
- fishing, foraging, crafting, decorating
- Nokturna collectible card game
- platform and safe download questions

OpenClaw keyword API 尝试：

- 查询 `moonlight peaks`
- 返回：无现有 keyword 记录
- 后续使用 Google suggest、普通搜索、官方页、YouTube、Reddit、Steam、竞品站进行候选词发现

## 3. Keyword Matrix

| keyword | intent | route | priority | status | evidence | notes |
|---|---|---:|---|---|---|---|
| moonlight peaks | Head term | `/` | P0 | keep | User requirement, Steam, official site | Homepage as SEO hub |
| moonlight peaks wiki | Wiki/search hub | `/` | P0 | keep | Google suggest, wiki.gg, competitor | Homepage + sidebar |
| moonlight peaks guides | Guide browsing | `/guides` | P0 | keep | User requirement, guide/walkthrough suggest | Guide index |
| moonlight peaks release date | Launch status | `/release-date` | P0 | keep | Steam + official/Nintendo dates | Explain Jul 6 vs Jul 7 |
| moonlight peaks demo | Demo length/save/platform | `/demo` | P0 | keep | Suggest: demo length/carry over/save/Switch | Separate demo page |
| moonlight peaks platforms | Platform picker | `/platforms` | P0 | keep | Official site platform links | Include PS5/Xbox FAQ |
| moonlight peaks switch | Switch/Switch 2/price | `/switch` | P0 | keep | Suggest: Switch 2, price, physical | One Nintendo page |
| moonlight peaks steam deck | Handheld PC/settings | `/steam-deck` | P0 | keep | Suggest + Steam specs | Do not claim Verified |
| moonlight peaks romance options | Romance/dateables | `/romance` | P0 | keep | Suggest + Steam two dozen romanceable | Relationship route |
| moonlight peaks characters | Residents/families | `/characters` | P0 | keep | Suggest: characters wiki/dateable/male | Role-first page |
| moonlight peaks gift guide | Favorite gifts | `/gifts` | P0 | keep | Suggest + launch guides | Strategy until tables stable |
| moonlight peaks farming | Crops/livestock/storage | `/farming` | P1 | keep | Official site + Steam systems | No fake crop prices |
| moonlight peaks magic | Spells/potions/forms | `/magic` | P1 | keep | Official site systems | Systems hub |
| moonlight peaks fishing | Rod/fish basics | `/guides/fishing-guide` | P1 | keep | Suggest: fishing/fishing rod | Article, later database |
| moonlight peaks nokturna | Card activity | `/nokturna` | P1 | keep | Steam mentions Nokturna | No fake card list |
| moonlight peaks walkthrough | First-week route | `/walkthrough` | P1 | keep | Suggest + YouTube | Spoiler-light |
| moonlight peaks cheats | Cheats/trainers/commands | `/cheats` | P1 | keep | GameWatcher/trainer search results | Safety/status page |
| moonlight peaks download | Safe install | `/download` | P1 | keep | Launch platform demand | Official stores only |
| moonlight peaks discord | Community/support | `/discord` | P1 | keep | Official site + Steam links | Invite safety |
| moonlight peaks ps5 | PlayStation status | `/platforms` | P2 | watch | Suggest exists, no official platform | FAQ only |
| moonlight peaks xbox | Xbox status | `/platforms` | P2 | watch | Suggest exists, no official platform | FAQ only |
| moonlight peaks codes | Redeem codes | `/cheats` | P2 | ignore | No official code system | Do not invent codes |

## 4. Competitor Benchmark

### moonlightpeakswiki.com

- Strong homepage hub with release/demo/platforms/characters/romance/activities/items/tools/FAQ.
- Has launch-day news, tools, item tracker ideas, platform picker, multilingual links.
- Opportunity: write more decision-first articles and avoid over-promising launch databases.

### moonlightpeaks.wiki.gg

- Good future source for factual data such as flowers, items, characters, and mechanics.
- Opportunity: use as source lead only; avoid copying data until stable and source-attributed.

### YouTube / cozy guide creators

- Strong current supply for beginner tips, dateables, demo, and early gameplay.
- Opportunity: use videos as embedded source references and cover thumbnails, while writing original guide logic.

## 5. Implemented Page Set

Core routes:

- `/`
- `/guides`
- `/guides/beginner-guide`
- `/guides/fishing-guide`
- `/release-date`
- `/demo`
- `/platforms`
- `/switch`
- `/steam-deck`
- `/characters`
- `/romance`
- `/gifts`
- `/farming`
- `/magic`
- `/nokturna`
- `/walkthrough`
- `/cheats`
- `/download`
- `/discord`
- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

Omitted deliberately:

- `/codes`: no official redeem-code evidence
- `/tier-list`: no ranked unit/build system
- full item/fish/gift/card databases: wait for stable live-game data
- PS5/Xbox pages: watch terms only

## 6. Implementation Notes

- Renamed the old template data/components/route group to `moonlightpeaks`.
- Replaced the old template route set with Moonlight Peaks launch routes.
- Added `src/data/moonlightpeaks/` sources, keyword matrix, and guide data.
- Rebuilt homepage as a compact wiki hub with official gameplay video, quick routes, keyword hub, guide cards, and sidebar navigation.
- Updated navbar/footer/messages/routes/sitemap/robots/manifest/canonical domain/wrangler config.
- Generated new favicon/app icons with a moon and peak motif.
- Removed old template static browser-game assets.

## 7. Validation Plan

Run before launch:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Manual QA:

- Homepage desktop/mobile hero: no overlap, video visible, next section visible.
- Sidebar: active group opens and labels wrap.
- Guide article: YouTube thumbnail renders from `i.ytimg.com`; related routes use explicit labels.
- Sitemap includes core route set and guide detail pages.
- Search for old template residue before deployment.

## 8. External Work

After local validation:

- Create/update GitHub remote `moonlightpeaks` and push `main`.
- Deploy Cloudflare Worker `moonlightpeaks`.
- Bind apex and `www.moonlightpeaks.org`.
- Create GA property if credentials are available from the GA/GTM workspace; update `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`.
