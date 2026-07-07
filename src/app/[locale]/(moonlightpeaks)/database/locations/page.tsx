import { DatabaseCategoryPage } from '@/components/moonlightpeaks/database-pages';
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
    title: 'Moonlight Peaks Locations Database - Town, Shops, Farm, Landmarks',
    description:
      'Browse Moonlight Peaks locations including the town, farm, shops, wild areas, family places, mines, and datamined landmarks.',
    locale,
    pathname: '/database/locations',
  });
}

export default async function LocationDatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DatabaseCategoryPage category="locations" locale={locale} />;
}
