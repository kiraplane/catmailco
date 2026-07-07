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
    title: 'Cookie Policy | Moonlight Peaks Wiki',
    description:
      'How Moonlight Peaks Wiki uses essential cookies, analytics, and similar technologies.',
    locale,
    pathname: '/cookie',
  });
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#120719] py-12 text-[#F4EAFE]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Cookie Policy</h1>
        <p className="leading-8 text-[#DED2F6]">
          Moonlight Peaks Wiki uses essential cookies and similar technologies
          to keep the site working, remember basic preferences, and understand
          aggregate traffic patterns.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Analytics or advertising partners may set limited cookies to measure
          page performance, ad delivery, referrers, and general device
          information. We use this data to improve guide pages and maintain the
          site.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          You can block or delete cookies in your browser settings. Some
          features, such as language preferences or consent choices, may not
          work as expected when cookies are disabled.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Questions about this policy can be sent to hello@moonlightpeaks.org.
        </p>
      </Container>
    </div>
  );
}
