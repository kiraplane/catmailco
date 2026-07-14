import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('special-rooms', locale, '/special-rooms');
}

export default async function SpecialRoomsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderGuidePage('special-rooms', '/special-rooms', locale);
}
