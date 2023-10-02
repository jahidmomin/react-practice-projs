import React, { useContext } from "react";

export const themeContext = React.createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeContextProvider = themeContext.Provider;

// custom hook to get context value
export function useThemeContext() {
  return useContext(themeContext);
}
