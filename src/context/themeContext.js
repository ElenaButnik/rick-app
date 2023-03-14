import { createContext } from "react";

const themesValue = {
  ligth: "ligth",
  dark: "dark",
};

const ThemeContext = createContext({
  theme: themesValue.ligth,
  toggleTheme: () => {},
});

export { ThemeContext, themesValue };
