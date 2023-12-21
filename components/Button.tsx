import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  icon?: string;
};

const Button = ({ href, label, icon }: ButtonProps) => {
  return (
    <div className="flex gap-3 bg-red-500 text-white rounded-full py-3 px-5 w-fit lg:mx-0">
      <Link href={href} className="text-base">
        {label}
      </Link>
      {icon && <Image src={icon} width={12} height={12} alt={label} />}
    </div>
  );
};

export default Button;
