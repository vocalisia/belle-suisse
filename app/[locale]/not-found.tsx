import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-playfair text-8xl font-bold text-rose-principal mb-4">404</h1>
      <p className="text-xl text-noir-elegant mb-2">Page introuvable</p>
      <p className="text-gris-doux mb-8">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-noir-elegant text-white rounded-full hover:bg-noir-elegant/90 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
