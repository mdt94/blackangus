import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
}

export default function Button({
  href,
  onClick,
  children,
  className = "",
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "ghost"
      ? "inline-flex items-center border-0 bg-transparent px-0 py-1 text-sm text-cream underline decoration-cream/30 underline-offset-[6px] transition-[color,decoration-color] duration-300 hover:text-champagne hover:decoration-champagne/60"
      : "inline-flex items-center justify-center border border-cream/30 bg-transparent px-6 py-2.5 text-sm text-cream transition-colors duration-300 hover:border-champagne hover:text-champagne";

  const combined = `${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
