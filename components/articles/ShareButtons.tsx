'use client';

interface ShareButtonsProps {
  url: string;
  title: string;
  label?: string;
}

export default function ShareButtons({ url, title, label = 'Partager' }: ShareButtonsProps) {
  const shareLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      icon: 'X',
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: 'f',
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
      icon: 'P',
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gris-doux">{label}</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-rose-clair flex items-center justify-center text-noir-elegant hover:bg-rose-principal hover:text-white transition-colors text-xs font-bold"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
      <button
        onClick={copyLink}
        className="w-9 h-9 rounded-full bg-rose-clair flex items-center justify-center text-noir-elegant hover:bg-rose-principal hover:text-white transition-colors"
        aria-label="Copy link"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  );
}
