'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('start.title'),
      items: [
        {
          title: t('start.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('start.items.release'),
          href: Routes.ReleaseDate,
          external: false,
        },
        {
          title: t('start.items.demo'),
          href: Routes.Demo,
          external: false,
        },
        {
          title: t('start.items.platforms'),
          href: Routes.Platforms,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.romance'),
          href: Routes.Romance,
          external: false,
        },
        {
          title: t('guides.items.gifts'),
          href: Routes.Gifts,
          external: false,
        },
        {
          title: t('guides.items.farming'),
          href: Routes.Farming,
          external: false,
        },
        {
          title: t('guides.items.magic'),
          href: Routes.Magic,
          external: false,
        },
        {
          title: t('guides.items.nokturna'),
          href: Routes.Nokturna,
          external: false,
        },
        {
          title: t('guides.items.walkthrough'),
          href: Routes.Walkthrough,
          external: false,
        },
      ],
    },
    {
      title: t('official.title'),
      items: [
        {
          title: t('official.items.discord'),
          href: Routes.Discord,
          external: false,
        },
        {
          title: t('official.items.download'),
          href: Routes.Download,
          external: false,
        },
        {
          title: t('official.items.cheats'),
          href: Routes.Cheats,
          external: false,
        },
        {
          title: t('official.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
      ],
    },
  ];
}
