import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThunkData } from "../../redux/CharacterList/thunks";
import { getCharacters } from "../../redux/CharacterList/selectors";
import { Pagination } from "../pagination/Pagination";
import s from "./charactersList.module.css";

export const CharatersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(getCharacters);

  useEffect(() => {
    dispatch(getThunkData());
  }, [dispatch]);

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
      <Pagination />
    </section>
  );
};
