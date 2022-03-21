import Link from "next/link";

interface LogoProps {
  name: string;
}

export const Logo = ({ name }: LogoProps) => {
  return (
    <Link href="/">
      <a className="flex items-center justify-center w-2/6  ">
        <h1 className="font-bold text-xl uppercase text-center">{name}</h1>
      </a>
    </Link>
  );
};
