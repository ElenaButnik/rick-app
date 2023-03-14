import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./pages/Main/Main";
import { themes } from "./styles";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeContext, themesValue } from "./context/themeContext";

import "./App.css";

const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDark ? themesValue.dark : themesValue.ligth;

function App() {
  const [themeSelect, setThemeSelect] = useState(
    localStorage.getItem("app-theme") || defaultTheme
  );

  useEffect(() => {
    setThemeSelect(themeSelect);
    localStorage.setItem("app-theme", themeSelect);
  }, [themeSelect]);

  const toggleTheme = () => {
    themeSelect === themesValue.ligth
      ? setThemeSelect(themesValue.dark)
      : setThemeSelect(themesValue.ligth);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ themeSelect, toggleTheme }}>
        <ThemeProvider theme={themes[themeSelect]}>
          <GlobalStyle />
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>{" "}
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
