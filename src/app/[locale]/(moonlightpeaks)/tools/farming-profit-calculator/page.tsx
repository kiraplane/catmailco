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
    title: 'Moonlight Peaks Farming Profit Calculator - Crop Profit Per Day',
    description:
      'Compare Moonlight Peaks crop profit scenarios manually by seed cost, sell price, growth days, harvest count, and extra cost.',
    locale,
    pathname: '/tools/farming-profit-calculator',
  });
}

export default async function FarmingProfitCalculatorPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <ToolDetailPage kind="farming-profit-calculator" locale={locale} />;
}
