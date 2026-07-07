import Container from '@/components/layout/container';
import { siteFacts } from '@/data/moonlightpeaks/sources';
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
    title: 'Disclaimer | Moonlight Peaks',
    description: 'Disclaimer for Moonlight Peaks, an independent guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#120719] py-12 text-[#F4EAFE]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#DED2F6]">
          Moonlight Peaks Wiki is an independent guide site. It is not
          affiliated with, endorsed by, sponsored by, or operated by Little
          Chicken, XSEED Games, Marvelous Europe, Valve, Steam, Nintendo, Google
          Play, or any official distribution platform.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          Moonlight Peaks, its name, art, music, game files, code, and official
          materials belong to Little Chicken, XSEED Games, Marvelous Europe, and
          the respective rights holders. This site does not redistribute paid
          game files, modified clients, APK mirrors, trainers, save editors, or
          unsafe downloads.
        </p>
        <p className="leading-8 text-[#DED2F6]">
          For official platform and purchase status, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#C77DFF] underline underline-offset-4"
          >
            Steam
          </a>
          ,{' '}
          <a
            href={siteFacts.officialWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#C77DFF] underline underline-offset-4"
          >
            the official website
          </a>
          , Nintendo, and Google Play storefronts.
        </p>
      </Container>
    </div>
  );
}
