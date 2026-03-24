interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'rose' | 'gold';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-rose-clair text-noir-elegant',
    rose: 'bg-rose-principal text-white',
    gold: 'bg-or-luxe text-white',
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
