'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CookieBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  const texts: Record<string, { message: string; accept: string; decline: string; link: string }> = {
    fr: {
      message: 'Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre',
      accept: 'Accepter',
      decline: 'Refuser',
      link: 'politique de confidentialité',
    },
    de: {
      message: 'Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Durch die weitere Nutzung akzeptieren Sie unsere',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
      link: 'Datenschutzrichtlinie',
    },
    en: {
      message: 'This site uses cookies to improve your experience. By continuing, you accept our',
      accept: 'Accept',
      decline: 'Decline',
      link: 'privacy policy',
    },
    it: {
      message: 'Questo sito utilizza cookie per migliorare la tua esperienza. Continuando, accetti la nostra',
      accept: 'Accetta',
      decline: 'Rifiuta',
      link: 'politica sulla privacy',
    },
    ru: {
      message: 'Этот сайт использует файлы cookie для улучшения вашего опыта. Продолжая, вы принимаете нашу',
      accept: 'Принять',
      decline: 'Отклонить',
      link: 'политику конфиденциальности',
    },
  };

  const t = texts[locale] || texts.fr;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-noir-elegant/80 text-center sm:text-left">
          {t.message}{' '}
          <Link href={`/${locale}/confidentialite`} className="underline text-rose-principal hover:text-noir-elegant">
            {t.link}
          </Link>.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-gris-doux hover:text-noir-elegant transition-colors"
          >
            {t.decline}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 bg-noir-elegant text-white text-sm rounded-full hover:bg-noir-elegant/90 transition-colors"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
