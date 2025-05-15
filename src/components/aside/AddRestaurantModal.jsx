import styles from './Modal.module.css';
import { selectableCategories } from '../../constant/constant';
import Modal from './modal/Modal';
import { addNewRestaurant } from '../../api/api';

const AddRestaurantModal = ({
  onUpdateRestaurants,
  onCloseAddRestaurantModal,
}) => {
  const handleAddRestaurantModalClose = () => {
    onCloseAddRestaurantModal();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRestaurant = {
      id: e.target.name.value,
      category: e.target.category.value,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    await addNewRestaurant(newRestaurant);
    onUpdateRestaurants();
    handleAddRestaurantModalClose();
  };

  return (
    <Modal title="새로운 음식점" onClose={handleAddRestaurantModalClose}>
      <form onSubmit={handleFormSubmit}>
        <div
          className={`${styles['form-item']} ${styles['form-item--required']}`}
        >
          <label htmlFor="category" className="text-caption">
            카테고리
          </label>
          <select name="category" id="category" required>
            {selectableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`${styles['form-item']} ${styles['form-item--required']}`}
        >
          <label htmlFor="name" className="text-caption">
            이름
          </label>
          <input type="text" name="name" id="name" required pattern=".*\S.*" />
        </div>

        <div className={styles['form-item']}>
          <label htmlFor="description" className="text-caption">
            설명
          </label>
          <textarea name="description" id="description" cols="30" rows="5" />
          <span className={`${styles['help-text']} text-caption`}>
            메뉴 등 추가 정보를 입력해 주세요.
          </span>
        </div>

        <div className={styles['button-container']}>
          <button
            type="submit"
            className={`${styles.button} ${styles['button--primary']} text-caption`}
          >
            추가하기
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddRestaurantModal;
