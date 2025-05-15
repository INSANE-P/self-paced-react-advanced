import categoryIcon from '../../assets/categoryIcons';
import styles from './css/RestaurantList.module.css';

const RestaurantListItem = ({ restaurant, onRestaurantClick }) => {
  const handleRestaurantClick = () => {
    onRestaurantClick(restaurant);
  };
  return (
    <li
      className={`${styles.restaurant} clickable`}
      onClick={handleRestaurantClick}
    >
      <div className={styles.restaurant__category}>
        <img
          src={categoryIcon[restaurant.category]}
          alt={restaurant.category}
          className={styles['category-icon']}
        />
      </div>
      <div className={styles.restaurant__info}>
        <h3 className={`${styles.restaurant__name} text-subtitle`}>
          {restaurant.name}
        </h3>
        <p className={`${styles.restaurant__description} text-body`}>
          {restaurant.description}
        </p>
      </div>
    </li>
  );
};

export default RestaurantListItem;
