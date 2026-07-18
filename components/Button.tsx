import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const baseStyles =
  "inline-flex items-center justify-center border border-foreground/25 bg-transparent px-7 py-3 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-foreground transition-colors duration-300 hover:border-champagne hover:text-champagne";

export default function Button({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const combined = `${baseStyles} ${className}`;

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
