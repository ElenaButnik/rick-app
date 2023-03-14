import { DebounceInput } from "react-debounce-input";
import { ReactComponent as SearchIcon } from "../../images/icon-form.svg";
import s from "./Form.module.css";

export const Form = () => {
  return (
    <form>
      <div className={s.CastomInput}>
        <SearchIcon className={s.Icon} />
        <DebounceInput placeholder="Filter by name..." className={s.Input} />
      </div>
    </form>
  );
};
