import { useContext } from "react";
import { ReactComponent as GoogleIcon } from "../../images/google-icon.svg";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { Context } from "../../index";
import s from "./Auth.module.css";

export const Google = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div className={s.Container}>
      <button className={s.Link} onClick={login}>
        <GoogleIcon /> log in with Google
      </button>
    </div>
  );
};
