import styles from './Modal.module.css';
import Modal from './modal/Modal';

const RestaurantDetailModal = ({
  onCloseRestaurantDetailModal,
  selectedRestaurant,
  onDeselectRestaurant,
}) => {
  const handleRestaurantDetailModalClose = () => {
    onCloseRestaurantDetailModal();
    onDeselectRestaurant();
  };

  return (
    <Modal
      title={selectedRestaurant.name}
      onClose={handleRestaurantDetailModalClose}
    >
      <div className={styles['restaurant-info']}>
        <p className={`${styles['restaurant-info__description']} text-body`}>
          {selectedRestaurant.description}
        </p>
      </div>
      <div className={styles['button-container']}>
        <button
          type="button"
          className={`${styles.button} ${styles['button--primary']} text-caption`}
          onClick={handleRestaurantDetailModalClose}
        >
          닫기
        </button>
      </div>
    </Modal>
  );
};

export default RestaurantDetailModal;
