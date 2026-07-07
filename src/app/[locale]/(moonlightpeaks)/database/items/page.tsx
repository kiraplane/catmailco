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
    title: 'Moonlight Peaks Items Database - Crops, Tools, Flowers, Resources',
    description:
      'Moonlight Peaks item index for crops, flowers, tools, workstations, animals, resources, recipes, and tracker categories.',
    locale,
    pathname: '/database/items',
  });
}

export default async function ItemDatabasePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DatabaseCategoryPage category="items" locale={locale} />;
}
