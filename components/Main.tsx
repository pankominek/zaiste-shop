import { ReactNode } from "react";

interface MainProps {
  data: ReactNode;
}

export const Main = ({ data }: MainProps) => {
  return <main className="container flex-grow py-4 px-2">{data}</main>;
};
