import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThunkDataItem } from "../../redux/CharacterItem/thunks";
import { getCharacterItem } from "../../redux/CharacterItem/selectors";
import { ReactComponent as GoBackIcon } from "../../images/icon-goBack.svg";
import { ButtonTheme } from "../../components/buttonTheme/ButtonTheme";
import { ThemeContext } from "../../context/themeContext";
import s from "./CharacterItem.module.css";

export const CharacterItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const item = useSelector(getCharacterItem);

  useEffect(() => {
    dispatch(getThunkDataItem(id));
  }, [dispatch, id]);

  const onGoBack = () => {
    navigate(-1);
  };
  const themes = useContext(ThemeContext);
  const Theme = themes.themeSelect;

  return (
    <div className={s.Container}>
      {Theme === "dark" ? (
        <div className={s.Button} style={{ color: "#f2f2f7" }}>
          <GoBackIcon onClick={onGoBack} style={{ stroke: "#f2f2f7" }} />
          <h3 onClick={onGoBack}>go back</h3>
        </div>
      ) : (
        <div className={s.Button} style={{ color: "#000000" }}>
          <GoBackIcon onClick={onGoBack} />
          <h3 onClick={onGoBack}>go back</h3>
        </div>
      )}

      <ButtonTheme />

      {item && (
        <div className={s.Section}>
          <img src={item.image} alt="face" className={s.Img} />

          {Theme === "dark" ? (
            <h1 className={s.Title} style={{ color: "#f2f2f7" }}>
              {item.name}
            </h1>
          ) : (
            <h1 className={s.Title} style={{ color: "#081f32" }}>
              {item.name}
            </h1>
          )}

          <div className={s.List}>
            <span className={s.Info}>Informations</span>
            <ul className={s.About}>
              <li className={s.Link}>
                {Theme === "dark" ? (
                  <p className={s.Item} style={{ color: "#f2f2f7" }}>
                    Gender
                  </p>
                ) : (
                  <p className={s.Item} style={{ color: "#081f32" }}>
                    Gender
                  </p>
                )}

                <p className={s.Itm}>{item.gender}</p>
              </li>
              <li className={s.Link}>
                {Theme === "dark" ? (
                  <p className={s.Item} style={{ color: "#f2f2f7" }}>
                    Status
                  </p>
                ) : (
                  <p className={s.Item} style={{ color: "#081f32" }}>
                    Status
                  </p>
                )}
                <p className={s.Itm}>{item.status}</p>
              </li>
              <li className={s.Link}>
                {Theme === "dark" ? (
                  <p className={s.Item} style={{ color: "#f2f2f7" }}>
                    Specie
                  </p>
                ) : (
                  <p className={s.Item} style={{ color: "#081f32" }}>
                    Specie
                  </p>
                )}
                <p className={s.Itm}>{item.species}</p>
              </li>
              <li className={s.Link}>
                {Theme === "dark" ? (
                  <p className={s.Item} style={{ color: "#f2f2f7" }}>
                    Origin
                  </p>
                ) : (
                  <p className={s.Item} style={{ color: "#081f32" }}>
                    Origin
                  </p>
                )}
                <p className={s.Itm}>{item?.origin?.name}</p>
              </li>
              <li className={s.Link}>
                {Theme === "dark" ? (
                  <p className={s.Item} style={{ color: "#f2f2f7" }}>
                    Type
                  </p>
                ) : (
                  <p className={s.Item} style={{ color: "#081f32" }}>
                    Type
                  </p>
                )}
                <p className={s.Itm}>{item.type ? item.type : "unknown"}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
