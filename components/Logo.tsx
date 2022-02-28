import Image from "next/image";
import Link from "next/link";

interface LogoProps {

    src: string;
    alt: string;
}

export const Logo = ({ src, alt }: LogoProps) => {
  return (
    <Link href="/">
      <a>
        <Image src={src} alt={alt} width={50} height={50} />
      </a>
    </Link>
  );
};
