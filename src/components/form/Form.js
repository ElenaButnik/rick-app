import { useCallback } from "react";
import { DebounceInput } from "react-debounce-input";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as SearchIcon } from "../../images/icon-form.svg";
import { setFilterByName } from "../../redux/CharacterList/reducers";
import s from "./Form.module.css";

export const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const queryParams = Object.fromEntries([...searchParams]);
  console.log(queryParams);

  const filterByName = useCallback(
    (name) => {
      dispatch(setFilterByName(name));
      setSearchParams({ ...queryParams, name });
    },
    [dispatch, setSearchParams, queryParams]
  );

  return (
    <form className={s.Form}>
      <div className={s.CastomInput}>
        <SearchIcon className={s.Icon} />
        <DebounceInput
          placeholder="Filter by name..."
          className={s.Input}
          type="text"
          autoComplete="off"
          autoFocus
          value={searchParams.get("name")}
          onChange={(e) => filterByName(e.target.value)}
          debounceTimeout={600}
          minLength={1}
          maxLength={10}
        />
      </div>
    </form>
  );
};
