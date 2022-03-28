interface CartItem {
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly count: number;
}

export const getCartItemsFromStorage = () => {
  const itemsFromLocalStorage = localStorage.getItem("SHOPPING_CART");
  if (!itemsFromLocalStorage) {
    return [];
  }
  try {
    const items = JSON.parse(itemsFromLocalStorage);
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const setCartItemsInStorage = (cartItems: CartItem[]) => {
  localStorage.setItem("SHOPPING_CART", JSON.stringify(cartItems));
};
