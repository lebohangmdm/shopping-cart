import { createContext, useContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  cart: data,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrementHandler = (id) => {
    dispatch({ type: "decrement", payload: id });
  };

  const incrementHandler = (id) => {
    dispatch({ type: "increment", payload: id });
  };

  const removeHandler = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: "clear_cart" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        incrementHandler,
        decrementHandler,
        removeHandler,
        clearCartHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
