import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem = ({ name, path }: NavItemProps) => {
  const router = useRouter();
  const isSelected = router.pathname === path ? "selected cursor-default" : "hover:text-blue-500";

  return (
    <li className="mx-2">
      <Link href={path}>
        <a className={isSelected}>{name}</a>
      </Link>
    </li>
  );
};
