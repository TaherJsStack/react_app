import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id) => {},
  PlusItem: (item) => {},
  MinusItem: (item) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedItemsAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedItemsAmount,
    };
  } else if (action.type == "REMOVE") {
  }

  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, cartDispatchAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    cartDispatchAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    cartDispatchAction({ type: "REMOVE", item: id });
  };

  const plusItemToCartHandler = (item) => {
    cartDispatchAction({ type: "PLUS", item: item.id });
  };

  const minusItemFromCartHandler = (item) => {
    cartDispatchAction({ type: "MINUS", item: item.id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    AddItem: addItemToCartHandler,
    RemoveItem: removeItemFromCartHandler,
    PlusItem: plusItemToCartHandler,
    MinusItem: minusItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
