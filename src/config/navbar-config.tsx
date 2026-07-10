'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Box,
  Download,
  Gamepad2,
  MessageCircle,
  MoonStar,
  PackageCheck,
  Stamp,
  UsersRound,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'All Cat Mail Co. guides in one postal index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Build a clean receive-to-boat routine.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <PackageCheck className="size-4" />,
        },
        {
          title: 'Walkthrough',
          description: 'A spoiler-light route through postal progression.',
          href: Routes.Walkthrough,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Tips and tricks',
          description: 'Ten ways to reduce errors and wasted walking.',
          href: Routes.Tips,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: 'Post Office',
      href: Routes.PackageSorting,
      external: false,
      icon: <Box className="size-4" />,
      items: [
        {
          title: 'Package sorting',
          description: 'Separate parcel states and destination zones.',
          href: Routes.PackageSorting,
          external: false,
          icon: <Box className="size-4" />,
        },
        {
          title: 'Stamps and labels',
          description: 'Keep functional marks readable before decorating.',
          href: Routes.StampsAndLabels,
          external: false,
          icon: <Stamp className="size-4" />,
        },
        {
          title: 'Night shift',
          description: 'Inspect hidden parcel properties under moonlight.',
          href: Routes.NightShift,
          external: false,
          icon: <MoonStar className="size-4" />,
        },
        {
          title: 'Co-op roles',
          description: 'Job splits for two, three, or four players.',
          href: Routes.CoOp,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
      ],
    },
    {
      title: 'Play & Download',
      href: Routes.ReleaseDate,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release and price',
          description: 'July 9 launch and current Steam price guidance.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Platforms',
          description: 'Switch, PS5, Xbox, Mac, Linux, and mobile status.',
          href: Routes.Platforms,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Steam, demo, requirements, and APK warnings.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord and links',
          description: 'Official community and support entry points.',
          href: Routes.Discord,
          external: false,
          icon: <MessageCircle className="size-4" />,
        },
      ],
    },
  ];
}
