const reducer = (state, action) => {
  if (action.type === "remove") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "clear_cart") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "increment") {
    let tempCart = state.cart.map((item) =>
      item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
    );

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "decrement") {
    let tempCart = state.cart
      .map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  throw new Error(`No match for this type: ${action.type}`);
};

export default reducer;
