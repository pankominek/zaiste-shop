import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const DATA = {
    header: {
      navbar: {
        logo: "zaiste shop",
        items: [
          { name: "About", path: "/about" },
          { name: "SSG", path: "/products-ssg" },
        ],
      },
      topbar: {
        text: "Get free delivery on orders over $100",
        status: true,
      },
    },
    footer: {
      text: "Zaiste programuj",
    },
  };

  return (
    <div className="flex flex-col min-h-screen gap-4">
      <Header data={DATA.header} />
      <main className="container">{children}</main>
      <Footer data={DATA.footer} />
    </div>
  );
};
