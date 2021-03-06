import Link from "next/link";
import { useCartState } from "./CartContext";

export const CartBar = () => {
  const cartState = useCartState();

  return (
    <Link href="/cart">
      <a className="relative inline-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {cartState.items.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {cartState.items.length}
          </span>
        )}
      </a>
    </Link>
  );
};
