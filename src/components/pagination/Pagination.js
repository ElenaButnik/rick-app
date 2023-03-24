import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getPages } from "../../redux/CharacterList/selectors";
import s from "./Pagination.module.css";

export const Pagination = ({ onClickPage }) => {
  const pages = useSelector(getPages);
  const pageArr = Array.from({ length: pages }, (v, k) => k + 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);
  const lastPage = pageArr[pageArr.length - 1];

  return (
    <div className={s.Container}>
      {" "}
      <ul className="pages">
        {pageArr
          .map((page, index) => (
            <li
              key={index}
              className={currentPage === page ? "currentPage" : "page"}
              onClick={() => onClickPage(page)}
            >
              {page}{" "}
            </li>
          ))
          .slice(0, 15)}
      </ul>
      {currentPage === 1 ? null : (
        <button
          onClick={() => onClickPage(currentPage - 1)}
          className="double-border-button"
        >
          Prev Page
        </button>
      )}
      {currentPage !== lastPage ? (
        <button
          onClick={() => onClickPage(currentPage + 1)}
          className="double-border-button"
        >
          Next Page
        </button>
      ) : null}
    </div>
  );
};
