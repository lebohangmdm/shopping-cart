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

  throw new Error(`No match for this type: ${action.type}`);
};

export default reducer;
