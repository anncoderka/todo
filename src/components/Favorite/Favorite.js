import styles from "./Favorite.module.scss";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { getFavoriteCard } from "../../redux/cardsRedux";

const Favorite = () => {
  const cards = useSelector(getFavoriteCard);

  if (cards && cards.length > 0) {
    return (
      <div>
        <h1 className={styles.title}>Favorite</h1>

        <div className={styles.favoriteColumn}>
          <article className={styles.column}>
            <ul className={styles.cards}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  isFavorite={card.isFavorite}
                  id={card.id}
                />
              ))}
            </ul>
          </article>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.title}>No Favorites</h1>
    </div>
  );
};

export default Favorite;
