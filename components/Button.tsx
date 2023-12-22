import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  icon?: string;
  dissabled: boolean;
  className?: string;
};

const Button = ({ href, label, icon, dissabled, className }: ButtonProps) => {
  return (
    <div
      className={`${className} flex gap-3 bg-red-500 text-white rounded-full py-3 px-5 w-fit lg:mx-0 ${
        dissabled ? "cursor-not-allowed" : ""
      }`}
    >
      <Link
        href={href}
        className={`text-base ${dissabled ? "cursor-not-allowed" : ""}`}
      >
        {label}
      </Link>
      {icon && <Image src={icon} width={12} height={12} alt={label} />}
    </div>
  );
};

export default Button;
