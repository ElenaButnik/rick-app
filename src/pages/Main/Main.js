import { CharatersList } from "../../components/charatersList/charactersList";
import { Form } from "../../components/form/Form";
import { Header } from "../../components/header/Header";
import { Pagination } from "../../components/pagination/Pagination";
import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.Container}>
      <Header />
      <Form />
      <CharatersList />
    </div>
  );
};

export default Main;
