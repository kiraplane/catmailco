import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Moonlight Peaks wiki routes
  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  ReleaseDate = '/release-date',
  Demo = '/demo',
  Platforms = '/platforms',
  Switch = '/switch',
  SteamDeck = '/steam-deck',
  Characters = '/characters',
  Database = '/database',
  DatabaseCharacters = '/database/characters',
  DatabaseFamilies = '/database/families',
  DatabaseLocations = '/database/locations',
  DatabaseItems = '/database/items',
  Tools = '/tools',
  ToolPlatformPicker = '/tools/platform-picker',
  ToolRomanceTracker = '/tools/romance-tracker',
  ToolItemTracker = '/tools/item-tracker',
  ToolFarmingProfitCalculator = '/tools/farming-profit-calculator',
  Romance = '/romance',
  Gifts = '/gifts',
  Farming = '/farming',
  Magic = '/magic',
  Nokturna = '/nokturna',
  Walkthrough = '/walkthrough',
  Fishing = '/guides/fishing-guide',
  Cheats = '/cheats',
  Download = '/download',
  Discord = '/discord',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers: Routes[] = [];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes: Routes[] = [];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
