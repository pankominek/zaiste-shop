import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { CartBar } from "./Cart/CartBar";

interface NavProps {
  data: {
    logo: string;
    items: Array<{
      name: string;
      path: string;
    }>;
  };
}

export const Navbar = ({ data }: NavProps) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <ul className="flex w-full">
        {data.items.map((item, index) => (
          <NavItem key={index} name={item.name} path={item.path} />
        ))}
      </ul>
      <Logo name={data.logo} />
      <ul className="flex w-full justify-end">
        <li>
          <CartBar />
        </li>
      </ul>
    </nav>
  );
};
