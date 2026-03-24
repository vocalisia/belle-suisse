export const locales = ['fr', 'de', 'en', 'it', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  de: 'Deutsch',
  en: 'English',
  it: 'Italiano',
  ru: 'Русский',
};

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  de: '🇩🇪',
  en: '🇬🇧',
  it: '🇮🇹',
  ru: '🇷🇺',
};
