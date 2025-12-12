import React, { createContext, useState, useContext } from "react";

const MouseContext = createContext();

export const useMouse = () => useContext(MouseContext);

export const MouseProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorChangeHandler = (variant) => {
    setCursorVariant(variant);
  };

  return (
    <MouseContext.Provider value={{ cursorVariant, cursorChangeHandler }}>
      {children}
    </MouseContext.Provider>
  );
};