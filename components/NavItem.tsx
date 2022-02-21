import Link from "next/link";
import { useRouter } from "next/router";

export const NavItem = ({ url, name } : {url: string, name: string} ) => {
  const router = useRouter();

  const isSelected =
    router.pathname === url ? "selected cursor-default" : "text-blue-300";

  return (
    <li className="mr-6">
      <Link href={url}>
        <a className={isSelected}>{name}</a>
      </Link>
    </li>
  );
};
