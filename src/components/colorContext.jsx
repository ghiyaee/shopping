import { createContext, useReducer } from "react";

const ColorContext = createContext();

const initailState = {
  color: ' ',
};
const reducer = (state, action) => {
  switch (action) {
    case "COLOR_GHANGE":
      return (state = "tomato");
    case "COLOR_BACK":
      return (state = " ");
    default:
      return state;
  }
};

const ColorProvider = ({ children }) => {
  const [color, disptach] = useReducer(reducer, initailState);
  return (
    <ColorContext.Provider
      value={{ colorChange: color, disptachChange: disptach }} >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
