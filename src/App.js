import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, lazy, useContext } from "react";
import { RevolvingDot } from "react-loader-spinner";
import { ThemeProvider } from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeContext, themesValue } from "./context/themeContext";
import { CharacterItem } from "./pages/CharacterItem/CharacterItem";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Context } from "./index";
import { Navbar } from "./components/Navbar/Navbar";
import { themes } from "./styles";
import "./App.css";

const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = isDark ? themesValue.dark : themesValue.ligth;

const Home = lazy(() => import("./pages/Main/Main"));

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  const shouldRedirect = true;

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

  if (loading) {
    return (
      <RevolvingDot
        height={100}
        width={100}
        color="#4242ee"
        secondaryColor="#f5f5cd"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        visible={true}
      />
    );
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={{ themeSelect, toggleTheme }}>
        <ThemeProvider theme={themes[themeSelect]}>
          <GlobalStyle />
          <Navbar />
          {user ? (
            <Routes>
              {" "}
              <Route exact path="/" element={<Home />} />
              <Route path="/:id" element={<CharacterItem />} />
              <Route
                path="/login"
                element={shouldRedirect && <Navigate replace to="/" />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          )}
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
