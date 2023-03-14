import { ThemeContext } from "../../context/themeContext";
import { ReactComponent as ThemeButton } from "../../images/icon-theme.svg";
import s from "./buttonTheme.module.css";

export const ButtonTheme = ({ style }) => {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <button onClick={toggleTheme} style={style} className={s.Button}>
          <ThemeButton />
        </button>
      )}
    </ThemeContext.Consumer>
  );
};
