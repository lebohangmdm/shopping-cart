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

  if (action.type === "get_total") {
    let { total, amount, tax, subtotal } = state.cart.reduce(
      (cartSum, item) => {
        const { price, amount, tax } = item;
        const fullPrice = (price + tax) * amount;
        const fullTax = tax * amount;
        const subtotal = price * amount;

        cartSum.subtotal += subtotal;
        cartSum.tax += fullTax;
        cartSum.amount += amount;
        cartSum.total += fullPrice;
        return cartSum;
      },
      {
        total: 0,
        amount: 0,
        tax: 0,
        subtotal: 0,
      }
    );

    total = parseFloat(total.toFixed(2));
    tax = parseFloat(tax.toFixed(2));
    subtotal = parseFloat(subtotal.toFixed(2));
    return {
      ...state,
      total,
      amount,
      tax,
      subtotal,
    };
  }

  throw new Error(`No match for this type: ${action.type}`);
};

export default reducer;
