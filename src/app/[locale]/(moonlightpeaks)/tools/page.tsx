import { ToolsLandingPage } from '@/components/moonlightpeaks/tool-pages';
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
    title: 'Moonlight Peaks Tools - Platform Picker, Trackers, Calculator',
    description:
      'Use Moonlight Peaks tools for platform choice, romance tracking, item checklists, and manual farming profit comparison.',
    locale,
    pathname: '/tools',
  });
}

export default async function ToolsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ToolsLandingPage locale={locale} />;
}
