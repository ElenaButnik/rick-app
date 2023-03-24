import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getThunkData } from "../../redux/CharacterList/thunks";
import { getCharacters } from "../../redux/CharacterList/selectors";
import { Pagination } from "../pagination/Pagination";
import { setNextPage } from "../../redux/CharacterList/reducers";
import { getMyFilters, getNextPage } from "../../redux/CharacterList/selectors";
import s from "./charactersList.module.css";

export const CharatersList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const characters = useSelector(getCharacters);
  const filter = useSelector(getMyFilters);
  const name = filter?.name;
  const queryParams = Object.fromEntries([...searchParams]);
  const nextPage = useSelector(getNextPage);

  useEffect(() => {
    dispatch(
      getThunkData({
        name: searchParams.get("name") ?? name,
        page: searchParams.get("page") ?? nextPage,
      })
    );
  }, [dispatch, searchParams, name, nextPage]);

  const onClickPage = useCallback(
    (nextPage) => {
      dispatch(setNextPage(nextPage));
      setSearchParams({ ...queryParams, page: nextPage });
    },
    [dispatch, queryParams, setSearchParams, nextPage]
  );

  return (
    <section>
      <ul className={s.List}>
        {characters &&
          characters
            .map((item) => (
              <li key={item.id} className={s.Item}>
                <Link to={{ pathname: `/${item.id}` }}>
                  <img src={item.image} alt="face" className={s.Img} />
                  <div className={s.About}>
                    <p className={s.Title}>{item.name}</p>
                    <p className={s.Specie}>{item.species}</p>{" "}
                  </div>
                </Link>
              </li>
            ))
            .sort((a, b) => (a.name > b.name ? 1 : -1))}
      </ul>
      <Pagination onClickPage={onClickPage} />
    </section>
  );
};
