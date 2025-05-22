import Header from './components/header/Header';
import CategoryFilter from './components/main/CategoryFilter';
import RestaurantList from './components/main/RestaurantList';
import RestaurantDetailModal from './components/aside/RestaurantDetailModal';
import AddRestaurantModal from './components/aside/AddRestaurantModal';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import { RestaurantProvider } from './contexts/RestaurantContext';
import { ModalProvider } from './contexts/ModalContext';

const App = () => {
  return (
    <RestaurantProvider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <main>
            <CategoryFilter />
            <RestaurantList />
          </main>
          <aside>
            <RestaurantDetailModal />
            <AddRestaurantModal />
          </aside>
        </ThemeProvider>
      </ModalProvider>
    </RestaurantProvider>
  );
};

export default App;
