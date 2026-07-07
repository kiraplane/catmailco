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
    title: 'Moonlight Peaks Platform Picker - Steam, Deck, Switch, Android',
    description:
      'Choose the best Moonlight Peaks platform with a launch-safe picker for Steam, Steam Deck, Switch, Switch 2, and Android.',
    locale,
    pathname: '/tools/platform-picker',
  });
}

export default async function PlatformPickerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ToolDetailPage kind="platform-picker" locale={locale} />;
}
