import { ReactComponent as Heroy } from "../../images/heroy.svg";
import { ButtonTheme } from "../buttonTheme/ButtonTheme";
import s from "./header.module.css";

export const Header = () => {
  return (
    <div className={s.Container}>
      <Heroy />
      <ButtonTheme />
    </div>
  );
};
