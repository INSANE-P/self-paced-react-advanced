import styles from './css/CategoryFilter.module.css';
import { categories } from '../../constant/constant';

const CategoryFilter = ({ selectedCategory, onChangeCategory }) => {
  return (
    <section className={styles['restaurant-filter-container']}>
      <select
        name="category"
        id="category-filter"
        value={selectedCategory}
        className={styles['restaurant-filter']}
        aria-label="음식점 카테고리 필터"
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
};

export default CategoryFilter;
