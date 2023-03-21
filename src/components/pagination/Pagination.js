import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { getPage } from "../../redux/Pagination/selectors";
import { getThunkDataPage } from "../../redux/Pagination/thunks";
import { setCurrentPage } from "../../redux/CharacterList/reducers";
import { CharatersList } from "../charatersList/charactersList";
import { FetchPages, FetchCharacters } from "../../services/API";

import { createPages } from "../utils/pagesCreator";
import { getThunkData } from "../../redux/CharacterList/thunks";

export const Pagination = () => {
  const dispatch = useDispatch();
  const pages = useSelector(getPage);

  const pageArr = Array.from({ length: pages }, (v, k) => k);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);
  /// console.log(pageArr);

  useEffect(
    (page) => {
      dispatch(getThunkDataPage(page));
    },
    [dispatch]
  );

  const onClickPage = useCallback(
    (page) => {
      FetchPages(page);

      // dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  return (
    <>
      <ul className="pages">
        {pageArr.map((page, index) => (
          <li
            key={index}
            /* className={currentPage === page ? 'currentPage' : 'page'}*/
            onClick={() => onClickPage(page)}
          >
            {page + 1}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
