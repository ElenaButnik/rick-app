import { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../images/icon-form.svg";
import { FetchByName } from "../../services/API";
import s from "./Form.module.css";

export const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState([]);

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    FetchByName(searchValue)
      .then((data) => {
        if (data.length === 0) {
          alert("Please try again");
          return;
        }
        setName(data);
      })
      .catch((error) => alert("Please try one more time"));
  }, [searchValue]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setSearchValue(searchURL);
  }, [searchURL]);

  const setHistory = (searchValue) => {
    navigate.push({
      ...location,
      search: `query=${searchValue}`,
    });
  };

  const onSubmit = (searchValue) => {
    setSearchValue(searchValue);
    setHistory(searchValue);
  };

  const handleNameChange = (event) => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchValue.trim() === "") {
      alert("Please enter your query");
      return;
    }
    onSubmit(searchValue);
    setSearchValue("");
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <div className={s.CastomInput}>
        <SearchIcon className={s.Icon} onClick={handleSubmit} />
        <input
          placeholder="Filter by name..."
          className={s.Input}
          type="text"
          autoComplete="off"
          autoFocus
          value={searchValue}
          onChange={handleNameChange}
        />
      </div>
    </form>
  );
};
