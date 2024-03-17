import { createContext, useContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
  cart: data,
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
