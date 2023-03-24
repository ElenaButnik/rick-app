import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./index.css";
import App from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyC3h_-xPJMxnMrS_TBq10VDvKWvS1CzCL0",
  authDomain: "rick-app-ff4f2.firebaseapp.com",
  projectId: "rick-app-ff4f2",
  storageBucket: "rick-app-ff4f2.appspot.com",
  messagingSenderId: "686580258424",
  appId: "1:686580258424:web:99ffa41ebe232a3a39bf8d",
  measurementId: "G-TW4P780GLK",
});
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Context.Provider value={{ firestore, auth, firebase }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </Provider>
);
