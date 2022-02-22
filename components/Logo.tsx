import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.svg" alt="Zaiste shop" width={50} height={50} />
      </a>
    </Link>
  );
};
