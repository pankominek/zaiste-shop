import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

interface NavItemProps {
  navItems: Array<{
    name: string;
    path: string;
  }>;
}

export const Navbar = ({ navItems }: NavItemProps) => {
  return (
    <nav className="flex py-4 px-2 bg-white border-b-2">
      <Logo />
      <div className="flex justify-between items-center w-full ml-2">
        <ul className="flex">
          {navItems.map((item, index) => (
            <NavItem key={index} name={item.name} path={item.path} />
          ))}
        </ul>
        <ul className="flex">
          <NavItem name={"Login"} path={"/login"} />
          <NavItem name={"Register"} path={"/register"} />
        </ul>
      </div>
    </nav>
  );
};


