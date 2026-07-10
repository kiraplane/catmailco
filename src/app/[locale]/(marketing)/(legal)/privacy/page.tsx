import Container from '@/components/layout/container';
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
    title: 'Privacy Policy | Cat Mail Co. Guide',
    description:
      'Privacy policy for Cat Mail Co. Guide, an independent guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#23182A] py-12 text-[#FFF8E7]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#D7C8D8]">
          Cat Mail Co. Guide is an independent guide site. We do not require
          accounts for browsing the wiki, platform pages, postal guides,
          community notes, or official-link pages.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Remote media may be loaded from official storefronts or YouTube when a
          page embeds official artwork, store links, screenshots, or guide
          videos.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Privacy questions can be sent to hello@catmailco.org.
        </p>
      </Container>
    </div>
  );
}
