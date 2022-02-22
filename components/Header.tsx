import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";

interface HeaderProps {
  data: {
    navbar: {
      items: Array<{
        name: string;
        path: string;
      }>;
    };
    topbar: {
      status: boolean;
      text: string;
    };
  };
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className="mx-auto w-full max-w-5xl">
      {data.topbar.status && data.topbar.text.length > 0 && (
        <Topbar text={data.topbar.text} />
      )}
      <Navbar navItems={data.navbar.items} />
    </header>
  );
};
