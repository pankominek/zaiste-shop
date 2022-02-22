import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem = ({ name, path }: NavItemProps) => {
  const router = useRouter();

  const isSelected =
    router.pathname === path ? "selected cursor-default" : "text-blue-300";

  return (
    <li className="mr-6">
      <Link href={path}>
        <a className={isSelected}>{name}</a>
      </Link>
    </li>
  );
};
