import { guides } from '@/data/catmailco/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.BeginnerGuide,
  Routes.PackageSorting,
  Routes.StampsAndLabels,
  Routes.NightShift,
  Routes.CoOp,
  Routes.Walkthrough,
  Routes.Tips,
  Routes.ReleaseDate,
  Routes.Demo,
  Routes.Platforms,
  Routes.SteamDeck,
  Routes.Review,
  Routes.Download,
  Routes.Discord,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides
  .map((guide) => guide.path)
  .filter((path) => !coreRoutes.includes(path as Routes));

const stableLastModified = new Date('2026-07-17T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();
  const allRoutes = [...coreRoutes, ...guideRoutes];

  routing.locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root ||
          route === Routes.Guides ||
          route === Routes.Walkthrough ||
          route === Routes.Tips ||
          route === Routes.ReleaseDate ||
          route === Routes.Platforms
            ? 'daily'
            : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Guides ||
                route === Routes.BeginnerGuide ||
                route === Routes.Walkthrough ||
                route === Routes.CoOp ||
                route === Routes.ReleaseDate ||
                route === Routes.Download
              ? 0.9
              : 0.8,
      });
    });
  });

  return sitemapList;
}
