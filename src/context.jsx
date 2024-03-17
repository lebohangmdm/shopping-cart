import { createContext, useContext, useReducer } from "react";
import { data } from "./data";

const AppContext = createContext();

const initialState = {
  cart: data,
  isLoading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
