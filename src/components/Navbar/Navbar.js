import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { ButtonTheme } from "../buttonTheme/ButtonTheme";
import s from "./Navbar.module.css";

export const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className={s.Container}>
      {user ? (
        <div className={s.Nav}>
          <button onClick={() => auth.signOut()} className={s.Link}>
            LogOut
          </button>
          <ButtonTheme />
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};
