import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const baseStyles =
  "inline-flex items-center justify-center rounded-none border border-white/30 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-200 transition-all duration-500 hover:border-champagne hover:text-champagne";

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
