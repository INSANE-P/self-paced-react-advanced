import { atom, selector } from 'recoil';
import { getRestaurants } from '../api/api';

export const restaurantsState = atom({
  key: 'restaurantsState',
  default: selector({
    key: 'restaurantsStateDefault',
    get: async () => {
      const data = await getRestaurants();
      return data;
    },
  }),
});

export const selectedCategoryState = atom({
  key: 'selectedCategoryState',
  default: '전체',
});

export const selectedRestaurantState = atom({
  key: 'selectedRestaurantState',
  default: null,
});

export const isRestaurantDetailModalOpenState = atom({
  key: 'isRestaurantDetailModalOpenState',
  default: false,
});

export const isRestaurantAddModalOpenState = atom({
  key: 'isRestaurantAddModalOpenState',
  default: false,
});
