import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BELLE SUISSE — Magazine Beauté Premium Suisse',
  description: 'Découvrez les meilleurs soins, tendances et secrets beauté de Suisse. Skincare, maquillage, wellness et marques suisses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
