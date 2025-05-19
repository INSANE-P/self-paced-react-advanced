import categoryIcon from '../../assets/categoryIcons';
import styled from 'styled-components';

const BORDER_COLOR = '#e9eaed';

const Restaurant = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 16px 8px;
  border-bottom: 1px solid ${BORDER_COLOR};
  cursor: pointer;
`;

const RestaurantCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  margin-right: 16px;
  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

const RestaurantDescription = styled.p`
  padding-top: 8px;
  font-size: 16px;
  line-height: 24px;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RestaurantListItem = ({ restaurant, onRestaurantClick }) => {
  const handleRestaurantClick = () => {
    onRestaurantClick(restaurant);
  };
  return (
    <Restaurant onClick={handleRestaurantClick}>
      <RestaurantCategory>
        <CategoryIcon
          src={categoryIcon[restaurant.category]}
          alt={restaurant.category}
        />
      </RestaurantCategory>
      <RestaurantInfo>
        <RestaurantName>{restaurant.name}</RestaurantName>
        <RestaurantDescription>{restaurant.description}</RestaurantDescription>
      </RestaurantInfo>
    </Restaurant>
  );
};

export default RestaurantListItem;
