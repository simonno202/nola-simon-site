interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default Eyebrow;
