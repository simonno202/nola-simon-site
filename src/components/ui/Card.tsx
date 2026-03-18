import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className = "", href }: CardProps) {
  const styles =
    `bg-surface border-[1.5px] border-border-medium rounded-[--radius-card] px-[28px] py-[26px] transition-colors hover:bg-surface-hover ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={`block ${styles}`}>
        {children}
      </Link>
    );
  }

  return <div className={styles}>{children}</div>;
}

export default Card;
