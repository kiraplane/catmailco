import { ToolDetailPage } from '@/components/moonlightpeaks/tool-pages';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Moonlight Peaks Romance Tracker - Characters, Families, Notes',
    description:
      'Shortlist Moonlight Peaks romance candidates, filter characters by family and species, and save private gift or heart-event notes.',
    locale,
    pathname: '/tools/romance-tracker',
  });
}

export default async function RomanceTrackerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ToolDetailPage kind="romance-tracker" locale={locale} />;
}
