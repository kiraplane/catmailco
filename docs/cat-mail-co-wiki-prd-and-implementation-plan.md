# Cat Mail Co. Wiki PRD 与实施计划

更新日期：2026-07-10

## 1. 项目结论

- 站点名：Cat Mail Co.
- 域名：https://www.catmailco.org
- 游戏官方商店：https://store.steampowered.com/app/4380490/Cat_Mail_Co/
- 游戏状态：2026-07-09 已在 Steam / Windows 发售。
- 开发商：Maracas Studio。
- 内容规模：薄而刚发售的游戏，首发采用 14 个高意图内容页，不为凑数量制作空 database、codes 或 tier list。
- 核心差异化：比现有资料页更早形成完整的英文 guide hub；围绕真实邮局工作流、moonlight、co-op 和平台状态组织内容，并用刚发布的 YouTube 完整流程/advanced tips/Steam Deck 视频做视觉交叉验证。

## 2. 当前官方事实快照

Steam API 与商店页面在 2026-07-10 的快照：

- 发售日期：2026-07-09。
- 平台：Windows；未确认 macOS、Linux、Switch、PlayStation、Xbox、iOS 或 Android。
- 价格：美国区原价 $14.99；检查时有 15% 首发折扣。页面只把原价和检查日期作为快照，当前价格始终回到 Steam。
- 玩家模式：single-player、online co-op、最多 4 人。
- 最低配置：Windows 10/11、8 GB RAM、GTX 950 或 Radeon HD 7970、4 GB 存储。
- 玩法：每天船运来邮件；玩家称重、贴邮资/目的地/fragile/heavy 标记、分类、交付或装船；夜晚月光揭示部分包裹的隐藏属性；逐步解锁目的地、工具和能力。
- Demo：Steam 独立 Demo App 4622530 仍可用。
- 首发评测快照：Steam appreviews API 在检查时显示 328 条评测、Very Positive。该数字只用于带日期的 review 快照。

## 3. 长尾词研究方式

本轮使用 Serper API 做候选词发现，不对每个词额外消耗 SERP 查询：

- Autocomplete seeds：`Cat Mail Co`、`Cat Mail Co guide`、`Cat Mail Co walkthrough`、`Cat Mail Co co-op`。
- Related / PAA seeds：`Cat Mail Co`、`Cat Mail Co guide`。
- YouTube SERP seeds：gameplay、walkthrough、co-op、demo，并补查 `Cat Mail With Friends`。
- 结果再用 Steam、Steam Community、Steam API、YouTube oEmbed、普通网页搜索与竞品页做人工验证。

主要返回：

- `cat mail co steam`
- `cat mail co price`
- `cat mail co demo`
- `cat mail co switch`
- `cat mail co guide`
- `cat mail co walkthrough`
- `cat mail co co op`
- 相关搜索：`ps5`、`xbox`、`cost`、`app`

没有发现足以支持 `codes`、`tier list`、角色/物品 database 的当前需求或游戏机制。

## 4. 关键词矩阵

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Cat Mail Co | 游戏实体与帮助入口 | `/` | P0 | keep | 用户需求、Steam、当前新闻 | 首页精确实体 H1。 |
| Cat Mail Co wiki | 结构化系统/攻略入口 | `/` | P0 | keep | 用户需求、wiki 模式 | 首页做强 hub。 |
| Cat Mail Co guide / guides | 浏览攻略 | `/guides` | P0 | keep | 用户需求、autocomplete、YouTube | 分类和详情统一入口。 |
| Cat Mail Co beginner guide | 第一天/第一轮流程 | `/guides/beginner-guide` | P0 | keep | 玩法自然高意图、当前 gameplay | 从收件到装船。 |
| Cat Mail Co package sorting | 分类与仓储 | `/guides/package-sorting` | P1 | keep | 官方核心机制、多条 gameplay | 用 parcel state + destination 结构。 |
| Cat Mail Co stamps / labels | 称重、邮资、标记 | `/guides/stamps-and-labels` | P1 | keep | 官方机制、advanced tips | 不伪造邮资数值表。 |
| Cat Mail Co night shift / moonlight | 夜间隐藏属性 | `/guides/night-shift` | P1 | keep | 官方核心卖点 | 不伪造完整属性 database。 |
| Cat Mail Co co op | 多人/人数/分工 | `/co-op` | P0 | keep | autocomplete、Steam、官方 4 人 | 独立精准路由。 |
| Cat Mail Co walkthrough | 推进顺序/完整流程 | `/walkthrough` | P0 | keep | exact autocomplete、全流程视频 | spoiler-light 原创文章。 |
| Cat Mail Co tips | 提效/高级技巧 | `/tips` | P0 | keep | 当前 advanced tips 视频 | 独立 10 tips 页。 |
| Cat Mail Co release date | 发售状态 | `/release-date` | P0 | keep | Steam | 说明 7/9 与旧 7/6 缓存冲突。 |
| Cat Mail Co price / cost | 当前价格 | `/release-date` | P0 | keep | autocomplete、Steam API | 当前价格以 Steam 为准。 |
| Cat Mail Co demo | 试玩/购买决策 | `/demo` | P0 | keep | autocomplete、官方 demo | 不保证存档继承。 |
| Cat Mail Co Steam | 官方购买/安装 | `/download` | P0 | keep | autocomplete、Steam | 只链官方商店。 |
| Cat Mail Co Switch | Switch 状态 | `/platforms` | P1 | watch | autocomplete；无官方商店 | 状态页，不写假日期。 |
| Cat Mail Co PS5 | PlayStation 状态 | `/platforms` | P1 | watch | related；无官方商店 | 状态页。 |
| Cat Mail Co Xbox | Xbox 状态 | `/platforms` | P1 | watch | related；无官方商店 | 状态页。 |
| Cat Mail Co app/mobile | 移动版 | `/platforms` | P1 | watch | related + 假 APK 结果 | 明确无官方移动版。 |
| Cat Mail Co Steam Deck | 掌机运行/控制 | `/steam-deck` | P1 | keep | 新视频 + 社区 controller 问题 | 区分可运行与 Verified。 |
| Cat Mail Co review | 是否值得买 | `/review` | P1 | keep | 新评测视频、Steam reviews | decision-first，不做站方硬评分。 |
| Cat Mail Co discord | 官方社区 | `/discord` | P1 | keep | Steam 社交链接 | 验证邀请与账号安全。 |
| Cat Mail Co codes | 兑换码 | none | P3 | ignore | 无官方系统、无 autocomplete | 不做假 codes 页。 |
| Cat Mail Co tier list | 排名 | none | P3 | ignore | 无机制/无需求 | 不套模板。 |
| Cat Mail Co APK / crack / trainer | 非安全下载 | `/download` | P2 | ignore | 搜索出现假 APK 与 trainer | 只提供风险警告。 |

## 5. 竞品基准

### 当前格局

- 尚未发现成熟、完整、专门的 Cat Mail Co. wiki/database。
- GameFAQs：只有 summary/release/media/board 框架，guide 面空。
- Gamepressure：已有较好的主题拆分，包括 gameplay、组织、发件、夜间与 co-op，但不是完整 guide hub。
- SteamDB：元数据/价格/平台变化面强，不是玩家工作流攻略。
- Metacritic / Game Informer：产品与 review 入口，缺少玩法指南。
- YouTube：当前最丰富，已有完整 PC walkthrough、advanced tips、review、Steam Deck gameplay、co-op demo。

### 我们必须覆盖

- 精确 game / wiki / guide 首页。
- walkthrough、co-op、tips。
- release / price / demo / Steam。
- Switch / PS5 / Xbox / mobile 的诚实状态页。
- Steam Deck 的“可观察运行”与“官方 Verified/控制器支持”区分。

### 我们可以做得更好

- 首页把全部高价值二级词链接出来，不只靠 nav/footer。
- 每篇 guide 都给出明确工作顺序、停止条件和下一步，而不是复述视频。
- 通过桌面 sticky wiki sidebar 与移动折叠菜单把 14 个页面分组。
- 用 Article + BreadcrumbList、首页 WebSite + Organization + VideoGame + VideoObject。
- 对 APK / trainer / crack 搜索给安全官方路径，不提供危险下载。

## 6. YouTube 决策表

| Video / source | Search intent | Action | Target page | Reason |
| --- | --- | --- | --- | --- |
| Zhain Gaming `0l7rUR6p3Rg` | walkthrough/full gameplay | new_page | `/walkthrough` | 2026-07-09 完整版流程，精准匹配 exact autocomplete。 |
| Game Launch Central `tLJtB6TMBy0` | advanced tips/stamps | new_page + cross-check | `/tips`, `/guides/stamps-and-labels` | 当前版本且标题/时间轴明确覆盖高级技巧与 stamp system。 |
| Video Chums `0cupOtp3Wik` | Steam Deck | new_page | `/steam-deck` | 首发当天硬件运行证据；不把它误写成 Valve Verified。 |
| Max Dixon `2jrBuHMFu4k` | review/worth it | new_page | `/review` | 购买决策意图，结合 Steam 评价快照。 |
| Limbo 7k `UYC7qzOOTJ4` | co-op with friends | new_page | `/co-op` | 精准多人工作流，官方再确认最多 4 人。 |
| FloppySims `-C0fbJRbfUw` | beginner/gameplay | expand | `/guides/beginner-guide`, `/demo` | 展示核心邮局循环，文章保留原创组织逻辑。 |

所有视频只做研究、版本与视觉交叉验证；正文不出现机械的 transcript 翻译或“视频说/展示”叙述。

## 7. 首发路由

### Hub

- `/`
- `/guides`

### 核心玩法

- `/guides/beginner-guide`
- `/guides/package-sorting`
- `/guides/stamps-and-labels`
- `/guides/night-shift`
- `/co-op`
- `/walkthrough`
- `/tips`

### 购买、平台、社区

- `/release-date`
- `/demo`
- `/platforms`
- `/steam-deck`
- `/review`
- `/download`
- `/discord`

### 法务

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 8. 视觉方向

参考 Steam capsule / screenshots，而不是沿用旧模板的 esports 配色：

- 背景：深梅紫 `#23182A`
- 卡片：邮袋紫 `#33233B`
- 边框：灰紫 `#6B536F`
- 主文字：信纸米白 `#FFF8E7`
- 次文字：浅灰紫 `#D7C8D8`
- 主 CTA：邮票橙 `#FFB35C`
- 次强调：月光薄荷 `#7AD6CC`
- 装饰强调：珊瑚粉 `#FF88AC`

首页保持信息密集：首屏同时看到 H1、定位、CTA、快速链接、release trailer，并露出下一内容带。Logo 使用项目自制的猫邮票 SVG，不冒充官方 logo。

## 9. 实施清单

- 将来源模板的 route/data/component scope 统一改为 `catmailco`。
- 重建 `src/data/catmailco/` 的 facts、sources、keyword matrix、14 个 guide 数据。
- 添加 `/co-op`、`/walkthrough`、`/tips`，删除旧游戏专属路由。
- 重写 homepage hub、navbar、footer、wiki sidebar、related route labels。
- 视频嵌入放在文章正文中段，不统一占据首屏。
- 更新 domain、manifest、robots、sitemap、canonical、Open Graph、schema、mail URLs、Cloudflare Worker 配置。
- 新建 `catmailco-logo.svg` 和 App Router icon。
- 清理旧游戏 PRD、域名、名字、source IDs、route slugs 与 creator 残留。
- 运行 Biome、TypeScript、Next build、Cloudflare build 和真实浏览器检查。
- 验证后创建 GitHub `catmailco`、部署 Cloudflare Worker `catmailco`、绑定 `catmailco.org` / `www.catmailco.org`、创建 GA4。

## 10. 上线验收

- Homepage、guides、walkthrough、co-op、platforms、sitemap、robots 返回 200。
- 桌面首屏 trailer 不挤压标题/CTA，下一模块可见。
- 移动端视频下叠、quick links 可换行、wiki menu 可展开。
- 桌面 sidebar 默认折叠，当前组自动打开，长标题不溢出。
- YouTube cover URL 与 iframe 正确。
- canonical 使用 `https://www.catmailco.org`。
- 站内无旧游戏名、旧域名、旧 Steam App ID、旧 route scope。
