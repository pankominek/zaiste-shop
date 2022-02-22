import { NavItem } from "./NavItem";

interface HeaderProp {
  navItems: Array<{
    name: string;
    path: string;
  }>;
}

export const Header = ({ navItems }: HeaderProp) => {
  return (
    <header className="bg-gray-900 text-white mx-auto w-full max-w-5xl py-4 px-2">
      <nav>
        <ul className="flex">
          {navItems.map((item, index) => (
            <NavItem key={index} name={item.name} path={item.path} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
