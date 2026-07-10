import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/catmailco/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/catmailco/wiki-navigation';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getGuidesIndexContent,
  getLocalizedGuides,
} from '@/data/catmailco/localized';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guides = getLocalizedGuides(locale);

  return constructMetadata({
    title: content.title,
    description: content.intro,
    locale,
    pathname: '/guides',
    image: guides[0]?.coverImageUrl,
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guideUi = getGuideArticleUi(locale);
  const guides = getLocalizedGuides(locale);

  return (
    <div className="bg-[#23182A] py-12 text-[#FFF8E7]">
      <Container className="px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-8">
            <header className="max-w-3xl space-y-4">
              <Badge className="bg-[#FFB35C] text-[#24131F]">
                {content.badge}
              </Badge>
              <h1 className="font-display text-4xl font-black md:text-6xl">
                {content.title}
              </h1>
              <p className="text-lg leading-8 text-[#D7C8D8]">
                {content.intro}
              </p>
              <MobileWikiNav currentPath="/guides" locale={locale} />
            </header>

            <AdsterraAdFrame
              slot="banner-728x90"
              className="rounded-lg border border-[#6B536F] bg-[#33233B] py-4"
              label
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guides.map((guide) => (
                <article
                  key={guide.slug}
                  className="overflow-hidden rounded-lg border border-[#6B536F] bg-[#33233B]"
                >
                  <div className="relative aspect-video border-[#6B536F] border-b">
                    <Image
                      src={guide.coverImageUrl}
                      alt={`${guide.title} cover`}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23182A]/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-[#FFB35C] text-[#24131F]">
                      {guideUi.categoryLabels[guide.category]}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#FFB35C]/50 text-[#FFF8E7]"
                      >
                        {guideUi.difficultyLabels[guide.difficulty]}
                      </Badge>
                      {guide.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[#6B536F] text-[#FFF8E7]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold">
                      {guide.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#D7C8D8]">
                      {guide.summary}
                    </p>
                    <Button
                      asChild
                      className="mt-5 bg-[#FFB35C] text-[#24131F] hover:bg-[#FF88AC]"
                    >
                      <LocaleLink href={guide.path}>
                        {content.readGuide}
                      </LocaleLink>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <FaqSection items={content.faq} title={guideUi.faqTitle} />
          </div>

          <WikiRouteSidebar currentPath="/guides" locale={locale}>
            <AdsterraAdFrame slot="sidebar-160x600" label />
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
