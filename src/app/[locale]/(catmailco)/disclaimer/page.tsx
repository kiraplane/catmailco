import Container from '@/components/layout/container';
import { siteFacts } from '@/data/catmailco/sources';
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
    title: 'Disclaimer | Cat Mail Co',
    description: 'Disclaimer for Cat Mail Co., an independent game guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#23182A] py-12 text-[#FFF8E7]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#D7C8D8]">
          Cat Mail Co. Guide is an independent guide site. It is not affiliated
          with, endorsed by, sponsored by, or operated by Maracas Studio,
          Gamersky Games, Valve, Steam, Discord, X, YouTube, or any official
          distribution platform.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          Cat Mail Co., its name, art, music, game files, code, characters, and
          official materials belong to Maracas Studio, its publishers, and the
          respective rights holders. This site does not redistribute paid game
          files, modified clients, APK mirrors, trainers, cracks, or unsafe
          downloads.
        </p>
        <p className="leading-8 text-[#D7C8D8]">
          For official platform and purchase status, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#FFB35C] underline underline-offset-4"
          >
            Steam
          </a>
          ,{' '}
          <a
            href={siteFacts.officialWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#FFB35C] underline underline-offset-4"
          >
            the official website
          </a>
          , and official community links.
        </p>
      </Container>
    </div>
  );
}
