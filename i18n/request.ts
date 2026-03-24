import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || 'fr';

  if (!locales.includes(locale as Locale)) {
    return { locale: 'fr', messages: (await import('./messages/fr.json')).default };
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
