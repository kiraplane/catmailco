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
    title: 'Terms of Service | Moonlight Peaks Wiki',
    description:
      'Terms for using Moonlight Peaks Wiki, an independent Moonlight Peaks guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#120719] py-12 text-[#F4EAFE]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#DED2F6]">
          This site provides independent Moonlight Peaks guides, source notes,
          and official-link guidance. It is not affiliated with, endorsed by,
          sponsored by, or operated by Little Chicken, XSEED Games, Marvelous
          Europe, Valve, Steam, Nintendo, or Google Play.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Mechanics, gifts, fish lists, card details, platform requirements, and
          patch behavior can change after game updates. Treat guide pages as
          community-oriented guidance and verify important details in your
          current game version.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Do not use this site to distribute unauthorized game files, unsafe
          APKs, modified clients, save editors, copied paid files, trainers, or
          automation scripts.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Questions about these terms can be sent to hello@moonlightpeaks.org.
        </p>
      </Container>
    </div>
  );
}
