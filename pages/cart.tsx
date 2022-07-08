import { useCartState } from "../components/Cart/CartContext";

const CartContent = () => {
  const { cartState } = useCartState();

  return (
    <ul className="col-span-2">
      {cartState.items.map((item, index) => (
        <li
          key={`${item.title}_${index}`}
          className="flex justify-between items-center"
        >
          <h4>
            {item.count} x {item.title}
          </h4>
          <div className="flex">
            <span>{item.price}</span>
            <button
              className="ml-4"
              onClick={() => cartState.removeItemFromCart(item.id)}
              title="Remove item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CartSummary = () => {
  const { itemsCount } = useCartState();

  return (
    <aside>
      <h3> Podsumowanie koszyka</h3>
      <span>Liczba elementów: {itemsCount}</span>
    </aside>
  );
};

function CartPage() {
  const { cartState } = useCartState();

  return (
    <>
      {cartState.items.length > 0 ? (
        <section className="grid grid-cols-3 gap-8">
          <CartContent />
          <CartSummary />
        </section>
      ) : (
        <p className="text-center">Your basket is empty :(</p>
      )}
    </>
  );
}

export default CartPage;
