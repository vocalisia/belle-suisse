interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm ${
        hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
