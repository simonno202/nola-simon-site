import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-pink text-white rounded-[--radius-button] px-6 py-3 font-sans font-medium text-[14px] hover:bg-pink-hover transition-colors",
  secondary:
    "bg-transparent border border-navy text-navy rounded-[--radius-button] px-6 py-3 font-sans font-medium text-[14px] hover:bg-navy hover:text-cream transition-colors",
  tertiary:
    "text-gold font-sans font-medium text-[14px] underline underline-offset-4 hover:text-gold-dark transition-colors",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  external,
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={styles}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
