import { ReactComponent as Heroy } from "../../images/heroy.svg";
import s from "./header.module.css";

export const Header = () => {
  return (
    <div className={s.Container}>
      <Heroy />{" "}
    </div>
  );
};
