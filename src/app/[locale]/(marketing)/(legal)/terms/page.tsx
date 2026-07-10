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
    title: 'Terms of Service | Cat Mail Co. Guide',
    description:
      'Terms for using Cat Mail Co. Guide, an independent Cat Mail Co. guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#23182A] py-12 text-[#FFF8E7]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#D7C8D8]">
          This site provides independent Cat Mail Co. guides, source notes, and
          official-link guidance. It is not affiliated with, endorsed by,
          sponsored by, or operated by Maracas Studio, Gamersky Games, Valve,
          Steam, Discord, X, or YouTube.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Package behavior, controls, patch details, community links, and
          platform support can change after game updates. Treat guide pages as
          community-oriented guidance and verify important details in your
          current game version.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, copied game data, paid files, trainers,
          cracks, or automation scripts.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Questions about these terms can be sent to hello@catmailco.org.
        </p>
      </Container>
    </div>
  );
}
