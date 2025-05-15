import addButton from '../../assets/add-button.png';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: var(--primary-color);
`;

const Title = styled.h1`
  color: #fcfcfd;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

const AddRestaurantButton = styled.button`
  height: 40px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`;

const AddRestaurantImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const Header = ({ setIsRestaurantAddModalOpen }) => {
  const onAddButtonClick = () => {
    setIsRestaurantAddModalOpen(true);
  };
  return (
    <HeaderContainer>
      <Title>점심 뭐 먹지</Title>
      <AddRestaurantButton
        type="button"
        aria-label="음식점 추가"
        onClick={onAddButtonClick}
      >
        <AddRestaurantImg src={addButton} alt="음식점 추가" />
      </AddRestaurantButton>
    </HeaderContainer>
  );
};

export default Header;
