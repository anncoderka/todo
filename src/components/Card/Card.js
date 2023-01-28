import styles from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/store";
import clsx from "clsx";

const Card = (props) => {
  const dispatch = useDispatch();
  const toggle = () => {
    console.log("toggle", props.isFavorite, props.id, props.title);
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      <div className={styles.row}>
        <div>{props.title}</div>
        <div>
          <button
            onClick={toggle}
            className={clsx(
              styles.star_button,
              props.isFavorite && styles.active
            )}
          >
            <span className="fa fa-star-o" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
