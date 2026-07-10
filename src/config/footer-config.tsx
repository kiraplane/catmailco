'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Walkthrough', href: Routes.Walkthrough, external: false },
        { title: 'Tips and Tricks', href: Routes.Tips, external: false },
        { title: 'All Guides', href: Routes.Guides, external: false },
      ],
    },
    {
      title: 'Post Office',
      items: [
        {
          title: 'Package Sorting',
          href: Routes.PackageSorting,
          external: false,
        },
        {
          title: 'Stamps and Labels',
          href: Routes.StampsAndLabels,
          external: false,
        },
        { title: 'Night Shift', href: Routes.NightShift, external: false },
        { title: 'Co-op Guide', href: Routes.CoOp, external: false },
      ],
    },
    {
      title: 'Game',
      items: [
        {
          title: 'Release and Price',
          href: Routes.ReleaseDate,
          external: false,
        },
        { title: 'Demo', href: Routes.Demo, external: false },
        { title: 'Platforms', href: Routes.Platforms, external: false },
        { title: 'Steam Deck', href: Routes.SteamDeck, external: false },
      ],
    },
    {
      title: 'Official & Legal',
      items: [
        { title: 'Download', href: Routes.Download, external: false },
        { title: 'Discord and Links', href: Routes.Discord, external: false },
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookie Policy', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
