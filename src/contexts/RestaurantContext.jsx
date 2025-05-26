import { createContext, useState } from 'react';

export const SelectedCategoryContext = createContext();
export const RestaurantsContext = createContext();
export const SetRestaurantsContext = createContext();
export const SelectedRestaurantValueContext = createContext();
export const SelectedRestaurantActionContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      <SetRestaurantsContext.Provider value={setRestaurants}>
        <RestaurantsContext.Provider value={restaurants}>
          <SelectedRestaurantActionContext.Provider
            value={setSelectedRestaurant}
          >
            <SelectedRestaurantValueContext.Provider value={selectedRestaurant}>
              {children}
            </SelectedRestaurantValueContext.Provider>
          </SelectedRestaurantActionContext.Provider>
        </RestaurantsContext.Provider>
      </SetRestaurantsContext.Provider>
    </SelectedCategoryContext.Provider>
  );
};
