import { createContext, useContext, useState } from "react";
import SCREENS from "../Constants";

const ScreenContext = createContext(null);

export function ScreenProvider({ children }) {
  const [currScreen, setCurrScreen] = useState(SCREENS.CURRENT_GENERATION);

  return (
    <ScreenContext.Provider value={{ currScreen, setCurrScreen }}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  return useContext(ScreenContext);
}
