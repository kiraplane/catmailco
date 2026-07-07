'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Boxes,
  Download,
  Gamepad2,
  Heart,
  MessageCircle,
  Moon,
  Sparkles,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('platforms.title'),
      href: Routes.Platforms,
      external: false,
      icon: <Gamepad2 className="size-4" />,
    },
    {
      title: t('romance.title'),
      href: Routes.Romance,
      external: false,
      icon: <Heart className="size-4" />,
    },
    {
      title: t('farming.title'),
      href: Routes.Farming,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('magic.title'),
      href: Routes.Magic,
      external: false,
      icon: <Moon className="size-4" />,
    },
    {
      title: t('nokturna.title'),
      href: Routes.Nokturna,
      external: false,
      icon: <Boxes className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
    {
      title: t('discord.title'),
      href: Routes.Discord,
      external: false,
      icon: <MessageCircle className="size-4" />,
    },
  ];
}
