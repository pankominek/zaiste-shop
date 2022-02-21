import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white mx-auto w-full max-w-5xl py-4 px-2">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="text-blue-500 hover:text-blue-800">Home</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/about">
            <a className="text-blue-500 hover:text-blue-800">About</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};
