import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white mx-auto w-full max-w-5xl py-4 px-2">
      <nav>
        <ul className="flex">
          <NavItem url='/' name='Homepage' />
          <NavItem url="/about" name="About" />
        </ul>
      </nav>
    </header>
  );
};
