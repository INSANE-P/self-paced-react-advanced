import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import { useContext, useMemo } from 'react';
import {
  RestaurantsContext,
  SelectedCategoryContext,
  SelectedRestaurantActionContext,
} from '../../contexts/RestaurantContext';
import { RestaurantDetailModalActionContext } from '../../contexts/ModalContext';

const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const RestaurantListItemContainer = styled.ul`
  list-style: none;
`;

const RestaurantList = () => {
  const restaurants = useContext(RestaurantsContext);
  const { selectedCategory } = useContext(SelectedCategoryContext);
  const setSelectedRestaurant = useContext(SelectedRestaurantActionContext);
  const { openRestaurantDetailModal } = useContext(
    RestaurantDetailModalActionContext
  );

  const filteredRestaurants = useMemo(() => {
    return selectedCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  }, [selectedCategory, restaurants]);

  const onRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    openRestaurantDetailModal();
  };
  return (
    <RestaurantListContainer>
      <RestaurantListItemContainer>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            onRestaurantClick={onRestaurantClick}
          />
        ))}
      </RestaurantListItemContainer>
    </RestaurantListContainer>
  );
};

export default RestaurantList;
