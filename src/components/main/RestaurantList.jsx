import RestaurantListItem from './RestaurantListItem';
import styled from 'styled-components';
import { useContext } from 'react';
import {
  FilteredRestaurantsContext,
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
  const filteredRestaurants = useContext(FilteredRestaurantsContext);
  const setSelectedRestaurant = useContext(SelectedRestaurantActionContext);
  const { openRestaurantDetailModal } = useContext(
    RestaurantDetailModalActionContext
  );

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
