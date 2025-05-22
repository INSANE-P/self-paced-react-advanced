import { createContext, useMemo, useState, useEffect } from 'react';
import { getRestaurants } from '../api/api';

export const SelectedCategoryContext = createContext();
export const SetRestaurantsContext = createContext();
export const FilteredRestaurantsContext = createContext();
export const SelectedRestaurantValueContext = createContext();
export const SelectedRestaurantActionContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  useEffect(() => {
    const updateRestaurants = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };
    updateRestaurants();
  }, []);

  const filteredRestaurants = useMemo(() => {
    return selectedCategory === '전체'
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
  }, [selectedCategory, restaurants]);

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      <SetRestaurantsContext.Provider value={setRestaurants}>
        <FilteredRestaurantsContext.Provider value={filteredRestaurants}>
          <SelectedRestaurantActionContext.Provider
            value={setSelectedRestaurant}
          >
            <SelectedRestaurantValueContext.Provider value={selectedRestaurant}>
              {children}
            </SelectedRestaurantValueContext.Provider>
          </SelectedRestaurantActionContext.Provider>
        </FilteredRestaurantsContext.Provider>
      </SetRestaurantsContext.Provider>
    </SelectedCategoryContext.Provider>
  );
};
