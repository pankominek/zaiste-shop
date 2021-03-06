import { Navbar } from "./Navbar";
import { Topbar } from "./Topbar";

interface HeaderProps {
  data: {
    navbar: {
      logo: string;
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
    <header className="container border-2 shadow border-t-0">
      {data.topbar.status && data.topbar.text.length > 0 && (
        <Topbar text={data.topbar.text} />
      )}
      <Navbar data={data.navbar} />
    </header>
  );
};
