import { Logo } from "./Logo";
import { NavItem } from "./NavItem";

interface NavProps {
  data: {
    logo: {
      src: string;
      alt: string;
    };
    items: Array<{
      name: string;
      path: string;
    }>;
  };
}

export const Navbar = ({ data }: NavProps) => {
  return (
    <nav className="flex p-4 bg-white">
      <Logo src={data.logo.src} alt={data.logo.alt} />
      <div className="flex justify-between items-center w-full ml-2">
        <ul className="flex">
          {data.items.map((item, index) => (
            <NavItem key={index} name={item.name} path={item.path} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
