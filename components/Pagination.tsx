import Link from "next/link";

interface PaginationProps {
  length: number;
  page: number;
}

export const Pagination = ({ length, page }: PaginationProps) => {
  const items = Array.from({ length }, (_, index) => index + 1);

  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-center sm:px-0">
      <ul className="hidden md:-mt-px md:flex">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/?page=${item}`}>
                <a
                  className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${
                    page === item
                      ? "border-blue-500 text-blue-600 "
                      : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"}`}>{item}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
